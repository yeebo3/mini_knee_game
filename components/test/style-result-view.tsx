"use client";

import { useEffect, useMemo, useState } from "react";
import { styleProfiles } from "@/data/style-test";
import { loadStyleSession } from "@/lib/storage";
import { getStyleProfile } from "@/lib/test";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { SectionIntro } from "@/components/ui/section-intro";
import { StyleSession } from "@/types/learning";

export function StyleResultView() {
  const [session, setSession] = useState<StyleSession | null>(null);

  useEffect(() => {
    setSession(loadStyleSession());
  }, []);

  const profile = useMemo(() => {
    if (!session) {
      return null;
    }

    return getStyleProfile(session.dominantProfileId);
  }, [session]);

  if (!session || !profile) {
    return (
      <section className="page-section">
        <div className="page-shell">
          <Card className="p-8 md:p-10">
            <CardTitle>暂无学习画像结果</CardTitle>
            <CardText className="mt-4">
              先完成一次学习风格测试，系统才会生成你的学习画像报告。
            </CardText>
            <div className="mt-6">
              <Button href="/test">开始测试</Button>
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
            eyebrow="Learning Profile"
            title={profile.name}
            description={`${profile.subtitle}。根据本次作答结果整理了适合你的复习建议，完成时间：${formatDate(session.completedAt)}。`}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {session.scores.map((item) => {
              const current = styleProfiles.find((entry) => entry.id === item.profileId);
              const percent = (item.score / session.answers.length) * 100;

              return (
                <div key={item.profileId} className="rounded-[1.4rem] border border-white/90 bg-white/90 p-4">
                  <p className="text-sm text-slate-500">{current?.name}</p>
                  <p className="mt-2 text-2xl font-semibold text-ink">{item.score}</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200/70">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-clay to-crimson"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6 md:p-8">
            <CardTitle>画像解读</CardTitle>
            <CardText className="mt-4">{profile.summary}</CardText>
            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">特征分析</p>
              <div className="mt-4 space-y-3">
                {profile.traits.map((trait) => (
                  <div key={trait} className="rounded-[1.3rem] border border-line bg-sand/60 p-4 text-sm leading-7 text-slate-700">
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <CardTitle>复习建议</CardTitle>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-ink">学习建议</p>
                <div className="mt-4 space-y-3">
                  {profile.suggestions.map((suggestion) => (
                    <div key={suggestion} className="rounded-[1.3rem] border border-line bg-white p-4 text-sm leading-7 text-slate-700">
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">建议尝试的方法</p>
                <div className="mt-4 space-y-3">
                  {profile.reviewMethods.map((method) => (
                    <div key={method} className="rounded-[1.3rem] border border-line bg-white p-4 text-sm leading-7 text-slate-700">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/test">重新测试</Button>
              <Button href="/quiz" variant="secondary">
                去做闯关答题
              </Button>
              <Button href="/knowledge" variant="ghost">
                浏览知识卡片
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
