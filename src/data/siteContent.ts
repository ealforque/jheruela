export interface NavItem {
  label: string
  to: string
}

export interface PageLink {
  title: string
  description: string
  to: string
}

export interface StatItem {
  label: string
  value: number
  suffix?: string
  description: string
}

export interface ExpertiseGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  position: string
  company: string
  vesselType: string
  dates: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export interface VesselItem {
  vesselType: string
  image: string
  engineManufacturer: string
  engineModel: string
  generatorConfiguration: string
  cargoCapacity: string
  tradingRoutes: string
  flagState: string
  classificationSociety: string
}

export interface ProjectItem {
  title: string
  challenge: string
  solution: string
  implementation: string
  impact: string
  results: string
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
}

export const navItems: NavItem[] = [
  { label: 'Overview', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Operational Expertise', to: '/operations' },
  { label: 'Engineering Projects', to: '/projects' },
  { label: 'Contacts', to: '/contact' },
]

export const pageLinks: PageLink[] = [
  {
    title: 'Technical Command Center',
    description: 'Dive into fleet reliability systems, compliance frameworks, and engineering leadership depth.',
    to: '/expertise',
  },
  {
    title: 'Operational Impact Story',
    description: 'Explore timeline, vessel portfolio, and project outcomes that improved uptime and efficiency.',
    to: '/operations',
  },
  {
    title: 'Professional Experience Deck',
    description: 'Navigate the full leadership timeline across onboard and shore-side engineering roles.',
    to: '/experience',
  },
  {
    title: 'Vessel Experience Atlas',
    description: 'Review vessel classes, routes, and machinery ecosystems managed across global operations.',
    to: '/vessels',
  },
  {
    title: 'Engineering Projects Portfolio',
    description: 'See project challenges, execution strategies, and business-impact results in one place.',
    to: '/projects',
  },
  {
    title: 'Global Connection Deck',
    description: 'Open a direct channel for strategic maritime opportunities and executive collaboration.',
    to: '/contact',
  },
]

export const summaryHighlights = [
  'Fleet Technical Management',
  'Marine Engineering',
  'Dry Dock Execution',
  'Asset Reliability',
  'Engineering Leadership',
  'Preventive Maintenance',
  'Operational Excellence',
  'Budget Management',
  'Regulatory Compliance',
  'Technical Innovation',
]

export const stats: StatItem[] = [
  { label: 'Years Experience', value: 20, suffix: '+', description: 'Across ocean-going commercial fleets' },
  { label: 'Dry Dock Projects', value: 38, suffix: '+', description: 'Delivered on budget and schedule' },
  { label: 'Engineering Teams Led', value: 120, suffix: '+', description: 'Mentored multinational crews' },
  { label: 'Vessels Managed', value: 65, suffix: '+', description: 'From tankers to container fleets' },
  { label: 'Technical Budgets Managed', value: 120, suffix: 'M USD', description: 'Lifecycle planning and capex control' },
  { label: 'Major Engineering Incidents', value: 0, description: 'Zero severe incidents under direct leadership' },
  { label: 'Global Trading Routes', value: 40, suffix: '+', description: 'Atlantic, Pacific, Middle East, and APAC routes' },
  { label: 'Fleet Availability', value: 99.2, suffix: '%', description: 'Sustained reliability performance' },
]

export const expertise: ExpertiseGroup[] = [
  {
    title: 'Marine Engineering',
    items: [
      'Main Propulsion Systems',
      'Auxiliary Machinery',
      'Diesel Engines',
      'Boilers',
      'Power Generation',
      'Marine Automation',
      'Electrical Systems',
      'Hydraulic Systems',
      'Fuel Systems',
      'HVAC',
      'Pumps',
      'Compressors',
    ],
  },
  {
    title: 'Technical Superintendent',
    items: [
      'Fleet Technical Management',
      'Planned Maintenance Systems',
      'Dry Dock Planning',
      'Shipyard Supervision',
      'Technical Audits',
      'Budget Management',
      'Procurement',
      'Vendor Management',
      'Fleet Reliability',
      'Asset Lifecycle Management',
      'Technical Reporting',
      'Vessel Inspections',
    ],
  },
  {
    title: 'Compliance',
    items: [
      'SOLAS',
      'MARPOL',
      'ISM Code',
      'ISPS Code',
      'STCW',
      'Flag State',
      'Port State Control',
      'Classification Society',
      'EEXI',
      'CII',
      'Environmental Compliance',
    ],
  },
  {
    title: 'Engineering Excellence',
    items: [
      'Reliability Engineering',
      'Predictive Maintenance',
      'Root Cause Analysis',
      'Fuel Optimization',
      'Machinery Diagnostics',
      'Condition Monitoring',
      'Performance Analysis',
      'Continuous Improvement',
    ],
  },
  {
    title: 'Leadership',
    items: [
      'Crew Development',
      'Technical Leadership',
      'Mentoring',
      'Stakeholder Management',
      'Crisis Management',
      'Strategic Planning',
      'Executive Decision Making',
      'Cross-functional Collaboration',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    position: 'Technical Superintendent',
    company: 'Oceanic Fleet Management',
    vesselType: 'Container & Bulk Fleet',
    dates: '2020 - Present',
    responsibilities: [
      'Lead technical management for multi-vessel fleet operations',
      'Oversee dry dock planning, execution, and post-dock optimization',
      'Direct reliability, compliance, and maintenance performance strategies',
    ],
    achievements: [
      'Reduced off-hire days by 28% through predictive maintenance rollout',
      'Delivered 12 dry docks with zero safety incidents',
      'Improved fuel efficiency by 9% through machinery tuning programs',
    ],
    technologies: ['CMMS', 'Power BI', 'SAP', 'Condition Monitoring Systems'],
  },
  {
    position: 'Chief Engineer',
    company: 'Global Maritime Lines',
    vesselType: 'LNG / LPG / Tanker Fleet',
    dates: '2012 - 2020',
    responsibilities: [
      'Managed all engine room operations and machinery performance',
      'Led engineering teams during critical overhauls and voyages',
      'Ensured full compliance with flag, class, and statutory requirements',
    ],
    achievements: [
      'Achieved zero major engineering incidents over 8 years',
      'Optimized spare-part strategy reducing annual costs by 17%',
      'Led successful main engine retrofit with measurable efficiency gains',
    ],
    technologies: ['PMS', 'Engine Diagnostics', 'Oracle ERP', 'AutoCAD'],
  },
  {
    position: 'Second Engineer',
    company: 'Northern Shipping Group',
    vesselType: 'General Cargo & Ro-Ro',
    dates: '2006 - 2012',
    responsibilities: [
      'Coordinated daily maintenance planning and execution',
      'Supported machinery troubleshooting and failure prevention',
      'Prepared technical documentation for audits and inspections',
    ],
    achievements: [
      'Improved maintenance completion rates from 86% to 98%',
      'Standardized watchkeeping diagnostics reducing emergency call-outs',
      'Trained junior engineers on preventive maintenance best practices',
    ],
    technologies: ['MS Project', 'Technical Reporting Systems', 'Planned Maintenance'],
  },
]

export const vessels: VesselItem[] = [
  {
    vesselType: 'Bulk Carrier',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'MAN B&W',
    engineModel: '6S60ME-C',
    generatorConfiguration: '3 x 900 kW',
    cargoCapacity: '82,000 DWT',
    tradingRoutes: 'Pacific Basin, Australia - China',
    flagState: 'Marshall Islands',
    classificationSociety: 'DNV',
  },
  {
    vesselType: 'Container Ship',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Wartsila',
    engineModel: 'RT-flex96C',
    generatorConfiguration: '4 x 1,200 kW',
    cargoCapacity: '8,500 TEU',
    tradingRoutes: 'Asia - Europe',
    flagState: 'Singapore',
    classificationSociety: 'Lloyds Register',
  },
  {
    vesselType: 'Oil Tanker',
    image: 'https://images.unsplash.com/photo-1580571483158-c4ec53e48dc5?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Hyundai HiMSEN',
    engineModel: '8H32/40',
    generatorConfiguration: '3 x 1,000 kW',
    cargoCapacity: '110,000 DWT',
    tradingRoutes: 'Middle East - Europe',
    flagState: 'Liberia',
    classificationSociety: 'ABS',
  },
  {
    vesselType: 'Chemical Tanker',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'MAN Energy Solutions',
    engineModel: '7S50MC-C',
    generatorConfiguration: '3 x 850 kW',
    cargoCapacity: '46,000 DWT',
    tradingRoutes: 'North Sea - Mediterranean',
    flagState: 'Panama',
    classificationSociety: 'BV',
  },
  {
    vesselType: 'LNG Carrier',
    image: 'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Kawasaki',
    engineModel: 'Steam Turbine SGT-600',
    generatorConfiguration: '4 x 1,600 kW',
    cargoCapacity: '174,000 m3',
    tradingRoutes: 'Qatar - East Asia',
    flagState: 'Bermuda',
    classificationSociety: 'NK',
  },
  {
    vesselType: 'LPG Carrier',
    image: 'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Mitsubishi',
    engineModel: 'UEC52LA',
    generatorConfiguration: '3 x 1,000 kW',
    cargoCapacity: '83,000 m3',
    tradingRoutes: 'US Gulf - Europe',
    flagState: 'Malta',
    classificationSociety: 'RINA',
  },
  {
    vesselType: 'Offshore Support Vessel',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Caterpillar',
    engineModel: '3516C',
    generatorConfiguration: '4 x 1,500 kW',
    cargoCapacity: '1,800 m2 deck load',
    tradingRoutes: 'North Sea Offshore Fields',
    flagState: 'Norway',
    classificationSociety: 'DNV',
  },
  {
    vesselType: 'Ro-Ro Vessel',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'MAN',
    engineModel: '9L58/64',
    generatorConfiguration: '4 x 1,100 kW',
    cargoCapacity: '6,500 CEU',
    tradingRoutes: 'Northern Europe',
    flagState: 'Denmark',
    classificationSociety: 'DNV',
  },
  {
    vesselType: 'General Cargo',
    image: 'https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Sulzer',
    engineModel: '6RTA48T',
    generatorConfiguration: '3 x 720 kW',
    cargoCapacity: '24,000 DWT',
    tradingRoutes: 'Mediterranean - West Africa',
    flagState: 'Cyprus',
    classificationSociety: 'ClassNK',
  },
  {
    vesselType: 'Heavy Lift Vessel',
    image: 'https://images.unsplash.com/photo-1526156374394-3ce6f9a8f4f8?auto=format&fit=crop&w=1200&q=80',
    engineManufacturer: 'Wartsila',
    engineModel: '8L46F',
    generatorConfiguration: '4 x 2,000 kW',
    cargoCapacity: '1,400 t dual crane',
    tradingRoutes: 'Global Project Cargo',
    flagState: 'Netherlands',
    classificationSociety: 'Lloyds Register',
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Main Engine Overhaul Program',
    challenge: 'Recurring performance degradation across aging propulsion systems.',
    solution: 'Introduced class-aligned overhaul strategy based on runtime analytics.',
    implementation:
      'Coordinated shipyard windows, spare logistics, and OEM supervision across 8 vessels.',
    impact: 'Improved propulsion reliability and reduced unscheduled stoppages by 34%.',
    results: 'Payback achieved in 14 months with measurable fuel savings and uptime gains.',
  },
  {
    title: 'Dry Dock Execution Framework',
    challenge: 'Cost overruns and timeline drift across historical docking projects.',
    solution: 'Built a stage-gated dry dock governance model with risk forecasting.',
    implementation:
      'Integrated procurement, class, and owner workflows into one delivery control room.',
    impact: 'Average docking duration shortened by 11 days and cost variance reduced to <3%.',
    results: '12 consecutive dry docks delivered with zero LTIs and no major rework.',
  },
  {
    title: 'Fleet Fuel Optimization',
    challenge: 'Fuel burn volatility caused by inconsistent engine tuning and voyage conditions.',
    solution: 'Deployed data-led machinery tuning plus route-aware operating guidance.',
    implementation:
      'Combined daily noon reports, sensor diagnostics, and chief engineer feedback loops.',
    impact: 'Delivered 9% average fuel reduction across mixed vessel classes.',
    results: 'Annual savings exceeded 8.4M USD and lowered emission intensity profile.',
  },
  {
    title: 'Automation and Reliability Upgrades',
    challenge: 'Alarm fatigue and delayed fault isolation in engine control systems.',
    solution: 'Modernized automation logic and prioritized alarm architecture.',
    implementation: 'Executed phased retrofit with crew training and commissioning playbooks.',
    impact: 'Critical fault response time improved by 41%.',
    results: 'Higher operational resilience and better audit outcomes from class inspections.',
  },
]

export const certifications = [
  'Chief Engineer Unlimited License',
  'STCW',
  'Engine Room Resource Management',
  'ISM',
  'ISPS',
  'MARPOL',
  'SOLAS',
  'Advanced Fire Fighting',
  'Medical First Aid',
  'Leadership & Management',
]

export const digitalSkills = [
  'Planned Maintenance Systems',
  'CMMS',
  'Fleet Management Software',
  'ERP Systems',
  'SAP',
  'Oracle',
  'Microsoft Project',
  'Microsoft 365',
  'Power BI',
  'AutoCAD',
  'Technical Reporting Systems',
]

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'John transforms engineering strategy into dependable commercial performance. His calm command during critical operations sets the benchmark for technical leadership.',
    author: 'Fleet Manager, Global Container Operator',
    role: 'Fleet Operations',
  },
  {
    quote:
      'Every dry dock under John has been structured, disciplined, and flawlessly executed. He combines technical depth with executive-level communication.',
    author: 'Technical Director, Marine Management Company',
    role: 'Technical Leadership',
  },
  {
    quote:
      'From onboard reliability to shore-side governance, John consistently elevates standards and builds engineering teams that perform under pressure.',
    author: 'Captain, LNG Fleet',
    role: 'Ship Command',
  },
  {
    quote:
      'His fuel efficiency program delivered meaningful savings while improving machinery integrity. John is a rare blend of strategist and engineer.',
    author: 'Ship Owner Representative',
    role: 'Commercial Stakeholder',
  },
]
