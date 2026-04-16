import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "习概互动学习站",
    template: "%s | 习概互动学习站"
  },
  description:
    "一个用于课程作业展示的互动学习站，围绕闯关答题、学习画像测试和知识卡片三个模块帮助你梳理课程重点并完成复盘。",
  applicationName: "习概互动学习站",
  keywords: ["习概", "课程作业", "互动学习", "Next.js", "闯关答题", "知识卡片"],
  category: "education",
  openGraph: {
    title: "习概互动学习站",
    description:
      "一个用于课程作业展示的互动学习站，围绕闯关答题、学习画像测试和知识卡片三个模块帮助你梳理课程重点并完成复盘。",
    type: "website",
    locale: "zh_CN",
    siteName: "习概互动学习站"
  },
  twitter: {
    card: "summary",
    title: "习概互动学习站",
    description:
      "一个用于课程作业展示的互动学习站，围绕闯关答题、学习画像测试和知识卡片三个模块帮助你梳理课程重点并完成复盘。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
