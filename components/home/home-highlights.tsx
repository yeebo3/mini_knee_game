import { homeHighlights } from "@/data/site";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { SectionIntro } from "@/components/ui/section-intro";

export function HomeHighlights() {
  return (
    <section className="page-section pt-0">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Core Modules"
          title="从练习到复盘，三步完成一轮学习"
          description="先通过答题检验掌握情况，再用学习画像了解自己的复习偏好，最后用知识卡片集中回顾重点，让复习过程更清楚、更连贯。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homeHighlights.map((item, index) => (
            <Card key={item.title} className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink/6 text-sm font-semibold text-ink">
                0{index + 1}
              </div>
              <CardTitle className="mt-5">{item.title}</CardTitle>
              <CardText className="mt-3">{item.description}</CardText>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
