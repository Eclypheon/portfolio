export interface SkillCategory {
  title: string;
  badge: string;
  iconName: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Creative, 3D & Spatial Design',
    badge: 'Spatial & Visual',
    iconName: 'Box',
    description: 'Years of hands-on digital craftsmanship spanning hard-surface 3D modeling, procedural shading, vector typography, and digital art.',
    skills: [
      { name: 'Blender & 3ds Max', level: 'Advanced', note: 'Hard-surface modeling, retopology, UV unwrapping, and rigging' },
      { name: 'Cinema 4D', level: 'Proficient', note: 'MoGraph dynamics, generative geometry, and procedural render passes' },
      { name: 'Adobe Illustrator & Photoshop', level: 'Mastery', note: 'Vector iconography, game sprite sheets, typographic layouts, and digital painting' }
    ]
  },
  {
    title: 'Video, Motion & Sound Engineering',
    badge: 'Audiovisual Production',
    iconName: 'Film',
    description: 'Post-production pipelines from high-bitrate color grading to synthesizer sound design and audio Foley mastering.',
    skills: [
      { name: 'DaVinci Resolve & Premiere Pro', level: 'Advanced', note: 'Node-based color grading, multicam synchronization, high-paced narrative editing' },
      { name: 'Adobe After Effects', level: 'Proficient', note: 'Kinetic typography, motion graphics, spatial camera tracking, VFX composite passes' },
      { name: 'FL Studio & Audacity', level: 'Advanced', note: 'Synthesizer sound design, dynamic mixing, EQ sculpting, and custom video game Foley' }
    ]
  },
  {
    title: 'Low-Level Reversing & Memory Forensics',
    badge: 'Security & Deep Internals',
    iconName: 'Cpu',
    description: 'Peering beneath high-level abstractions into the volatile memory and x86/x64 assembly instructions of running binaries.',
    skills: [
      { name: 'Cheat Engine & Pointer Maps', level: 'Proficient', note: 'Multi-level pointer scanning, memory struct dissection, runtime code injection' },
      { name: 'OllyDbg & Ghidra', level: 'Exploratory', note: 'Disassembly inspection, breakpoint stepping, binary opcode analysis and decompilation' },
      { name: 'Cybersecurity & CCNA', level: 'Instructor Level', note: 'Subnetting, packet flow, OSI model, routing protocols (instructed CCNA cohorts)' },
      { name: 'Basic Pentesting & Threat Modeling', level: 'Practitioner', note: 'Port reconnaissance, network enumeration, attack surface analysis, and defensive hardening' }
    ]
  },
  {
    title: 'Operational Command & Enterprise Governance',
    badge: 'Command & Leadership',
    iconName: 'Award',
    description: '7 years of military leadership as an Infantry Captain combined with certified agile delivery and top-tier business administration.',
    skills: [
      { name: 'JIRA & Microsoft Project', level: 'Advanced', note: 'Sprint backlogs, Work Breakdown Structures (WBS), critical path analysis, and resource leveling' },
      { name: 'Agile (Scrum) & Waterfall Frameworks', level: 'PMP / CSM', note: 'Hybrid project management, sprint cadence, milestone gates, and risk mitigation' },
      { name: 'MS 365 Suite & Power Automate', level: 'Advanced', note: 'Enterprise workflow automation, cross-department collaborative pipelines, and administrative scripting' },
      { name: 'SAF C4I Wing & DIS Curriculum', level: 'Stand-in Wing Cmdr', note: 'Forged inaugural officer curriculum for Digital and Intelligence Service (DIS) & C4I Wing' },
      { name: 'Regional Force Commander (Sembawang)', level: 'Regional Command', note: 'Commanded security networks & guardrooms across Khatib Camp, Dieppe Barracks, and Sembawang Camp' },
      { name: 'Cadet Shadow Initiative (OCS)', level: 'Initiative Founder', note: 'Instituted school-wide OCS framework training cadets in administrative orders and operational governance' },
      { name: 'PMP® & Certified Scrum Master (CSM)', level: 'Dual Certified', note: 'PMI governance lifecycles, risk management, and agile velocity optimization' },
      { name: 'First Class Honours (BBA) — NUS', level: 'Top Tier', note: 'National University of Singapore Business Administration, multiple Dean\'s Lists' }
    ]
  },
  {
    title: 'Enterprise Geospatial & Defense C3 (E-GIS)',
    badge: 'Mission-Critical Systems',
    iconName: 'MapPin',
    description: 'Spearheading large-scale homeland security, emergency response, and operational tracking platforms.',
    skills: [
      { name: 'Esri ArcGIS Products & Portal', level: 'Enterprise Lead', note: 'ArcGIS Pro, Enterprise Server, Portal web maps, spatial clustering, and spatial analysis' },
      { name: 'MSSQL & Spatial Querying', level: 'Advanced', note: 'Relational data schemas, spatial indexing, ST_Geometry queries, and high-throughput query optimization' },
      { name: 'Python, C# & Web Frameworks', level: 'Full-Stack', note: 'ArcPy/GeoPandas automation, C# backend services, and React / Angular web application frontends' },
      { name: 'HTX SPF & MHA E-GIS', level: 'Initiative Lead', note: 'Enterprise Geospatial Information Systems for Singapore Police Force & Ministry of Home Affairs' },
      { name: 'ST Engineering ACES — SCDF', level: 'Deputy PM', note: 'Mission-critical C3 emergency dispatch combining GIS, Video Management (VMS), and CAD telemetry' },
      { name: 'OBS IOMS Operations System', level: 'Development Lead', note: 'Integrated operations monitoring for Outward Bound Singapore participant tracking & field resources' },
      { name: 'Spatial Telemetry & Urban Data', level: 'Advanced', note: 'Coordinate systems, real-time spatial clustering, shapefile pipelines, and GeoPandas workflows' }
    ]
  },
  {
    title: 'Internet Lore & Defensive Heuristics',
    badge: 'Digital Culture',
    iconName: 'Globe',
    description: 'Decades of digital native immersion—from early MMORPG social engineering economies to deep web subcultures.',
    skills: [
      { name: 'Social Engineering Defense', level: 'Innate', note: 'Surviving vintage RuneScape & MapleStory trust trades, lure traps, and phishing rings' },
      { name: 'Subculture Cartography', level: 'Veteran', note: 'Extensive cultural literacy across Reddit, 4chan history, niche technical imageboards' },
      { name: 'Information Triage', level: 'Intuitive', note: 'High signal-to-noise filtering across disorganized forums, raw git dumps, and academic papers' }
    ]
  }
];
