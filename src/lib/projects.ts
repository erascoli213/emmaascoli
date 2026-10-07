import scimAzure from '@/assets/scim/scim-azure.jpg.asset.json';
import scimSso from '@/assets/scim/scim-sso.jpg.asset.json';
import scimToken from '@/assets/scim/scim-token.jpg.asset.json';
import scimDisable from '@/assets/scim/scim-disable.jpg.asset.json';
import scimUsers from '@/assets/scim/scim-users.jpg.asset.json';
import scimGuide from '@/assets/scim/scim-guide.jpg.asset.json';

export type StoryImage = { src: string; alt: string; caption: string };
export type StorySection = { eyebrow: string; heading: string; body?: string[]; bullets?: string[]; images?: StoryImage[]; highlight?: string };

const accessStory: StorySection[] = [
  { eyebrow: 'Context building', heading: 'What is HashiCorp?', body: ['HashiCorp provides infrastructure automation and security tools that help organizations build, manage, and secure cloud environments at scale — across AWS, Azure, Google Cloud, and beyond.', 'HashiCorp Cloud Platform (HCP) is HashiCorp’s enterprise-focused cloud offering, bringing all of the products into one SaaS offering designed to help them work better together.', 'My team within HCP is the Identity and Access Management team: identity features such as how a user signs in / signs up, account management, role management — overall, the features our users need to access our products.'] },
  { eyebrow: 'Overview', heading: 'The team', bullets: ['1 Designer (me)', '6–7 Back-end engineers', '1 Front-end engineer', '1 Product manager'], body: ['Collaborated with many other disciplines such as content writers, the education team, the marketing team, and the sales teams. A full group effort!'] },
  { eyebrow: 'Overview', heading: 'The why', body: ['HCP was beginning to see enterprise adoption, but identity management didn’t scale. Customers needed:'], bullets: ['Automated user & group provisioning', 'Alignment with existing SSO + security protocols', 'Confidence managing thousands of identities'] },
  { eyebrow: 'Overview', heading: 'The who', bullets: ['Security Engineers in mature organizations with dedicated identity ownership', 'Platform Engineers or managers in leaner teams responsible for provisioning'] },
  { eyebrow: 'Overview', heading: 'The what', body: ['We already had an SSO system built, but customers needed automated provisioning. Introducing… SCIM (System for Cross-domain Identity Management)!'], highlight: 'How might we design secure, automated identity provisioning in HCP that meets enterprise expectations and enables scalable adoption?' },
  { eyebrow: 'Discovery', heading: 'The methods & what we learned', bullets: ['Competitive analysis: Okta, Azure, GitHub', 'Interviews with 4 enterprise admins', 'Learned: SCIM is expected immediately after SSO', 'Learned: typical scale is 5k+ users, 500+ groups', 'Learned: disabling SCIM must be non-destructive'], images: [{ src: scimAzure.url, alt: 'Microsoft Azure provisioning screen used in competitive analysis', caption: 'Competitive analysis — how Azure frames provisioning' }] },
  { eyebrow: 'Ideation: Round 1', heading: 'Enable SCIM setup quickly and predictably', bullets: ['Entry point from SSO configuration', 'Clear base URL + one-time token'], images: [{ src: scimSso.url, alt: 'HCP single sign-on details page with an Enable SCIM provisioning card', caption: 'Entry point from SSO configuration' }, { src: scimToken.url, alt: 'Generate SCIM token dialog showing a one-time token', caption: 'Clear base URL + one-time token' }] },
  { eyebrow: 'Ideation: Round 1', heading: 'The result…', body: ['Solved initial setup, but exposed gaps in lifecycle visibility and scale post enabling SCIM. We needed users to not only efficiently enable SCIM, but trust that our system was going to handle it properly.'], highlight: 'After rounds of internal feedback with PMs, engineers and other designers, we concluded our next phase should focus on scalability post SCIM configuration.' },
  { eyebrow: 'Ideation: Round 2', heading: 'Trust in our system post SCIM enablement', bullets: ['Clear system status + sync visibility for users and groups', 'Safe, well-explained disablement behavior', 'Handling 5k+ users, 500+ groups'], images: [{ src: scimDisable.url, alt: 'Disable SCIM provisioning confirmation dialog explaining what will happen', caption: 'Safe, well-explained disablement behavior' }, { src: scimUsers.url, alt: 'Users table with SCIM provisioning sync status and filters', caption: 'Sync visibility, built for 5k+ users and 500+ groups' }] },
  { eyebrow: 'Collaboration', heading: 'This wasn’t just about a functioning UI…', body: ['We needed to provide customers with clear documentation on the results + impacts of enabling SCIM to instill further trust and have a seamless Beta onboarding experience.', 'Alongside my product manager, I led the charge in working with our education team to provide customers with a thorough user guide.'], images: [{ src: scimGuide.url, alt: 'SCIM Provisioning User Guide document', caption: 'The SCIM Provisioning User Guide' }] },
  { eyebrow: 'Impact', heading: 'How did this help our users?', bullets: ['Removed a key enterprise adoption blocker', 'Enabled 5+ of our largest customers to onboard to the beta', 'Unlocked millions in retained and expanded revenue'] },
  { eyebrow: 'Takeaways', heading: 'What did I learn?', bullets: ['Trust matters more than anything in a system at scale', 'This is highly technical — your engineers are your friends! Talk to them early and often', 'Your typical dev team is evolving! Be willing to jump in when needed'] },
];

export const projects = [
  {
    slug: 'access-management', number: '01', kind: 'case',
    name: 'Designing access management at scale', title: 'Secure, automated identity provisioning for HashiCorp Cloud Platform.',
    description: 'Bringing SCIM to HCP, so enterprise admins can set up provisioning quickly — and trust the system once thousands of identities are syncing.',
    category: 'HashiCorp · Identity & Access Management', year: '2026', theme: 'access',
    story: accessStory,
    problem: '', goal: '', flow: [] as string[], decisions: [] as (readonly [string, string])[], impact: '',
  },
  {
    slug: 'common-ground', number: '02', kind: 'concept', name: 'Common Ground', title: 'Find your people. Meet your city.',
    description: 'Bringing local experiences and the people behind them a little closer together.',
    category: 'Web platform · UX / UI design', year: 'Concept study', theme: 'common',
    problem: 'Finding a local event is easy. Finding one that feels right for you—and feeling comfortable showing up alone—is harder. Common Ground explores the gap between discovering an event and deciding to actually attend.',
    goal: 'Make community discovery more personal, welcoming, and transparent, especially for someone joining for the first time.',
    flow: ['Follow your curiosity', 'Get a feel for the gathering', 'Save your spot'],
    decisions: [
      ['Interests before filters', 'A small set of human, interest-led categories provides a friendly starting point. Location and date controls remain available without dominating discovery.'],
      ['A clearer picture', 'Event pages explain the setting, group size, accessibility, and what to expect. Knowing the practical details can reduce the uncertainty of showing up.'],
      ['A welcoming handoff', 'A simple reservation flow ends with a clear confirmation, host information, and an optional calendar reminder. The experience continues beyond the RSVP.'],
    ],
    impact: 'The concept aims to make first-time attendance feel easier. This is an independent exploration with no measured results; a next round would test event comprehension, RSVP completion, and readiness to attend.',
  },
] as const;
