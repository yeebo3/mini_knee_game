"use client";

import { useMemo, useState } from "react";
import { knowledgeCards } from "@/data/knowledge";
import { Badge } from "@/components/ui/badge";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { SectionIntro } from "@/components/ui/section-intro";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const chapterFilters = ["全部", ...Array.from(new Set(knowledgeCards.map((item) => item.chapter)))];

export function KnowledgeLibrary() {
  const [activeFilter, setActiveFilter] = useState("全部");

  const filteredCards = useMemo(() => {
    if (activeFilter === "全部") {
      return knowledgeCards;
    }

    return knowledgeCards.filter((card) => card.chapter === activeFilter);
  }, [activeFilter]);

  return (
    <section className="page-section">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Knowledge Deck"
          title="知识卡片"
          description="把课程重点整理成卡片，方便按章节浏览，也适合结合答题结果快速回顾薄弱内容。"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {chapterFilters.map((filter) => (
            <button
              key={filter}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                activeFilter === filter
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-slate-600 hover:border-ink hover:text-ink"
              )}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCards.map((card) => (
            <Card key={card.id} className="flex h-full flex-col p-6">
              <Badge className="w-fit">{card.chapter}</Badge>
              <CardTitle className="mt-5">{card.title}</CardTitle>
              <CardText className="mt-4">{card.summary}</CardText>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.keywords.map((keyword) => (
                  <Badge key={keyword} className="bg-sand">
                    {keyword}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 rounded-[1.3rem] border border-line bg-sand/60 p-4 text-sm leading-7 text-slate-700">
                <span className="font-semibold text-ink">复习提示：</span> {card.takeaway}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/quiz">回到闯关答题</Button>
          <Button href="/test" variant="secondary">
            去做学习画像
          </Button>
        </div>
      </div>
    </section>
  );
}
