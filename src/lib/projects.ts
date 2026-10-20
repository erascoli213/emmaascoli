import scimStatusReference from '@/assets/scim-exports/scim-status-reference.png.asset.json';
import scimSso from '@/assets/scim-sso-helios.png';
import scimToken from '@/assets/scim-token-helios.png';
import scimDisable from '@/assets/scim-exports/scim-disable.png.asset.json';
import scimUsers from '@/assets/scim-exports/scim-users-helios.png.asset.json';
import scimGuide from '@/assets/scim-exports/scim-guide.png.asset.json';
import qcOverview from '@/assets/qc-exports/qc-infragraph-overview.png.asset.json';
import qcCatalog from '@/assets/qc-exports/qc-query-catalog.png.asset.json';
import qcBuilderCatalog from '@/assets/qc-exports/qc-builder-catalog.png.asset.json';
import qcSave from '@/assets/qc-exports/qc-save-dialog.png.asset.json';

export type StoryImage = { src: string; alt: string; caption: string; w: number; h: number; note?: string; narrow?: boolean; video?: string; poster?: string; description?: string };
export type StoryConcept = { title: string; images: StoryImage[] };
export type StorySection = { eyebrow: string; heading: string; link?: { label: string; href: string }; body?: string[]; bullets?: string[]; learnings?: string[]; images?: StoryImage[]; stackImages?: boolean; concepts?: StoryConcept[]; highlight?: string };
export type StoryHook = { line?: string; label?: string; body: string[]; glance: { label: string; value: string; href?: string }[]; image: StoryImage };

const accessHook: StoryHook = {
  body: [
    'HashiCorp Cloud Platform (HCP) was starting to land enterprise deals, but identity management didn’t scale. Security and platform teams already managed their people in tools like Okta and Azure, and they expected HCP to stay in sync automatically. Without that, onboarding stalled.',
    'I designed SCIM provisioning for HCP, from the first setup step to the moment an admin can look at 5,000 synced users and trust what they see.',
  ],
  glance: [
    { label: 'My role', value: 'Lead designer on the project' },
    { label: 'Team', value: '1 Product manager, 7 BE Engineers, 1 FE Engineer' },
    { label: 'Outcome', value: '5+ of our largest customers onboarded to our beta' },
    { label: 'Today', value: 'Out of beta and available to all HCP customers', href: 'https://developer.hashicorp.com/hcp/docs/hcp/iam/scim' },
  ],
  image: { src: scimUsers.url, alt: 'HCP users table showing SCIM sync status for every user', caption: 'Every synced user, with a status you can trust', w: 2880, h: 1920, video: 'videos/scim-users-hover.mp4', poster: 'images/scim-exports/scim-users-clean.png' },
};

const accessStory: StorySection[] = [
  { eyebrow: 'Context building', heading: 'HashiCorp, HCP, and my team', body: ['HashiCorp builds infrastructure automation and security tools that help organizations build, manage and secure cloud environments across AWS, Azure, Google Cloud and beyond. HashiCorp Cloud Platform (HCP) brings those products together into one enterprise SaaS offering.', 'I sit on HCP’s Identity and Access Management team. We own everything a person needs to get into our products: signing up and signing in, account management, and roles. If identity doesn’t work, nothing else does.'] },
  { eyebrow: 'The problem', heading: 'Enterprise adoption was hitting a wall', body: ['We already had single sign-on (SSO), so people could log in with their company account. But every user and group still had to be created and maintained in HCP manually. For a company with thousands of employees, that is a non-starter, and a security risk when people change teams or leave.', 'Enterprise customers were telling us they needed:'], bullets: ['Automated user and group provisioning', 'Alignment with their existing SSO and security protocols', 'Confidence managing thousands of identities'], highlight: 'How might we design secure, automated identity provisioning in HCP that meets enterprise expectations and enables scalable adoption?' },
  { eyebrow: 'The people', heading: 'Who I was designing for', body: ['Two types of admins, with the same job but very different contexts:'], bullets: ['Security engineers in mature organizations with a dedicated identity owner: they care about control and auditability', 'Platform engineers or managers in leaner teams who take on provisioning alongside everything else: they care about speed and not breaking things'], },
  { eyebrow: 'Discovery', heading: 'Learning what “enterprise-ready” really meant', body: ['SCIM (System for Cross-domain Identity Management) is a standard, so admins arrive with expectations set by other tools. I studied how established products handle it, then talked directly to the customers asking for it.'], bullets: ['Competitive analysis across 3 larger companies: Okta, Azure, GitHub', 'Interviews with 4 Security and Platform Admins from our enterprise customers requesting this feature'], learnings: ['SCIM is usually configured immediately after SSO', 'Typical enterprise scale is 5k+ users, 500+ groups per org', 'Disabling SCIM must be non-destructive, as this is used for troubleshooting purposes'] },
  { eyebrow: 'ideation - Round 1', heading: 'First, make setup quick and predictable', stackImages: true, body: ['Because admins set up SCIM right after SSO, I put the entry point exactly there, instead of making them hunt for it in settings. Setup itself became one clear moment: copy a base URL, generate a one-time token, paste both into your identity provider.'], bullets: ['We should offer an entry point to configuring SCIM directly post configuring SSO ', 'Clear base URL + one-time token'], images: [{ src: scimSso, alt: 'HCP single sign-on details page with an Enable SCIM provisioning card', caption: 'After: SCIM offered right where SSO ends', w: 2880, h: 1920 }, { src: scimToken, alt: 'Generate SCIM token dialog showing a one-time sample token', caption: 'Clear base URL + one-time token', w: 2880, h: 1920 }] },
  { eyebrow: 'The twist', heading: 'Setup was solved, trust wasn’t', body: ['Round 1 got admins through setup, but feedback exposed a bigger gap: once SCIM was on, they had no way to see what the system was doing. With 5,000 users and 500 groups syncing, “did it work?” is the question that matters most.', 'Admins didn’t just need to enable SCIM efficiently; they needed to trust that our system would handle it properly.'], highlight: 'After rounds of internal feedback with PMs, engineers and other designers, we concluded our next phase should focus on scalability post SCIM configuration.' },
  { eyebrow: 'Ideation - Round 2', heading: 'Designing for trust after enablement', body: ['I made provisioning status visible everywhere admins already look, on every user and group, with a defined set of states so nothing is ambiguous. And because customers turn SCIM off to troubleshoot, disabling it had to be safe and explain exactly what would happen before anyone clicked.'], concepts: [{ title: 'Clear system status + sync visibility for users and groups', images: [{ src: scimStatusReference.url, alt: 'SCIM provisioning column reference with user and group status definitions', caption: 'User and group provisioning states', w: 920, h: 2282, narrow: true }] }, { title: 'After: disabling is non-destructive and says exactly what happens to your users, so admins can troubleshoot without fear.', images: [{ src: scimDisable.url, alt: 'Disable SCIM provisioning confirmation dialog explaining what will happen', caption: 'Safe, well-explained disablement behavior', w: 2880, h: 1920 }] }] },
  { eyebrow: 'Beyond the UI', heading: 'This wasn’t just about a functioning UI…', body: ['For a feature this technical, trust also comes from knowing what to expect. Customers needed clear documentation on the results and impact of enabling SCIM to have a seamless beta onboarding.', 'Alongside my product manager, I led the work with our education team to create a thorough SCIM Provisioning User Guide.'], images: [{ src: scimGuide.url, alt: 'SCIM Provisioning User Guide document', caption: 'The SCIM Provisioning User Guide', description: 'For confidentiality reasons, this is a shortened version.', w: 1792, h: 2176 }] },
  { eyebrow: 'Impact', heading: 'What it meant for our customers', body: ['SCIM turned identity from a blocker into something enterprise admins could set up once and rely on.', 'After I left HashiCorp, SCIM provisioning moved out of beta and is now available to all HCP customers, with support expanding beyond Okta and Microsoft Entra ID to Ping ID and IBM Verify.'], link: { label: 'See SCIM provisioning in the HCP docs', href: 'https://developer.hashicorp.com/hcp/docs/hcp/iam/scim' }, bullets: ['Removed a key enterprise adoption blocker', 'Enabled 5+ of our largest customers to onboard to the beta', 'Unlocked millions in retained and expanded revenue'] },
  { eyebrow: 'Reflection', heading: 'What I’m taking with me', bullets: ['Trust matters more than anything in a system at scale', 'This is highly technical: your engineers are your friends! Talk to them early and often', 'Your typical dev team is evolving! Be willing to jump in when needed'] },
];

const queryHook: StoryHook = {
  body: [
    'Infragraph lets teams query their entire infrastructure estate. But every insight was one-off: you couldn’t save a question, share it with a teammate, or come back next week to see if things had improved. That capped how much long-term value the product could deliver.',
    'I led the design of the query catalog, the system that turns one-off questions into shared, persistent insights teams can revisit over time.',
  ],
  glance: [
    { label: 'My role', value: 'Product designer leading the query catalog' },
    { label: 'Team', value: '3 designers, 1 PM, 20+ back-end, 3 front-end engineers' },
    { label: 'Outcome', value: 'Saved, shared queries that grow product value beyond a single session' },
    { label: 'Today', value: 'Live in HCP, view Infragraph docs to learn more', href: 'https://developer.hashicorp.com/hcp/docs/infragraph/view/explorer#save-queries' },
  ],
  image: { src: qcBuilderCatalog.url, alt: 'Query builder connected to the query catalog', caption: 'Where it ended up: the builder and catalog working as one', w: 2880, h: 1920, video: 'videos/qc-builder-catalog.mp4', poster: 'images/qc-exports/qc-flow-start.png' },
};

const queryStory: StorySection[] = [
  { eyebrow: 'The setting', heading: 'What is Infragraph?', stackImages: true, body: ['Infragraph is a net-new product at HashiCorp. It imports your entire infrastructure estate through connections to external cloud providers (like AWS and Azure) and internal HashiCorp products (like Terraform and Packer).', 'Users ask questions about that estate (which resources are outdated, which lack ownership, which aren’t provisioned by Terraform) and explore the answers in a graph view or a table view.'], images: [{ src: qcOverview.url, alt: 'Navigating from the Infragraph overview to the query builder', caption: 'From the Overview to the query builder', description: 'The Overview summarizes everything Infragraph has imported, with recommended tasks to guide new admins through setup. From there, Graph explorer opens straight into the query builder, where admins ask questions across their whole estate.', w: 2880, h: 1920, video: 'videos/qc-overview-to-builder.mp4', poster: 'images/qc-exports/qc-overview-start.png' }] },
  { eyebrow: 'The problem', heading: 'Insights that didn’t stick around', body: ['Infrastructure health isn’t a one-time check. The questions that matter (“what’s missing an owner?”, “what’s drifted from Terraform?”) are ones teams need to ask again and again, and share with the people who can fix them. Customers told us they needed to:'], bullets: ['Save important questions', 'Share insights with teammates', 'Track resource health over time'], highlight: 'Insights were temporary, limiting long-term product value and team adoption.' },
  { eyebrow: 'The people', heading: 'Who I was designing for', bullets: ['Platform engineers monitoring infrastructure health', 'Security engineers tracking compliance and ownership'], highlight: 'How might we enable users to save, share, and revisit infrastructure queries to track resource health over time?' },
  { eyebrow: 'Discovery', heading: 'Learning how teams keep their questions', body: ['I looked at how tools our users already know handle saved queries, and leaned on continuous feedback from our Lighthouse customers, a group of early adopters we met with throughout the project.'], bullets: ['Competitive analysis: JupiterOne, Grafana, Wiz', 'Continuous feedback through our Lighthouse customer program'], learnings: ['The query builder and catalog must feel deeply connected', 'Saved queries need clear categorization (tags)', 'Teams want scoped sharing, not org-wide by default', 'Value comes from tracking health trends over time'] },
  { eyebrow: 'Round 1', heading: 'Laying the foundations', stackImages: true, body: ['Before anything else, we had to answer three basic questions as a team. Getting them right meant saved queries would feel like a natural part of Infragraph rather than a bolted-on list.'], bullets: ['Where do they live?', 'What do we call this system?', 'How are queries saved?'], images: [{ src: qcCatalog.url, alt: 'Query catalog screen with saved queries', caption: 'The first query catalog', description: 'One home for every saved question, right next to the query builder. Teammates’ queries sit alongside ones HCP recommends from your connection data, each showing who made it, when it last changed, and a category to filter by, with quick actions to run, edit, or delete. It settled where queries live and what to call them. Next, we’d learn a list alone wasn’t enough.', w: 2880, h: 1920 }] },
  { eyebrow: 'The twist', heading: 'A solid foundation, but where was the value?', body: ['The flows worked. But a list of saved queries alone wasn’t going to change how teams monitor their infrastructure.'], highlight: 'We revisited our Lighthouse customer conversations to find the next step.' },
  { eyebrow: 'Round 2', heading: 'The value add', body: ['Customers had been clear: building a query and keeping it shouldn’t feel like two different places. I connected the builder and catalog so you can move between them fluidly, and added tags so a growing catalog stays easy to navigate.'], concepts: [{ title: 'A deeply connected query builder and catalog', images: [{ src: qcBuilderCatalog.url, alt: 'Query builder connected to the catalog', caption: 'Builder and catalog, side by side', w: 2880, h: 1920, video: 'videos/qc-builder-catalog.mp4', poster: 'images/qc-exports/qc-flow-start.png' }] }, { title: 'Categorization with tags', images: [{ src: qcSave.url, alt: 'Save query dialog with tags', caption: 'Saving a query, with tags', w: 2880, h: 1920 }] }] },
  { eyebrow: 'What’s next', heading: 'Where we’re headed', body: ['Two learnings from discovery shape the next phase:'], bullets: ['Scoped sharing: teams share with the right people, not the whole org', 'Health trends over time: seeing whether things are getting better'] },
  { eyebrow: 'Impact', heading: 'What it meant for our customers', body: ['After I left HashiCorp, Infragraph launched publicly in HCP with the query catalog built in: teams can start from pre-built queries or build their own, then save, edit, and share them from the catalog.'], bullets: ['Increased long-term product value beyond single queries', 'Platform teams can collaborate to share and monitor insights'] },
  { eyebrow: 'Reflection', heading: 'What I’m taking with me', bullets: ['Day-2 experiences drive real product adoption', 'Talk to the people you’re building for, early and often'] },
];


const cpImg = (name: string, alt: string, caption: string, extra: Partial<StoryImage> = {}): StoryImage => ({ src: `images/cp-placeholders/cp-${name}.svg`, alt, caption, w: 2880, h: 1920, ...extra });

const cpShot = (name: string, alt: string, caption: string, w: number, h: number): StoryImage => ({ src: `images/cp-exports/cp-${name}.png`, alt, caption, w, h });

const computedHook: StoryHook = {
  label: 'TL;DR',
  body: [
    '[Placeholder: the problem in plain words. Who uses computed properties, what they were trying to do, and why it wasn’t working.]',
    '[Placeholder: “I designed…” One sentence on what you designed and the trust problem it solved.]',
  ],
  glance: [
    { label: 'My role', value: 'Lead designer' },
    { label: 'Team', value: '1 Engineering manager, 1 Lead engineer, 1 Product manager' },
    { label: 'Outcome', value: '[Placeholder: headline outcome]' },
    { label: 'Today', value: 'Still in progress when I left Klaviyo' },
  ],
  image: cpShot('zero-state', 'Computed properties zero state with flows to convert and suggested properties', 'Start from a flow you already have, or a suggested property', 1386, 948),
};

const computedStory: StorySection[] = [
  { eyebrow: 'Context building', heading: 'Klaviyo, enterprise readiness, and my team', body: ['Klaviyo is the marketing platform brands use to email, text and personalize for their customers. As we scaled for enterprise, we wanted those customers to trust Klaviyo as a real data platform (Advanced KDP), not just a place to send messages.', 'Profile properties sit at the center of that. They’re the facts stored on each customer’s profile, like order_count: how many orders someone has placed over a set period, which can trigger a VIP email. In-house marketing leads and agency partners use properties to build segments, trigger flows and personalize content.', 'I was the lead designer on the Data Platform team’s Profiles group, working with an engineering manager, a lead engineer and a product manager.'] },
  { eyebrow: 'The problem', heading: 'Properties went stale the moment they were made', body: ['Today, a property like order_count lives in a spreadsheet somewhere and has to be updated on profiles by hand. Some of our largest customers found a workaround in flows. A global beauty brand built a flow of if/then splits just to set each profile’s engagement tier, and a fashion brand ran another flow only to keep each customer’s last purchase date current.', 'But the workaround left properties stale, and every time the logic changed it had to be updated everywhere the property was used: in flows, campaigns and personalization. Real enterprise readiness meant:'], bullets: ['Properties that update on a regular cadence, from a calculation the customer defines', 'One definition, created once and reused everywhere', 'Values marketers can trust are accurate when a message goes out'], highlight: 'How might we let customers define a property once and trust that it stays accurate everywhere they use it?', images: [cpShot('flow-workaround', 'A flow of conditional splits and property updates that sets an email engagement tier', 'A beauty brand’s flow, built only to keep each profile’s engagement tier up to date', 3840, 2680)] },
  { eyebrow: 'The people', heading: 'Who I was designing for', body: ['Two types of customers, using the same properties for very different jobs:'], bullets: ['In-house marketing leads at enterprise brands: they use properties to understand their customers and target campaigns, rarely open individual profiles, and care about values being accurate without having to maintain them', 'Agency partners managing many brands: they build and update segments every day, rebuild the same logic for each client, and care about speed, reuse, and keeping a clean history when values change'] },
  { eyebrow: 'Ideation - Round 1', heading: 'A builder with suggested properties built in', stackImages: true, body: ['My first direction replaced the flow workaround with one place to define a property. You could describe the calculation in your own words, or start from a suggested property like order_count, then refine it in a visual builder or in code.', 'Before saving, a preview showed the value on a real profile and a sample of others, so you could check the math before it touched any segment or flow. I prototyped it in Claude Design so we could put it in front of customers quickly.', '[Placeholder: how long Round 1 took, and the directions you threw away along the way]'], bullets: ['Suggested properties as the starting point, not an empty builder', 'One calculation, defined once, in a builder or in code', 'Preview the value on sample profiles before it goes live'], images: [cpShot('builder-v1', 'Early builder that borrowed segment conditions plus a calculation row', 'Where it started: segment-style conditions with an advanced SQL toggle', 1082, 760), cpShot('r1-suggested', 'Computed properties page with a grid of suggested properties such as order count and VIP customer', 'Start from a suggested property', 2880, 1800), cpShot('r1-builder-suggestions', 'Define calculation input showing suggested properties as you type', 'Suggestions inside the builder, or describe it in your own words', 2880, 1800), cpShot('r1-builder', 'Order count defined in the builder as a count of placed orders over all time', 'Refine it in the builder, or switch to code', 2880, 1800), cpShot('r1-preview', 'Preview details drawer showing order_count on a profile and sample profiles', 'Preview the value before saving', 2880, 1800)] },
  { eyebrow: 'Discovery', heading: 'Putting it in front of customers at K:BOS', body: ['I took the Round 1 prototype to Klaviyo’s 2026 Champions Summit and moderated two sessions. Each one paired an in-house brand team with an agency partner, so they could react to each other and show where their day-to-day differs.', 'I started with how they maintain properties today, then had each of them build a property they’d already made by hand. The prototype held up, but what they told us changed where we went next.', '[Placeholder: how you checked you were right after the sessions]'], bullets: ['2 × 70-minute moderated sessions with Klaviyo champion customers', 'Each session paired an in-house brand with an agency partner', 'Prototype tested against a property each customer had built themselves'], learnings: ['Customers leaned on suggested properties; the builder and code felt like a lot', 'Trust in AI was low: generated suggestions felt unreliable, and they wanted control', 'Properties are last-write-wins, so they wanted an audit trail of past values', 'Recurring, near real-time updates were the biggest draw'], highlight: 'We set out to make building properties easier, but customers mostly wanted to start from something proven and see exactly how a value changed over time.', images: [cpImg('raw-input', 'Placeholder for research artifacts', '[Placeholder: redacted session notes or synthesis]')] },
  { eyebrow: 'Ideation - Round 2', heading: '[Placeholder: Round 2 headline, e.g. templates first, with the value beside the calculation]', body: ['[Placeholder: how the split-panel design answers what you heard at K:BOS.]'], concepts: [
    { title: '[Placeholder] Templates first: start from a proven property', images: [cpImg('preview', 'Placeholder for templates panel', '[Placeholder: templates on the left]')] },
    { title: '[Placeholder] The value beside the calculation, with details you can edit', images: [cpImg('override', 'Placeholder for value output panel', '[Placeholder: value output and editable calculation details on the right]')] },
    { title: '[Placeholder] An audit trail of property values', images: [cpImg('when-wrong', 'Placeholder for property value history', '[Placeholder: how past values are kept and shown]')] },
  ] },
  { eyebrow: 'Beyond the UI', heading: '[Placeholder: docs, enablement or terminology work, or delete this section]', body: ['[Placeholder: anything outside the screens that helped people trust the feature.]'] },
  { eyebrow: 'Impact', heading: 'What it meant for our customers', body: ['[Placeholder: what shipped and what changed for customers.]'], bullets: ['[Placeholder: outcome 1]', '[Placeholder: outcome 2]', '[Placeholder: outcome 3]'] },
  { eyebrow: 'Reflection', heading: 'What I’m taking with me', bullets: ['[Placeholder: reflection 1]', '[Placeholder: reflection 2]', '[Placeholder: what I’d do differently now]'] },
];

export const projects = [
  {
    slug: 'access-management', number: '01', kind: 'case' as 'case' | 'concept',
    name: 'Identity management at scale', title: 'Secure, automated identity provisioning for HashiCorp Cloud Platform.',
    description: 'Bringing SCIM to HCP, so enterprise admins can set up provisioning quickly, and trust the system once thousands of identities are syncing.',
    category: 'HashiCorp · Identity & Access Management', year: '2025', theme: 'access',
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
  {
    slug: 'computed-properties', number: '03', kind: 'case' as 'case' | 'concept',
    name: 'Computed properties', title: '[Placeholder: one-line title for the case study.]',
    description: '[Placeholder: one-sentence card description.]',
    category: 'Klaviyo · Data Platform, Profiles', year: '2026', theme: 'computed',
    story: computedStory, hook: computedHook as StoryHook | null,
    problem: '', goal: '', flow: [] as string[], decisions: [] as (readonly [string, string])[], impact: '',
  },
] as const;
