import { quizQuestions } from "@/data/quiz";
import { ChapterStat, QuizAnswerRecord, QuizSession } from "@/types/learning";

export function buildQuizSession(answers: QuizAnswerRecord[]): QuizSession {
  const correct = answers.filter((answer) => answer.isCorrect).length;
  const chapterMap = new Map<string, ChapterStat>();

  answers.forEach((answer) => {
    const question = quizQuestions.find((item) => item.id === answer.questionId);

    if (!question) {
      return;
    }

    const current = chapterMap.get(question.chapter) ?? {
      chapter: question.chapter,
      total: 0,
      correct: 0,
      accuracy: 0
    };

    current.total += 1;

    if (answer.isCorrect) {
      current.correct += 1;
    }

    current.accuracy = (current.correct / current.total) * 100;
    chapterMap.set(question.chapter, current);
  });

  return {
    completedAt: new Date().toISOString(),
    total: quizQuestions.length,
    correct,
    accuracy: (correct / quizQuestions.length) * 100,
    answers,
    chapterStats: Array.from(chapterMap.values()).sort((a, b) => b.accuracy - a.accuracy)
  };
}

export function getQuizLevel(accuracy: number) {
  if (accuracy >= 85) {
    return "掌握较稳";
  }

  if (accuracy >= 65) {
    return "基础良好";
  }

  return "建议回顾";
}
