import scimSsoInitial from '@/assets/scim-exports/scim-sso-initial.png.asset.json';
import scimUsersStatus from '@/assets/scim-exports/scim-users-status.png.asset.json';
import scimStatusReference from '@/assets/scim-exports/scim-status-reference.png.asset.json';
import scimDisableInitial from '@/assets/scim-exports/scim-disable-initial.png.asset.json';
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

export type StoryImage = { src: string; alt: string; caption: string; w: number; h: number; note?: string };
export type StorySection = { eyebrow: string; heading: string; body?: string[]; bullets?: string[]; learnings?: string[]; images?: StoryImage[]; highlight?: string };
export type StoryHook = { line: string; body: string[]; glance: { label: string; value: string }[]; image: StoryImage };

const accessHook: StoryHook = {
  line: 'Our biggest customers wanted to bring thousands of people into HCP — and we were asking them to do it by hand.',
  body: [
    'HCP was starting to land enterprise deals, but identity management didn’t scale. Security and platform teams already managed their people in tools like Okta and Azure, and they expected HCP to stay in sync automatically. Without that, onboarding stalled.',
    'I designed SCIM provisioning for HCP, from the first setup step to the moment an admin can look at 5,000 synced users and trust what they see.',
  ],
  glance: [
    { label: 'My role', value: 'Sole product designer, end to end' },
    { label: 'Team', value: '1 PM, 6–7 back-end, 1 front-end engineer' },
    { label: 'Outcome', value: '5+ of our largest customers onboarded to the beta' },
  ],
  image: { src: scimUsers.url, alt: 'HCP users table showing SCIM sync status for every user', caption: 'Where it ended up: every synced user, with a status you can trust', w: 881, h: 667 },
};

const accessStory: StorySection[] = [
  { eyebrow: 'Context building', heading: 'HashiCorp, HCP, and my team', body: ['HashiCorp builds infrastructure automation and security tools that help organizations build, manage and secure cloud environments across AWS, Azure, Google Cloud and beyond. HashiCorp Cloud Platform (HCP) brings those products together into one enterprise SaaS offering.', 'I sit on HCP’s Identity and Access Management team. We own everything a person needs to get into our products: signing up and signing in, account management, and roles. If identity doesn’t work, nothing else does.'] },
  { eyebrow: 'The problem', heading: 'Enterprise adoption was hitting a wall', body: ['We already had single sign-on (SSO), so people could log in with their company account. But every user and group still had to be created and maintained in HCP manually. For a company with thousands of employees, that is a non-starter — and a security risk when people change teams or leave.', 'Enterprise customers were telling us they needed:'], bullets: ['Automated user and group provisioning', 'Alignment with their existing SSO and security protocols', 'Confidence managing thousands of identities'], highlight: 'How might we design secure, automated identity provisioning in HCP that meets enterprise expectations and enables scalable adoption?' },
  { eyebrow: 'The people', heading: 'Who I was designing for', body: ['Two types of admins, with the same job but very different contexts:'], bullets: ['Security engineers in mature organizations with a dedicated identity owner — they care about control and auditability', 'Platform engineers or managers in leaner teams who take on provisioning alongside everything else — they care about speed and not breaking things'], },
  { eyebrow: 'Chapter 3 · Discovery', heading: 'Learning what “enterprise-ready” really meant', body: ['SCIM (System for Cross-domain Identity Management) is a standard, so admins arrive with expectations set by other tools. I studied how established products handle it, then talked directly to the customers asking for it.'], bullets: ['Competitive analysis across 3 larger companies: Okta, Azure, GitHub', 'Interviews with 4 Security and Platform Admins from our enterprise customers requesting this featire'], learnings: ['SCIM is usually configured immediately after SSO', 'Typical enterprise scale is 5k+ users, 500+ groups per org', 'Disabling SCIM must be non-destructive, as this is used for troubleshooting purposes'] },
  { eyebrow: 'ideation - Round 1', heading: 'First, make setup quick and predictable', body: ['Because admins set up SCIM right after SSO, I put the entry point exactly there — instead of making them hunt for it in settings. Setup itself became one clear moment: copy a base URL, generate a one-time token, paste both into your identity provider.'], bullets: ['We should offer an entry point to configuring SCIM directly post configuring SSO ', 'Clear base URL + one-time token'], images: [{ src: scimSsoInitial.url, alt: 'Initial HCP single sign-on details design with the SCIM setup entry point', caption: 'Before: my first pass at the entry point', w: 870, h: 656 }, { src: scimSso.url, alt: 'HCP single sign-on details page with an Enable SCIM provisioning card', caption: 'After: SCIM offered right where SSO ends', w: 870, h: 656 }, { src: scimToken.url, alt: 'Generate SCIM token dialog showing a one-time token', caption: 'Clear base URL + one-time token', w: 870, h: 662 }] },
  { eyebrow: 'Chapter 4 · The twist', heading: 'Setup was solved, trust wasn’t', body: ['Round 1 got admins through setup, but feedback exposed a bigger gap: once SCIM was on, they had no way to see what the system was doing. With 5,000 users and 500 groups syncing, “did it work?” is the question that matters most.', 'Admins didn’t just need to enable SCIM efficiently — they needed to trust that our system would handle it properly.'], highlight: 'After rounds of internal feedback with PMs, engineers and other designers, we concluded our next phase should focus on scalability post SCIM configuration.' },
  { eyebrow: 'Ideation - Round 2', heading: 'Designing for trust after enablement', body: ['I made provisioning status visible everywhere admins already look — on every user and group — with a defined set of states so nothing is ambiguous. And because customers turn SCIM off to troubleshoot, disabling it had to be safe and explain exactly what would happen before anyone clicked.'], bullets: ['Clear system status + sync visibility for users and groups'], images: [{ src: scimUsersStatus.url, alt: 'HCP users table showing SCIM provisioning status and a status tooltip', caption: 'Making provisioning status visible', w: 881, h: 671 }, { src: scimStatusReference.url, alt: 'SCIM provisioning column reference with user and group status definitions', caption: 'User and group provisioning states', w: 297, h: 671 }, { src: scimDisableInitial.url, alt: 'Initial disable SCIM confirmation design', caption: 'Before: an early disable confirmation', w: 870, h: 660 }, { src: scimDisable.url, alt: 'Disable SCIM provisioning confirmation dialog explaining what will happen', caption: 'Safe, well-explained disablement behavior', w: 881, h: 671, note: 'After: disabling is non-destructive and says exactly what happens to your users — so admins can troubleshoot without fear.' }] },
  { eyebrow: 'Chapter 6 · Beyond the UI', heading: 'This wasn’t just about a functioning UI…', body: ['For a feature this technical, trust also comes from knowing what to expect. Customers needed clear documentation on the results and impact of enabling SCIM to have a seamless beta onboarding.', 'Alongside my product manager, I led the work with our education team to create a thorough SCIM Provisioning User Guide.'], images: [{ src: scimGuide.url, alt: 'SCIM Provisioning User Guide document', caption: 'The SCIM Provisioning User Guide', w: 1295, h: 833 }] },
  { eyebrow: 'Impact', heading: 'What it meant for our customers', body: ['SCIM turned identity from a blocker into something enterprise admins could set up once and rely on.'], bullets: ['Removed a key enterprise adoption blocker', 'Enabled 5+ of our largest customers to onboard to the beta', 'Unlocked millions in retained and expanded revenue'] },
  { eyebrow: 'Reflection', heading: 'What I’m taking with me', bullets: ['Trust matters more than anything in a system at scale', 'This is highly technical — your engineers are your friends! Talk to them early and often', 'Your typical dev team is evolving! Be willing to jump in when needed'] },
];

const queryHook: StoryHook = {
  line: 'Customers could ask Infragraph great questions about their infrastructure — then the answers disappeared.',
  body: [
    'Infragraph lets teams query their entire infrastructure estate. But every insight was one-off: you couldn’t save a question, share it with a teammate, or come back next week to see if things had improved. That capped how much long-term value the product could deliver.',
    'I led the design of the query catalog — the system that turns one-off questions into shared, persistent insights teams can revisit over time.',
  ],
  glance: [
    { label: 'My role', value: 'Product designer leading the query catalog' },
    { label: 'Team', value: '3 designers, 1 PM, 20+ back-end, 3 front-end engineers' },
    { label: 'Outcome', value: 'Saved, shared queries that grow product value beyond a single session' },
  ],
  image: { src: qcBuilderCatalog.url, alt: 'Query builder connected to the query catalog', caption: 'Where it ended up: the builder and catalog working as one', w: 1325, h: 947 },
};

const queryStory: StorySection[] = [
  { eyebrow: 'Chapter 1 · The setting', heading: 'What is Infragraph?', body: ['Infragraph is a net-new product at HashiCorp. It imports your entire infrastructure estate through connections to external cloud providers (like AWS and Azure) and internal HashiCorp products (like Terraform and Packer).', 'Users ask questions about that estate — which resources are outdated, which lack ownership, which aren’t provisioned by Terraform — and explore the answers in a graph view or a table view.'], images: [{ src: qcOverview.url, alt: 'Infragraph overview screen', caption: 'Infragraph at a glance', w: 881, h: 633 }, { src: qcBuilder.url, alt: 'Infragraph query builder', caption: 'Asking questions with the query builder', w: 881, h: 633 }] },
  { eyebrow: 'Chapter 2 · The problem', heading: 'Insights that didn’t stick around', body: ['Infrastructure health isn’t a one-time check. The questions that matter — “what’s missing an owner?”, “what’s drifted from Terraform?” — are ones teams need to ask again and again, and share with the people who can fix them. Customers told us they needed to:'], bullets: ['Save important questions', 'Share insights with teammates', 'Track resource health over time'], highlight: 'Insights were temporary — limiting long-term product value and team adoption.' },
  { eyebrow: 'Chapter 2 · The people', heading: 'Who I was designing for', bullets: ['Platform engineers monitoring infrastructure health', 'Security engineers tracking compliance and ownership'], highlight: 'How might we enable users to save, share, and revisit infrastructure queries to track resource health over time?' },
  { eyebrow: 'Chapter 3 · Discovery', heading: 'Learning how teams keep their questions', body: ['I looked at how tools our users already know handle saved queries, and leaned on continuous feedback from our Lighthouse customers — a group of early adopters we met with throughout the project.'], bullets: ['Competitive analysis: JupiterOne, Grafana, Wiz', 'Continuous feedback through our Lighthouse customer program'], learnings: ['The query builder and catalog must feel deeply connected', 'Saved queries need clear categorization (tags)', 'Teams want scoped sharing, not org-wide by default', 'Value comes from tracking health trends over time'], images: [{ src: qcGrafanaSave.url, alt: 'Grafana saved queries screen from competitive analysis', caption: 'Competitive analysis — saving in Grafana', w: 873, h: 523 }, { src: qcGrafanaTags.url, alt: 'Grafana tags screen from competitive analysis', caption: 'Competitive analysis — tags in Grafana', w: 823, h: 523 }] },
  { eyebrow: 'Chapter 4 · Round 1', heading: 'Laying the foundations', body: ['Before anything else, we had to answer three basic questions as a team. Getting them right meant saved queries would feel like a natural part of Infragraph rather than a bolted-on list.'], bullets: ['Where do they live?', 'What do we call this system?', 'How are queries saved?'], images: [{ src: qcFoundationsBuilder.url, alt: 'Query builder with a save to query catalog action', caption: 'Saving straight from the query builder', w: 1085, h: 785 }, { src: qcCatalog.url, alt: 'Query catalog screen with saved queries', caption: 'The first query catalog', w: 1051, h: 769 }] },
  { eyebrow: 'Chapter 4 · The twist', heading: 'A solid foundation — but where was the value?', body: ['The flows worked. But a list of saved queries alone wasn’t going to change how teams monitor their infrastructure.'], highlight: 'We revisited our Lighthouse customer conversations to find the next step.' },
  { eyebrow: 'Chapter 5 · Round 2', heading: 'The value add', body: ['Customers had been clear: building a query and keeping it shouldn’t feel like two different places. I connected the builder and catalog so you can move between them fluidly, and added tags so a growing catalog stays easy to navigate.'], bullets: ['A deeply connected query builder and catalog', 'Categorization with tags'], images: [{ src: qcBuilderCatalog.url, alt: 'Query builder connected to the catalog', caption: 'Builder and catalog, side by side', w: 1325, h: 947 }, { src: qcSave.url, alt: 'Save query dialog with tags', caption: 'Saving a query, with tags', w: 1327, h: 947 }] },
  { eyebrow: 'Chapter 6 · What’s next', heading: 'Where we’re headed', body: ['Two learnings from discovery shape the next phase:'], bullets: ['Scoped sharing — teams share with the right people, not the whole org', 'Health trends over time — seeing whether things are getting better'] },
  { eyebrow: 'Chapter 7 · Impact', heading: 'What it meant for our customers', bullets: ['Increased long-term product value beyond single queries', 'Platform teams can collaborate to share and monitor insights'] },
  { eyebrow: 'Reflection', heading: 'What I’m taking with me', bullets: ['Day-2 experiences drive real product adoption', 'Talk to the people you’re building for — early and often'] },
];

export const projects = [
  {
    slug: 'access-management', number: '01', kind: 'case' as 'case' | 'concept',
    name: 'Identity management at scale', title: 'Secure, automated identity provisioning for HashiCorp Cloud Platform.',
    description: 'Bringing SCIM to HCP, so enterprise admins can set up provisioning quickly — and trust the system once thousands of identities are syncing.',
    category: 'HashiCorp · Identity & Access Management', year: '2026', theme: 'access',
    story: accessStory, hook: accessHook as StoryHook | null,
    problem: '', goal: '', flow: [] as string[], decisions: [] as (readonly [string, string])[], impact: '',
  },
  {
    slug: 'query-catalog', number: '02', kind: 'case' as 'case' | 'concept',
    name: 'A shared query catalog', title: 'Designing a shared query system to track infrastructure health over time.',
    description: 'Turning one-off infrastructure questions in Infragraph into saved, shared insights teams can revisit over time.',
    category: 'HashiCorp · Infragraph', year: '2026', theme: 'common',
    story: queryStory, hook: queryHook as StoryHook | null,
    problem: '', goal: '', flow: [] as string[], decisions: [] as (readonly [string, string])[], impact: '',
  },
] as const;
