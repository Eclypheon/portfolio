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
    description: 'A rich simulation game created from scratch featuring an evolving gameplay loop with customer behavioral state machines, custom fluid pouring shaders, recipe verification pipelines, and dynamic audio synthesized with FL Studio and Audacity. Designed with pixel art and vector assets in Adobe Illustrator and Photoshop. Continuously developed by gradually adding kitchen elements, toppings, and systems based on personal design ideas and player feedback.',
    architecture: [
      'Custom State Machine orchestrating customer queuing behavior and ordering patterns',
      'Algorithmic beverage validation checking liquid mask, tea levels, ice volumes, and topping order',
      'Iterative gameplay loop design: steadily integrating new mechanics, recipe permutations, and balance tuning shaped by design experiments and direct user feedback',
      'Audio feedback system with custom recorded & mastered Foley sounds'
    ],
    techStack: ['Unity 2D/3D', 'C#', 'WebGL', 'FL Studio', 'Audacity', 'Adobe Illustrator'],
    liveUrl: 'https://eclypheon.github.io/bubbletea/',
    githubUrl: 'https://github.com/Eclypheon/bubbletea',
    embedType: 'webgl',
    status: 'Live',
    highlights: [
      'Playable directly in-browser with responsive WebGL canvas scaling',
      'Iterative gameplay loop with ongoing feature expansions guided by player testing',
      'Full inventory, economic upgrade tree, and recipe permutations',
      'Automated GitHub Pages deployment pipeline'
    ],
    metrics: [
      { label: 'Architecture', value: 'Custom State Machine' },
      { label: 'Audio Tracks', value: '18 Foley SFX' },
      { label: 'Platform', value: 'WebGL / PWA' }
    ]
  },
  {
    id: 'financetracker',
    title: 'Asset & Dividend Tracker',
    category: 'Full Stack',
    tagline: 'Multi-asset financial tracker with automated dividend scraping and net worth modeling',
    description: 'A modern financial operating dashboard built to model liquid vs. non-liquid asset trajectories, historical equity positions, and dividend projections. Built out of sheer necessity because I was tired of manually tracking monthly dividends—so now you just key in your tickers and quantity, and it automatically pulls payouts from SGX corporate actions.',
    architecture: [
      'React 19 + Tailwind CSS frontend with sub-millisecond tab rendering and card carousel',
      'Automated SGX scraping pipeline: tired of manually tracking monthly dividends, so just key in tickers and quantity to pull payouts directly from SGX corporate actions',
      'Supabase Row-Level Security (RLS) ensuring strict isolation and optional encrypted cloud sync',
      'PWA offline caching with service workers via VitePWA'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Python 3', 'Vite PWA'],
    liveUrl: 'https://eclypheon.github.io/financetracker/',
    githubUrl: 'https://github.com/Eclypheon/financetracker',
    status: 'Live',
    highlights: [
      'Dividends Automation: Key in your tickers and quantity and it pulls payouts from SGX corporate actions',
      'Zero-latency financial data updates with optimistic UI and local persistence',
      'Interactive asset allocation breakdowns and historical runway modeling',
      'Three dedicated operational interfaces: Net Assets, Dividends Portfolio, and Recurring Expenses'
    ],
    metrics: [
      { label: 'UI Speed', value: '<16ms Render' },
      { label: 'SGX Engine', value: 'Automated Scraping' },
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
  },
  {
    id: 'telegram-bot',
    title: 'Telegram Audio Transcriber & Mediator Bot',
    category: 'Systems',
    tagline: 'Autonomous voice note transcriber & Qwen3.5 9B neural therapist/mediator (@kestertest_bot)',
    description: 'A custom Telegram bot running 24/7—working seamlessly in both private 1-on-1 chats and group chats—that automatically ingests and transcribes inbound voice notes. Functions as an empathetic therapist and neutral mediator powered by a custom Qwen3.5 9B model hosted via LM Studio on a MacBook Air M4 (24GB). Features dual operating modes: continuously mediates every message when /mediate is activated, or silently transcribes and only offers structured counsel when /opinion is triggered.',
    architecture: [
      'Automated Audio Pipeline: Ingests Telegram voice notes and routes them through a local faster-whisper (tiny) library running on Ubuntu Server for instant transcription',
      'Group & Direct Chat Orchestration: Operates smoothly in multi-user group chats as well as private DMs with session-aware message filtering',
      'Dual Dynamic Conversation Modes: /mediate for real-time continuous mediation vs. /opinion for discrete therapeutic assessments',
      'Local Private Inference: Dispatches prompts to LM Studio hosting Qwen3.5 9B (custom) on Apple Silicon M4 with zero cloud telemetry'
    ],
    techStack: ['Python', 'Telegram Bot API', 'faster-whisper', 'Qwen3.5 9B', 'LM Studio', 'Ubuntu Server'],
    liveUrl: 'https://t.me/kestertest_bot',
    status: 'Live',
    highlights: [
      'Works in group chats as well as private direct messages',
      'Instant voice note transcription using local faster-whisper (tiny)',
      'Continuous /mediate mode for active conflict resolution & conversational therapy',
      'On-demand /opinion mode for passive listening with discrete advisory interventions',
      'Zero cloud data leakage—processed through private local inference pipelines'
    ],
    metrics: [
      { label: 'Bot Handle', value: '@kestertest_bot' },
      { label: 'Inference', value: 'LM Studio (M4 24GB)' },
      { label: 'Audio STT', value: 'faster-whisper tiny' }
    ]
  }
];
