export interface CareerMilestone {
  organization: string;
  role: string;
  badge: string;
  period: string;
  summary: string;
  skills: string[];
  image?: string;
  imageOffsetY?: string;
  highlights: { title: string; detail: string }[];
}

export const careerTrajectory: CareerMilestone[] = [
  {
    organization: 'HTX (Home Team Science and Technology Agency)',
    role: 'Enterprise Geospatial Systems Lead',
    badge: 'Public Safety & Homeland Security',
    period: 'Present Occupation',
    summary: 'Driving next-generation spatial intelligence and command platforms across Singapore’s national public safety infrastructure.',
    image: './photos/htx.jpg',
    skills: [
      'Esri ArcGIS Suite (Pro / Enterprise / Portal)',
      'MSSQL & Spatial SQL',
      'Python (ArcPy / GeoPandas)',
      'C# (.NET)',
      'React & Angular Frameworks',
      'MS 365 Suite & Power Automate',
      'Enterprise GIS (E-GIS)',
      'Spatial Telemetry & Geo-Analytics'
    ],
    highlights: [
      {
        title: 'SPF Enterprise Geospatial Information System (E-GIS)',
        detail: 'Spearheaded mission-critical geospatial initiatives empowering the Singapore Police Force with real-time operational mapping, spatial querying, and incident intelligence.'
      },
      {
        title: 'Ministry of Home Affairs (MHA) E-GIS',
        detail: 'Scaled geospatial capabilities enterprise-wide across MHA departments, integrating disparate spatial data layers into a unified command and analytics backbone.'
      }
    ]
  },
  {
    organization: 'ST Engineering',
    role: 'Deputy Project Manager // Defense & Operations Systems',
    badge: 'Mission-Critical C3 & Field Operations',
    period: 'Post-Military Transition',
    summary: 'Leveraged deep military command and operational experience to deliver complex emergency response and wilderness monitoring systems.',
    image: './photos/stengineering.jpg',
    skills: [
      'JIRA & Confluence',
      'Microsoft Project',
      'Agile (Scrum) & Waterfall Frameworks',
      'C3 Dispatch & CAD Systems',
      'Video Management Systems (VMS)',
      'PMP® Governance & Risk Management',
      'Vendor & Stakeholder Management',
      'System Integration & Acceptance Testing (UAT)'
    ],
    highlights: [
      {
        title: 'ACES (Advanced C3 Emergency System) — SCDF',
        detail: 'Served as Deputy PM for Singapore Civil Defence Force’s mission-critical command system—unifying real-time GIS, Video Management Systems (VMS), Computer-Aided Dispatch (CAD), and high-frequency telemetry.'
      },
      {
        title: 'IOMS (Integrated Operations Monitoring System) — OBS',
        detail: 'Spearheaded end-to-end development of Outward Bound Singapore’s operations platform: streamlined participant onboarding, live activity tracking, and dynamic resource allocation.'
      }
    ]
  },
  {
    organization: 'Singapore Armed Forces (SAF)',
    role: 'Infantry Officer (Rank: Captain / CPT)',
    badge: '7 Years Active Service',
    period: '4-Year Post-Graduation Bond',
    summary: '7-year career leading combat units, commanding regional camp security, and pioneering curriculum for Singapore’s new military branch.',
    skills: [
      'C4I Systems & Tactical Comms',
      'CCNA & Network Routing Fundamentals',
      'Basic Pentesting & Threat Modeling',
      'Military Intelligence (MI) Doctrine',
      'DIS & OCS Curriculum Design',
      'Operational Staff Planning & Admin Orders',
      'Regional Base Defense Protocols',
      'Tactical Unit Command & Crisis Triage'
    ],
    image: './photos/military-instructor.jpg',
    imageOffsetY: '-50px',
    highlights: [
      {
        title: 'Inaugural DIS & C4I Training Wing Formation',
        detail: 'Forged the pen picture and comprehensive curriculum for the inaugural batch of Digital and Intelligence Service (DIS) Officers. Served as stand-in Wing Commander, establishing culture and doctrine for the new C4I training wing housing both Military Intelligence (MI) and DIS cadets.'
      },
      {
        title: 'Cadet Shadow Initiative — Officer Cadet School (OCS)',
        detail: 'Conceived and instituted a school-wide training framework having cadets shadow and execute daily administrative instructions and logistical planning—transforming skilled warfighters into fully competent operational staff officers.'
      },
      {
        title: 'Regional Force Commander (Sembawang Region)',
        detail: 'Appointed regional commander overseeing physical base defense, guardroom protocols, and security integrity across military installations including Khatib Camp, Dieppe Barracks, and Sembawang Camp.'
      },
      {
        title: 'Platoon Commander & Cadet Instructor',
        detail: 'Commanded infantry platoons through rigorous tactical deployments, followed by training and mentoring future officers at OCS.'
      }
    ]
  }
];
