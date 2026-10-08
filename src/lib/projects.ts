import scimSsoInitial from '@/assets/scim-exports/scim-sso-initial.png.asset.json';
import scimUsersStatus from '@/assets/scim-exports/scim-users-status.png.asset.json';
import scimStatusReference from '@/assets/scim-exports/scim-status-reference.png.asset.json';
import scimDisableInitial from '@/assets/scim-exports/scim-disable-initial.png.asset.json';
import scimAzure from '@/assets/scim-exports/scim-azure.png.asset.json';
import scimSso from '@/assets/scim-exports/scim-sso.png.asset.json';
import scimToken from '@/assets/scim-exports/scim-token.png.asset.json';
import scimDisable from '@/assets/scim-exports/scim-disable.png.asset.json';
import scimUsers from '@/assets/scim-exports/scim-users.png.asset.json';
import scimGuide from '@/assets/scim-exports/scim-guide.png.asset.json';
import qcOverview from '@/assets/qc-exports/qc-infragraph-overview.png.asset.json';
import qcBuilder from '@/assets/qc-exports/qc-infragraph-builder.png.asset.json';
import qcGrafanaSave from '@/assets/qc-exports/qc-grafana-save.png.asset.json';
import qcGrafanaTags from '@/assets/qc-exports/qc-grafana-tags.png.asset.json';
import qcFoundationsBuilder from '@/assets/qc-exports/qc-foundations-builder.png.asset.json';
import qcCatalog from '@/assets/qc-exports/qc-query-catalog.png.asset.json';
import qcBuilderCatalog from '@/assets/qc-exports/qc-builder-catalog.png.asset.json';
import qcSave from '@/assets/qc-exports/qc-save-dialog.png.asset.json';

export type StoryImage = { src: string; alt: string; caption: string };
export type StorySection = { eyebrow: string; heading: string; body?: string[]; bullets?: string[]; images?: StoryImage[]; highlight?: string };

const accessStory: StorySection[] = [
  { eyebrow: 'Context building', heading: 'What is HashiCorp?', body: ['HashiCorp provides infrastructure automation and security tools that help organizations build, manage, and secure cloud environments at scale — across AWS, Azure, Google Cloud, and beyond.', 'HashiCorp Cloud Platform (HCP) is HashiCorp’s enterprise-focused cloud offering, bringing all of the products into one SaaS offering designed to help them work better together.', 'My team within HCP is the Identity and Access Management team: identity features such as how a user signs in / signs up, account management, role management — overall, the features our users need to access our products.'] },
  { eyebrow: 'Overview', heading: 'The team', bullets: ['1 Designer (me)', '6–7 Back-end engineers', '1 Front-end engineer', '1 Product manager'], body: ['Collaborated with many other disciplines such as content writers, the education team, the marketing team, and the sales teams. A full group effort!'] },
  { eyebrow: 'Overview', heading: 'The why', body: ['HCP was beginning to see enterprise adoption, but identity management didn’t scale. Customers needed:'], bullets: ['Automated user & group provisioning', 'Alignment with existing SSO + security protocols', 'Confidence managing thousands of identities'] },
  { eyebrow: 'Overview', heading: 'The who', bullets: ['Security Engineers in mature organizations with dedicated identity ownership', 'Platform Engineers or managers in leaner teams responsible for provisioning'] },
  { eyebrow: 'Overview', heading: 'The what', body: ['We already had an SSO system built, but customers needed automated provisioning. Introducing… SCIM (System for Cross-domain Identity Management)!'], highlight: 'How might we design secure, automated identity provisioning in HCP that meets enterprise expectations and enables scalable adoption?' },
  { eyebrow: 'Discovery', heading: 'The methods & what we learned', bullets: ['Competitive analysis: Okta, Azure, GitHub', 'Interviews with 4 enterprise admins', 'Learned: SCIM is expected immediately after SSO', 'Learned: typical scale is 5k+ users, 500+ groups', 'Learned: disabling SCIM must be non-destructive'], images: [{ src: scimAzure.url, alt: 'Microsoft Azure provisioning screen used in competitive analysis', caption: 'Competitive analysis — how Azure frames provisioning' }] },
  { eyebrow: 'Ideation: Round 1', heading: 'Enable SCIM setup quickly and predictably', bullets: ['Entry point from SSO configuration', 'Clear base URL + one-time token'], images: [{ src: scimSsoInitial.url, alt: 'Initial HCP single sign-on details design with the SCIM setup entry point', caption: 'The initial SCIM setup design' }, { src: scimSso.url, alt: 'HCP single sign-on details page with an Enable SCIM provisioning card', caption: 'Entry point from SSO configuration' }, { src: scimToken.url, alt: 'Generate SCIM token dialog showing a one-time token', caption: 'Clear base URL + one-time token' }] },
  { eyebrow: 'Ideation: Round 1', heading: 'The result…', body: ['Solved initial setup, but exposed gaps in lifecycle visibility and scale post enabling SCIM. We needed users to not only efficiently enable SCIM, but trust that our system was going to handle it properly.'], highlight: 'After rounds of internal feedback with PMs, engineers and other designers, we concluded our next phase should focus on scalability post SCIM configuration.' },
  { eyebrow: 'Ideation: Round 2', heading: 'Trust in our system post SCIM enablement', bullets: ['Clear system status + sync visibility for users and groups', 'Safe, well-explained disablement behavior', 'Handling 5k+ users, 500+ groups'], images: [{ src: scimUsersStatus.url, alt: 'HCP users table showing SCIM provisioning status and a status tooltip', caption: 'Making provisioning status visible' }, { src: scimStatusReference.url, alt: 'SCIM provisioning column reference with user and group status definitions', caption: 'User and group provisioning states' }, { src: scimDisableInitial.url, alt: 'Initial disable SCIM confirmation design', caption: 'Exploring safe disablement' }, { src: scimDisable.url, alt: 'Disable SCIM provisioning confirmation dialog explaining what will happen', caption: 'Safe, well-explained disablement behavior' }, { src: scimUsers.url, alt: 'Users table with SCIM provisioning sync status and filters', caption: 'Sync visibility, built for 5k+ users and 500+ groups' }] },
  { eyebrow: 'Collaboration', heading: 'This wasn’t just about a functioning UI…', body: ['We needed to provide customers with clear documentation on the results + impacts of enabling SCIM to instill further trust and have a seamless Beta onboarding experience.', 'Alongside my product manager, I led the charge in working with our education team to provide customers with a thorough user guide.'], images: [{ src: scimGuide.url, alt: 'SCIM Provisioning User Guide document', caption: 'The SCIM Provisioning User Guide' }] },
  { eyebrow: 'Impact', heading: 'How did this help our users?', bullets: ['Removed a key enterprise adoption blocker', 'Enabled 5+ of our largest customers to onboard to the beta', 'Unlocked millions in retained and expanded revenue'] },
  { eyebrow: 'Takeaways', heading: 'What did I learn?', bullets: ['Trust matters more than anything in a system at scale', 'This is highly technical — your engineers are your friends! Talk to them early and often', 'Your typical dev team is evolving! Be willing to jump in when needed'] },
];

const queryStory: StorySection[] = [
  { eyebrow: 'Context building', heading: 'What is Infragraph?', body: ['Infragraph is a net-new product at HashiCorp. It imports your entire infrastructure estate through connections to external cloud providers (like AWS and Azure) and internal HashiCorp products (like Terraform and Packer).', 'Users can then ask questions about their infrastructure — which resources are outdated, which lack ownership, which aren’t provisioned by Terraform — and explore the answers in a graph view or a table view.'], images: [{ src: qcOverview.url, alt: 'Infragraph overview screen', caption: 'Infragraph at a glance' }, { src: qcBuilder.url, alt: 'Infragraph query builder', caption: 'Asking questions with the query builder' }] },
  { eyebrow: 'Overview', heading: 'The team', bullets: ['3 Designers (each leading individual features)', '20+ Back-end engineers', '3 Front-end engineers', '1 Product manager'] },
  { eyebrow: 'Overview', heading: 'The why', body: ['Customers could query their infrastructure, but they needed to:'], bullets: ['Save important questions', 'Share insights with teammates', 'Track resource health over time'], highlight: 'Insights were temporary — limiting long-term product value and team adoption.' },
  { eyebrow: 'Overview', heading: 'The who', bullets: ['Platform Engineers monitoring infrastructure health', 'Security Engineers tracking compliance and ownership'] },
  { eyebrow: 'Overview', heading: 'The what', body: ['Move beyond one-off exploration to shared, persistent insights.'], highlight: 'How might we enable users to save, share, and revisit infrastructure queries to track resource health over time?' },
  { eyebrow: 'Discovery', heading: 'The methods & what we learned', bullets: ['Competitive analysis: JupiterOne, Grafana, Wiz', 'Continuous feedback through our Lighthouse customer program', 'Learned: the query builder and catalog must feel deeply connected', 'Learned: saved queries need clear categorization (tags)', 'Learned: teams want scoped sharing, not org-wide by default', 'Learned: value comes from tracking health trends over time'], images: [{ src: qcGrafanaSave.url, alt: 'Grafana saved queries screen from competitive analysis', caption: 'Competitive analysis — saving in Grafana' }, { src: qcGrafanaTags.url, alt: 'Grafana tags screen from competitive analysis', caption: 'Competitive analysis — tags in Grafana' }] },
  { eyebrow: 'Ideation: Round 1', heading: 'Foundations', bullets: ['Where do they live?', 'What do we call this system?', 'How are queries saved?'], images: [{ src: qcFoundationsBuilder.url, alt: 'Query builder with a save to query catalog action', caption: 'Saving from the query builder' }, { src: qcCatalog.url, alt: 'Query catalog screen with saved queries', caption: 'The first query catalog' }] },
  { eyebrow: 'Ideation: Round 1', heading: 'The result…', body: ['The flows set a strong foundation — but where could we really provide value?'], highlight: 'We revisited our Lighthouse customer conversations to find the next step.' },
  { eyebrow: 'Ideation: Round 2', heading: 'The value add', bullets: ['A deeply connected query builder and catalog', 'Categorization with tags'], images: [{ src: qcBuilderCatalog.url, alt: 'Query builder connected to the catalog', caption: 'Builder and catalog, side by side' }, { src: qcSave.url, alt: 'Save query dialog with tags', caption: 'Saving a query, with tags' }] },
  { eyebrow: 'What’s next', heading: 'Where we’re headed', bullets: ['Scoped sharing', 'Health trends over time'] },
  { eyebrow: 'Impact', heading: 'How did this help our users?', bullets: ['Increased long-term product value beyond single queries', 'Platform teams can collaborate to share and monitor insights'] },
  { eyebrow: 'Takeaways', heading: 'What did I learn?', bullets: ['Day-2 experiences drive real product adoption', 'Talk to the people you’re building for — early and often'] },
];

export const projects = [
  {
    slug: 'access-management', number: '01', kind: 'case' as 'case' | 'concept',
    name: 'Identity management at scale', title: 'Secure, automated identity provisioning for HashiCorp Cloud Platform.',
    description: 'Bringing SCIM to HCP, so enterprise admins can set up provisioning quickly — and trust the system once thousands of identities are syncing.',
    category: 'HashiCorp · Identity & Access Management', year: '2026', theme: 'access',
    story: accessStory,
    problem: '', goal: '', flow: [] as string[], decisions: [] as (readonly [string, string])[], impact: '',
  },
  {
    slug: 'query-catalog', number: '02', kind: 'case' as 'case' | 'concept',
    name: 'A shared query catalog', title: 'Designing a shared query system to track infrastructure health over time.',
    description: 'Turning one-off infrastructure questions in Infragraph into saved, shared insights teams can revisit over time.',
    category: 'HashiCorp · Infragraph', year: '2026', theme: 'common',
    story: queryStory,
    problem: '', goal: '', flow: [] as string[], decisions: [] as (readonly [string, string])[], impact: '',
  },
] as const;
