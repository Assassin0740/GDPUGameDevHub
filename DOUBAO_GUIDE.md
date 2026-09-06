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
    date: "YYYY-MM-DD", // 必须是 YYYY-MM-DD 格式，如 "2026-09-05"
    weekday: "星期X",
    title: "游戏开发与行业资讯日报",
    subtitle: "Unity / 虚幻引擎 / 游戏行业 / GitHub开源 / AI前沿技术深度追踪",
    updateTime: "YYYY-MM-DD 10:30",
    editor: "资讯聚合机器人 & 行业观察组",
    highlights: [
      "🔥 4-5条当日最重磅的一句话头条摘要"
    ],
    engineStatus: [
      // ⚠️ 版本号必须与当天真实发布/生态状态对齐（不要复用陈旧模板数字）
      { name: "Unity 6.6", type: "unity", status: "最新功能版 (6000.6)", badge: "最新版", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 支持至2027年12月", badge: "LTS 生产推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "最近一次版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁", badge: "UE5工业化", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "Verse语言", color: "pink" },
      { name: "Godot 4.4", type: "godot", status: "Star 13.7万·Jolt物理集成", badge: "轻量开源", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-today-spotlight",
    category: "games", // 可选: engine / industry / games / opensource / tutorials / ai
    categoryName: "热门游戏 · 焦点头条",
    tag: "全球焦点",
    title: "今日最重磅头条标题",
    summary: "150字左右的头条精辟摘要...",
    image: "封面图片URL（必填，不能为空）", // 【重要】不能为空字符串
    source: "来源媒体或官方机构",
    date: "YYYY-MM-DD",
    url: "https://真实原文链接URL.html", // 【重要】真实网址
    readTime: "3 分钟",
    hotScore: 98,
    badges: ["热搜", "首发", "3A大作"],
    tags: ["标签1", "标签2", "标签3"],
    content: [
      { title: "核心亮点", type: "list", items: ["要点1", "要点2", "要点3"] },
      { title: "深度分析与建议", type: "text", text: "深度解析段落..." }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 财报 / 投融资 / 展会展讯" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 核心玩法剖析 / 独立神作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 插件 / 研发工具" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "架构设计 / 图形渲染 / 性能优化指南" },
    { id: "ai", name: "AI游戏前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / MCP" }
  ],
  items: [
    // 包含 25~35 条高质量资讯，每条都必须有 image（主题匹配 + 整批零重复）
    {
      id: "唯一英文ID(如 unity-new-feature)",
      category: "engine", // 必须是上面 categories 里出现过的 id 之一
      subcategory: "子分类(如 Unity / 虚幻引擎 / 财报 / 工具链 / 渲染)",
      title: "新闻卡片标题",
      summary: "100字左右精准摘要",
      source: "来源媒体/官方",
      date: "YYYY-MM-DD",
      url: "https://真实原文链接URL.html",
      image: "必填的缩略图URL（主题匹配）", // 【重要】见下方配图规范
      badge: "徽章文本(如 Stable / Hotfix / 开源 / 免费 / 财报)",
      badgeType: "engine", // engine(蓝) | hot(红) | ai(紫) | business(绿) | game(橙) | event(粉)
      readTime: "2 分钟",
      hotScore: 92,
      tags: ["Unity", "性能优化", "C#"],
      content: [
        { title: "核心要点", type: "list", items: ["要点1", "要点2"] },
        { title: "详细解读", type: "text", text: "解析内容..." }
      ]
    }
  ]
};
```
```

---

## 🖼️ 配图规范（避免重复 / 错配 / 缺失）

`image` 字段是本项目最常见的翻车点，请严格遵守以下规则：

> 🚨 **硬性熔断（生成后必须执行，不可跳过）**：拿到豆包输出的数据后，**先跑文末自检脚本**。只要出现以下任一情况，整批作废、重跑，**绝不允许把缺图/凑数版推上去**：
> - `hero.image` 为空字符串；
> - `unique_imgs != items.length + 1`（即图的总数不够）；
> - hero 与任一 item 的 `image` 重复（整批零重复）。
> 宁可少几条资讯，也绝不允许出现空图卡片。

1. **每条都必须配图**：`hero.image` 不能为空字符串（否则焦点头图掉成默认占位）；每条 `items[i].image` 也不能缺（缺图卡片就没有横幅图，列表会显得很空）。
2. **整批零重复**：同一天 `hero` 与所有 `items` 的图片 URL **互不重复**。曾经 09-05 出现 `KPsgp8dIF3` 用 5 次、`LYzEV2Xanh` 用 4 次的"图片凑数"事故，必须避免。
3. **主题必须匹配**：
   - 赛车/竞速游戏 → 赛车 / 方向盘 / F1
   - 财报 / 估值 / 指数 → 股票 K 线 / 金融图表
   - AI NPC / LLM → 机器人 / 大脑 / 网络
   - 开源代码 / Rust / C++ → 编辑器 / 代码屏
   - 本地化部署（Ollama）→ 服务器机房
   - 厂商并购 / 投融资 → 用项目自带的 `oC7uFJZg0R`（腾讯增持育碧，已确认是 M&A 主题图）
   - ⚠️ **绝不可只看 Unsplash 照片 ID 猜主题** —— 真实事故：`photo-1541339907198-e08756dedf3f` 看起来像赛车，实际是毕业生抛学士帽的图，与"Take-Two 收购 Codemasters"完全不搭。
4. **优先复用项目自有 doubao 图池**（已确认主题，零踩雷风险），其次才用 Unsplash（`https://images.unsplash.com/photo-<id>?w=900&auto=format&fit=crop&q=80`），用前务必 `curl -I` 校验可访问。

### 项目 doubao 图池（25 张，按已确认主题归档）

完整短链格式：`https://aka.doubaocdn.com/s/<id>`

| 短链 ID | 已确认主题 | 推荐场景 |
| :--- | :--- | :--- |
| `KPsgp8dIF3` | Unity 官方 / ShaderGraph | Unity 引擎、Unity 工具类 |
| `LYzEV2Xanh` | Unreal / UE 通用 | UE 引擎、UE 教程类 |
| `kUC46GIZ1O` | Epic 8月免费学习内容 | UE 教程 / Epic 学习类 |
| `ufhSJUFwjh` | UE 城市示例 PCG / Unreal MCP | UE 引擎 / 程序化内容 |
| `i7rEWxhsTE` | Godot 4.4 / GDScript | Godot 类 |
| `pyDIg3Vstm` | Godot GABE Android 编辑器 | Godot 移动端 / Android |
| `C6AlRgq0MI` | 鬼武者：剑之道 | 卡普空动作游戏 |
| `FCvxcueazL` | 巫师3 / 科隆颁奖 | CDPR / 颁奖典礼 |
| `2dfW9gFW8q` | 寂静岭：Townfall | 心理恐怖游戏 |
| `bdlDd3sSAL` | 黑神话：钟馗 15 分钟实机 | UE5 3D 写实 / 国风 3A |
| `CgtJAozqwz` | 黑神话：钟馗（hero） | 国风 3A 主题头图 |
| `FhD0tumVwT` | 黑神话：钟馗 FAQ | 国风 3A 周边 |
| `0WFtXyxcTl` | 米哈游 源初之结 主创访谈 | 米哈游 / 3D 写实 |
| `WPkQfDUwn8` | 源初之结 科隆实机 | UE5 3D 实机画面（适合"3D 资产 / 玩法"教程） |
| `Uh4aRlyMxE` | GTA6 实机深度拆解 | GTA / 开放世界 / 赛车类 |
| `VPVhUVr9l8` | GTA6 主机版 4K/30 帧 | GTA / 主机性能 |
| `NgOm3tEgIj` | GTA6 26 分钟实机 | GTA / 实机演示 |
| `4qpjxEaUzy` | GTA6 11 月如期上线 | GTA / 发售窗口 |
| `s8k7ayK5wT` | 米哈游 源初之结 科隆首曝 | 米哈游 / 3D 写实首曝 |
| `b6bwxj9xD8` | VAST AI 3D 融资 | AI 3D / 投融资 |
| `oC7uFJZg0R` | 腾讯增持育碧 | **厂商并购 / 资本运作**（最适合 M&A 主题头图） |
| `7z4vWSUrbG` | 2026 科隆展 ONL 开幕夜 | 展会 / 开幕夜 |
| `jIjoA3k9Uu` | 科隆展开幕 | 展会动态 |
| `G8Zea8acIg` | 科隆开幕夜国际大作 | 展会 / 国际大作 |
| `1RKCh3TPB6` | 科隆获奖名单 | 颁奖 / 评奖 |

> 📌 每天 hero + items 通常 25~35 张图，需保证全部唯一；不足部分按主题从 Unsplash 补齐后再用 `curl -I` 校验可访问。

---

## ⚠️ 提交前 checklist（自动化自检可参考）

- [ ] `hero.image` 不为空字符串
- [ ] hero 与所有 item 的 `image` URL 互不重复
- [ ] 每张图都主题匹配（特别是 Unsplash 图，肉眼或图片搜索验证一遍）
- [ ] 每条 item 都有 `url`（直达原文链接）
- [ ] `meta.engineStatus` 的所有引擎版本号与**当天**实际状态一致（不要复用陈旧模板数字）
- [ ] `categories` 数组的 `id` 必须包含 `all` / `engine` / `industry` / `games` / `opensource` / `tutorials` / `ai`
- [ ] 每条 `items[].category` 必须是上述合法 id 之一，否则会从分类流里消失
- [ ] `meta.date` 与 `items[].date` 格式严格 `YYYY-MM-DD`
- [ ] 用下方自检脚本跑一遍：`items >= 25 && unique_imgs == items+1 && hero.image 非空`

---

## 🔄 提交后自检脚本（Node 一行）

拿到豆包输出后，**先在本地**跑：

```bash
node -e "global.window={}; require('./data/YYYY-MM-DD.js'); const d=window.DAILY_NEWS_DATA; const all=[d.hero.image, ...d.items.map(i=>i.image)]; console.log('items=', d.items.length, '| hero.image=', !!d.hero.image, '| unique_imgs=', new Set(all).size, '| dup?', new Set(all).size !== all.length);"
```

期望输出：`items= 30 | hero.image= true | unique_imgs= 31 | dup? false`

如果 `dup? true` 或 `hero.image false`，**先回去修图再发布**，别把凑数版推上去。

---

## 📊 字段速查表

| 字段名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `meta.date` | `string` | ✅ | 当天日期（`YYYY-MM-DD`） |
| `meta.weekday` | `string` | – | 星期几 |
| `meta.title` | `string` | ✅ | 页面标题 |
| `meta.subtitle` | `string` | – | 副标题 |
| `meta.updateTime` | `string` | – | 更新时间 |
| `meta.editor` | `string` | – | 编辑者署名 |
| `meta.highlights` | `string[]` | ✅ | 顶部长条滚动的 4~5 条重大看点 |
| `meta.engineStatus` | `object[]` | ✅ | 核心引擎矩阵（按当日真实版本，**不要复用旧版本**） |
| `hero.id` / `hero.category` / `hero.title` / `hero.summary` | `string` | ✅ | 焦点头条 |
| **`hero.image`** | `string` | ✅ | **焦点头图 URL（不可为空）** |
| `hero.url` | `string` | ✅ | 原文真实链接（卡片「直达网页 ↗」按钮） |
| `hero.hotScore` | `number` | – | 热度分（0~100，显示为 HOT xx°） |
| `hero.badges` / `hero.tags` | `string[]` | – | 角标徽章 / 标签 pills |
| `hero.content` | `object[]` | – | 抽屉深度阅读器段落（`type:"list"` / `"text"`） |
| `categories` | `object[]` | ✅ | 分类列表，必须包含 `all` |
| **`items[].id`** | `string` | ✅ | 唯一英文 ID |
| **`items[].category`** | `id` | ✅ | 必须与 `categories[].id` 对齐 |
| `items[].subcategory` | `string` | – | 子分类 |
| `items[].title` / `items[].summary` / `items[].source` | `string` | ✅ | 卡片标题 / 摘要 / 来源 |
| `items[].date` | `string` | – | `YYYY-MM-DD` |
| `items[].url` | `string` | ✅ | 原文真实链接 |
| **`items[].image`** | `string` | ✅ | **缩略图 URL（每条必填、主题匹配、整批零重复）** |
| `items[].badge` | `string` | – | 徽章文本（如 "Stable" / "Hotfix" / "开源"） |
| `items[].badgeType` | `id` | – | `engine`(蓝) / `hot`(红) / `ai`(紫) / `business`(绿) / `game`(橙) / `event`(粉) |
| `items[].hotScore` | `number` | – | 热度分 |
| `items[].tags` | `string[]` | – | 标签 |
| `items[].content` | `object[]` | – | 抽屉段落（`type:"list"` / `"text"`） |