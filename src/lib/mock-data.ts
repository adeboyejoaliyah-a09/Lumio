import { DashboardData, LearningSession, ProfileData } from "@/types/learning";

export const dashboardData: DashboardData = {
  stats: [
    { label: "Learning streak", value: "12 days", context: "steady practice" },
    { label: "Topics practiced", value: "8", context: "this month" },
    { label: "Sessions completed", value: "24", context: "guided conversations" },
    { label: "Concept checks", value: "41", context: "recent understanding prompts" },
  ],
  recentActivity: [
    {
      title: "Worked through slope-intercept form",
      summary: "Used a visual explanation first, then switched into a quick reasoning check.",
      time: "Today · 10 minutes",
    },
    {
      title: "Reviewed fractions with analogy mode",
      summary: "Connected equivalent fractions to measuring cups and kitchen ratios.",
      time: "Yesterday · 14 minutes",
    },
    {
      title: "Practiced vocabulary in chunked mode",
      summary: "Broke a dense reading passage into smaller meaning checks.",
      time: "2 days ago · 9 minutes",
    },
  ],
  teachingModes: [
    "Visual / Structured",
    "Chunked / Step-by-step",
    "Interactive / Socratic",
    "Analogy / Real-world",
    "Exploratory / Gamified",
  ],
  conceptsPracticed: [
    "Slope-intercept form",
    "Equivalent fractions",
    "Inference from context clues",
    "Evidence-based explanation writing",
  ],
  recommendedPractice:
    "Try a short step-by-step algebra review, then answer one confidence-building check question.",
};

export const mockSessions: LearningSession[] = [
  {
    id: "session-algebra",
    topic: "Understanding slope-intercept form",
    date: "September 24, 2026",
    duration: "18 min",
    conceptsPracticed: ["Slope", "Y-intercept", "Equation structure"],
    summary:
      "Lumio used a visual explanation first, then guided a short concept check to reinforce what each part of the equation controls.",
  },
  {
    id: "session-fractions",
    topic: "Equivalent fractions through real-world analogies",
    date: "September 23, 2026",
    duration: "14 min",
    conceptsPracticed: ["Fraction equivalence", "Scaling", "Simplifying"],
    summary:
      "A measuring-cup analogy helped anchor the concept before moving into more formal fraction language and guided practice.",
  },
  {
    id: "session-reading",
    topic: "Finding evidence in a reading passage",
    date: "September 21, 2026",
    duration: "11 min",
    conceptsPracticed: ["Text evidence", "Reasoning", "Short response planning"],
    summary:
      "The session used chunked support and Socratic prompts so the student could build the answer rather than copy one.",
  },
];

export const profileData: ProfileData = {
  name: "Maya Johnson",
  email: "maya@example.com",
  preferences: [
    { label: "Preferred teaching style", value: "Visual / Structured" },
    { label: "Session pace", value: "Steady with quick check-ins" },
    { label: "Encouragement style", value: "Calm and supportive" },
    { label: "Practice preference", value: "Guided first, independent second" },
  ],
  accountSettings: [
    "Update profile details",
    "Manage connected school account",
    "Choose reminder timing",
  ],
  notifications: [
    "Session reminders twice a week",
    "Encouragement after completed learning streaks",
    "Suggested practice when a topic has been quiet for a few days",
  ],
};
