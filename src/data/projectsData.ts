export interface Project {
  id: string;
  title: string;
  category: 'Game Dev' | 'Full Stack' | 'Systems';
  tagline: string;
  description: string;
  architecture: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  embedType?: 'webgl' | 'iframe';
  highlights: string[];
  status: 'Live' | 'Live (Beta / WIP)' | 'In Production';
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'bubbletea',
    title: 'Bubble Tea Sim & Economy Engine',
    category: 'Game Dev',
    tagline: 'Interactive culinary physics and customer queuing simulation built in Unity WebGL',
    description: 'A rich simulation game created from scratch featuring customer behavioral state machines, custom fluid pouring shaders, recipe verification pipelines, and dynamic audio synthesized with FL Studio and Audacity. Designed with pixel art and vector assets in Adobe Illustrator and Photoshop.',
    architecture: [
      'Custom State Machine handling 5 distinct customer persona behaviors (Connoisseur, Student, Mystic, Office Worker, Kid)',
      'Algorithmic beverage validation checking liquid mask, tea levels, ice volumes, and topping order',
      'Audio feedback system with custom recorded & mastered Foley sounds'
    ],
    techStack: ['Unity 2D/3D', 'C#', 'WebGL', 'FL Studio', 'Audacity', 'Adobe Illustrator'],
    liveUrl: 'https://eclypheon.github.io/bubbletea/',
    githubUrl: 'https://github.com/Eclypheon/bubbletea',
    embedType: 'webgl',
    status: 'Live',
    highlights: [
      'Playable directly in-browser with responsive WebGL canvas scaling',
      'Full inventory, economic upgrade tree, and recipe permutations',
      'Automated GitHub Pages deployment pipeline'
    ],
    metrics: [
      { label: 'Customer States', value: '5 Classes' },
      { label: 'Audio Tracks', value: '18 Foley SFX' },
      { label: 'Platform', value: 'WebGL / PWA' }
    ]
  },
  {
    id: 'financetracker',
    title: 'Precision Asset & Dividend Engine',
    category: 'Full Stack',
    tagline: 'High-density multi-asset financial tracker with automated dividend scraping and net worth modeling',
    description: 'A modern financial operating dashboard built to model liquid vs. non-liquid asset trajectories, historical equity positions, and dividend projections. Integrates Supabase for encrypted cloud persistence and a local Python daemon for automated corporate action and dividend yield extraction.',
    architecture: [
      'React 19 + Tailwind CSS frontend with sub-millisecond tab rendering',
      'Python background scraping daemon using BeautifulSoup & JSON cache layers',
      'Supabase Row-Level Security (RLS) ensuring strict isolation of financial records',
      'PWA offline caching with service workers via VitePWA'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Python 3', 'Vite PWA'],
    liveUrl: 'https://eclypheon.github.io/financetracker/',
    githubUrl: 'https://github.com/Eclypheon/financetracker',
    status: 'Live',
    highlights: [
      'Zero-latency financial data updates with optimistic UI updates',
      'Interactive asset allocation breakdowns and historical runway modeling',
      'Local standalone daemon with automatic fallback to child-process invocation'
    ],
    metrics: [
      { label: 'UI Speed', value: '<16ms Render' },
      { label: 'Data Sync', value: 'Realtime / Supabase' },
      { label: 'Storage', value: 'Offline PWA + Cloud' }
    ]
  },
  {
    id: 'cheerplan',
    title: 'CheerPlan Pro (Spatial Choreography Visualizer)',
    category: 'Systems',
    tagline: 'Vector-accurate athletic formation planner and routine transition mapping suite',
    description: 'A specialized digital clipboard and formation sequencing tool designed for cheerleading and acrobatic teams. Solves the complex spatial math of base, flyer, spotter, and tumbler positions across 8-count routine intervals, with automatic vector arrow transitions and PDF export capabilities.',
    architecture: [
      'Custom SVG vector rendering surface with interactive drag-and-drop collision avoidance',
      'Multi-line position propagation engine: moving a base icon propagates across downstream stunt counts',
      'Undo/Redo command stack implemented via immutable snapshot deltas'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    liveUrl: 'https://cheer-plan-pro.vercel.app/',
    githubUrl: 'https://github.com/Eclypheon/cheer-plan-pro',
    status: 'Live (Beta / WIP)',
    highlights: [
      'Accessible online via Vercel staging deployment (active work-in-progress)',
      'Interactive crosshair arrow tool defining stunt trajectories across 8-counts',
      'Multi-layer formation management with coach notes and audio cue synchronization'
    ],
    metrics: [
      { label: 'Precision', value: '8-Count Grid' },
      { label: 'Deployment', value: 'Vercel Live' },
      { label: 'State', value: 'Beta Prototype' }
    ]
  }
];
