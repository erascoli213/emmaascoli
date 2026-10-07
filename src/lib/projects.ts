export const projects = [
  {
    slug: 'access-management', number: '01', kind: 'case',
    name: 'Designing access management at scale', title: 'Enterprise identity provisioning, made predictable.',
    description: 'A guided path through SCIM setup, so an admin can connect their directory and see access arrive exactly as expected.',
    category: 'Enterprise product · Product design', year: '2026', theme: 'access',
    problem: 'A headless CMS delivers content through APIs to whatever platform a customer uses, and enterprise customers arrive with their own directory and their own rules about who may see what. Access has to be created, changed and removed in step with that directory. SCIM is the standard that makes that possible — but setting it up meant assembling configuration by hand, with no clear way to see whether it had actually worked.',
    goal: 'Enable SCIM setup quickly and predictably: let an admin connect their identity provider, understand exactly which user attributes will move across, and confirm the integration works before anything goes live.',
    flow: ['Configure SCIM provider settings', 'Define user attributes', 'Test the integration'],
    decisions: [
      ['A setup that reads like a checklist', 'The three things an admin has to do — connect the provider, map the attributes, test the connection — become the visible spine of the flow. Nothing asks for a decision the admin is not ready to make yet.'],
      ['Show the mapping, not just the switch', 'User attributes are presented as a visible pairing between the directory and the product, so what travels across, and what arrives on the other side, is legible before anything is enabled.'],
      ['A verdict before the switch is flipped', 'Testing belongs inside setup rather than after it. Authentication, authorization and logging each report their own state, so a finished setup is something an admin can see and trust.'],
    ],
    impact: 'The aim is a setup an admin can complete and verify in one sitting, with fewer support questions and a clearer record of who holds access. What I would want to validate next: how many admins finish without help, where they stall, and how quickly a new account reaches a verified integration.',
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
