export interface Project {
  id: string;
  title: string;
  category: 'Game Dev' | 'Full Stack' | 'Quantitative' | 'Systems';
  tagline: string;
  description: string;
  architecture: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  embedType?: 'webgl' | 'iframe';
  highlights: string[];
  status: 'Live' | 'In Production' | 'Prototype';
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
    id: 'reality-cut',
    title: 'Reality Cut (3D Metroidvania Engine)',
    category: 'Game Dev',
    tagline: 'High-speed action platformer exploring animation canceling mechanics in Unity',
    description: 'A mechanically intensive 3D action Metroidvania prototype. The core mechanic revolves around "Reality Cut"—the player tears through spacetime to cancel active combat and movement animations, allowing high-skill combo chains, aerial dashes, wall-clings, and impossible kinetic repositioning.',
    architecture: [
      'Finite State Machine (FSM) movement engine with microsecond frame buffering',
      'Custom hit-box / hurt-box spatial queries bypassing standard Unity physics jitter',
      'Procedural camera framing and dynamic motion dampening during high-velocity chains'
    ],
    techStack: ['Unity 6', 'C#', 'Blender', 'Cinema 4D', 'Universal Render Pipeline (URP)'],
    githubUrl: 'https://github.com/Eclypheon',
    status: 'Prototype',
    highlights: [
      'Deep animation-canceling mechanics inspired by high-level fighting games',
      'Custom low-poly environment assets and shader graphs created in Blender',
      'GDD detailing progressive spatial unlocks and atmospheric lore'
    ],
    metrics: [
      { label: 'Frame Buffer', value: '4-Frame Window' },
      { label: 'Movement Verbs', value: '8 Core States' },
      { label: 'Rendering', value: 'URP 60 FPS' }
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
    githubUrl: 'https://github.com/Eclypheon/cheer-plan-pro',
    status: 'In Production',
    highlights: [
      'Interactive crosshair arrow tool defining stunt trajectories across 8-counts',
      'Multi-layer formation management with coach notes and audio cue synchronization',
      'Built specifically for real-world cheer routines and safety regulations'
    ],
    metrics: [
      { label: 'Precision', value: '8-Count Grid' },
      { label: 'Export Format', value: 'Vector SVG / PDF' },
      { label: 'Undo Depth', value: 'Unlimited Snapshots' }
    ]
  },
  {
    id: 'options-engine',
    title: 'Quantitative Options & Volatility Analytics',
    category: 'Quantitative',
    tagline: 'Black-Scholes-Merton pricing model, Greeks sensitivity surfaces, and probability density curves',
    description: 'A quantitative financial analysis toolkit for calculating European and American option Greeks (Delta, Gamma, Vega, Theta, Rho), implied volatility skews, and expected value distributions for complex multi-leg option spreads.',
    architecture: [
      'Vectorized Black-Scholes formula calculation in Python / TypeScript',
      'Monte Carlo path simulations for exotic early-exercise boundaries',
      'Real-time Greeks delta hedging sensitivity graphs'
    ],
    techStack: ['Python', 'NumPy', 'TypeScript', 'Statistical Modeling'],
    githubUrl: 'https://github.com/Eclypheon',
    status: 'Prototype',
    highlights: [
      'Multi-leg spread simulator (Iron Condors, Straddles, Calendars, Ratio Spreads)',
      'Calculates implied volatility smile and skew across expiration cycles',
      'Probability of profit (PoP) calculation across simulated market drift'
    ],
    metrics: [
      { label: 'Calculations', value: '5 Greeks Realtime' },
      { label: 'Simulation', value: '10,000 Paths' },
      { label: 'Pricing Model', value: 'Black-Scholes / Binomial' }
    ]
  }
];
