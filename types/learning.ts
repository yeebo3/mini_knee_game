export type QuizOption = {
  id: string;
  label: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  background: string;
  chapter: string;
  difficulty: "基础" | "进阶" | "综合";
  tags: string[];
};

export type KnowledgeCard = {
  id: string;
  title: string;
  summary: string;
  chapter: string;
  keywords: string[];
  takeaway: string;
};

export type StyleProfileId =
  | "historical"
  | "framework"
  | "case"
  | "keyword";

export type StyleOption = {
  id: string;
  text: string;
  profileId: StyleProfileId;
};

export type StyleQuestion = {
  id: string;
  prompt: string;
  note: string;
  options: StyleOption[];
};

export type StyleProfile = {
  id: StyleProfileId;
  name: string;
  subtitle: string;
  summary: string;
  traits: string[];
  suggestions: string[];
  reviewMethods: string[];
  accent: string;
};

export type QuizAnswerRecord = {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
};

export type ChapterStat = {
  chapter: string;
  total: number;
  correct: number;
  accuracy: number;
};

export type QuizSession = {
  completedAt: string;
  total: number;
  correct: number;
  accuracy: number;
  answers: QuizAnswerRecord[];
  chapterStats: ChapterStat[];
};

export type StyleAnswerRecord = {
  questionId: string;
  selectedProfileId: StyleProfileId;
};

export type StyleScore = {
  profileId: StyleProfileId;
  score: number;
};

export type StyleSession = {
  completedAt: string;
  dominantProfileId: StyleProfileId;
  scores: StyleScore[];
  answers: StyleAnswerRecord[];
};
