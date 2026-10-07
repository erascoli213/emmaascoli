export const projects = [
  {
    slug: 'sprout', number: '01', name: 'Sprout', title: 'A little care. A lot of growth.',
    description: 'Making plant parenthood feel a little less overwhelming and a lot more rewarding.',
    category: 'Mobile app · Product design', theme: 'sprout', year: 'Concept study',
    problem: 'Plant care advice is everywhere, but it rarely answers the question a new plant owner has right now: what does my plant need today? Sprout explores how to turn scattered advice into a calm, personal routine.',
    goal: 'Help new plant owners confidently take the next small step, without requiring them to become experts first.',
    flow: ['Add your plant', 'Build a care rhythm', 'Take one small action'],
    decisions: [
      ['A gentle first step', 'A short onboarding flow starts with one plant, its light conditions, and the owner’s experience. No lengthy profile to complete before getting value.'],
      ['Today, not everything', 'A focused home screen puts the next care task first. Plant details and deeper guidance stay one tap away, rather than competing for attention.'],
      ['Confidence over streaks', 'Flexible reminders and reassuring language make care feel achievable. Missed tasks lead to helpful next steps, not guilt.'],
    ],
    impact: 'The intended outcome is a clearer path from uncertainty to action. This is an independent concept, not a shipped product; task completion, reminder usefulness, and confidence would be evaluated in usability testing.',
  },
  {
    slug: 'common-ground', number: '02', name: 'Common Ground', title: 'Find your people. Meet your city.',
    description: 'Bringing local experiences and the people behind them a little closer together.',
    category: 'Web platform · UX / UI design', theme: 'common', year: 'Concept study',
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