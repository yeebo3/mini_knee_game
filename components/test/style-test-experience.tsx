"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { styleQuestions } from "@/data/style-test";
import { buildStyleSession } from "@/lib/test";
import { saveStyleSession } from "@/lib/storage";
import { StyleAnswerRecord } from "@/types/learning";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

export function StyleTestExperience() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<StyleAnswerRecord[]>([]);

  const currentQuestion = styleQuestions[currentIndex];
  const progress = ((currentIndex + 1) / styleQuestions.length) * 100;

  function handleNext() {
    if (!selectedOptionId) {
      return;
    }

    const selectedOption = currentQuestion.options.find((option) => option.id === selectedOptionId);

    if (!selectedOption) {
      return;
    }

    const nextAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedProfileId: selectedOption.profileId
      }
    ];

    if (currentIndex === styleQuestions.length - 1) {
      const session = buildStyleSession(nextAnswers);
      saveStyleSession(session);
      router.push("/test/result");
      return;
    }

    setAnswers(nextAnswers);
    setCurrentIndex((value) => value + 1);
    setSelectedOptionId(null);
  }

  function resetTest() {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setAnswers([]);
  }

  return (
    <section className="page-section">
      <div className="page-shell">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="border-ink/15 bg-ink/5 text-ink">Module 02</Badge>
            <h1 className="mt-4 font-serif text-4xl text-ink">学习风格测试</h1>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
              以较克制的问卷交互，识别你更偏向哪一种习概理解路径。结果不是娱乐化标签，而是一份可用于复习规划的学习画像报告。
            </p>
          </div>
          <div className="w-full max-w-md rounded-[1.5rem] border border-line bg-white p-5 shadow-card">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>
                进度 {currentIndex + 1}/{styleQuestions.length}
              </span>
              <span>沉浸式逐题切换</span>
            </div>
            <ProgressBar className="mt-4" value={progress} />
          </div>
        </div>

        <Card className="mx-auto max-w-5xl p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{`问题 ${currentIndex + 1}`}</Badge>
            <Badge className="bg-sand">Learning Profile</Badge>
          </div>
          <CardTitle className="mt-6 text-3xl leading-[1.6]">{currentQuestion.prompt}</CardTitle>
          <CardText className="mt-3">{currentQuestion.note}</CardText>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = option.id === selectedOptionId;

              return (
                <button
                  key={option.id}
                  className={cn(
                    "rounded-[1.5rem] border p-5 text-left transition",
                    "hover:border-ink/40 hover:bg-ink/[0.03]",
                    isSelected && "border-ink bg-ink/[0.05]"
                  )}
                  onClick={() => setSelectedOptionId(option.id)}
                  type="button"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Option 0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{option.text}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button disabled={!selectedOptionId} onClick={handleNext}>
              {currentIndex === styleQuestions.length - 1 ? "生成学习画像" : "继续下一题"}
            </Button>
            <Button onClick={resetTest} variant="ghost">
              重新开始
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
