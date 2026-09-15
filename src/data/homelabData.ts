export interface HomelabService {
  name: string;
  category: 'Infrastructure' | 'AI / Inference' | 'Automation' | 'Media & Networking';
  description: string;
  configType: 'Quadlet / Podman' | 'systemd daemon' | 'Mesh VPN' | 'Standalone Engine';
  status: 'Online' | 'Active';
  details: string[];
}

export const homelabSpecs = {
  hardware: 'Repurposed Apple MacBook Pro (Retina, 15-inch, Mid 2014)',
  processor: 'Quad-Core Intel Core i7 (Haswell)',
  memory: '16 GB 1600 MHz DDR3L (Optimized allocation)',
  storage: 'High-speed NVMe PCIe SSD + External Attached Storage Array',
  coolingMod: 'Repasted thermal paste, custom SMC fan curve via CLI, lid-closed clamshell cooling',
  os: 'Headless Linux / Minimal Kernel with cgroups v2 enabled',
  orchestration: 'Podman + Quadlet (Systemd-native rootless container lifecycle)'
};

export const homelabServices: HomelabService[] = [
  {
    name: 'Podman + Quadlet Daemon Stack',
    category: 'Infrastructure',
    description: 'Declarative systemd-integrated container management replacing heavy Docker Desktop. Uses declarative .container unit files that generate native systemd services on boot.',
    configType: 'Quadlet / Podman',
    status: 'Online',
    details: [
      'Zero background daemon overhead compared to Docker Engine',
      'Native rootless user namespaces (subuid/subgid) for bulletproof container isolation',
      'Automatic service restart, health checking, and journald logging out of the box',
      'Fine-grained memory and CPU quotas assigned via systemd slice hierarchies'
    ]
  },
  {
    name: 'Local LLM Inference Engine',
    category: 'AI / Inference',
    description: 'Self-hosted OpenAI-compatible inference server serving quantized models with zero latency and complete data sovereignty.',
    configType: 'Standalone Engine',
    status: 'Online',
    details: [
      'LM Studio / llama.cpp backend binding to local port :1234',
      'Active models: Qwen3-4B-Instruct, Llama 3.2 1B, quantized for optimal Haswell AVX2 throughput',
      'Context windows optimized for script synthesis, summarization, and cognitive offloading',
      'Strict local routing—zero prompt telemetry dispatched to third-party endpoints'
    ]
  },
  {
    name: 'Whisper & Kokoro Speech Pipeline',
    category: 'AI / Inference',
    description: 'Automated bidirectional audio intelligence converting voice messages into actionable structured text and synthetic audio responses.',
    configType: 'systemd daemon',
    status: 'Online',
    details: [
      'OpenAI Whisper (Large-v3-Turbo & Medium) for near-instant multilingual audio transcription',
      'Kokoro 82M & F5-TTS lightweight neural synthesis engines for naturalistic vocal dispatch',
      'audiowatch.py background daemon monitoring inbound audio streams',
      'Integrated directly with personal messaging bots for hands-free voice task capture'
    ]
  },
  {
    name: 'n8n Workflow Automation Matrix',
    category: 'Automation',
    description: 'Self-hosted node-based automation orchestrator tying together home server telemetry, database backups, alert dispatch, and AI pipelines.',
    configType: 'Quadlet / Podman',
    status: 'Online',
    details: [
      'Runs in lightweight isolated Quadlet container mapped to internal network bridge',
      'Automated nightly backup routines archiving databases and configs to encrypted cold storage',
      'Webhook listener handling inbound triggers from mobile and external web services',
      'Seamless multi-step AI routing: trigger -> transcribe -> LLM summarize -> Telegram alert'
    ]
  },
  {
    name: 'Custom Telegram Bot Control Plane',
    category: 'Automation',
    description: 'Python asynchronous bot serving as a mobile command terminal for home server control, remote media triggers, and quick notes capture.',
    configType: 'systemd daemon',
    status: 'Online',
    details: [
      'Secure authorized-user whitelist filtering unauthorized interaction attempts',
      'Executes remote maintenance tasks, disk monitoring checks, and server reboot sequences',
      'Instant voice memo processing via local Whisper pipeline',
      'Dispatches push alerts when automated n8n health monitors report service anomalies'
    ]
  },
  {
    name: 'Tailscale Mesh & Media Nexus',
    category: 'Media & Networking',
    description: 'Encrypted WireGuard mesh network connecting the home server, mobile devices, and friends without exposing open inbound router ports.',
    configType: 'Mesh VPN',
    status: 'Online',
    details: [
      'Peer-to-peer WireGuard mesh VPN enabling remote access across NAT without port forwarding',
      'Stremio media hub integrated with Real-Debrid and qBittorrent caching stack',
      'Friend streaming endpoints authenticated via granular Tailscale ACL tag rules',
      'Subnet routing providing full access to home network resources while traveling abroad'
    ]
  }
];

export const quadletExplanation = {
  whyQuadlet: [
    {
      title: 'No Monolithic Daemon',
      text: 'Docker relies on a central root-privileged dockerd daemon. If it crashes, all containers halt. With Podman and Quadlet, each container runs as an independent systemd process under an unprivileged user.'
    },
    {
      title: 'Declarative systemd Unit Files',
      text: 'Instead of unwieldy docker-compose scripts or manual docker run commands, Quadlet lets you write simple .container files in ~/.config/containers/systemd/. systemd automatically translates these into native services with full dependency management (After=network-online.target).'
    },
    {
      title: 'Hardware Resource Efficiency',
      text: 'On a 2014 MacBook Pro with limited thermal headroom and 16GB RAM, cutting container management overhead by ~25-30% compared to heavy VM/daemon abstractions is the difference between sluggish performance and silent, stable 24/7 operation.'
    },
    {
      title: 'Journald & System Tooling',
      text: 'Container logs route directly into systemd journald (`journalctl -u mycontainer.service -f`). Restart policies (`Restart=always`), resource limits (`MemoryMax=2G`), and cgroup controls are first-class citizens.'
    }
  ]
};
