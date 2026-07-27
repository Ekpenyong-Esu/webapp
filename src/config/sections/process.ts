/**
 * Engagement model ("How we work"). A light, four-step process that tells
 * prospects how a project runs before they book a call — reducing friction and
 * adding professionalism. Plain data rendered by the Process component.
 */
export const process = {
  heading: "How we work",
  subheading: "A clear, low-friction path from first conversation to handover.",
  steps: [
    {
      title: "Discovery",
      description:
        "A short call to understand the problem, constraints, and what success looks like.",
    },
    {
      title: "Scoping",
      description:
        "A written proposal with milestones, timeline, and a clear budget — project-based, retainer, or hourly.",
    },
    {
      title: "Build",
      description:
        "Iterative delivery with regular check-ins, working demos, and code you can review as we go.",
    },
    {
      title: "Handover",
      description:
        "Documentation, source, and a walkthrough so your team can own and extend the work.",
    },
  ],
} as const;
