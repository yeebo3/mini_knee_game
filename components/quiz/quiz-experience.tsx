"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/data/quiz";
import { buildQuizSession } from "@/lib/quiz";
import { saveQuizSession } from "@/lib/storage";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { QuizAnswerRecord } from "@/types/learning";

export function QuizExperience() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([]);

  const currentQuestion = quizQuestions[currentIndex];
  const total = quizQuestions.length;
  const progress = ((currentIndex + 1) / total) * 100;

  const currentResult = useMemo(() => {
    if (!selectedAnswer || !submitted) {
      return null;
    }

    return {
      isCorrect: selectedAnswer === currentQuestion.correctAnswer,
      correctOption: currentQuestion.options.find(
        (option) => option.id === currentQuestion.correctAnswer
      )
    };
  }, [currentQuestion, selectedAnswer, submitted]);

  function handleSubmit() {
    if (!selectedAnswer || submitted) {
      return;
    }

    const record: QuizAnswerRecord = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect: selectedAnswer === currentQuestion.correctAnswer
    };

    setAnswers((prev) => [...prev, record]);
    setSubmitted(true);
  }

  function handleNext() {
    if (!submitted) {
      return;
    }

    if (currentIndex === total - 1) {
      const session = buildQuizSession(answers);
      saveQuizSession(session);
      router.push("/quiz/result");
      return;
    }

    setCurrentIndex((value) => value + 1);
    setSelectedAnswer(null);
    setSubmitted(false);
  }

  function resetQuiz() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setAnswers([]);
  }

  return (
    <section className="page-section">
      <div className="page-shell">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="border-clay/30 bg-clay/10 text-clay">Module 01</Badge>
            <h1 className="mt-4 font-serif text-4xl text-ink">闯关答题</h1>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
              采用一次一题的沉浸式流程。每题提交后立即展示正误、正确答案、题目解析和背景知识，把练习过程转化为即时学习过程。
            </p>
          </div>
          <div className="w-full max-w-md rounded-[1.5rem] border border-line bg-white p-5 shadow-card">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>
                进度 {currentIndex + 1}/{total}
              </span>
              <span>已完成 {answers.length} 题</span>
            </div>
            <ProgressBar className="mt-4" value={progress} />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{currentQuestion.chapter}</Badge>
              <Badge>{currentQuestion.difficulty}</Badge>
              {currentQuestion.tags.map((tag) => (
                <Badge key={tag} className="bg-sand">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardTitle className="mt-6 text-2xl leading-[1.6] md:text-[1.95rem]">
              {currentQuestion.prompt}
            </CardTitle>
            <div className="mt-8 grid gap-4">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrectOption = submitted && option.id === currentQuestion.correctAnswer;
                const isWrongSelected =
                  submitted && isSelected && option.id !== currentQuestion.correctAnswer;

                return (
                  <button
                    key={option.id}
                    className={cn(
                      "rounded-[1.4rem] border px-5 py-4 text-left transition",
                      "hover:border-ink/40 hover:bg-ink/[0.03]",
                      isSelected && "border-ink bg-ink/[0.04]",
                      submitted && "cursor-default",
                      isCorrectOption && "border-ink bg-ink/[0.06]",
                      isWrongSelected && "border-crimson bg-crimson/[0.06]"
                    )}
                    disabled={submitted}
                    onClick={() => setSelectedAnswer(option.id)}
                    type="button"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand text-sm font-semibold text-ink">
                        {option.label}
                      </span>
                      <span className="text-sm leading-7 text-slate-700">{option.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button disabled={!selectedAnswer || submitted} onClick={handleSubmit}>
                提交本题
              </Button>
              <Button disabled={!submitted} onClick={handleNext} variant="secondary">
                {currentIndex === total - 1 ? "查看总结果" : "下一题"}
              </Button>
              <Button onClick={resetQuiz} variant="ghost">
                重新开始
              </Button>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              单题反馈区
            </p>
            {!submitted || !currentResult ? (
              <div className="mt-10 rounded-[1.5rem] border border-dashed border-line bg-sand/60 p-6">
                <CardTitle className="text-xl">提交后显示解析</CardTitle>
                <CardText className="mt-3">
                  这里会显示正误判断、正确答案、解析、背景知识，以及对应的章节和关键词，突出“边答边学”的展示亮点。
                </CardText>
              </div>
            ) : (
              <div className="mt-6 space-y-5 fade-up">
                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">正误判断</p>
                  <h3
                    className={cn(
                      "mt-3 text-2xl font-semibold",
                      currentResult.isCorrect ? "text-ink" : "text-crimson"
                    )}
                  >
                    {currentResult.isCorrect ? "回答正确" : "回答有误"}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    正确答案是 {currentResult.correctOption?.label}.{" "}
                    {currentResult.correctOption?.text}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">题目解析</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {currentQuestion.explanation}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">背景知识</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {currentQuestion.background}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-line bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    章节 / 关键词
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>{currentQuestion.chapter}</Badge>
                    {currentQuestion.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
