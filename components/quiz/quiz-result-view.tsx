"use client";

import { useEffect, useMemo, useState } from "react";
import { loadQuizSession } from "@/lib/storage";
import { formatDate, toPercent } from "@/lib/utils";
import { getQuizLevel } from "@/lib/quiz";
import { Button } from "@/components/ui/button";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { SectionIntro } from "@/components/ui/section-intro";
import { QuizSession } from "@/types/learning";

export function QuizResultView() {
  const [session, setSession] = useState<QuizSession | null>(null);

  useEffect(() => {
    setSession(loadQuizSession());
  }, []);

  const weakestChapters = useMemo(() => {
    if (!session) {
      return [];
    }

    return [...session.chapterStats].sort((a, b) => a.accuracy - b.accuracy).slice(0, 2);
  }, [session]);

  if (!session) {
    return (
      <section className="page-section">
        <div className="page-shell">
          <Card className="p-8 md:p-10">
            <CardTitle>暂无答题结果</CardTitle>
            <CardText className="mt-4">
              先完成一次闯关答题，系统才会生成总结果与章节统计。
            </CardText>
            <div className="mt-6">
              <Button href="/quiz">开始闯关答题</Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-shell space-y-8">
        <Card className="report-grid overflow-hidden p-8 md:p-10">
          <SectionIntro
            eyebrow="Quiz Report"
            title={`${getQuizLevel(session.accuracy)} · 闯关答题结果`}
            description="结果页不仅展示总分，也结合章节准确率给出复习重点，强化课程作业展示中的“分析感”和“报告感”。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5">
              <p className="text-sm text-slate-500">正确题数</p>
              <p className="mt-3 text-3xl font-semibold text-ink">
                {session.correct}/{session.total}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5">
              <p className="text-sm text-slate-500">正确率</p>
              <p className="mt-3 text-3xl font-semibold text-ink">{toPercent(session.accuracy)}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5">
              <p className="text-sm text-slate-500">完成时间</p>
              <p className="mt-3 text-lg font-semibold text-ink">
                {formatDate(session.completedAt)}
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6 md:p-8">
            <CardTitle>复习建议</CardTitle>
            <CardText className="mt-4">
              当前结果显示你已经完成了一轮知识检验。建议优先复看准确率偏低的章节，再结合知识卡片进行有针对性的整理。
            </CardText>
            <div className="mt-6 space-y-4">
              {weakestChapters.map((item) => (
                <div key={item.chapter} className="rounded-[1.4rem] border border-line bg-sand/60 p-4">
                  <p className="text-sm font-semibold text-ink">{item.chapter}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    当前准确率 {toPercent(item.accuracy)}，建议优先回顾章节主线与高频关键词。
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quiz">再做一遍</Button>
              <Button href="/knowledge" variant="secondary">
                查看知识卡片
              </Button>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <CardTitle>章节统计</CardTitle>
            <CardText className="mt-4">
              按章节统计正确率，方便展示哪些知识模块已经掌握，哪些仍需补强。
            </CardText>
            <div className="mt-8 space-y-5">
              {session.chapterStats.map((item) => (
                <div key={item.chapter}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{item.chapter}</span>
                    <span className="text-slate-500">
                      {item.correct}/{item.total} · {toPercent(item.accuracy)}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-200/70">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-clay to-crimson"
                      style={{ width: `${item.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
