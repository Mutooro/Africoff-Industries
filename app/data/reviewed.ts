export interface ValueChainProfile {
  slug: string
  name: string
  status: 'published' | 'pending-review'
  summary: string
  details: string[]
  nextStep: string
}

export interface AccountabilityResource {
  title: string
  type: 'Policy' | 'Report' | 'Governance'
  status: 'published' | 'pending-approval'
  description: string
  href?: string
}

export interface ProgramProfile {
  slug: string
  name: string
  status: 'published' | 'pending-review'
  type: string
  location: string
  summary: string
  details: string[]
  image: string
}

export interface NewsArticle {
  slug: string
  title: string
  publishedAt: string
  status: 'published' | 'draft'
  summary: string
  image?: string
  gallery?: string[]
}

export const valueChains: ValueChainProfile[] = [
  {
    slug: 'coffee',
    name: 'Coffee',
    status: 'published',
    summary: 'Ugandan Arabica, Robusta and roasted coffee offerings supported by origin, processing and sensory information.',
    details: [
      'Origin and altitude information is available for the current catalogue items.',
      'Processing, screen size and cup profile are published where supplied in the current product data.',
      'Production volumes, certifications, harvest calendars and packaging availability require commercial confirmation.',
    ],
    nextStep: 'Request a current product specification or sample through the contact page.',
  },
  {
    slug: 'cocoa',
    name: 'Cocoa',
    status: 'pending-review',
    summary: 'Cocoa is identified as a priority value chain, with commercial and production details awaiting approval.',
    details: [
      'Production areas and farmer-network size are pending verification.',
      'Varieties, harvest periods, quality controls and estimated volumes are pending verification.',
      'Processing, certifications, packaging and buyer terms are pending commercial approval.',
    ],
    nextStep: 'Contact AFRICOFF to register interest while the origin sheet is prepared.',
  },
  {
    slug: 'honey',
    name: 'Honey',
    status: 'pending-review',
    summary: 'Honey is identified as a priority value chain, with commercial and production details awaiting approval.',
    details: [
      'Production areas and beekeeper-network size are pending verification.',
      'Harvest periods, quality controls and traceability information are pending verification.',
      'Packaging, certifications, available volumes and buyer terms are pending commercial approval.',
    ],
    nextStep: 'Contact AFRICOFF to register interest while the origin sheet is prepared.',
  },
]

export const accountabilityResources: AccountabilityResource[] = [
  {
    title: 'Privacy and EUDR Data Governance',
    type: 'Policy',
    status: 'published',
    description: 'How contact data and farm geolocation information are handled on this website and within traceability workflows.',
    href: '/privacy',
  },
  {
    title: 'Governance structure',
    type: 'Governance',
    status: 'pending-approval',
    description: 'Board, directors, advisers and oversight responsibilities will be published after organizational approval.',
  },
  {
    title: 'Safeguarding and complaints process',
    type: 'Policy',
    status: 'pending-approval',
    description: 'Public reporting and safeguarding information will be added once the responsible contact and approved policy are confirmed.',
  },
  {
    title: 'Annual and impact reports',
    type: 'Report',
    status: 'pending-approval',
    description: 'Verified annual and impact reporting will be published here when the reporting period, source and approval status are confirmed.',
  },
]

export const programs: ProgramProfile[] = [
  {
    slug: 'masaka-smallholder-cooperative',
    name: 'Masaka Smallholder Cooperative',
    status: 'published',
    type: 'Farming Advisory',
    location: 'Masaka District, Uganda',
    summary: 'A smallholder cooperative project focused on practical farming advisory and stronger participation in the coffee value chain.',
    details: [
      'The source project identifies farming advisory as its primary focus.',
      'Detailed objectives, dates, partners, beneficiary definitions and verified results require programme-owner approval.',
    ],
    image: '/assets/images/programs/project-one-1.jpg',
  },
  {
    slug: 'kampala-dry-processing-mill',
    name: 'Kampala Dry Processing Mill',
    status: 'published',
    type: 'Processing Facility',
    location: 'Kampala, Uganda',
    summary: 'A processing-facility project representing AFRICOFF’s dry-milling and post-harvest value-addition capability.',
    details: [
      'The source project identifies dry processing as its primary focus.',
      'Facility capacity, commissioning date, partners, quality results and supporting documents require verification.',
    ],
    image: '/assets/images/programs/project-one-2.jpg',
  },
  {
    slug: 'mt-elgon-arabica-estate',
    name: 'Mt. Elgon Arabica Estate',
    status: 'published',
    type: 'Commercial Farm',
    location: 'Mt. Elgon Region, Uganda',
    summary: 'A commercial-farm project centred on Arabica production in Uganda’s Mt. Elgon growing region.',
    details: [
      'The source project identifies the Mt. Elgon region and commercial farming as its focus.',
      'Estate size, varieties, production volumes, certifications and verified outcomes require confirmation.',
    ],
    image: '/assets/images/programs/project-one-3.jpg',
  },
  {
    slug: 'export-lot-traceability-system',
    name: 'Export Lot Traceability System',
    status: 'published',
    type: 'Technology',
    location: 'Kampala HQ, Uganda',
    summary: 'A technology project supporting traceability and visibility across export coffee lots.',
    details: [
      'The source project identifies export-lot traceability technology as its focus.',
      'System scope, implementation date, data controls, verification method and buyer-facing outputs require confirmation.',
    ],
    image: '/assets/images/programs/project-one-4.jpg',
  },
  {
    slug: 'women-in-coffee-initiative',
    name: 'Women in Coffee Initiative',
    status: 'published',
    type: 'Community',
    location: 'Central Uganda',
    summary: 'A community initiative focused on women’s participation in Uganda’s coffee value chain.',
    details: [
      'The source project identifies women in coffee and Central Uganda as its focus.',
      'Activities, participant definitions, dates, partners, safeguards and verified results require confirmation.',
    ],
    image: '/assets/images/programs/project-one-5.jpg',
  },
  {
    slug: 'africoff-retail-brand-launch',
    name: 'AFRICOFF Retail Brand Launch',
    status: 'published',
    type: 'Branding & Packaging',
    location: 'National, Uganda',
    summary: 'A national retail-brand project focused on packaging and presenting AFRICOFF products to consumers.',
    details: [
      'The source project identifies branding, packaging and national reach as its focus.',
      'Launch date, product range, packaging formats, distribution footprint and commercial results require confirmation.',
    ],
    image: '/assets/images/programs/project-one-6.jpg',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    slug: 'wakiso-coffee-workshop-and-farmer-visit',
    title: 'Coffee Workshop at Wakiso District Headquarters and Farmer Visit in Bukasa',
    publishedAt: '16 September 2026',
    // DRAFT — awaiting editorial approval, participant consent confirmation and
    // image-rights sign-off before it can go live. The news index only renders
    // `published` items, so this stays private until flipped.
    status: 'draft',
    summary:
      'On Wednesday 16 September 2026 the AFRICOFF team held a coffee workshop at Wakiso District Headquarters, and afterwards visited one of our coffee farmers in Bukasa, Wakiso District.',
    gallery: [
      '/assets/images/field_imgs/image_1.jpeg',
      '/assets/images/field_imgs/image_2.jpeg',
      '/assets/images/field_imgs/image_3.jpeg',
      '/assets/images/field_imgs/image_4.jpeg',
      '/assets/images/field_imgs/image_5.jpeg',
      '/assets/images/field_imgs/image_6.jpeg',
      '/assets/images/field_imgs/image_7.jpeg',
      '/assets/images/field_imgs/image_8.jpeg',
      '/assets/images/field_imgs/image_9.jpeg',
      '/assets/images/field_imgs/image_10.jpeg',
    ],
  },
]
