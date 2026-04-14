import { homeHighlights } from "@/data/site";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { SectionIntro } from "@/components/ui/section-intro";

export function HomeHighlights() {
  return (
    <section className="page-section pt-0">
      <div className="page-shell">
        <SectionIntro
          eyebrow="Core Modules"
          title="三段式信息架构，让展示与学习都更完整"
          description="首页承担导览与展示，闯关答题提供即时反馈，学习画像测试提供报告式输出，知识卡片页则作为内容承接层，让整个网站不是空壳切页，而是完整的学习闭环。"
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
