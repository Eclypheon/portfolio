export interface StackService {
  name: string;
  purpose: string;
  port: string;
  state: 'Running' | 'Installed' | 'Stopped intentionally';
  category: 'Media & Streaming' | 'Photo Backup' | 'Network & Security' | 'AI & Automation' | 'Monitoring';
}

export interface DashboardCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

export const homelabSpecs = {
  hardware: 'Repurposed Apple MacBook Pro (Retina, 13-inch, Mid 2014)',
  os: 'Ubuntu Server (Minimal headless kernel, cgroups v2 enabled)',
  companionHardware: 'Apple MacBook Air (2025, Apple M4 Silicon, 24 GB Unified RAM)',
  companionRole: 'Local LM Studio inference host running custom Qwen3.5 9B with unified RAM',
  audioPipeline: 'Local Python scripts running faster-whisper (tiny model) on Ubuntu Server',
  storage: 'Internal SSD + Media EXT4 (3.6 TiB used) + Media Extra (4.5 TiB free)',
  fanMetrics: '55°C • 2,499 RPM Quiet',
  batteryUps: '80% internal battery acts as brownout UPS (longevity tuned)',
  orchestration: 'Podman + Quadlet (.container declarative systemd service generator)'
};

export const thermalAndUpsDetails = {
  fanAndSmc: {
    title: 'Apple SMC & Dynamic Fan Profiling',
    badge: 'Thermals & Fan Curve',
    metrics: '55°C • 2,499 RPM Quiet',
    description: 'Custom fan curves programmed via Apple SMC (System Management Controller) CLI utilities. In low-load daemon states, the right-side blower rests at a whisper-silent ~2,499 RPM while maintaining an average 55°C CPU package temperature in closed clamshell mode. Under heavier transcoding passes, the SMC dynamically scales acoustic velocity to prevent Haswell thermal throttling.'
  },
  batteryUps: {
    title: '80% Battery Charge Ceiling as a Hardware UPS',
    badge: 'Longevity & Brownout Protection',
    metrics: '80% Internal Battery • Hardware Brownout UPS',
    description: 'Running a laptop 24/7 on continuous AC power at 100% state-of-charge causes severe lithium-ion cathode oxidation, electrolyte breakdown, and cell swelling. The battery charge state is pegged to an 80% plateau to preserve electrochemical cell longevity over years of continuous operation. This provides a zero-cost, instantaneous hardware UPS that seamlessly absorbs mains fluctuations, grid brownouts, or accidental cable disconnects with zero downtime or filesystem corruption on the 3.6 TiB EXT4 array.'
  }
};

export const alienlabDashboardCards: DashboardCard[] = [
  {
    id: 'overview',
    title: 'Host Telemetry & Resource Utilization',
    subtitle: 'Real-time host metrics: MacBook SSD, Media EXT4 arrays, SMC thermals, and battery charge state',
    image: './alienlab-overview.png',
    badge: 'Overview'
  },
  {
    id: 'services',
    title: 'Service Health & Uptime Matrix',
    subtitle: '8/13 services active: AdGuard DNS (100%), Jellyfin (100%), Shoko (100%), and latency pings',
    image: './alienlab-services.png',
    badge: 'Services'
  },
  {
    id: 'media',
    title: 'Media Hub & Asset Library',
    subtitle: 'Jellyfin, Shoko & Immich library indexing: 193 movies, 20 shows, 47 anime, 23,202 photos/videos',
    image: './alienlab-media.png',
    badge: 'Media & Library'
  },
  {
    id: 'telebot',
    title: 'Telebot Daemon & Local AI Health',
    subtitle: '318 memories stored, 5 known users, real-time connectivity to Supabase and LM Studio',
    image: './alienlab-telebot.png',
    badge: 'Telebot Daemon'
  }
];

export const fullStackServices: StackService[] = [
  {
    name: 'AdGuard Home',
    purpose: 'Network-wide DNS / ad blocking & telemetry sink',
    port: 'DNS 53 + Web UI',
    state: 'Running',
    category: 'Network & Security'
  },
  {
    name: 'Caddy',
    purpose: 'Reverse proxy + automated local HTTPS certificates',
    port: '80, 443',
    state: 'Running',
    category: 'Network & Security'
  },
  {
    name: 'Jellyfin',
    purpose: 'Private high-fidelity media streaming to devices & friends',
    port: '8096',
    state: 'Running',
    category: 'Media & Streaming'
  },
  {
    name: 'Shoko Server',
    purpose: 'Anime library & AniDB metadata management',
    port: '8111',
    state: 'Running',
    category: 'Media & Streaming'
  },
  {
    name: 'Shokofin',
    purpose: 'Jellyfin ↔ Shoko bi-directional library integration',
    port: 'Jellyfin plugin',
    state: 'Installed',
    category: 'Media & Streaming'
  },
  {
    name: 'Tracearr',
    purpose: 'Jellyfin playback, watch history & activity analytics',
    port: '3002 → container 3000',
    state: 'Running',
    category: 'Media & Streaming'
  },
  {
    name: 'Tracearr SSE',
    purpose: 'Real-time Jellyfin → Tracearr playback event bus',
    port: 'Jellyfin plugin',
    state: 'Installed',
    category: 'Media & Streaming'
  },
  {
    name: 'Trakt',
    purpose: 'Jellyfin ↔ Trakt watch-history synchronization',
    port: 'Jellyfin plugin',
    state: 'Installed',
    category: 'Media & Streaming'
  },
  {
    name: 'Immich',
    purpose: 'High-speed photo/video backup & mobile synchronization',
    port: '2283',
    state: 'Running',
    category: 'Photo Backup'
  },
  {
    name: 'Uptime Kuma',
    purpose: 'Service latency monitoring & uptime dashboard',
    port: '3001',
    state: 'Running',
    category: 'Monitoring'
  },
  {
    name: 'Telegram Transcriber',
    purpose: 'Telegram bot + faster-whisper (tiny) audio transcription pipeline',
    port: 'internal',
    state: 'Running',
    category: 'AI & Automation'
  },
  {
    name: 'Radarr',
    purpose: 'Automated movie indexing & lifecycle management',
    port: '7878',
    state: 'Stopped intentionally',
    category: 'Media & Streaming'
  },
  {
    name: 'Prowlarr',
    purpose: 'Centralized torrent tracker & indexer manager',
    port: '9696 typically',
    state: 'Stopped intentionally',
    category: 'Media & Streaming'
  },
  {
    name: 'Transmission',
    purpose: 'Lightweight BitTorrent client (low-overhead qBittorrent alternative)',
    port: '9091 typically',
    state: 'Stopped intentionally',
    category: 'Media & Streaming'
  }
];

export const quadletExplanation = {
  whyQuadlet: [
    {
      title: 'No Monolithic Daemon',
      text: 'Docker relies on a centralized root-privileged dockerd daemon. If it panics, all workloads collapse. With Podman and Quadlet, every single container is an unprivileged systemd service that starts, restarts, and journals independently.'
    },
    {
      title: 'Declarative systemd Unit Files',
      text: 'Instead of docker-compose wrappers, Quadlet lets you declare .container unit files in ~/.config/containers/systemd/. systemd automatically generates native units with full dependency ordering (After=network-online.target).'
    },
    {
      title: 'Ultra-Lean Haswell Resource Footprint',
      text: 'On a 2014 13-inch MacBook Pro running Ubuntu Server, removing daemon virtualization bloat reduces idle memory pressure by ~30%, preserving CPU cycles for fast-whisper audio passes and media streaming.'
    },
    {
      title: 'Built-in Hardware UPS via MacBook Battery',
      text: 'Because the server is a laptop with an intact internal battery held at 80% charge ceiling, unexpected power blips or wall disconnects never corrupt the EXT4 storage arrays or interrupt active downloads.'
    }
  ]
};
