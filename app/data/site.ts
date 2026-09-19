import type { Component } from 'vue'
import { Sprout, Cog, Coffee, Satellite, Handshake, Ship, Store, Scale, TreePine, ShieldCheck, HeartHandshake, HandCoins, BookOpen, BadgeCheck, Leaf, Building2, GraduationCap, Truck, Globe, FlaskConical } from '@lucide/vue'

export interface Activity {
  number: string
  id: string
  title: string
  category: 'farming' | 'processing' | 'value-addition' | 'traceability' | 'export' | 'trading' | 'domestic'
  shortDesc: string
  fullDesc: string
  features: string[]
  icon: Component
  image: string
}

export interface Project {
  id: string
  title: string
  category: 'Quality' | 'Empowerment' | 'Climate' | 'Traceability'
  summary: string
  metric: string
  metricLabel: string
  image: string
  tags: string[]
}

export interface FaqItem {
  question: string
  answer: string
  category: string
}

export interface ProductItem {
  id: string
  name: string
  type: 'Arabica' | 'Robusta' | 'Value-Added'
  grade: string
  region: string
  altitude: string
  process: string
  screen: string
  cupProfile: string[]
  description: string
  image?: string
}

export const siteConfig = {
  name: 'AFRICOFF Industries (U) Limited',
  tagline: 'Rooted in Quality. Growing a Sustainable Future.',
  shortBio: 'Leading Ugandan agro-processing enterprise connecting smallholder coffee growers with state-of-the-art processing, EUDR-compliant traceability, and premium global markets.',
  email: 'info@africoffindustries.com',
  phone: '+256 784 851 072',
  phoneAlt: '+256 392 964836',
  whatsapp: '+256784851072',
  // TODO: replace with the company's real WeChat ID (6-20 chars: letters, numbers, - or _).
  wechat: 'AFRICOFF-UG',
  address: '52 Kampala Road, King Fahad Plaza, 3rd Floor · P.O Box 178863, Kampala, Uganda',
  hours: 'Mon - Fri: 8:00 AM - 5:00 PM EAT',
}

export const stats = [
  { num: '5,000+', label: 'Smallholder Farmers Supported', desc: 'Active Arabica & Natural Uganda Robusta (NUR) out-growers across Uganda' },
  { num: '100%', label: 'EUDR & Traceability Compliant', desc: 'Polygon-mapped plots with zero-deforestation verification' },
  { num: '40%+', label: 'Women-Led Producer Groups', desc: 'Targeted empowerment and financial inclusion initiatives' },
  { num: 'Grade A', label: 'Export Quality Standard', desc: 'Rigorous cupping and precision grading for specialty markets' },
  { num: '15+', label: 'Global Market Destinations', desc: 'Supplying roasters and importers across Europe, America & Asia' },
]

export const activities: Activity[] = [
  {
    number: '01',
    id: 'cultivation',
    title: 'Sustainable Cultivation & Plantation Management',
    category: 'farming',
    shortDesc: 'Establishing and managing eco-conscious coffee plantations with regenerative agriculture for Arabica and Robusta.',
    fullDesc: 'We champion climate-smart agroforestry, shade-tree planting, and organic soil regeneration. Our agronomy teams support plantations across Mount Elgon and the Rwenzori foothills.',
    features: ['High-altitude shade-grown Arabica & robust lowland varieties', 'Certified nursery seedlings and organic soil nourishment', 'Integrated pest and disease management systems'],
    icon: Sprout,
    image: '/assets/images/coffee-beans2.jpeg',
  },
  {
    number: '02',
    id: 'processing',
    title: 'Advanced Wet & Dry Milling Processing',
    category: 'processing',
    shortDesc: 'State-of-the-art washing stations and precision dry milling ensuring pristine moisture control and zero-defect sorting.',
    fullDesc: 'Equipped with modern eco-pulpers, raised solar drying beds, and optical color sorters to ensure every lot preserves its unique terroir and distinct sensory profile.',
    features: ['Eco-pulpers with 80% water recirculation', 'Sun-drying on raised African beds with humidity tracking', 'Precision gravimetric and optical sorting machines'],
    icon: Cog,
    image: '/assets/images/coffee-sorting.webp',
  },
  {
    number: '03',
    id: 'value-addition',
    title: 'Value Addition & Artisanal Roasting',
    category: 'value-addition',
    shortDesc: 'Transforming green beans into packaged roasted, ground, and specialty consumer products within Uganda.',
    fullDesc: 'Retaining greater economic value within the country by developing premium single-origin roasts, signature espresso blends, and export-ready retail packaging.',
    features: ['Batch drum roasting with custom profile curves', 'Nitrogen-flushed freshness packaging', 'Private label roasting for hospitality and retail partners'],
    icon: Coffee,
    image: '/assets/images/coffee-01.jpeg',
  },
  {
    number: '04',
    id: 'traceability',
    title: 'EUDR Compliance & Geolocation Traceability',
    category: 'traceability',
    shortDesc: 'End-to-end digital polygon mapping and due-diligence reporting guaranteeing deforestation-free coffee.',
    fullDesc: 'Every harvest batch is mapped to GPS farmer farm polygons, ensuring total compliance with the EU Deforestation Regulation (EUDR) and transparent buyer verification.',
    features: ['GPS farm polygon boundary mapping', 'Satellite deforestation risk analysis since Dec 2020', 'Digital lot passports from cherry to shipping container'],
    icon: Satellite,
    image: '/assets/images/34.jpg',
  },
  {
    number: '05',
    id: 'outgrowers',
    title: 'Out-Growers Scheme & Agronomy Training',
    category: 'farming',
    shortDesc: 'Comprehensive farmer extension services, micro-inputs financing, and guaranteed fair-price market access.',
    fullDesc: 'Partnering with over 5,000 smallholder out-growers — producing both Arabica and Natural Uganda Robusta (NUR) — across Uganda, through dedicated field extension officers, post-harvest training workshops, and pre-harvest financial support.',
    features: ['Good Agricultural Practices (GAP) field schools', 'Quality-tiered cash bonuses directly to farming families', 'Input advances and modern pruning equipment kits'],
    icon: Handshake,
    image: '/assets/images/Coffee-planting.webp',
  },
  {
    number: '06',
    id: 'export',
    title: 'Direct Trade, Logistics & Global Export',
    category: 'export',
    shortDesc: 'Seamless international freight, container consolidation, and direct trade relationships with specialty roasters worldwide.',
    fullDesc: 'Handling bonded warehousing, phytosanitary clearance, container packing, and maritime freight from Mombasa port to global destinations across Europe, Asia, and the Americas.',
    features: ['GrainPro hermetic bag packaging and bulk liner containers', 'Coffee Department (Ministry of Agriculture, Animal Industry & Fisheries) quality certification and phytosanitary clearance', 'FOB Mombasa, CIF destination port, and FOT Kampala contracts'],
    icon: Ship,
    image: '/assets/images/picking.jpg',
  },
  {
    number: '07',
    id: 'buying-selling',
    title: 'Coffee Buying & Selling',
    category: 'trading',
    shortDesc: 'Sourcing high-quality coffee beans from partner growers and suppliers at fair, transparent prices.',
    fullDesc: 'Our purchasing teams operate at farm-gate and in regional collection centres, promoting fair trade practices and improving the livelihoods of smallholder farmers — with a deliberate focus on women farmers.',
    features: ['Farm-gate and collection-centre purchasing across Elgon & Rwenzori', 'Quality-tiered pricing with prompt, transparent payments', 'Fair-trade sourcing standards applied to every lot'],
    icon: HandCoins,
    image: '/assets/images/bwana_coffee.jpg',
  },
  {
    number: '08',
    id: 'local-sales',
    title: 'Local Sales & Domestic Distribution',
    category: 'domestic',
    shortDesc: 'Serving Ugandan wholesalers, retailers, cafés, hotels, and households with freshly roasted coffee.',
    fullDesc: 'Beyond export, we supply the domestic market with roasted, ground, and blended coffee — growing a loyal local customer base and making quality Ugandan coffee part of everyday life at home.',
    features: ['Supply to local hotels, restaurants, cafés, and retail outlets', 'Wholesale programmes for domestic distributors and retailers', 'Roasted, ground, and branded packs for Ugandan consumers'],
    icon: Store,
    image: '/assets/images/coffee-cup.jpg',
  },
]

export const strategicObjectives = [
  { num: '01', title: 'Quality & Premium Grading', text: 'Enforcing strict cup testing (SCA score 84+) and defect-free sorting across every harvested lot.' },
  { num: '02', title: 'Farmer Equity & Living Incomes', text: 'Guaranteeing transparent, premium floor prices and loyalty dividends to out-grower smallholders.' },
  { num: '03', title: 'EUDR & Zero Deforestation', text: 'Deploying GPS plot verification to protect Uganda’s natural forest canopies and biodiversity.' },
  { num: '04', title: 'Women & Youth Empowerment', text: 'Facilitating land-access initiatives, leadership training, and equal financial payouts for women farmers.' },
  { num: '05', title: 'Domestic Value Retention', text: 'Expanding local roasting and packaging infrastructure to capture maximum economic value domestically.' },
  { num: '06', title: 'Global Trade Partnerships', text: 'Building enduring direct-trade bridges with roasters and ethical green coffee importers worldwide.' },
  { num: '07', title: 'Community Development', text: 'Supporting education, health, and capacity-building projects that uplift our partner grower communities.' },
]

export const projects: Project[] = [
  {
    id: 'elgon-arabica',
    title: 'Mount Elgon High-Altitude Arabica Revival',
    category: 'Quality',
    summary: 'Upgrading 12 community washing stations on the volcanic slopes of Mount Elgon to produce 86+ cup score specialty micro-lots.',
    metric: '86.5 SCA',
    metricLabel: 'Average Cupping Score',
    image: '/assets/images/coffee-sorting.webp',
    tags: ['Specialty Arabica', 'Washed Process', 'Mount Elgon'],
  },
  {
    id: 'women-in-coffee',
    title: 'Women in Coffee Leadership Initiative',
    category: 'Empowerment',
    summary: 'Equipping 1,200 women smallholders with financial literacy, agronomy masterclasses, and dedicated cupping training.',
    metric: '1,200+',
    metricLabel: 'Women Farmers Trained',
    image: '/assets/images/image2.jpg',
    tags: ['Gender Equity', 'Financial Inclusion', 'Direct Dividends'],
  },
  {
    id: 'agroforestry-canopy',
    title: 'Shade-Tree Agroforestry & Carbon Insetting',
    category: 'Climate',
    summary: 'Distributing indigenous shade trees and fruit species to coffee farms to restore biodiversity and sequester carbon.',
    metric: '45,000+',
    metricLabel: 'Indigenous Trees Planted',
    image: '/assets/images/coffee-beans2.jpeg',
    tags: ['Shade-Grown', 'Carbon Insetting', 'Soil Health'],
  },
  {
    id: 'eudr-mapping',
    title: 'National Polygon Traceability Network',
    category: 'Traceability',
    summary: 'Digital registration and GIS satellite mapping of over 5,000 farm plots to fulfill EUDR zero-deforestation compliance.',
    metric: '100%',
    metricLabel: 'Plots Digitally Mapped',
    image: '/assets/images/34.jpg',
    tags: ['EUDR Ready', 'GIS Polygons', 'Zero Deforestation'],
  },
]

export const products: ProductItem[] = [
  {
    id: 'bugisu-aa',
    name: 'Uganda Bugisu Arabica AA',
    type: 'Arabica',
    grade: 'Screen 18+ (AA)',
    region: 'Mount Elgon, Eastern Uganda',
    altitude: '1,600m - 2,200m ASL',
    process: 'Fully Washed, Sun Dried on Raised Beds',
    screen: '18/19',
    cupProfile: ['Blackcurrant', 'Citrus Blossom', 'Caramel Sweetness', 'Silky Body'],
    description: 'Our flagship specialty Arabica grown on rich volcanic soils. Exceptionally clean cup with crisp citric acidity, complex stone fruit notes, and a sweet, lingering brown sugar finish.',
    image: '/assets/images/z_wp_a.webp',
  },
  {
    id: 'bugisu-ab',
    name: 'Uganda Bugisu Arabica AB',
    type: 'Arabica',
    grade: 'Screen 16-17 (AB)',
    region: 'Mount Elgon, Eastern Uganda',
    altitude: '1,500m - 1,900m ASL',
    process: 'Fully Washed',
    screen: '16/17',
    cupProfile: ['Orange Zest', 'Milk Chocolate', 'Toasted Almond', 'Balanced Acidity'],
    description: 'Classic Mount Elgon profile offering rich chocolate undertones, balanced citrus brightness, and great versatility for espresso roasts and single-origin filters.',
    image: '/assets/images/z_np_a.webp',
  },
  {
    id: 'drugar-specialty',
    name: 'Natural Drugar Arabica (Rwenzori)',
    type: 'Arabica',
    grade: 'Screen 15+ Specialty Natural',
    region: 'Rwenzori Mountains, Western Uganda',
    altitude: '1,400m - 1,900m ASL',
    process: 'Natural / Sun-Dried in Cherry',
    screen: '15/17',
    cupProfile: ['Wild Berry', 'Dark Chocolate', 'Winey Fruit', 'Syrupy Mouthfeel'],
    description: 'Hand-picked ripe cherries naturally dried on raised mesh beds in the misty Rwenzori foothills. Heavy body, jammy blueberry notes, and dark cacao finish.',
    image: '/assets/images/z_np.webp',
  },
  {
    id: 'natural-uganda-robusta',
    name: 'Natural Uganda Robusta (NUR)',
    type: 'Robusta',
    grade: 'Screens 12, 15 & 18',
    region: 'Central & Lake Victoria Basin',
    altitude: '1,100m - 1,400m ASL',
    process: 'Washed / Natural Clean Prepared',
    screen: '12, 15 & 18',
    cupProfile: ['Dark Cocoa', 'Toasted Hazelnut', 'Cedarwood', 'Dense Crema'],
    description: 'Our Natural Uganda Robusta (NUR) is sourced from out-growers across Uganda and is available in Screen 12, Screen 15, and Screen 18 grades. Renowned worldwide for its neutral cup, rich crema generation, and bold body — the perfect foundation for specialty espresso blends and instant coffee manufacturing.',
    image: '/assets/images/12.webp',
  },
  {
    id: 'bwana-koffee',
    name: 'Bwana Koffee — Medium Ground',
    type: 'Value-Added',
    grade: '120g Retail Pack · Medium Ground',
    region: 'Uganda Highland Blend',
    altitude: 'Highland Terroir',
    process: 'Natural · Medium Drum Roasted & Ground',
    screen: 'Selected Beans',
    cupProfile: ['Rich Aroma', 'Smooth Body', 'Gentle Cocoa', 'Sweet Finish'],
    description: 'Our pride retail brand on the Ugandan market — a natural, proudly organic Ugandan coffee, medium ground for a perfect cup in just 4 minutes. Add sugar and milk to taste. Store in a cool, dry place. It\'s coffee o\'clock!',
    image: '/assets/images/bwana_coffee.jpg',
  },
  {
    id: 'africoff-signature-roast',
    name: 'AFRICOFF Heritage Medium-Dark Roast',
    type: 'Value-Added',
    grade: 'Roasted Whole Bean & Ground',
    region: 'Uganda Highland Blend',
    altitude: 'Highland Terroir',
    process: 'Artisanal Drum Roasted',
    screen: 'Selected Beans',
    cupProfile: ['Dark Honey', 'Roasted Macadamia', 'Velvety Cocoa', 'Smooth Finish'],
    description: 'Our pride roasted product, carefully crafted to highlight the best of Ugandan coffee tradition. Available for export packaging and domestic hospitality.',
    image: '/assets/images/1.jpg',
  },
  {
    id: 'africoff-heritage-dark-roast',
    name: 'AFRICOFF Heritage Dark Roast',
    type: 'Value-Added',
    grade: 'Roasted Whole Bean & Ground',
    region: 'Uganda Highland Blend',
    altitude: 'Highland Terroir',
    process: 'Slow Dark Drum Roast',
    screen: 'Selected Beans',
    cupProfile: ['Bittersweet Cocoa', 'Toasted Walnut', 'Cane Sugar', 'Bold Smoky Finish'],
    description: 'A deeper roast level for lovers of bold, intense espresso. Low acidity, heavy body, and a lingering smoky-sweet finish — available as whole bean or ground coffee.',
    image: '/assets/images/coffee-cup.jpg',
  },
  {
    id: 'africoff-house-blend',
    name: 'AFRICOFF House Blend (Arabica & Robusta)',
    type: 'Value-Added',
    grade: 'Signature Arabica–Robusta Blend',
    region: 'Mount Elgon & Lake Victoria Basin',
    altitude: 'Highland & Lowland Terroirs',
    process: 'Blended & Drum Roasted',
    screen: 'Selected Beans',
    cupProfile: ['Milk Chocolate', 'Roasted Hazelnut', 'Gentle Spice', 'Thick Crema'],
    description: 'Our signature blend pairs highland Arabica sweetness with fine Robusta body and crema — crafted for cafés, hotels, and everyday brewing. Available for retail and private-label packing.',
    image: '/assets/images/34.jpg',
  },
]

export interface FarmService {
  id: string
  name: string
  summary: string
  points: string[]
  icon: Component
  image: string
}

export const farmServices: FarmService[] = [
  {
    id: 'farming-advisory',
    name: 'Coffee Farming & Advisory Services',
    summary: 'We establish and manage coffee plantations and extend practical agronomy advisory to partner growers — promoting sustainable agricultural practices and ensuring high-quality coffee beans.',
    points: [
      'Plantation establishment and management support',
      'Good Agricultural Practices (GAP) advisory and farmer field days',
      'Soil health, pest, and disease management guidance',
    ],
    icon: BookOpen,
    image: '/assets/images/harvested-coffee.jpeg',
  },
  {
    id: 'nursery-beds',
    name: 'Nursery Bed Establishment',
    summary: 'We establish and manage nursery beds — including our own nursery bed in Kakiri along Hoima Road — multiplying disease-tolerant, high-yield coffee seedlings for our out-growers and new commercial plantings.',
    points: [
      'Our own nursery bed in Kakiri, along Hoima Road',
      'CWD-resistant Robusta seedling varieties: CWD-r KR-1 to CWD-r KR-10',
      'Certified, disease-tolerant Arabica & Robusta seedling multiplication',
      'Quality seed sourcing and nursery management',
      'Planting guidance and post-planting agronomy follow-up',
    ],
    icon: Sprout,
    image: '/assets/images/Coffee-planting.webp',
  },
  {
    id: 'quality-testing',
    name: 'Coffee Quality Testing & Cupping',
    summary: 'We assess samples through structured cupping and quality checks so growers and buyers can make decisions with confidence before shipment.',
    points: [
      'Pre-shipment sample preparation and lot comparison',
      'Sensory cupping for flavour, body, acidity, and defects',
      'Practical feedback for improved harvest and processing quality',
    ],
    icon: FlaskConical,
    image: '/assets/images/lab_test01.jpeg',
  },
]

export interface Certification {
  name: string
  description: string
  status: string
  icon: Component
}

export const certifications: Certification[] = [
  {
    name: 'Fairtrade Certification',
    description: 'Fair prices, decent working conditions, and the Fairtrade Premium for our partner smallholder growers.',
    status: 'Targeted — In Progress',
    icon: Scale,
  },
  {
    name: 'Organic Certification',
    description: 'Certifying organic farm management, free of synthetic agro-chemicals, across enrolled out-grower plots.',
    status: 'Targeted — In Progress',
    icon: Leaf,
  },
  {
    name: 'Rainforest Alliance Certification',
    description: 'Farm sustainability standards covering forest protection, biodiversity conservation, and farmer livelihoods.',
    status: 'Targeted — In Progress',
    icon: TreePine,
  },
  {
    name: 'ISO 22000:2018 Food Safety Management',
    description: 'A food-safety management system across our washing, milling, roasting, and packing operations.',
    status: 'Targeted — In Progress',
    icon: BadgeCheck,
  },
]

export interface IndustryMembership {
  name: string
  description: string
  icon: Component
}

export const industryMemberships: IndustryMembership[] = [
  {
    name: 'Uganda Small Scale Industries Association (USSIA)',
    description: 'Membership connects us to Uganda’s industrial community, advocacy, and business-development support services.',
    icon: Building2,
  },
  {
    name: 'Uganda Coffee Roasters Association',
    description: 'Collaborating with Ugandan roasters to grow domestic coffee consumption and promote home-grown quality.',
    icon: Coffee,
  },
  {
    name: 'Agribusiness Development Centre (ADC)',
    description: 'Partnering with the ADC on farmer training, agribusiness skills, and inclusive value-chain development.',
    icon: GraduationCap,
  },
]

export interface SocialCommitment {
  title: string
  description: string
  icon: Component
}

export const socialCommitments: SocialCommitment[] = [
  {
    title: 'No Child Labour',
    description: 'We ensure that all our employees and out-growers are adults, and that every person in our supply chain is treated with dignity and respect.',
    icon: ShieldCheck,
  },
  {
    title: 'No Deforestation',
    description: 'Our operations do not contribute to deforestation or environmental degradation — verified through EUDR polygon mapping and satellite analysis.',
    icon: TreePine,
  },
  {
    title: 'Fair Labour Practices',
    description: 'All our employees and out-growers are paid fair prices for their products and for the labour they provide.',
    icon: Scale,
  },
  {
    title: 'Community Development',
    description: 'We support community development projects and initiatives that promote education, health, and economic empowerment.',
    icon: HeartHandshake,
  },
]

export interface TargetMarket {
  name: string
  description: string
  icon: Component
}

export const targetMarkets: TargetMarket[] = [
  {
    name: 'Local Market',
    description: 'Supplying high-quality coffee products to local hotels, restaurants, cafés, and retail outlets across Uganda.',
    icon: Store,
  },
  {
    name: 'Regional Markets',
    description: 'Exporting coffee products to neighbouring countries and regional markets across East Africa.',
    icon: Truck,
  },
  {
    name: 'Global Markets',
    description: 'Direct partnerships with international coffee buyers and suppliers, promoting Ugandan and African coffee globally.',
    icon: Globe,
  },
]

export const companyFacts = [
  { label: 'Founded', value: '2021' },
  { label: 'Incorporated', value: '2025 · Companies Act of Uganda' },
  { label: 'Headquarters', value: 'Kampala, Uganda' },
  { label: 'Specialisation', value: 'Coffee Production, Processing & Export' },
]

export const researchDevelopment = {
  lead: 'AFRICOFF Industries (U) Limited is committed to innovation and research and development.',
  text: 'We invest in research and development to improve our coffee production and processing techniques, and to develop new coffee products and value-added services — enhancing the customer experience and opening new revenue streams.',
  points: [
    'Varietal, fermentation, and processing trials at our washing and milling sites',
    'Roast profiling and new product development at our Kampala roasting plant',
    'Continuous improvement of quality control and traceability systems',
  ],
}

export const faqs: FaqItem[] = [
  {
    category: 'Nursery & Seedlings',
    question: 'Do you sell coffee seedlings, and which Robusta varieties do you offer?',
    answer: 'Yes. Through our nursery bed in Kakiri (along Hoima Road) we supply certified, high-yield coffee seedlings to out-growers and commercial plantings. For Robusta we offer our CWD-resistant varieties — CWD-r KR-1 through CWD-r KR-10 — bred for tolerance to Coffee Wilt Disease, alongside quality Arabica seedlings, with planting guidance and post-planting agronomy follow-up.',
  },
  {
    category: 'Sourcing & Export',
    question: 'What coffee varieties and grades does AFRICOFF export?',
    answer: 'We supply green coffee beans including Bugisu Arabica (Grades AA, AB, PB), Rwenzori Natural Drugar, and Natural Uganda Robusta (NUR) in Screen 12, Screen 15, and Screen 18 grades. We also offer custom micro-lots and specialty roasted beans.',
  },
  {
    category: 'Compliance',
    question: 'How does AFRICOFF comply with the EU Deforestation Regulation (EUDR)?',
    answer: 'All out-grower farms within our network are digitally surveyed with GPS polygon coordinates. We verify zero deforestation against Dec 31, 2020 baseline satellite data, providing full due diligence statements and digital traceability for every container.',
  },
  {
    category: 'Out-Growers',
    question: 'How do smallholder farmers join the AFRICOFF Out-Growers Scheme?',
    answer: 'Farmers with existing coffee plots anywhere in Uganda can register with our field team — we run out-grower schemes for both Arabica (Mount Elgon & Rwenzori) and Natural Uganda Robusta (NUR) across the country. Membership includes free agronomy training, soil analysis, access to subsidized seedlings, and premium guaranteed off-take contracts.',
  },
  {
    category: 'Quality & Samples',
    question: 'Can international buyers request green coffee samples?',
    answer: 'Yes. We provide sample sets (300g - 1kg green coffee) with official cupping scores and moisture/density analysis via DHL/FedEx to registered importers and roasters worldwide.',
  },
  {
    category: 'Logistics',
    question: 'What are your minimum order quantities (MOQ) and shipping terms?',
    answer: 'Our standard export volume is 1 FCL (Full Container Load = approx. 320 x 60kg bags in GrainPro liners). For specialty micro-lots, we accommodate smaller consolidated pallets under FOB Mombasa, CIF destination, or FOT (Free On Truck) Kampala terms.',
  },
]

export const testimonials = [
  {
    quote: 'AFRICOFF provides us with consistent, clean Bugisu AA lots that form the core of our seasonal espresso lineup. Their digital traceability gives our customers complete peace of mind.',
    author: 'Markus Lindqvist',
    role: 'Head of Sourcing, Nordic Roastworks',
    location: 'Gothenburg, Sweden',
  },
  {
    quote: 'Since partnering with AFRICOFF’s Out-Growers scheme, our cooperative has doubled its Grade AA cherry yield through good pruning and composting techniques, receiving premium payments on time.',
    author: 'Grace Namutosi',
    role: 'Lead Farmer & Cooperative Chair',
    location: 'Mount Elgon, Mbale',
  },
]

export const coreValues = [
  { title: 'Quality Obsession', desc: 'Rigorous sensory and physical grading at every node of the supply chain to ensure cup excellence.' },
  { title: 'Farmer Prosperity', desc: 'Empowering smallholders with transparent pricing, knowledge transfer, and pre-harvest financial support.' },
  { title: 'Climate Resilience', desc: 'Active promotion of shade-grown agroforestry, soil conservation, and zero-deforestation compliance.' },
  { title: 'Traceability & Trust', desc: 'Full digital transparency from farm GPS polygon to destination port of arrival.' },
  { title: 'Domestic Value Addition', desc: 'Investing in local roasting and packaging to enrich Uganda’s agricultural economy.' },
  { title: 'Consistency', desc: 'We deliver high-quality products and services consistently, so our customers can rely on us to meet their expectations every time.' },
  { title: 'Honesty', desc: 'We operate with transparency and integrity — every interaction with customers, partners, and stakeholders is honest, fair, and respectful.' },
  { title: 'Reliability', desc: 'We are a reliable partner: we meet our commitments and deadlines, and provide support and assistance whenever it is needed.' },
]

export interface TeamMember {
  name: string
  role: string
  initials: string
  bio: string
  credentials?: string[]
  image?: string
  pending?: boolean
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Migadde Francis',
    role: 'Managing Director / Director Production, Quality & Marketing',
    initials: 'MF',
    bio: 'Migadde Francis provides overall strategic leadership and corporate governance as Managing Director while directing production, quality, and marketing. A trained coffee quality controller and certified Q-Grader (Robusta), he personally leads cupping, grading, and quality assurance across sourcing, milling, and export lots, and his barista expertise shapes the company’s roasting profile and product experience. As a seasoned project manager, he oversees plantation development, out-grower schemes, and EUDR compliance programs — applying his professional land-surveyor background to farm mapping and polygon traceability, and his economist training to pricing, market strategy, and export growth — championing ethical trade and shared prosperity for Uganda’s smallholder coffee farming communities.',
    credentials: [
      'Certified Q-Grader (Robusta)',
      'Coffee Quality Controller',
      'Barista',
      'Project Manager',
      'Land Surveyor',
      'Economist',
    ],
    image: '/assets/images/Francis.jpeg',
  },
  {
    name: 'Kasujja Brian',
    role: 'Finance',
    initials: 'KB',
    bio: 'Kasujja Brian leads the finance function, overseeing budgeting, financial reporting, and export transaction management. He safeguards timely and transparent farmer payments, enforces cost discipline, and ensures the company’s operations remain accountable to partners, lenders, and regulators alike.',
  },
  {
    name: 'Najjuko Harriet',
    role: 'Administration',
    initials: 'NH',
    bio: 'Najjuko Harriet coordinates the company’s administrative operations, including office management, record-keeping, and staff coordination across the Kampala head office and regional hubs. Her organisational discipline keeps day-to-day operations running efficiently and reliably.',
  },
  {
    name: 'Nambazira Gladys',
    role: 'Administration',
    initials: 'NG',
    bio: 'Nambazira Gladys supports administrative and compliance operations, managing documentation, stakeholder correspondence, and farmer-facing coordination. She maintains the records and processes that underpin AFRICOFF’s traceability and certification commitments.',
  },
]
