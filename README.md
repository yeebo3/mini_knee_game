# 习概互动学习站

一个基于 `Next.js` 构建的课程作业展示网站，围绕“习概”课程做了三个互动模块：

- `闯关答题`：逐题作答并查看即时解析
- `学习画像测试`：根据答题倾向生成学习风格画像
- `知识卡片`：按主题浏览重点知识内容

项目当前为纯前端实现，不依赖后端服务，也不需要配置环境变量。答题记录和测试结果会保存在浏览器 `localStorage` 中。

## 技术栈

- `Next.js 14`
- `React 18`
- `TypeScript`
- `Tailwind CSS`

## 项目结构

```text
xigai/
├── app/                # Next.js App Router 页面
├── components/         # 页面模块与通用 UI 组件
├── data/               # 题库、测试题、知识卡片等静态数据
├── lib/                # 工具函数与本地存储逻辑
├── types/              # TypeScript 类型定义
├── package.json
└── README.md
```

## 本地运行

### 环境准备

- 安装 Node.js
- 安装 npm

建议使用当前 LTS 版本的 Node.js。

### 1. 克隆仓库

```bash
git clone <你的仓库地址>
cd xigai
```

### 2. 安装依赖

如果仓库中保留了 `package-lock.json`，优先使用：

```bash
npm ci
```

如果你只是临时拉下代码，也可以使用：

```bash
npm install
```

### 3. 启动开发环境

```bash
npm run dev
```

启动后在浏览器访问：

```text
http://localhost:3000
```

## 可用脚本

```bash
npm run dev        # 启动本地开发服务器
npm run build      # 构建生产版本
npm run start      # 启动生产环境服务
npm run typecheck  # TypeScript 类型检查
```

说明：由于 `tsconfig.json` 包含 `.next/types/**/*.ts`，第一次在全新环境里执行 `npm run typecheck` 前，建议先运行一次 `npm run dev` 或 `npm run build` 来生成对应类型文件。

## 生产环境运行

如果你希望在其他人电脑上以接近正式环境的方式运行，可以按下面步骤操作：

```bash
npm ci
npm run build
npm run start
```

默认访问地址同样是：

```text
http://localhost:3000
```

## 页面说明

- `/`：首页，展示项目定位和模块导览
- `/quiz`：闯关答题页
- `/quiz/result`：答题结果页
- `/test`：学习画像测试页
- `/test/result`：学习画像结果页
- `/knowledge`：知识卡片页

## 数据与状态说明

- 题库、测试题和知识卡片数据都放在 `data/` 目录
- 用户在浏览器中的答题记录会写入 `localStorage`
- 如果需要重置本地记录，可以清除浏览器站点数据或手动删除以下键：
  - `xigai-quiz-session`
  - `xigai-style-session`

