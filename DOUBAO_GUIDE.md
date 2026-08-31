# 豆包每日资讯填报 & 云端单文件发布指南 📋

本文档用于指导豆包（Doubao AI）与维护者如何快速生成日报数据，并一键发布到 **云端单页面平台（如 aiforce.cloud / 静态托管）** 或本地运行。

---

## 🌐 针对 aiforce.cloud 等云端平台的发布方案

在类似 `https://4kxfgnuzzxu4h.aiforce.cloud/app/...` 的云端平台中，由于通常只托管单个 HTML 文件，无法读取外部 `.js` 附件。

为此，**`Unity开发资讯.html` 现已升级为【100% 全自包含单文件架构】**：
- **零外部文件依赖**：所有样式、图标、每日数据 `window.DAILY_NEWS_DATA`、交互引擎全部内置于单个 HTML 文件中。
- **随处发布、随处可用**：直接将 `Unity开发资讯.html` 上传或粘贴到云端平台即可完美运行！

---

## 🚀 每天更新并发布到云端的极简方式（二选一）

### 方式 1：网页可视化一键导出（最推荐，纯鼠标操作）
1. 复制下方的 Prompt 发给豆包，豆包输出今日数据代码；
2. 打开 `Unity开发资讯.html`，点击右上角 **「📥 导入/更新数据」**；
3. 粘贴豆包输出的代码，点击 **「立即生效」**；
4. 点击顶部导航栏的 **「💾 导出单文件 HTML」** 按钮；
5. 浏览器会立即自动下载一个包含最新数据的单文件 `Unity开发资讯_YYYY-MM-DD.html`；
6. 直接把这个 HTML 部署/上传到 `aiforce.cloud` 即可！

### 方式 2：直接替换 HTML 中的数据块
打开 `Unity开发资讯.html`，搜索找到以下清晰的注释区域：
```html
<!-- ========================================================
     📦 豆包每日数据填入区 (全自包含独立运行模式)
     ======================================================== -->
<script id="inlineDailyNewsData">
window.DAILY_NEWS_DATA = {
  // 把豆包生成的数据直接粘贴替换这里的大括号内容即可！
};
</script>
```

---

## 🤖 每日发送给豆包的 Prompt 模板（直接复制使用）

```text
你是一位资深游戏开发与游戏行业科技资讯专家。
请帮我搜集【今日（YYYY年MM月DD日）】游戏引擎（Unity/UE/团结引擎/Godot等）、游戏开发技术、行业大厂与商业动态、GitHub热门开源项目、游戏技术教程等核心资讯。

请严格按照以下 JavaScript / JSON 数据格式输出，不要附带多余的解释，直接输出可赋值给 `window.DAILY_NEWS_DATA` 的完整 JS 代码：

```javascript
window.DAILY_NEWS_DATA = {
  meta: {
    date: "YYYY-MM-DD", // 必须是 YYYY-MM-DD 格式，如 "2026-08-28"
    weekday: "星期X",
    title: "游戏开发与行业资讯日报",
    subtitle: "Unity / 虚幻引擎 / 游戏行业 / GitHub开源 / AI前沿技术深度追踪",
    updateTime: "YYYY-MM-DD 10:30",
    editor: "资讯聚合机器人 & 行业观察组",
    highlights: [
      "🔥 4-5条当日最重磅的一句话头条摘要"
    ],
    engineStatus: [
      { name: "Unity 6.3", type: "unity", status: "最新 LTS 长期支持版", badge: "LTS 生产推荐", color: "blue" },
      { name: "Unity 6.2", type: "unity", status: "最新功能版 (6000.2)", badge: "最新版", color: "indigo" },
      { name: "团结引擎 1.10.1", type: "tuanjie", status: "8月12日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "8月25日 Hotfix 发布", badge: "UE5最终大版", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "蓝图逐渐退场", color: "pink" },
      { name: "UEFN v42.00", type: "unreal", status: "内嵌 MCP Server", badge: "AI Agent 建岛", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-today-spotlight",
    category: "games", // 可选: engine / industry / games / opensource / tutorials / ai
    categoryName: "热门游戏 · 焦点头条",
    tag: "全球焦点",
    title: "今日最重磅头条标题",
    summary: "150字左右的头条精辟摘要...",
    image: "封面图片URL或留空",
    source: "来源媒体或官方机构",
    date: "YYYY-MM-DD",
    url: "https://真实原文链接URL.html", // 【重要】真实网址
    readTime: "3 分钟",
    hotScore: 98,
    badges: ["热搜", "首发", "3A大作"],
    tags: ["标签1", "标签2", "标签3"],
    content: [
      {
        title: "核心亮点",
        type: "list", // list为列表，text为段落
        items: ["要点1", "要点2", "要点3"]
      },
      {
        title: "深度分析与建议",
        type: "text",
        text: "深度解析段落..."
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 财报 / 投融资 / 展会展讯" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 核心玩法剖析 / 独立神作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 插件 / 研发工具" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "架构设计 / 图形渲染 / 性能优化指南" },
    { id: "ai", name: "AI游戏前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / MCP" }
  ],
  items: [
    // 包含 15~25 条高质量资讯
    {
      id: "唯一英文ID(如 unity-new-feature)",
      category: "engine", // 分类ID: engine | industry | games | opensource | tutorials | ai
      subcategory: "子分类(如 Unity / 虚幻引擎 / 财报 / 工具链 / 渲染)",
      title: "新闻卡片标题",
      summary: "100字左右精准摘要",
      source: "来源媒体/官方",
      date: "YYYY-MM-DD",
      url: "https://真实原文链接URL.html", // 【重要】真实网址
      image: "可选缩略图URL",
      badge: "徽章文本(如 Stable / Hotfix / 开源 / 免费 / 财报)",
      badgeType: "engine", // 可选: engine(蓝) | hot(红) | ai(紫) | business(绿) | game(橙) | event(粉)
      readTime: "2 分钟",
      hotScore: 92,
      tags: ["Unity", "性能优化", "C#"],
      content: [
        {
          title: "核心要点",
          type: "list",
          items: ["要点1", "要点2"]
        },
        {
          title: "详细解读",
          type: "text",
          text: "解析内容..."
        }
      ]
    }
  ]
};
```
```

---

## 📊 字段速查表

| 字段名 | 说明 |
| :--- | :--- |
| `meta.date` | 当天日期（`YYYY-MM-DD`） |
| `meta.highlights` | 顶部长条滚动的 4~5 条重大看点 |
| `meta.engineStatus` | 核心引擎矩阵状态追踪（Unity 6.3/UE 5.8/团结引擎等） |
| `items[].url` | 原文真实链接（卡片上的「直达网页 ↗」与抽屉里的直达按钮） |
| `items[].content` | 抽屉深度阅读器的段落 (`type: "text"`) 与列表 (`type: "list"`) |
