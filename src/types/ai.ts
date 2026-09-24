export type TeachingMode =
  | "visual_structured"
  | "chunked_step_by_step"
  | "interactive_socratic"
  | "analogy_real_world"
  | "exploratory_gamified";

export type CheckForUnderstanding = {
  question: string;
  options: string[];
  hint: string;
};

export type AdaptiveMetrics = {
  perceived_confidence: string;
  recommended_next_step: string;
};

export type LumioAIResponse = {
  teaching_mode: TeachingMode;
  explanation: string;
  supportive_note: string;
  check_for_understanding: CheckForUnderstanding;
  adaptive_metrics: AdaptiveMetrics;
};

export type ChatMessage = {
  id: string;
  role: "assistant" | "student";
  content: string;
  timestamp: string;
  response?: LumioAIResponse;
};

export type LearningRequest = {
  message: string;
  history: ChatMessage[];
};
