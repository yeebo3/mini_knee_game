import { QuizSession, StyleSession } from "@/types/learning";

export const QUIZ_SESSION_KEY = "xigai-quiz-session";
export const STYLE_SESSION_KEY = "xigai-style-session";

export function saveQuizSession(session: QuizSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(session));
}

export function loadQuizSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(QUIZ_SESSION_KEY);
  return raw ? (JSON.parse(raw) as QuizSession) : null;
}

export function saveStyleSession(session: StyleSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STYLE_SESSION_KEY, JSON.stringify(session));
}

export function loadStyleSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STYLE_SESSION_KEY);
  return raw ? (JSON.parse(raw) as StyleSession) : null;
}
