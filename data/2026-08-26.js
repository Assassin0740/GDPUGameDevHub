/**
 * 游戏开发与行业资讯日报 - 2026-08-26 (科隆游戏展特辑)
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-08-26",
    weekday: "星期三",
    title: "游戏开发与行业资讯日报",
    subtitle: "科隆游戏展特辑 / 虚幻引擎6路线图 / 开源工具链",
    updateTime: "2026-08-26 10:30",
    editor: "资讯聚合机器人",
    highlights: [
      "🎪 Gamescom 2026 科隆游戏展正式揭幕，ONL开幕夜重磅公布",
      "🔮 Epic 官宣 UE6 愿景：2027 年底 Early Access，蓝图Actor完全向前兼容",
      "⚡ 团结引擎 AnimGraph 1.0.0 正式上线全平台",
      "📦 Rust 编写的百万资产秒级依赖扫描器 unity-radar 发布"
    ],
    engineStatus: [
      { name: "Unity 6.5", type: "unity", status: "当前稳定支持版", badge: "LTS 生产推荐", color: "blue" },
      { name: "团结引擎", type: "tuanjie", status: "AnimGraph 1.0.0", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 准备发布", badge: "已知Bug修复", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "次世代兼容", color: "pink" }
    ]
  },
  hero: {
    id: "hero-gamescom-open",
    category: "industry",
    categoryName: "行业热点 · 科隆特辑",
    tag: "全球展会",
    title: "2026 科隆游戏展 ONL 开幕夜圆满落幕，中国游戏军团引爆欧洲",
    summary: "8月26日德国科隆游戏展拉开帷幕，网易《无限大》定档2027年1月15日，米哈游写实多人共斗新作《源初之结》首发亮相，创下中国厂商参展历史最高关注度。",
    image: "https://aka.doubaocdn.com/s/7z4vWSUrbG",
    source: "科隆展官方 / 每日经济新闻",
    date: "2026-08-26",
    url: "http://m.toutiao.com/group/7678479020303958547/",
    readTime: "3 分钟",
    hotScore: 97,
    badges: ["科隆展", "ONL开幕", "出海标杆"],
    tags: ["Gamescom", "米哈游", "网易", "无限大", "源初之结"],
    content: [
      {
        title: "开幕夜核心亮点",
        type: "list",
        items: [
          "全球超 1600 家展商齐聚科隆，23.3 万平米展厅爆满；",
          "《源初之结》作为 ONL 第一款重磅新作全球首秀；",
          "《无限大》宣布全球多端 2027 年 1 月 15 日同步上线并开启预注册。"
        ]
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 展会展讯" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 核心玩法" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库" }
  ],
  items: [
    {
      id: "ue6-vision",
      category: "engine",
      subcategory: "Unreal Engine",
      title: "State of Unreal 2026：UE6 愿景规划官宣，平滑迁移保障资产延续",
      summary: "Epic 明确 UE6 将于 2027 年底开启早期访问，彻底打消开发者对断崖式重构的顾虑，蓝图与 C++ 项目可无缝导入。",
      source: "Epic Games 官方",
      date: "2026-08-26",
      url: "https://post.m.smzdm.com/p/a6zd2gpz/",
      badge: "Next Gen",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 94,
      tags: ["UE6", "路线图", "向前兼容", "虚幻引擎"],
      content: [
        {
          title: "核心战略",
          type: "text",
          text: "Epic 承诺 UE6 采用兼容优先策略，现阶段使用 UE 5.8 开发的大型项目未来可平滑升级至 UE6。"
        }
      ]
    },
    {
      id: "unity-radar-release",
      category: "opensource",
      subcategory: "工具链",
      title: "song-chaoyang/unity-radar：Rust 实现的毫秒级 Unity 依赖分析工具",
      summary: "基于 Rust + SQLite + tree-sitter 开发的超高速 Unity 依赖雷达发布，秒级排查百万资产引用关系。",
      source: "GitHub",
      date: "2026-08-26",
      url: "https://github.com/song-chaoyang/unity-radar",
      badge: "Rust / 工具",
      badgeType: "hot",
      readTime: "2 分钟",
      hotScore: 93,
      tags: ["Rust", "资产依赖", "Unity", "开源工具"],
      content: [
        {
          title: "功能特性",
          type: "list",
          items: [
            "支持 CLI 命令行模式与可视化 Web UI；",
            "精准解析 GUID 与代码中的字符串隐式引用。"
          ]
        }
      ]
    }
  ]
};
