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

export type StoryImage = { src: string; alt: string; caption: string; w: number; h: number; note?: string; narrow?: boolean; video?: string; poster?: string; description?: string; href?: string; linkLabel?: string };
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
  { eyebrow: 'Ideation - Round 2', heading: 'Templates first, with the value right beside them', body: ['Round 2 leans on what customers trusted most: proven templates. Creating a property now opens a library of templates on the left and one focused preview on the right: pick a sample profile and see its value, with a single line showing how values spread across everyone.', 'The calculation details are still there, but tucked away. Most people never need them, so they stay collapsed until someone chooses to edit. That keeps the starting point simple without taking control away from power users.'], bullets: ['A library of templates, grouped by purchase, engagement, lifecycle and product', 'One preview: switch between sample profiles to check the value before anything is created', 'A computed properties section on every profile, with each value’s history, so nothing is silently overwritten', 'Calculation details hidden until someone opens them'], images: [{ src: 'images/cp-exports/cp-round2-poster.png', alt: 'Walkthrough: opening Create computed property, browsing the template library, previewing values and history, then opening calculation details', caption: 'Browse templates, preview the value, then see it and its history on the profile', w: 1440, h: 900, video: 'videos/cp-round2.mp4', poster: 'images/cp-exports/cp-round2-poster.png' }] },
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
