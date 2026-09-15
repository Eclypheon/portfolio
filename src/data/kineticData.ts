export interface KineticEndeavor {
  id: string;
  category: 'National / Elite Competition' | 'Acrobatic & Movement' | 'Adventure & Gravity' | 'The Surgical Crucible';
  title: string;
  roleOrLevel: string;
  period: string;
  description: string;
  skillsAndDemands: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

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
      { label: 'Event Class', value: 'Sprint Kayak / Canoe' },
      { label: 'Level', value: 'ASEAN Games Team SG' },
      { label: 'Training Load', value: '10-12 Sessions / Wk' }
    ],
    accentColor: '#10b981'
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
      { label: 'Regattas', value: 'Regional & International' },
      { label: 'Boat Speed', value: '18-22 km/h Peak' },
      { label: 'Stroke Rate', value: '100-115 SPM' }
    ],
    accentColor: '#06b6d4'
  },
  {
    id: 'physique',
    category: 'National / Elite Competition',
    title: 'Competitive Physique Championship',
    roleOrLevel: 'Medalled Physique Athlete',
    period: 'Competitive Era',
    description: 'Stepped onto the competitive physique stage and earned a podium medal. Achieved sub-6% essential body fat through disciplined macro-partitioning, sodium/water manipulation, and grueling progressive overload programming (Candito 6-week, TSA Intermediate, PH3).',
    skillsAndDemands: [
      'Hypertrophy mechanics: mechanical tension, metabolic stress, and muscle damage optimization',
      'Peak week manipulation: glycogen depletion, supercompensation, and subcutaneous water evacuation',
      'Stage presence, mandatory posing biomechanics, and isometric endurance'
    ],
    metrics: [
      { label: 'Result', value: 'Podium Medallist' },
      { label: 'Conditioning', value: '~5-6% Stage Leanness' },
      { label: 'Discipline', value: 'Powerbuilding / Hypertrophy' }
    ],
    accentColor: '#eab308'
  },
  {
    id: 'surgeries',
    category: 'The Surgical Crucible',
    title: 'The Resilience Matrix: 5 Orthopedic Surgeries',
    roleOrLevel: 'Survivor & Reconstructed Athlete',
    period: 'Cumulative Journey',
    description: 'A harrowing physical trial spanning five major surgeries across multiple joints and soft-tissue structures. Rather than capitulating to permanent disability or sedentary life, each postoperative recovery was approached as an empirical biomechanical study—re-educating the nervous system, rebuilding connective tissue capacity, and adapting around scar tissue.',
    skillsAndDemands: [
      'Post-operative neuromuscular re-education and neuroplastic motor mapping',
      'Pain tolerance and psychological endurance through months of non-weightbearing immobility',
      'Compensatory kinetic chain alignment to protect reconstructed joints from premature osteoarthritis'
    ],
    metrics: [
      { label: 'Major Surgeries', value: '5 Procedures' },
      { label: 'Rehab Approach', value: 'Deliberate Overload' },
      { label: 'Current State', value: 'Active Acrobatic Performer' }
    ],
    accentColor: '#ef4444'
  },
  {
    id: 'cheerleading',
    category: 'Acrobatic & Movement',
    title: 'Cheerleading & Partner Stunting',
    roleOrLevel: 'Recreational Stunt Base & Acrobatic Athlete',
    period: 'Current Discipline',
    description: 'Engaging in recreational cheerleading despite surgical history. Involves catching and tossing human flyers overhead in extended liberties, cups, rewinds, and basket tosses with zero margin for error.',
    skillsAndDemands: [
      'Overhead lockout mechanics under dynamic moving live human loads',
      'Base-to-flyer tactile communication and trajectory prediction',
      'Emergency catch protocols ensuring absolute safety of the top person'
    ],
    metrics: [
      { label: 'Role', value: 'Base / Stunt Specialist' },
      { label: 'Stunts', value: 'Extended Libs, Tosses, Pyramids' },
      { label: 'Focus', value: 'Biomechanical Safety & Power' }
    ],
    accentColor: '#ec4899'
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
      { label: 'Apparatuses', value: 'Straps, Hoop, Pole, Acro' },
      { label: 'Grip Strength', value: 'Unilateral Static Holds' },
      { label: 'Flexibility', value: 'Active Mobility & Dynamic Stretch' }
    ],
    accentColor: '#8b5cf6'
  },
  {
    id: 'gravity-depth',
    category: 'Adventure & Gravity',
    title: 'PADI Advanced Diver & Skydiving AFF',
    roleOrLevel: 'Sub-aquatic & Atmospheric Explorer',
    period: 'Adventure Disciplines',
    description: 'Pursuing extreme environments: certified PADI Advanced Open Water Diver exploring deep reef walls, drift currents, and night dives; alongside Accelerated Freefall (AFF) skydiving training, learning terminal-velocity body flight at 120 mph.',
    skillsAndDemands: [
      'Atmospheric & hydrostatic pressure physics (Boyle\'s and Henry\'s Gas Laws)',
      'Sensory deprivation and nitrogen narcosis management at 30m+ depth',
      'High-altitude terminal velocity freefall stability and canopy piloting'
    ],
    metrics: [
      { label: 'Diving Level', value: 'PADI Advanced Open Water' },
      { label: 'Skydiving', value: 'AFF Freefall Progression' },
      { label: 'Extreme Arts', value: 'Bouldering & Wakeboarding' }
    ],
    accentColor: '#3b82f6'
  }
];
