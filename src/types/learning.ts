export type DashboardStat = {
  label: string;
  value: string;
  context: string;
};

export type ActivityItem = {
  title: string;
  summary: string;
  time: string;
};

export type DashboardData = {
  stats: DashboardStat[];
  recentActivity: ActivityItem[];
  teachingModes: string[];
  conceptsPracticed: string[];
  recommendedPractice: string;
};

export type LearningSession = {
  id: string;
  topic: string;
  date: string;
  duration: string;
  conceptsPracticed: string[];
  summary: string;
};

export type ProfilePreference = {
  label: string;
  value: string;
};

export type ProfileData = {
  name: string;
  email: string;
  preferences: ProfilePreference[];
  accountSettings: string[];
  notifications: string[];
};
