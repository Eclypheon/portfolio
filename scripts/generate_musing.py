#!/usr/bin/env python3
"""
Autonomous Daily Musing Generator & Housekeeper

Rotates through interdisciplinary topic intersections:
- Philosophy (Camus, Sartre, Plato, Wittgenstein, Baudrillard, Foucault, Weber, Stoicism)
- Systems (Quadlet, Podman, Tailscale, Edge AI, Headless Linux)
- Low-Level (Cheat Engine, OllyDbg, Ghidra, Assembly, ASLR, Memory Forensics)
- Kinetic (Reconstruction, 5 Surgeries, Biomechanics, Aerial Straps, Partner Stunting)
- Strategy & Sociology (Goffman, Asymmetric Game Theory, Agile Goodhart's Law)

Features:
- Dynamically selects topic seeds avoiding titles currently active in the archive.
- Generates the new post using Singapore Time (SGT / UTC+8).
- Housekeeping: Enforces a strict maximum of 5 posts, automatically pruning the oldest entry.
- Atomically writes to both src/data/musings.json and src/data/musingsData.ts.
"""

import os
import sys
import json
import random
from pathlib import Path
from datetime import datetime, timezone, timedelta

MAX_POSTS = 5
SGT = timezone(timedelta(hours=8))

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = PROJECT_ROOT / "src" / "data"
MUSINGS_JSON_PATH = DATA_DIR / "musings.json"
MUSINGS_TS_PATH = DATA_DIR / "musingsData.ts"

TOPIC_SEEDS = [
    {
        "title": "The Heuristics of Asymmetric Trust: From Primary School Trade Scams to Zero-Trust Networks",
        "tags": ["#security", "#heuristics", "#networking", "#culture"],
        "readingTime": "3 min read",
        "mood": "Lucid",
        "excerpt": "Why getting lured into the wild in 2006 RuneScape provided better threat modeling instincts than a modern cybersecurity seminar.",
        "content": """Long before enterprise CISOs were delivering keynote addresses on Zero Trust Architecture, primary school kids in 2006 were getting thoroughly educated in threat modeling on the edges of Lumbridge and Varrock.

The anatomy of a social engineering exploit has not changed in twenty years. The attacker presents an asymmetric payoff: 'Trim your armor for free,' or 'Follow me into the Wild for a drop party.' The victim wants to believe that efficiency can be acquired without expenditure of energy. The moment you cross the ditch into the Wilderness, the transaction cost becomes total.

When I configure a Tailscale WireGuard mesh node or define ACL permissions in our Quadlet stack, I operate with the exact same defensive instinct. Trust is not a default setting that degrades upon failure; trust is an earned cryptographic token verified at every step. Society often confuses cynicism with paranoia. But in digital systems—as in the deep wilderness—epistemic vigilance is simply the price of survival."""
    },
    {
        "title": "The Kinetic Proof of Free Will: Sartrean Authenticity on the Aerial Strap",
        "tags": ["#kinetic", "#philosophy", "#sartre", "#aerials"],
        "readingTime": "4 min read",
        "mood": "Kinetic",
        "excerpt": "Sartre argued that we are condemned to be free. Suspended six feet above the ground by a single nylon strap, bad faith becomes physically impossible.",
        "content": """Jean-Paul Sartre famously stated that human beings frequently retreat into 'bad faith' (mauvaise foi) because absolute freedom induces vertigo. When you are on solid ground, you can blame your lethargy on genetics, your career on economic headwinds, and your posture on your desk chair.

Suspend yourself six feet above a concrete floor by an aerial strap wrapping your wrist, however, and bad faith evaporates instantly.

In that single-arm lock-off, there is no corporate hierarchy to absorb your failure, no bureaucratic committee to request an extension from, and no narrative you can spin to convince gravity that you are trying your best. Either your latissimus dorsi, lower trapezius, and forearm flexors engage to stabilize the humeral head in the glenoid fossa, or you plummet.

Physical disciplines like partner stunting, sprint canoeing, and aerials are not merely athletic hobbies. They are existential laboratories. They strip away the conversational fog of modern life and force you into radical contact with the physical facticity of your choices."""
    },
    {
        "title": "Wittgenstein's Ruler and the Metrics of Enterprise Agile",
        "tags": ["#scrum", "#wittgenstein", "#pmp", "#systems"],
        "readingTime": "3 min read",
        "mood": "Systemic",
        "excerpt": "When velocity points become a currency rather than a calibration, the language-game collapses into self-parody.",
        "content": """In Philosophical Investigations, Ludwig Wittgenstein remarked that if you use a ruler to measure a table, you are also using the table to measure the ruler. 

In enterprise project management (PMP) and agile coaching (CSM), teams routinely fall into Goodhart's trap: the moment a metric like story point velocity becomes an executive target, it ceases to be a reliable measure of software output. The developers simply re-calibrate their language-game. A task that previously took 2 points becomes a 5; the sprint burndown chart glows with green ticks, while the deployed artifact delivers zero tangible value to the user.

A certified Scrum Master should not function as a ticket clerk. True agile leadership is an exercise in linguistic clarity: stripping away the ceremonial jargon that disguises stalled engineering, aligning operational verbs with functional delivery, and ensuring that the team's language-game reflects empirical reality rather than administrative theater."""
    },
    {
        "title": "The Socratic Method of the Disassembler: Interrogating Cold Silicon",
        "tags": ["#reverse-engineering", "#philosophy", "#plato", "#epistemology"],
        "readingTime": "3 min read",
        "mood": "Lucid",
        "excerpt": "Setting a hardware breakpoint in Ghidra or OllyDbg is the digital equivalent of Socratic elenchus.",
        "content": """In Plato’s early dialogues, Socrates never begins by proclaiming truths. Instead, he assumes the posture of absolute ignorance, interrogating his interlocutor with razor-sharp questions until their unfounded assumptions collapse under contradiction.

A software disassembler like Ghidra or OllyDbg operates on the exact same philosophical premise. The binary arrives as an inscrutable black box of stripped symbols and obfuscated jumps. You do not ask the program what it claims to do in its documentation; documentation is the social mask. 

Instead, you set a hardware execution breakpoint on an address. You halt the CPU mid-stride. You inspect the registers (EAX, EBX, ESP) and the flags register (ZF, CF). You force the binary to answer under oath.

Just as the Athenians grew hostile when Socrates demonstrated that their revered definitions of piety and justice were hollow, an application with anti-debug routines will panic and crash when it realizes you are watching its registers. The disassembler is not merely an engineering utility; it is the ultimate instrument of philosophical elenchus applied to compiled thought."""
    },
    {
        "title": "The Biomechanical Singularity: Counterbalance in Aerial Straps and Stunts",
        "tags": ["#kinetic", "#cybernetics", "#aerials", "#acroyoga"],
        "readingTime": "4 min read",
        "mood": "Kinetic",
        "excerpt": "How partner acrobatic flight models Norbert Wiener’s cybernetic feedback loops with zero latency margin.",
        "content": """When you hold a flyer in an overhead stunt extension or counterbalance a partner on aerial straps, you quickly realize that equilibrium is not a stationary state. It is a rapid, oscillating frequency of micro-corrections.

Norbert Wiener defined cybernetics as the science of control and communication in the animal and the machine, founded upon the continuous ingestion of negative feedback to minimize entropy. 

In an extended liberty, the flyer's center of mass shifts by three millimeters due to a draft of air. If the base reacts with a rigid, brute-force heave, the system over-corrects and the tower collapses. Instead, the palms and wrists must act as high-frequency strain gauges, applying immediate damping force before the visual cortex even registers the tilt.

The human body is an analog computer of breathtaking sophistication. We spend our days typing into digital keyboards that discretize the universe into 0s and 1s, forgetting that our joints and nervous systems were engineered to solve differential equations of momentum and balance in real-time."""
    },
    {
        "title": "Baudrillard's Simulacra and Synthetic Benchmarks: When the LLM Evaluates Itself",
        "tags": ["#ai", "#philosophy", "#baudrillard", "#homelab"],
        "readingTime": "4 min read",
        "mood": "Contemplative",
        "excerpt": "When synthetic test sets evaluate models trained on synthetic data, we enter Baudrillard’s hyperreal—where reference to ground truth has severed entirely.",
        "content": """Jean Baudrillard argued that simulation is no longer that of a territory, a referential being, or a substance. It is the generation by models of a real without origin or reality: a hyperreal.

In modern machine learning evaluation pipelines, we observe this exact ontological collapse. Benchmark suites like MMLU and GSM8K are increasingly saturated, so teams generate synthetic test sets using frontier models to evaluate slightly smaller distilled models. The student answers questions hallucinated by the teacher; the teacher scores the student based on its own latent priors.

When I run local inference on a quantized Qwen or Llama checkpoint in my homelab, I am constantly reminded of this severance. The benchmark numbers on the Hugging Face leaderboard look immaculate, yet the moment you test the model against messy, empirical human ambiguity—like decoding an undocumented binary format or diagnosing a failed tendon graft—the synthetic veneer cracks.

The remedy is grounding. Just as Baudrillard warned against mistaking the map for the territory, an engineer must never mistake synthetic loss curves for empirical utility. Real intelligence is tested against friction with the physical and operational world."""
    },
    {
        "title": "Taleb's Antifragility in Post-Traumatic Biomechanics: Scars as Structural Reinforcement",
        "tags": ["#kinetic", "#antifragile", "#biomechanics", "#rehab"],
        "readingTime": "4 min read",
        "mood": "Kinetic",
        "excerpt": "Nassim Taleb defined the antifragile as that which gains from disorder. In post-surgical rehabilitation, tissue remodeling requires calculated mechanical stress.",
        "content": """Nassim Nicholas Taleb defined antifragility as a property beyond resilience: the resilient resists shocks and stays the same; the antifragile gets better.

Nowhere is this principle more brutally physical than in orthopedic tissue remodeling. Following a joint reconstruction, conventional wisdom tempts you to protect the operative limb indefinitely—to shield it from all load, impact, and shear. But biological tissue adheres strictly to Wolff's Law and Davis's Law: bone and collagen only densify along the lines of mechanical stress placed upon them.

If you treat the repaired ligament as fragile glass, it remains atrophied and vulnerable. You must introduce controlled micro-stressors—isometric holds, eccentric tempos, multi-planar balance challenges—to force the fibroblast matrix to realign.

The psychological parallel is inescapable. We often design software architectures, personal habits, and career paths for total insulation against disruption. But true durability is not the absence of stress; it is the deliberate cultivation of systems that metabolize volatility into strength."""
    },
    {
        "title": "Marcus Aurelius at the Kernel Panic: Stoic Resilience in Headless Server Administration",
        "tags": ["#systems", "#stoicism", "#quadlet", "#resilience"],
        "readingTime": "3 min read",
        "mood": "Systemic",
        "excerpt": "When a remote server drops off the Tailscale mesh at 2 AM, Epictetus and Marcus Aurelius offer better troubleshooting hygiene than panic.",
        "content": """Marcus Aurelius wrote in Meditations: 'You have power over your mind—not outside events. Realize this, and you will find strength.'

There is a distinct flavor of modern helplessness that strikes when a headless server, located miles away behind a NAT router, stops responding to ping packets. The SSH connection times out; the Tailscale node goes grey; the status dashboard turns crimson.

Your immediate mammalian instinct is adrenaline and panic. You wonder if the power supply failed, if the kernel panicked on a dirty reboot, or if a rogue Quadlet unit exhausted all available file descriptors.

Yet the headless machine is indifferent to your anxiety. Panicking changes zero bits on the NAND flash. Stoicism in systems engineering is the discipline of distinguishing between what you can observe and what you can control. You systematically inspect the last syslog entries, check the remote console logs, test fallback ports, and diagnose with cold, methodical detachment. The machine only obeys logic; to bring it back to life, your mind must do the same."""
    },
    {
        "title": "The Epistemology of Packet Sniffing: Kantian Phenomena and Raw TCP Sockets",
        "tags": ["#networking", "#kant", "#epistemology", "#security"],
        "readingTime": "3 min read",
        "mood": "Lucid",
        "excerpt": "Application layers present a sanitized illusion; tcpdump reveals the Kantian thing-in-itself of network protocol reality.",
        "content": """Immanuel Kant distinguished between the phenomenon (the world as represented by our sensory faculties) and the noumenon or 'Ding an sich' (the thing-in-itself, unmediated by human perception).

Web browsers, REST clients, and developer devtools are sensory filters. They show you tidy JSON bodies, 200 OK badges, and rendered typography. They present an idealized phenomenon. But when an asynchronous socket connection hangs silently or a TLS handshake drops intermittently across a VPN tunnel, the phenomenon is useless.

You must open Wireshark or tcpdump. You peel back the HTTP abstractions and look directly at raw Ethernet frames, TCP sequence numbers, SYN-ACK handshakes, and MTU fragmentation. 

At the packet layer, marketing buzzwords disappear. There are no 'microservices' or 'serverless edge workers'—there are only sliding TCP windows, retransmission timeouts, and FIN-ACK packets traversing copper and fiber. Troubleshooting at the lowest layer of abstraction is the closest a software engineer ever gets to unmediated contact with the reality of their systems."""
    },
    {
        "title": "The Dramaturgy of the Rootless Container",
        "tags": ["#homelab", "#philosophy", "#quadlet", "#goffman"],
        "readingTime": "3 min read",
        "mood": "Systemic",
        "excerpt": "Why Podman’s daemonless architecture mirrors Erving Goffman’s front-stage / back-stage distinction more cleanly than Docker ever could.",
        "content": """When Docker runs, it demands a monolithic, omniscient daemon running as root—a perpetual, centralized front-stage master that dictates the state of every process beneath it. If dockerd faults, the stage collapses. All masks are torn away simultaneously.

Podman, particularly when paired with Quadlet, inverts this theater entirely. There is no omnipotent master daemon watching over the system. Instead, each container operates in its own unprivileged user namespace, represented plainly as a native systemd unit file. It awakens when called, executes its purpose within the strict confines of cgroups v2, and retires into silence.

This is Erving Goffman’s sociological dramaturgy brought into operating system design. When I instruct a Quadlet container to spin up Jellyfin or my local inference layer, it does not pretend to be the entirety of the machine. It merely wears the costume required of its service contract. When society asks an individual to be a certified project manager, a software hacker, a competitive lifter, or an aerialist, the mistake is assuming one must construct a centralized, totalitarian persona that reconciles them all.

Better to be rootless. Better to let each facet run in its own namespace, isolated from privilege escalation, speaking cleanly over standard sockets when cooperation is required, and returning to the back-stage when the scene concludes."""
    },
    {
        "title": "Sisyphus on the Ergometer: The Ethics of Kinetic Rebuilding",
        "tags": ["#kinetic", "#absurdism", "#camus", "#surgery"],
        "readingTime": "4 min read",
        "mood": "Kinetic",
        "excerpt": "Waking up after orthopedic surgery with a joint pinned by titanium screws is the closest physical approximation to Camus’ absurd confrontation.",
        "content": """Albert Camus wrote that the absurd is born of this confrontation between the human need for meaning and the unreasonable silence of the world. In the physical realm, this silence is never more deafening than the day following your fifth major orthopedic surgery.

You look down at your leg or shoulder. The neural circuitry that once allowed you to explosive-catch a 115-spm dragonboat stroke or lock out an overhead stunt partner is severed by trauma and anesthesia. You send a command from the motor cortex: *flex*. Nothing moves. The muscle belly remains inert, as if your nervous system is knocking on the door of an abandoned house.

A medical specialist will tell you to accept the baseline—to settle into the statistical mean of sedentary recovery. But this is philosophical suicide in miniature.

Camus’ Sisyphus does not roll the boulder up the mountain because he believes the boulder will stay on top. The boulder will always roll back down. The cartilage will always wear down; entropy will always claim the joints eventually. The triumph is in the return to the foot of the hill. Every single degree of active range of motion regained against scar tissue is a revolt against the indifferent biology of decay. You do not train because you are invulnerable; you train because in the deliberate confrontation with limitation, you are radically free."""
    },
    {
        "title": "Sapir-Whorf in the Memory Scanner: Why Cheat Engine is a Linguistic Exercise",
        "tags": ["#reverse-engineering", "#linguistics", "#wittgenstein", "#cognition"],
        "readingTime": "3 min read",
        "mood": "Lucid",
        "excerpt": "Finding a pointer address in a running binary is fundamentally identical to deciphering a Wittgensteinian language-game.",
        "content": """When someone first encounters Cheat Engine or OllyDbg, they assume reverse engineering is a mechanical hunt for numbers. You change your in-game gold from 100 to 150, scan for the differential, and assume the value sits at a tidy static address.

Of course, modern operating systems make sure it never does. ASLR (Address Space Layout Randomization) and dynamic heap allocations guarantee that what you seek is a ghost. You aren’t looking for a value; you are looking for a *pointer to a pointer to a struct offset*.

This is where Wittgenstein’s Philosophical Investigations becomes an operational manual. Wittgenstein observed that words do not point to absolute Platonic essences; they derive meaning exclusively from their role in a dynamic game with rules. In low-level memory forensics, a hex address like 0x7FFF5FBFFD40 means nothing in isolation. Its "meaning" is established only by the instruction that dereferences it: 'MOV RAX, [RCX + 0x18]'.

The Sapir-Whorf hypothesis asserts that the structure of a language limits the thoughts that can be conceived within it. If your mental grammar only contains high-level concepts like "objects" and "variables," memory corruption bugs and pointer offsets feel like chaotic magic. But the moment you adopt the vocabulary of registers, stacks, heap chunks, and opcodes, the hidden architecture of the program reveals itself. You stop looking at the flickering shadows on the cave wall and start examining the projector."""
    },
    {
        "title": "The Panopticon of the Feed and the Freedom of the Edge Server",
        "tags": ["#foucault", "#homelab", "#privacy", "#sovereignty"],
        "readingTime": "4 min read",
        "mood": "Contemplative",
        "excerpt": "Foucault’s disciplinary architecture has migrated from stone watchtowers to cloud API telemetry.",
        "content": """Michel Foucault’s analysis of the Panopticon revealed that power is most insidious not when it punishes physically, but when it renders the subject permanently visible. The inmate who believes an invisible guard *might* be watching from the central tower polices his own thoughts and gestures.

Every commercial cloud platform is a modernized Panopticon. When you converse with a centralized LLM or store your notes in a vendor’s SaaS silo, your queries are parsed, indexed, and logged for model training and compliance monitoring. The user unconsciously sanitizes their queries, phrasing ideas to avoid trigger words or algorithmic flags.

Hosting a quantized 4-billion parameter model on a dusty 2014 MacBook Pro over a private WireGuard mesh is not merely a fun hardware recycling project. It is an act of epistemic defiance. When the weights run locally on silicon sitting in your living room, the central inspection tower is blind. You can explore strange hypotheses, draft unorthodox stories, and parse raw data without fear of an invisible adjudicator logging your curiosity."""
    },
    {
        "title": "The Deep Generalist Dilemma: Escaping the Specialist’s Iron Cage",
        "tags": ["#generalism", "#weber", "#neurodivergence", "#polymath"],
        "readingTime": "5 min read",
        "mood": "Lucid",
        "excerpt": "Max Weber foresaw the \"iron cage\" of bureaucratic specialization. The only way out is deliberate, obsessive cross-pollination.",
        "content": """Modern industrial society is obsessed with the single-vector specialist. From early schooling through corporate performance reviews, humans are pressured to pick a narrow niche, drill down, and ignore all adjacent reality. Max Weber diagnosed this over a century ago: \"Specialists without spirit, sensualists without heart; this nullity is caught in the delusion that it has achieved a level of development never before attained.\"

For the neurodivergent brain—particularly one driven by intense, hyper-focused pattern-seeking—this specialization feels like cognitive asphyxiation. 

The deep generalist does not dabble. The deep generalist refuses the binary choice between shallow breadth and siloed depth. Instead, they pursue *depth across orthogonal axes*.

When you understand the biomechanical levers of an overhead stunt catch, the multi-threaded scheduling of an operating system kernel, the financial mathematics of an implied volatility smile, and the existential weight of Sartre’s bad faith, something transformative happens: concepts begin speaking to each other. Solutions to software bottlenecks present themselves as analogies from human kinesiology; philosophical paradoxes unravel when framed as distributed consensus problems.

You don't collect skills like trading cards. You collect them because reality is a single, continuous fabric, and slicing it into corporate departments was always a bureaucratic fiction."""
    }
]

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
    """
    Automated housekeeping function:
    Enforces that if there are more than max_posts, the oldest posts
    (at the end of the array) are removed.
    Returns (kept_musings, pruned_musings).
    """
    if len(musings) > max_posts:
        kept = musings[:max_posts]
        pruned = musings[max_posts:]
        return kept, pruned
    return musings, []

def generate_entry(existing_musings: list[dict]) -> dict:
    """Generates a new entry avoiding titles already active in current musings."""
    now = datetime.now(SGT)
    date_str = now.strftime("%Y-%m-%d")
    entry_id = f"musing-{now.strftime('%Y%m%d%H%M%S')}"

    existing_titles = {m.get("title") for m in existing_musings}
    available_seeds = [s for s in TOPIC_SEEDS if s["title"] not in existing_titles]

    if not available_seeds:
        print("[Info] All topic seeds currently active; cycling from full pool.")
        available_seeds = TOPIC_SEEDS

    seed = random.choice(available_seeds)

    print(f"[Oracle] Synthesized new musing: '{seed['title']}' ({date_str})")
    return {
        "id": entry_id,
        "date": date_str,
        "title": seed["title"],
        "tags": seed["tags"],
        "readingTime": seed["readingTime"],
        "mood": seed["mood"],
        "excerpt": seed["excerpt"],
        "content": seed["content"]
    }

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
    print(f"--- Autonomous Musing Synthesis & Housekeeping Job ({datetime.now(SGT).strftime('%Y-%m-%d %H:%M:%S SGT')}) ---")
    
    existing = load_existing_musings()
    print(f"[State] Current active musings count: {len(existing)}")

    new_musing = generate_entry(existing)
    combined = [new_musing] + existing

    kept, pruned = prune_old_musings(combined, max_posts=MAX_POSTS)

    if pruned:
        print(f"[Housekeeping] Pruning active! Removed {len(pruned)} oldest entry/entries:")
        for p in pruned:
            print(f"  - Pruned: '{p.get('title')}' (Date: {p.get('date')}, ID: {p.get('id')})")
    else:
        print(f"[Housekeeping] Total entries ({len(kept)}) is within limit ({MAX_POSTS}). No pruning needed.")

    save_musings(kept)
    print("--- Completed Successfully ---")

if __name__ == "__main__":
    main()
