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
      { name: 'Cybersecurity & CCNA', level: 'Instructor Level', note: 'Subnetting, packet flow, OSI model, routing protocols (instructed CCNA cohorts)' }
    ]
  },
  {
    title: 'Enterprise Architecture & Governance',
    badge: 'Management & Strategy',
    iconName: 'Award',
    description: 'Bridging technical deep-dives with rigorous business administration, strategic decision matrices, and certified project delivery.',
    skills: [
      { name: 'First Class Honours (BBA)', level: 'Top Tier', note: 'National University of Singapore (NUS) Business Administration, multiple Dean\'s Lists' },
      { name: 'PMP® Certification', level: 'Certified', note: 'Project Management Institute (PMI) standard for risk, scope, and governance lifecycle' },
      { name: 'Certified Scrum Master (CSM)', level: 'Certified', note: 'Agile servant leadership, sprint velocity optimization, cross-functional coaching' }
    ]
  },
  {
    title: 'Geospatial & Urban Telemetry (GIS)',
    badge: 'Spatial Intelligence',
    iconName: 'MapPin',
    description: 'Analyzing large-scale spatial patterns, municipal transportation APIs, and public infrastructure datasets.',
    skills: [
      { name: 'GIS & Spatial Data', level: 'Practitioner', note: 'Coordinate reference systems, shapefile transformations, spatial clustering queries' },
      { name: 'LTA DataMall & Urban APIs', level: 'Proficient', note: 'Real-time transit telemetry ingestion, taxi stand availability, carpark capacity models' },
      { name: 'Python Data Pipeline', level: 'Advanced', note: 'GeoPandas, Shapely, asynchronous HTTP batch extractors, and automated JSON sanitizers' }
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
