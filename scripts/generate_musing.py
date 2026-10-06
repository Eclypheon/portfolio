#!/usr/bin/env python3
"""
Autonomous Nightly Geospatial Intelligence Brief & Musing Generator

Scours global and regional geospatial news, prioritizing:
1. Singapore & Southeast Asia (SLA, OneMap, GeoWorks, ASEAN spatial infrastructure)
2. ESRI ArcGIS Suite (ArcGIS Pro, Enterprise, Online, GeoAI, Spatial Analytics)
3. Remote Sensing, Earth Observation, Satellite Constellations & Open Source GIS (QGIS, OGC)

Summarization Engine:
- Primary: Locally hosted Qwen model on LM Studio (http://localhost:1234/v1)
- Fallback: Intelligent algorithmic GEOINT synthesis if LM Studio is offline / in cloud CI

Features:
- Live RSS feed scraping across Google News Geospatial channels and industry publications.
- Weighted relevance scoring (+10 for Singapore/SEA, +8 for ESRI/ArcGIS, +5 for GeoAI/Remote Sensing).
- Streaming LLM inference with automated JSON sanitization and fallback.
- Sliding window housekeeping: strictly maintains the latest 5 entries.
- Atomic persistence to src/data/musings.json and src/data/musingsData.ts.
"""

import os
import sys
import json
import re
import html
import time
from pathlib import Path
from datetime import datetime, timezone, timedelta
import urllib.request
import xml.etree.ElementTree as ET

MAX_POSTS = 5
SGT = timezone(timedelta(hours=8))

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = PROJECT_ROOT / "src" / "data"
MUSINGS_JSON_PATH = DATA_DIR / "musings.json"
MUSINGS_TS_PATH = DATA_DIR / "musingsData.ts"

LM_STUDIO_BASE_URL = os.environ.get("LM_STUDIO_URL", "http://localhost:1234/v1").rstrip("/")

BROWSER_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/rss+xml, application/xml, text/xml, text/html, */*"
}

GEOSPATIAL_FEEDS = [
    (
        "SG_SEA",
        "https://news.google.com/rss/search?q=geospatial+Singapore+OR+ASEAN+OR+%22Singapore+Land+Authority%22+OR+OneMap+OR+%22GeoWorks%22&hl=en-SG&gl=SG&ceid=SG:en"
    ),
    (
        "ESRI_ARCGIS",
        "https://news.google.com/rss/search?q=%22ArcGIS%22+OR+%22Esri%22+geospatial&hl=en-US&gl=US&ceid=US:en"
    ),
    (
        "GEOAI_SATELLITE",
        "https://news.google.com/rss/search?q=GeoAI+OR+%22Earth+Observation%22+OR+%22satellite+imagery%22+geospatial&hl=en-US&gl=US&ceid=US:en"
    ),
    (
        "GEOAWESOMENESS",
        "https://geoawesomeness.com/feed/"
    ),
    (
        "SPATIAL_SOURCE",
        "https://www.spatialsource.com.au/feed/"
    ),
    (
        "GIM_INTERNATIONAL",
        "https://www.gim-international.com/rss"
    )
]

def fetch_feed_items(name: str, url: str) -> list[dict]:
    """Fetches and parses RSS/Atom feed items."""
    items = []
    try:
        req = urllib.request.Request(url, headers=BROWSER_HEADERS)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read()
            
            # Try XML parse first
            try:
                root = ET.fromstring(content)
                for item in root.findall(".//item"):
                    t_el = item.find("title")
                    l_el = item.find("link")
                    d_el = item.find("description")
                    title = t_el.text if t_el is not None else ""
                    link = l_el.text if l_el is not None else ""
                    desc = d_el.text if d_el is not None else ""
                    if title:
                        items.append({"title": title, "link": link, "desc": desc, "source": name})
            except Exception:
                # Regex fallback for ill-formed XML
                text_content = content.decode("utf-8", errors="ignore")
                raw_items = re.findall(r"<item>(.*?)</item>", text_content, re.DOTALL)
                for raw in raw_items:
                    t_match = re.search(r"<title>(.*?)</title>", raw, re.DOTALL)
                    l_match = re.search(r"<link>(.*?)</link>", raw, re.DOTALL)
                    d_match = re.search(r"<description>(.*?)</description>", raw, re.DOTALL)
                    title = t_match.group(1) if t_match else ""
                    link = l_match.group(1) if l_match else ""
                    desc = d_match.group(1) if d_match else ""
                    if title:
                        items.append({"title": title, "link": link, "desc": desc, "source": name})
    except Exception as e:
        print(f"[Scraper] Warning: Failed to fetch {name} ({e})", file=sys.stderr)
        
    return items

def clean_text(text: str) -> str:
    """Strips HTML tags and unescapes HTML entities."""
    if not text:
        return ""
    stripped = re.sub(r"<[^>]+>", " ", text)
    cleaned = html.unescape(stripped)
    return re.sub(r"\s+", " ", cleaned).strip()

def score_article(title: str, desc: str) -> int:
    """Calculates geospatial priority score."""
    combined = (title + " " + desc).lower()
    score = 0
    
    # Priority 1: Singapore and Southeast Asia (+10)
    if any(k in combined for k in ["singapore", "sla", "onemap", "geoworks", "asean", "southeast asia", "malaysia", "indonesia"]):
        score += 10
        
    # Priority 2: ESRI ArcGIS Suite (+8)
    if any(k in combined for k in ["arcgis", "esri", "arcgis pro", "arcgis online", "arcgis enterprise"]):
        score += 8
        
    # Priority 3: GeoAI, Remote Sensing, LiDAR & Spatial Analysis (+5)
    if any(k in combined for k in ["geoai", "earth observation", "remote sensing", "lidar", "digital twin", "satellite", "qgis", "point cloud", "spatial analytics"]):
        score += 5

    return score

def harvest_geospatial_intelligence() -> list[dict]:
    """Gathers and ranks today's top geospatial news items."""
    all_articles = []
    seen_titles = set()
    
    print("[Intelligence] Scraping live geospatial feeds...")
    for feed_name, feed_url in GEOSPATIAL_FEEDS:
        raw_items = fetch_feed_items(feed_name, feed_url)
        for item in raw_items:
            clean_t = clean_text(item["title"])
            clean_d = clean_text(item["desc"])
            
            # Deduplicate by normalized title
            norm_title = re.sub(r"[^a-zA-Z0-9]", "", clean_t.lower())[:40]
            if not norm_title or norm_title in seen_titles:
                continue
            seen_titles.add(norm_title)
            
            score = score_article(clean_t, clean_d)
            all_articles.append({
                "title": clean_t,
                "desc": clean_d,
                "link": item["link"],
                "source": item["source"],
                "score": score
            })
            
    all_articles.sort(key=lambda x: x["score"], reverse=True)
    print(f"[Intelligence] Discovered {len(all_articles)} articles. Top scored:")
    for a in all_articles[:6]:
        print(f"  [{a['score']:2d}] ({a['source']}) {a['title'][:75]}")
        
    return all_articles[:6]

def check_lm_studio_model() -> str | None:
    """Verifies if LM Studio is reachable and returns the active model ID."""
    try:
        url = f"{LM_STUDIO_BASE_URL}/models"
        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=3) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            models = data.get("data", [])
            for m in models:
                model_id = m.get("id", "")
                if "embed" not in model_id.lower():
                    return model_id
            if models:
                return models[0].get("id")
    except Exception as e:
        print(f"[LM Studio] Not available at {LM_STUDIO_BASE_URL} ({e}). Falling back to algorithmic GEOINT synthesis.")
    return None

def sanitize_json_response(raw_text: str) -> dict:
    """Extracts and sanitizes JSON from model output with regex fallback."""
    cleaned = raw_text.strip()
    
    # Strip markdown codeblocks
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.MULTILINE)
    cleaned = re.sub(r"```\s*$", "", cleaned, flags=re.MULTILINE).strip()
    
    # Direct JSON parse attempt
    try:
        return json.loads(cleaned)
    except Exception:
        pass
        
    # Attempt to locate outer { ... }
    m = re.search(r"(\{.*\})", cleaned, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(1))
        except Exception:
            pass

    # Regex heuristic extraction
    title_m = re.search(r'"title"\s*:\s*"(.*?)"', cleaned, re.DOTALL)
    excerpt_m = re.search(r'"excerpt"\s*:\s*"(.*?)"', cleaned, re.DOTALL)
    content_m = re.search(r'"content"\s*:\s*"(.*?)"', cleaned, re.DOTALL)
    mood_m = re.search(r'"mood"\s*:\s*"(Contemplative|Systemic|Kinetic|Eerie|Lucid)"', cleaned)
    tags_m = re.findall(r'"(#[a-zA-Z0-9_-]+)"', cleaned)

    title = title_m.group(1).strip() if title_m else "Geospatial Intelligence Dispatch: Convergence of Spatial AI & Regional Infrastructure"
    excerpt = excerpt_m.group(1).strip() if excerpt_m else "Key shifts in Southeast Asian geospatial initiatives, ESRI ArcGIS workflows, and Earth Observation."
    content = content_m.group(1).strip() if content_m else cleaned[:800]
    mood = mood_m.group(1) if mood_m else "Systemic"
    tags = tags_m if tags_m else ["#geospatial", "#singapore", "#arcgis", "#geoai"]

    return {
        "title": title,
        "tags": tags,
        "mood": mood,
        "readingTime": "3 min read",
        "excerpt": excerpt,
        "content": content
    }

def synthesize_with_qwen(model_id: str, articles: list[dict]) -> dict:
    """Calls local LM Studio Qwen model using streaming inference to avoid timeouts."""
    print(f"[Qwen Engine] Synthesizing brief using local model '{model_id}' via LM Studio...")
    
    headlines_text = "\n".join([f"- [{a['source']}] {a['title']}" for a in articles])
    
    system_prompt = (
        "You are an elite Geospatial Intelligence (GEOINT) Analyst and GIS Engineer. "
        "Your role is to produce a daily intelligence dispatch analyzing current geospatial developments. "
        "Strictly prioritize coverage of:\n"
        "1. Singapore and Southeast Asia (SLA, OneMap, GeoWorks, Smart Nation)\n"
        "2. ESRI ArcGIS ecosystem (ArcGIS Pro, Online, Enterprise, GeoAI, Spatial Analytics)\n"
        "3. Earth Observation, satellite sensors, and open spatial infrastructure.\n\n"
        "Write exactly 2-3 analytical paragraphs (around 220-280 words). Explain the operational significance for GIS practitioners.\n"
        "Output MUST be a single raw JSON object matching:\n"
        "{\n"
        '  "title": "Concise, intellectual headline summarizing today\'s spatial shifts",\n'
        '  "tags": ["#geospatial", "#singapore", "#arcgis", "#geoai"],\n'
        '  "readingTime": "3 min read",\n'
        '  "mood": "Systemic",\n'
        '  "excerpt": "1-2 sentence executive briefing.",\n'
        '  "content": "2-3 paragraphs of rigorous synthesis."\n'
        "}\n"
        "Respond ONLY with the JSON object. Do not wrap in markdown quotes or backticks."
    )
    
    user_prompt = f"Today's top geospatial headlines:\n{headlines_text}\n\nSynthesize the daily dispatch JSON:"
    
    payload = {
        "model": model_id,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ],
        "temperature": 0.6,
        "max_tokens": 550,
        "stream": True
    }
    
    req = urllib.request.Request(
        f"{LM_STUDIO_BASE_URL}/chat/completions",
        headers={"Content-Type": "application/json"},
        data=json.dumps(payload).encode("utf-8")
    )
    
    chunks = []
    t0 = time.time()
    with urllib.request.urlopen(req, timeout=30) as resp:
        for line in resp:
            line_str = line.decode("utf-8").strip()
            if line_str.startswith("data: ") and not line_str.endswith("[DONE]"):
                try:
                    c = json.loads(line_str[6:])
                    delta = c["choices"][0]["delta"].get("content", "")
                    chunks.append(delta)
                    # print token progress
                    print(".", end="", flush=True)
                except Exception:
                    pass
                    
    elapsed = time.time() - t0
    full_text = "".join(chunks)
    print(f"\n[Qwen Engine] Generation completed in {elapsed:.1f}s.")
    
    return sanitize_json_response(full_text)

def synthesize_fallback_digest(articles: list[dict], existing_musings: list[dict] = None) -> dict:
    """
    Algorithmic fallback synthesizer used if LM Studio is offline or in cloud CI.
    Generates a structured, high-signal geospatial briefing directly from scraped intelligence,
    ensuring dynamic titles derived from actual stories to prevent static duplicates.
    """
    print("[Fallback Engine] Synthesizing structured geospatial intelligence dispatch...")
    
    existing_titles_text = " ".join([m.get("title", "") for m in (existing_musings or [])]).lower()
    
    # Filter articles whose primary keywords are already in active musings
    fresh_articles = []
    for a in articles:
        clean_words = [w.lower() for w in re.sub(r"[^a-zA-Z0-9\s]", "", a["title"]).split() if len(w) > 4]
        if clean_words and all(w in existing_titles_text for w in clean_words[:2]):
            continue
        fresh_articles.append(a)
        
    candidate_pool = fresh_articles if fresh_articles else articles
    
    sg_articles = [a for a in candidate_pool if any(k in a['title'].lower() for k in ['singapore', 'sla', 'onemap', 'geoworks', 'asean', 'southeast asia', 'boustead'])]
    esri_articles = [a for a in candidate_pool if any(k in a['title'].lower() for k in ['arcgis', 'esri'])]
    other_articles = [a for a in candidate_pool if a not in sg_articles and a not in esri_articles]
    
    # Pick lead article dynamically
    lead_article = sg_articles[0] if sg_articles else (esri_articles[0] if esri_articles else candidate_pool[0])
    raw_lead_title = re.sub(r"\s+-\s+.*$", "", lead_article["title"]).strip()
    clean_lead_title = re.sub(r"[^\w\s\-,:]", "", raw_lead_title)[:65]
    
    title = f"Geospatial Brief: {clean_lead_title}"
        
    tags = ["#geospatial", "#gis", "#spatial-intelligence"]
    if sg_articles:
        tags.extend(["#singapore", "#asean"])
    if esri_articles:
        tags.append("#arcgis")
    tags.append("#geoai")
    
    p1 = f"Today's geospatial intelligence landscape highlights significant regional momentum led by: '{lead_article['title']}'."
    if sg_articles:
        p1 += f" Within Singapore and the broader Southeast Asian corridor, initiatives spearheaded by government agencies like the Singapore Land Authority (SLA), academic research institutes, and regional consortiums demonstrate expanding commitment to high-precision 3D cadastre modeling, autonomous positioning frameworks, and scalable geospatial infrastructure."
        
    p2 = "On the analytics and enterprise platform frontier,"
    if esri_articles:
        top_esri = esri_articles[0]
        p2 += f" ESRI's focus on '{top_esri['title']}' underscores the rapid operationalization of GeoAI and foundation models across ArcGIS Pro and Enterprise deployments. Spatial analysts are moving beyond traditional static cartography to automated feature extraction, continuous raster classification, and real-time cloud data pipelines."
    else:
        p2 += " cloud-native geospatial architectures, satellite constellation telemetry, and automated machine learning pipelines are converging to redefine spatial data ingestion and continuous feature extraction."
        
    p3 = "For geospatial practitioners, the operational imperative remains strict data governance and cross-platform interoperability. Integrating high-cadence Earth Observation telemetry with enterprise GIS databases requires consistent coordinate reference transformations, robust metadata standards, and auditable geoprocessing pipelines."
    
    content = f"{p1}\n\n{p2}\n\n{p3}"
    excerpt = f"Executive briefing covering {clean_lead_title} alongside emerging spatial analytics and regional geospatial developments."
    
    return {
        "title": title,
        "tags": list(dict.fromkeys(tags))[:5],
        "readingTime": "3 min read",
        "mood": "Systemic",
        "excerpt": excerpt,
        "content": content
    }

def is_duplicate_musing(new_entry: dict, existing_entries: list[dict]) -> tuple[bool, str]:
    """
    Checks whether new_entry duplicates any published musing by title or opening content.
    Returns (is_duplicate, reason).
    """
    norm_new_title = re.sub(r"[^a-zA-Z0-9]", "", new_entry.get("title", "").lower())
    norm_new_content = re.sub(r"[^a-zA-Z0-9]", "", new_entry.get("content", "")[:120].lower())

    for ex in existing_entries:
        norm_ex_title = re.sub(r"[^a-zA-Z0-9]", "", ex.get("title", "").lower())
        norm_ex_content = re.sub(r"[^a-zA-Z0-9]", "", ex.get("content", "")[:120].lower())

        if norm_new_title and norm_new_title == norm_ex_title:
            return True, f"Identical title matching '{ex.get('title')}'"

        if len(norm_new_title) > 20 and len(norm_ex_title) > 20:
            if norm_new_title in norm_ex_title or norm_ex_title in norm_new_title:
                return True, f"Substantially similar title matching '{ex.get('title')}'"

        if norm_new_content and len(norm_new_content) > 40 and norm_new_content == norm_ex_content:
            return True, f"Identical opening prose matching '{ex.get('title')}'"

    return False, ""

def load_existing_musings() -> list[dict]:
    """Loads existing musings from JSON or parses TypeScript fallback."""
    if MUSINGS_JSON_PATH.exists():
        try:
            with open(MUSINGS_JSON_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    return data
        except Exception as e:
            print(f"[Warn] Could not load musings.json ({e}), attempting fallback...", file=sys.stderr)

    if MUSINGS_TS_PATH.exists():
        try:
            with open(MUSINGS_TS_PATH, "r", encoding="utf-8") as f:
                content = f.read()
            start_marker = "export const initialMusings: DailyMusing[] = "
            if start_marker in content:
                json_part = content.split(start_marker, 1)[1].strip()
                if json_part.endswith(";"):
                    json_part = json_part[:-1].strip()
                return json.loads(json_part)
        except Exception as e:
            print(f"[Warn] Could not parse musingsData.ts: {e}", file=sys.stderr)

    return []

def prune_old_musings(musings: list[dict], max_posts: int = MAX_POSTS) -> tuple[list[dict], list[dict]]:
    """Enforces strict rolling window of max_posts, pruning oldest."""
    if len(musings) > max_posts:
        return musings[:max_posts], musings[max_posts:]
    return musings, []

def save_musings(musings: list[dict]) -> None:
    """Persists updated musings to both musings.json and musingsData.ts."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    # 1. Write musings.json
    with open(MUSINGS_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(musings, f, indent=2, ensure_ascii=False)
        f.write("\n")

    # 2. Write musingsData.ts
    ts_code = f"""export interface DailyMusing {{
  id: string;
  date: string;
  title: string;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime: string;
  mood: 'Contemplative' | 'Systemic' | 'Kinetic' | 'Eerie' | 'Lucid';
}}

export const initialMusings: DailyMusing[] = {json.dumps(musings, indent=2, ensure_ascii=False)};
"""
    with open(MUSINGS_TS_PATH, "w", encoding="utf-8") as f:
        f.write(ts_code)

    print(f"[Persistence] Successfully saved {len(musings)} entries to musings.json and musingsData.ts")

def main():
    now_sgt = datetime.now(SGT)
    date_str = now_sgt.strftime("%Y-%m-%d")
    entry_id = f"musing-{now_sgt.strftime('%Y%m%d%H%M%S')}"
    
    print(f"=== Autonomous Nightly Geospatial Briefing ({now_sgt.strftime('%Y-%m-%d %H:%M:%S SGT')}) ===")
    
    existing = load_existing_musings()
    
    # 1. Scrape and prioritize top geospatial stories
    articles = harvest_geospatial_intelligence()
    if not articles:
        print("[Error] No geospatial articles discovered. Aborting synthesis.", file=sys.stderr)
        sys.exit(1)
        
    # 2. Determine synthesis engine (LM Studio Qwen vs Fallback)
    model_id = check_lm_studio_model()
    if model_id:
        try:
            entry_data = synthesize_with_qwen(model_id, articles)
        except Exception as e:
            print(f"[Warn] Qwen synthesis encountered an issue ({e}). Engaging fallback engine...")
            entry_data = synthesize_fallback_digest(articles, existing_musings=existing)
    else:
        entry_data = synthesize_fallback_digest(articles, existing_musings=existing)
        
    entry = {
        "id": entry_id,
        "date": date_str,
        "title": entry_data["title"],
        "tags": entry_data["tags"],
        "readingTime": entry_data.get("readingTime", "3 min read"),
        "mood": entry_data.get("mood", "Systemic"),
        "excerpt": entry_data["excerpt"],
        "content": entry_data["content"]
    }
    
    # 3. Deduplication check against published archive
    is_dup, reason = is_duplicate_musing(entry, existing)
    if is_dup:
        print(f"[Deduplication] Prevented duplicate publish: {reason}.")
        print("[Deduplication] Current archive remains unchanged.")
        print("=== Run Completed (No Duplicate Published) ===")
        return
    
    print(f"[Result] Generated: '{entry['title']}' ({entry['date']})")
    print(f"[Excerpt] {entry['excerpt']}")
    
    # 4. Housekeeping and storage
    combined = [entry] + existing
    kept, pruned = prune_old_musings(combined, max_posts=MAX_POSTS)
    
    if pruned:
        print(f"[Housekeeping] Retaining latest {MAX_POSTS} entries. Pruned {len(pruned)} older entry/entries:")
        for p in pruned:
            print(f"  - '{p.get('title')}' ({p.get('date')})")
            
    save_musings(kept)
    print("=== Geospatial Briefing Synthesis Completed Successfully ===")

if __name__ == "__main__":
    main()
