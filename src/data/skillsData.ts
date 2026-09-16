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
    title: 'Enterprise Governance & Project Management',
    badge: 'Governance & Methods',
    iconName: 'Award',
    description: 'Structured delivery frameworks, cross-functional tracking toolchains, and agile execution methodologies for complex software and systems.',
    skills: [
      { name: 'PMP® & Certified Scrum Master (CSM)', level: 'Dual Certified', note: 'PMI lifecycle governance, risk registers, sprint velocity, and critical path analysis' },
      { name: 'JIRA & Confluence', level: 'Advanced', note: 'Sprint backlogs, epic/story workflows, board automation, and technical documentation spaces' },
      { name: 'Microsoft Project', level: 'Proficient', note: 'Work Breakdown Structures (WBS), Gantt dependency mapping, resource leveling, and baseline tracking' },
      { name: 'Agile (Scrum) & Waterfall Frameworks', level: 'PMP / CSM', note: 'Sprint planning, daily standups, milestone stage-gate reviews, and hybrid delivery lifecycles' },
      { name: 'MS 365 Suite & Power Automate', level: 'Advanced', note: 'Automated data capture pipelines, cross-application approval flows, and collaborative scripting' }
    ]
  },
  {
    title: 'Enterprise Geospatial, Spatial Data & C3',
    badge: 'Spatial & Telemetry',
    iconName: 'MapPin',
    description: 'Toolchains, spatial query engines, and application frameworks for enterprise GIS, telemetry pipelines, and real-time mapping systems.',
    skills: [
      { name: 'Esri ArcGIS Suite (Pro, Enterprise, Portal)', level: 'Advanced', note: 'ArcGIS Pro, Enterprise Server, Portal web maps, spatial clustering, and geoprocessing models' },
      { name: 'MSSQL & Spatial Querying', level: 'Advanced', note: 'Relational data schemas, spatial indexing, ST_Geometry queries, and high-throughput query optimization' },
      { name: 'Python (ArcPy & GeoPandas)', level: 'Advanced', note: 'Automated vector/raster geoprocessing, spatial join pipelines, and GeoJSON data wrangling' },
      { name: 'C# (.NET) Backend Services', level: 'Proficient', note: 'High-performance telemetry endpoints, microservices, and enterprise data processing' },
      { name: 'React & Angular Web GIS Frameworks', level: 'Proficient', note: 'Custom web mapping frontends, dynamic spatial querying components, and dashboard interfaces' },
      { name: 'C3 Dispatch, CAD & VMS Protocols', level: 'Proficient', note: 'Computer-Aided Dispatch schemas, Video Management System streams, and incident telemetry' },
      { name: 'Spatial Telemetry & Urban Data', level: 'Advanced', note: 'Coordinate reference systems (CRS/SVY21/WGS84), spatial clustering algorithms, and shapefile/raster pipelines' }
    ]
  },
  {
    title: 'AI, Machine Learning & NLP',
    badge: 'Inference & Automation',
    iconName: 'Bot',
    description: 'From academic unsupervised corpus clustering to federated local LLM inference, autonomous agent workflows, and speech-to-text pipelines.',
    skills: [
      { name: 'Python NLP (NLTK) & Corpus Clustering', level: 'NUS Capstone', note: 'Unsupervised machine learning project clustering and labeling the entire Singapore law corpus using Python NLTK' },
      { name: 'Statistical Computing (R & Julia)', level: 'Academic', note: 'Multivariate regression, numerical modeling, and econometric statistical analysis' },
      { name: 'Local LLM Serving (LM Studio & Ollama)', level: 'Advanced', note: 'Hosting, quantization (GGUF/AWQ), context management, and local OpenAI-compatible API serving' },
      { name: 'Speech Models (faster-whisper & TTS)', level: 'Applied', note: 'Local voice transcription pipelines, audio preprocessing, and multi-engine text-to-speech experimentation' },
      { name: 'n8n Workflows & Agent Orchestration', level: 'Proficient', note: 'Automated agent routing, multi-step triggers, webhook integrations, and data processing workflows' },
      { name: 'Prompt Engineering & AI Workflows', level: 'Mastery', note: 'Advanced context structuring, persona mediation, few-shot prompting, and extensive daily AI pairing across projects' }
    ]
  }
];
