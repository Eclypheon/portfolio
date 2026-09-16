export interface KineticEndeavor {
  id: string;
  category: 'National / Elite Competition' | 'Acrobatic & Movement' | 'Adventure & Gravity' | 'The Surgical Crucible' | 'Recreation';
  title: string;
  roleOrLevel: string;
  period: string;
  description: string;
  skillsAndDemands: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  image?: string;
  imageOffsetY?: string;
  imagePosition?: string;
}

export interface SurgicalProcedure {
  joint: string;
  procedure: string;
  description: string;
}

export const surgicalProcedures: SurgicalProcedure[] = [
  {
    joint: 'Left Shoulder',
    procedure: 'Left Supraspinatus Tear Repair',
    description: 'Rotator cuff anchor re-fixation and tendon-to-bone reattachment under arthroscopy.'
  },
  {
    joint: 'Right Shoulder',
    procedure: 'Right Shoulder Arthroscopic Subacromial Decompression',
    description: 'Acromioplasty and subacromial bursectomy relieving chronic rotator cuff impingement.'
  },
  {
    joint: 'Cervical Spine',
    procedure: 'Disc Replacements at C5-C6 and C6-C7',
    description: 'Bilevel cervical artificial disc replacement (ADR) preserving spinal mobility.'
  },
  {
    joint: 'Right Knee',
    procedure: 'Right Knee Lateral & Medial Meniscus Repair',
    description: 'Bicompartmental meniscal suturing preserving physiological shock absorption.'
  },
  {
    joint: 'Patella Tendon',
    procedure: 'PRP Injections into the Patella Tendon',
    description: 'Platelet-Rich Plasma regenerative injections stimulating collagen matrix healing.'
  },
  {
    joint: 'Knee Cartilage',
    procedure: 'Autologous Matrix-Induced Chondrogenesis (AMIC)',
    description: 'Articular microfracture combined with collagen matrix scaffold for cartilage restoration.'
  }
];

export const kineticEndeavors: KineticEndeavor[] = [
  {
    id: 'canoeing',
    category: 'National / Elite Competition',
    title: 'ASEAN University Games — Canoeing',
    roleOrLevel: 'Team Singapore National Representative',
    period: 'Collegiate / Elite Era',
    description: 'Represented Singapore in sprint canoeing at the ASEAN University Games. Sprint canoeing is an uncompromising crucible of VO2 max output, core rotational torque, and hydro-dynamic blade efficiency where races are won or lost by fractions of a second over 200m, 500m, and 1000m courses.',
    skillsAndDemands: [
      'High-cadence pelvic rotation transmitting power through foot-brace to wing paddle',
      'Lactic acid tolerance under maximum anaerobic distress',
      'Micro-balance adjustments preserving hull waterline stability under cross-winds'
    ],
    metrics: [
      { label: 'Event Class', value: 'Sprint Canoe C1' },
      { label: 'Level', value: 'Regional' },
      { label: 'Training Load', value: '15-18 Sessions / Wk' }
    ],
    accentColor: '#10b981',
    image: './photos/Canoe1.jpg'
  },
  {
    id: 'dragonboat',
    category: 'National / Elite Competition',
    title: 'International & Regional Dragonboat Racing',
    roleOrLevel: 'Premier Division Competitor',
    period: 'Elite Regatta Era',
    description: 'Competed in multiple international and regional premier championships. Unlike solitary paddling, dragonboat is a biomechanical orchestra—20 paddlers generating simultaneous instantaneous peak thrust at 110+ strokes per minute with zero phase variance.',
    skillsAndDemands: [
      'Split-second visual and auditory synchronization with boat drummer and stroke-pair',
      'Explosive hip-hinge catch and aggressive reach forward into churned water',
      'Psychological resilience in high-intensity photo-finish heats'
    ],
    metrics: [
      { label: 'Regattas', value: 'CCWC 2014 & DBS Marina Regattas' },
      { label: 'Boat Speed', value: '18-22 km/h Peak' },
      { label: 'Stroke Rate', value: '100-115 SPM' }
    ],
    accentColor: '#06b6d4',
    image: './photos/dragonboat-2.jpg'
  },
  {
    id: 'physique',
    category: 'National / Elite Competition',
    title: 'Physique Championship',
    roleOrLevel: 'Physique Competitor',
    period: 'Competitive Era',
    description: 'Stepped onto the competitive stage as a physique athlete at Fitness Ironman 2017. Achieved sub-6% essential body fat through disciplined macro-partitioning, sodium/water manipulation, and grueling progressive overload programming (Candito 6-week, TSA Intermediate, PH3).',
    skillsAndDemands: [
      'Hypertrophy mechanics: mechanical tension, metabolic stress, and muscle damage optimization',
      'Peak week manipulation: glycogen depletion, supercompensation, and subcutaneous water evacuation',
      'Stage presence, mandatory posing biomechanics, and isometric endurance'
    ],
    metrics: [
      { label: 'Event', value: 'Fitness Ironman 2017' },
      { label: 'Role', value: 'Physique Competitor' },
      { label: 'Conditioning', value: '~5-6% Stage Leanness' }
    ],
    accentColor: '#eab308',
    image: './photos/physique-back.png'
  },
  {
    id: 'surgeries',
    category: 'The Surgical Crucible',
    title: 'Chronic Pain & Multiple Reconstructive Surgeries',
    roleOrLevel: 'Chronic Pain & Reconstructed Athlete',
    period: 'Cumulative Journey',
    description: 'A grueling trial of enduring chronic pain across multiple major orthopedic rebuilds spanning spinal disc replacements, rotator cuff anchors, and knee cartilage scaffolds. Rather than capitulating to permanent disability or sedentary life, each postoperative recovery was approached as an empirical biomechanical study—re-educating the nervous system, rebuilding connective tissue capacity, and adapting around scar tissue.',
    skillsAndDemands: [
      'Post-operative neuromuscular re-education and neuroplastic motor mapping',
      'Pain tolerance, stoic governance, and psychological endurance through immobility',
      'Compensatory kinetic chain alignment protecting reconstructed cervical, shoulder, and knee joints'
    ],
    metrics: [
      { label: 'Procedures', value: 'Multiple Rebuilds' },
      { label: 'Condition', value: 'Chronic Pain' },
      { label: 'Current State', value: 'In Recovery' }
    ],
    accentColor: '#ef4444',
    image: './photos/chronicpain.jpg'
  },
  {
    id: 'cheerleading',
    category: 'Acrobatic & Movement',
    title: 'Cheerleading & Partner Stunting',
    roleOrLevel: 'Stumbler',
    period: 'Current Discipline',
    description: 'Engaging in recreational cheerleading despite surgical history. Involves catching and tossing human flyers overhead in extended liberties, cupies, rewinds, and basket tosses with zero margin for error.',
    skillsAndDemands: [
      'Overhead lockout mechanics under dynamic moving live human loads',
      'Base-to-flyer tactile communication and trajectory prediction',
      'Emergency catch protocols ensuring absolute safety of the top person'
    ],
    metrics: [
      { label: 'Role', value: 'Stumbler' },
      { label: 'Team', value: '16-men Coed' },
      { label: 'Focus', value: 'Stunts & Tumbling' }
    ],
    accentColor: '#ec4899',
    image: './photos/cheerleading-1.png'
  },
  {
    id: 'aerials-acro',
    category: 'Acrobatic & Movement',
    title: 'Aerial Arts, Straps & Acroyoga',
    roleOrLevel: 'Multi-Apparatus Practitioner',
    period: 'Active Practice',
    description: 'Exploring human flight and suspension through partner Acroyoga, Aerial Straps, Lyra (Aerial Hoop), and Pole. Focuses on counterbalance mechanics, shoulder stability in full retraction/protraction, and artistic spatial geometry.',
    skillsAndDemands: [
      'Tendon conditioning for deadweight suspension on single straps',
      'Partner Acroyoga basing and flying transitions (washing machines, counter-balances)',
      'Spatial proprioception while inverted in 360-degree rotational axes'
    ],
    metrics: [
      { label: 'Apparatus', value: 'Straps, Hoop, Pole, Canes' },
      { label: 'Grip Strength', value: 'Unilateral Static Holds' },
      { label: 'Flexibility', value: 'Active Mobility' }
    ],
    accentColor: '#8b5cf6',
    image: './photos/acroyoga-1.png',
    imagePosition: 'center 85%'
  },
  {
    id: 'snowboard-ski-wake',
    category: 'Recreation',
    title: 'Snowboarding, Skiing & Wakeboarding',
    roleOrLevel: 'Occasional Snowboarder & Board Sports Enthusiast',
    period: 'Recreational Slopes & Cable',
    description: 'Recreational alpine descents across powder slopes paired with cable park wakeboarding. Requires dynamic edge pressure modulation, rapid reaction to changing snow packs, rotational momentum control, and deep eccentric leg absorption across variable surface conditions.',
    skillsAndDemands: [
      'Heel-and-toe edge pressure modulation across steep alpine gradients',
      'Dynamic center-of-mass adjustment absorbing chop and terrain variations',
      'Cable wakeboard pop mechanics, water surface tension release, and rotational stability'
    ],
    metrics: [
      { label: 'Alpine', value: 'Snowboard & Ski' },
      { label: 'Water', value: 'Wakeboarding' },
      { label: 'Focus', value: 'Recreation & Flow' }
    ],
    accentColor: '#38bdf8',
    image: './photos/Skiing2.png'
  },
  {
    id: 'skydiving',
    category: 'Recreation',
    title: 'Accelerated Freefall (AFF) & Skydiving',
    roleOrLevel: 'Terminal Velocity Body Flight & Canopy Piloting',
    period: 'Atmospheric Flight Progression',
    description: 'Trained in Accelerated Freefall (AFF) skydiving, learning stable belly flight, heading control, and forward tracking in 120 mph terminal velocity wind flow before deploying and piloting ram-air canopies down to high-precision landings.',
    skillsAndDemands: [
      'High-altitude atmospheric airflow stabilization at 120 mph',
      'Altitude awareness and rapid decision trees under terminal velocity',
      'Ram-air square canopy piloting, pattern turns, and flare timing'
    ],
    metrics: [
      { label: 'Progression', value: 'AFF Freefall' },
      { label: 'Airspeed', value: '120+ mph' },
      { label: 'Category', value: 'Extreme Aerial' }
    ],
    accentColor: '#3b82f6',
    image: './photos/Skydiving.png'
  },
  {
    id: 'bouldering',
    category: 'Recreation',
    title: 'Bouldering & Kinetic Problem Solving',
    roleOrLevel: 'V5 Climber',
    period: 'Active Practice',
    description: 'Approaching bouldering as dynamic spatial geometry and isometric power endurance. Translating finger pulley tension, heel-hooks, and high-tension core compression into solving complex multi-move movement sequences across steep overhangs and slabs.',
    skillsAndDemands: [
      'Finger crimp, pocket, and open-hand tendon conditioning',
      'Dynamic dead-points, coordination dynos, and momentum redirection',
      'High-tension core engagement, toe-hooks, and compression mantels'
    ],
    metrics: [
      { label: 'Terrain', value: 'Overhangs & Slabs' },
      { label: 'Grip Style', value: 'Crimp & Open-Hand' },
      { label: 'Discipline', value: 'Kinetic Logic' }
    ],
    accentColor: '#f59e0b',
    image: './photos/Bouldering.png'
  },
  {
    id: 'hiking',
    category: 'Recreation',
    title: 'Wilderness Trekking & Hiking',
    roleOrLevel: 'Long-Distance & Rugged Elevation Hiker',
    period: 'Expedition Pursuits',
    description: 'Sustained full-day wilderness backpacking, navigating elevation gains, rugged scree trails, and variable weather. Tests aerobic zone-2 thresholds, load-bearing spinal stamina, and mental perseverance across remote natural landscapes.',
    skillsAndDemands: [
      'Sustained cardiopulmonary zone-2 endurance with heavy expedition rucksack',
      'Trekking pole biomechanics offloading joint impacts on steep descents',
      'Topographical route assessment, elevation pace budgeting, and environmental navigation'
    ],
    metrics: [
      { label: 'Environment', value: 'Alpine & Scree' },
      { label: 'Pacing', value: 'Multi-Hour Trekking' },
      { label: 'Load Bearing', value: 'Heavy Rucksack' }
    ],
    accentColor: '#10b981',
    image: './photos/hiking1.jpg',
    imageOffsetY: '-100px'
  }
];
