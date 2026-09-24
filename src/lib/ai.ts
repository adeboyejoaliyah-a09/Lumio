import { ChatMessage, LearningRequest, LumioAIResponse } from "@/types/ai";

const mockResponses: LumioAIResponse[] = [
  {
    teaching_mode: "visual_structured",
    explanation:
      "### A clear way to look at the idea\n1. Start by identifying the core pieces of the problem.\n2. Connect each piece to what it changes.\n3. Rebuild the full concept once the parts feel familiar.\n\n- Definitions stay separate from examples.\n- Key relationships are grouped together.\n- The final step shows how the pattern fits as a whole.",
    supportive_note:
      "You do not need to hold every detail at once. Let's organize the idea so it feels easier to return to.",
    check_for_understanding: {
      question: "Which step helps you reconnect the parts into one full idea?",
      options: [
        "Start by identifying the core pieces",
        "Connect each piece to what it changes",
        "Rebuild the full concept once the parts feel familiar",
        "Skip directly to the final answer",
      ],
      hint: "Look for the step that turns separate parts back into one connected explanation.",
    },
    adaptive_metrics: {
      perceived_confidence: "building",
      recommended_next_step: "practice_similar",
    },
  },
  {
    teaching_mode: "chunked_step_by_step",
    explanation:
      "### One small step at a time\n1. Focus on the first move only.\n2. Check whether that move makes sense.\n3. Add the next move after the first one feels steady.\n\nThis keeps the explanation manageable and avoids piling on too much at once.",
    supportive_note:
      "You're making progress by staying with one manageable step instead of rushing through the whole topic.",
    check_for_understanding: {
      question: "What should happen before moving to the next chunk?",
      options: [
        "Memorize the entire topic",
        "Check whether the current step makes sense",
        "Start over from the beginning",
        "Ignore the first step",
      ],
      hint: "The goal is not speed; it's making sure the current piece feels steady.",
    },
    adaptive_metrics: {
      perceived_confidence: "steady",
      recommended_next_step: "verify_current_step",
    },
  },
  {
    teaching_mode: "interactive_socratic",
    explanation:
      "### Let's reason it out together\n- What information do you already know?\n- Which part still feels uncertain?\n- If you had to test one idea first, which would it be?\n\nLumio uses questions like these to help you build the answer instead of handing it over immediately.",
    supportive_note:
      "Your reasoning matters here. Even a partial idea gives Lumio a better path for the next explanation.",
    check_for_understanding: {
      question: "What is the main purpose of a Socratic prompt in Lumio?",
      options: [
        "To replace student thinking",
        "To encourage reasoning before revealing the answer",
        "To end the session quickly",
        "To avoid giving any support",
      ],
      hint: "Look for the option that keeps the student actively involved in the explanation.",
    },
    adaptive_metrics: {
      perceived_confidence: "emerging",
      recommended_next_step: "student_reasoning_prompt",
    },
  },
  {
    teaching_mode: "analogy_real_world",
    explanation:
      "### Think of it like something familiar\nImagine learning this concept the way you would organize a backpack.\n- The backpack is the full problem.\n- Each pocket holds one type of information.\n- Finding the right item becomes easier because everything has a place.\n\nOnce the idea feels concrete, the formal academic language becomes easier to understand.",
    supportive_note:
      "Grounding an abstract idea in something familiar is a strong strategy, not a shortcut.",
    check_for_understanding: {
      question: "Why does Lumio use an everyday analogy first?",
      options: [
        "To avoid teaching the real concept",
        "To make the abstract idea more concrete before formal terms",
        "To make the session feel childish",
        "To replace practice completely",
      ],
      hint: "Choose the answer that connects familiarity with understanding.",
    },
    adaptive_metrics: {
      perceived_confidence: "building",
      recommended_next_step: "connect_analogy_to_terms",
    },
  },
  {
    teaching_mode: "exploratory_gamified",
    explanation:
      "### Mini challenge mode\n1. Try one low-stakes challenge.\n2. Notice what felt easier than last time.\n3. Celebrate the improvement, then level up slightly.\n\n- Progress indicators highlight momentum.\n- Challenges stay purposeful, not distracting.\n- Small wins help students stay engaged with the concept.",
    supportive_note:
      "Nice work sticking with the challenge. Small wins are exactly how deeper understanding gets built.",
    check_for_understanding: {
      question: "What makes the gamified mode useful in Lumio?",
      options: [
        "It turns every lesson into a game only",
        "It adds small, purposeful challenges that support learning",
        "It removes reflection from the session",
        "It focuses only on speed",
      ],
      hint: "Look for the option that keeps the learning goal at the center.",
    },
    adaptive_metrics: {
      perceived_confidence: "growing",
      recommended_next_step: "celebrate_then_extend",
    },
  },
];

const mockLatency = 700;

export function createWelcomeMessage(): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content:
      "Hi, I'm Lumio. Tell me what you're learning, share your current thinking, or ask for a fresh explanation in the style that helps you most.",
    timestamp: new Date().toISOString(),
  };
}

function getAssistantTurnCount(history: ChatMessage[]) {
  return history.filter((message) => message.role === "assistant").length;
}

export async function sendLearningMessage(
  request: LearningRequest,
): Promise<LumioAIResponse> {
  await new Promise((resolve) => setTimeout(resolve, mockLatency));

  if (request.message.toLowerCase().includes("error")) {
    throw new Error("Lumio ran into a temporary issue. Please try that question again.");
  }

  const responseIndex = (getAssistantTurnCount(request.history) - 1) % mockResponses.length;

  return mockResponses[Math.max(responseIndex, 0)];
}
