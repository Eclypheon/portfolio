export interface StackService {
  name: string;
  purpose: string;
  port: string;
  state: 'Running' | 'Installed' | 'Stopped intentionally';
  category: 'Media & Streaming' | 'Photo Backup' | 'Network & Security' | 'AI & Automation' | 'Monitoring';
}

export const homelabSpecs = {
  hardware: 'Repurposed Apple MacBook Pro (Retina, 13-inch, Mid 2014)',
  os: 'Ubuntu Server (Minimal headless kernel, cgroups v2 enabled)',
  companionHardware: 'Apple MacBook Air (2025, Apple M4 Silicon, 24 GB Unified RAM)',
  companionRole: 'Local LM Studio inference host running custom Qwen3.5 9B with unified RAM',
  audioPipeline: 'Local Python scripts running faster-whisper (tiny model) on Ubuntu Server',
  storage: 'Internal SSD + Media EXT4 (3.6 TiB used) + Media Extra (4.5 TiB free)',
  fanMetrics: '2,499 RPM quiet acoustic profile @ 55°C package temp',
  batteryUps: '80% internal battery serving as zero-cost hardware UPS against power dropouts',
  orchestration: 'Podman + Quadlet (.container declarative systemd service generator)'
};

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

export const alienlabDashboard = {
  title: 'alienlab // Live Ubuntu Server Telemetry',
  subtitle: 'Real screenshots captured directly from the homelab web interface',
  overviewImage: 'alienlab-overview.png',
  mediaImage: 'alienlab-media.png',
  liveHighlights: [
    { label: 'MacBook Disk', value: '44%', detail: '100 GiB used · 116 GiB free' },
    { label: 'Media EXT4', value: '66%', detail: '3.6 TiB used · 1.6 TiB free' },
    { label: 'Media Extra', value: '11%', detail: '627 GiB used · 4.5 TiB free' },
    { label: 'Fan Speed', value: '2,499 RPM', detail: 'Right-side fan · Quiet' },
    { label: 'CPU Temperature', value: '55°C', detail: 'Package · Normal' },
    { label: 'Internal Battery', value: '80%', detail: 'Built-in hardware UPS' },
    { label: 'Movies on Drive', value: '193', detail: 'Jellyfin indexed' },
    { label: 'TV Shows', value: '20', detail: 'Tracearr tracked' },
    { label: 'Anime Library', value: '47', detail: 'Shoko managed' },
    { label: 'Immich Assets', value: '22,618', detail: '12,343 photos · 10,275 videos' }
  ]
};

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
      text: 'Because the server is a laptop with an intact internal battery (holding 80% charge), unexpected power blips or wall disconnects never corrupt the EXT4 storage arrays or interrupt active downloads.'
    }
  ]
};
