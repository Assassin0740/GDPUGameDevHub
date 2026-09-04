/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-04
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-04",
    weekday: "星期五",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-04 08:40",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "🤖 GPT-6 Astra 发布：OpenAI称全球最智能模型，计算机操作/软件工程能力大幅跃升",
      "⚔️ 《鬼武者：剑之道》今日正式发售，试玩版全球下载突破200万次",
      "💰 Anthropic 将完成150亿美元IPO前信贷融资，腾讯计划发行40亿美元债券",
      "🔧 Unity 6.6 深度解析：WebGPU生产就绪、硬件光追加速光照烘焙、字典原生序列化",
      "📈 Godot 生态爆发：GitHub Star突破13.7万，Steam游戏从56款暴涨至1229款"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9月2日发布·WebGPU生产就绪", badge: "最新功能版", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 支持至2027年12月", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "8月27日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁", badge: "UE5工业化", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "Verse语言", color: "pink" },
      { name: "Godot 4.4", type: "godot", status: "Star 13.7万·生态爆发", badge: "轻量开源", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-gpt6-astra-release",
    category: "ai",
    categoryName: "AI前沿 · 头条深度",
    tag: "🔥 今日爆炸新闻",
    title: "GPT-6 Astra 发布：OpenAI 称全球最智能模型，计算机操作与软件工程能力大幅跃升",
    summary: "9月4日早间，OpenAI正式发布GPT-6 Astra，官方定调为'全球最智能、最符合人类意图的模型'。Astra集合了多年在预训练、强化学习和模型对齐领域的研究成果，在计算机操作、网页浏览、软件工程、网络安全等领域能力大幅跃升。对游戏开发而言，更强的代码生成、自动化测试和工具调用能力将进一步降低开发门槛，AI驱动的游戏内容生产管线有望迎来新一轮升级。",
    image: "",
    source: "凤凰网科技 / OpenAI",
    date: "2026-09-04",
    url: "https://tech.ifeng.com/c/8w8QWV0abMf",
    readTime: "4 分钟深度",
    hotScore: 99,
    tags: ["GPT-6", "OpenAI", "Astra", "AGI", "软件工程", "AI游戏开发"],
    content: [
      {
        title: "核心能力跃升",
        type: "list",
        items: [
          "OpenAI官方定调：全球最智能、最符合人类意图的模型；",
          "计算机操作、网页浏览能力大幅提升；",
          "软件工程代码生成与调试能力跃升；",
          "网络安全、多步推理等复杂任务表现增强；",
          "集合预训练、强化学习、模型对齐多年研究成果。"
        ]
      },
      {
        title: "对游戏开发的影响",
        type: "text",
        text: "GPT-6 Astra的发布对游戏开发影响深远：更强的代码生成能力可加速游戏逻辑编写和Bug修复，计算机操作能力提升意味着AI Agent可以更自主地操作Unity/UE编辑器完成资源管理和场景搭建，网页浏览能力增强使AI能更高效地检索文档和社区解决方案。结合MCP生态，游戏开发的AI自动化管线将从'辅助工具'向'自主协作'演进，中小团队的生产力将获得显著提升。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 投融资 / 展会展讯 / 市场报告" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 核心玩法剖析 / 独立神作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "架构设计 / 图形渲染 / 性能优化指南" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / MCP" }
  ],
  items: [
    // ------------------------- 引擎前沿 (Engine) -------------------------
    {
      id: "unity-66-deep-dive",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 6.6 深度解析：WebGPU 生产就绪、硬件光追加速光照烘焙、字典原生序列化",
      summary: "法媒Developpez深度解析Unity 6.6：WebGPU终于在Web构建中达到生产级质量；新增'Enter Play'受限模式默认仅当前场景；字典原生序列化提升数据持久化效率；光照烘焙系统基于Scriptable Render Pipelines Core和Unified Ray Tracing API，利用硬件光追加速生成lightmap和light probes，烘焙时间显著缩短。",
      source: "Developpez",
      date: "2026-09-02",
      url: "https://jeux.developpez.com/actu/386721/Unity-6-6-est-desormais-disponible-avec-des-ameliorations-majeures-en-performances-compilation-flux-de-travail-graphismes-2D-interface-et-plateformes/",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "深度解析",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 90,
      tags: ["Unity 6.6", "WebGPU", "光照烘焙", "光追", "序列化"],
      content: [
        {
          title: "核心更新",
          type: "list",
          items: [
            "WebGPU在Web构建中达到生产级质量；",
            "Enter Play受限模式，新项目默认仅当前场景；",
            "字典原生序列化，提升数据持久化效率；",
            "光照烘焙基于SRP Core+Unified Ray Tracing API；",
            "硬件光追加速lightmap/light probes生成。"
          ]
        }
      ]
    },
    {
      id: "unity-65-63-lts-status",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 版本现状：6.5 Update 功能版 + 6.3 LTS 支持至 2027 年 12 月",
      summary: "CSDN博主整理2026年9月Unity版本快照：当前有Unity 6.5 Update功能版，同时Unity 6.3 LTS是最新LTS版本，官方支持至2027年12月。文章对比Unity/Unreal/Godot三大引擎的版本现状、学习曲线和适用场景，帮助零基础开发者选择入门引擎。",
      source: "CSDN",
      date: "2026-09-01",
      url: "https://blog.csdn.net/2401_85555433/article/details/164269282",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "版本指南",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["Unity 6.5", "Unity 6.3 LTS", "版本选择", "入门指南"],
      content: [
        {
          title: "版本现状",
          type: "list",
          items: [
            "Unity 6.5 Update为当前功能版；",
            "Unity 6.3 LTS为最新LTS，支持至2027年12月；",
            "生产项目建议使用LTS版本；",
            "技术预研可评估6.5/6.6的新特性。"
          ]
        }
      ]
    },
    {
      id: "godot-ecosystem-boom",
      category: "engine",
      subcategory: "Godot",
      title: "Godot 生态爆发：GitHub Star 突破 13.7 万，Steam 游戏从 56 款暴涨至 1229 款",
      summary: "什么值得买深度分析Godot生态增长：截至2026年GitHub项目Star突破13.7万，六年间Steam上线游戏从56款暴涨至1229款，itch.io平台累计上线作品超3.65万款。Godot凭借完全免费开源和MIT许可证，在独立开发者和中小团队中快速渗透，成为Unity/Unreal之外的第三极。",
      source: "什么值得买",
      date: "2026-09-03",
      url: "https://post.m.smzdm.com/p/a6zq8mqo/",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "生态爆发",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 87,
      tags: ["Godot", "开源引擎", "GitHub Star", "Steam", "独立游戏"],
      content: [
        {
          title: "生态数据",
          type: "list",
          items: [
            "GitHub Star突破13.7万；",
            "Steam游戏六年从56款暴涨至1229款；",
            "itch.io累计上线作品超3.65万款；",
            "MIT完全免费开源，中小团队渗透率快速提升。"
          ]
        }
      ]
    },
    {
      id: "qualcomm-adreno-neural-fusion",
      category: "engine",
      subcategory: "移动渲染",
      title: "高通 Adreno Neural Fusion：AI 超分+帧生成整合进统一图形管线",
      summary: "高通发布Adreno Neural Fusion技术，将神经网络处理、AI超级分辨率和AI帧生成整合到统一图形管线中，改变场景渲染和优化方式。实际游戏中在提升画质的同时减少伪影、提升帧率稳定性、呈现清晰细节，解决了移动端超分技术长期存在的细节抖动和快速运动伪影问题。",
      source: "环球网 / 今日头条",
      date: "2026-09-03",
      url: "http://m.toutiao.com/group/7681275847877067264/",
      badge: "AI渲染",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["高通", "Adreno", "AI超分", "帧生成", "移动端渲染"],
      content: [
        {
          title: "技术要点",
          type: "list",
          items: [
            "神经网络处理+AI超分+AI帧生成整合到统一管线；",
            "硬件单元实现本地AI计算；",
            "减少伪影、提升帧率稳定性；",
            "解决移动端超分细节抖动和运动伪影。"
          ]
        }
      ]
    },
    {
      id: "cpp-custom-engine-blueprint",
      category: "engine",
      subcategory: "自研引擎",
      title: "从零构建现代 C++ 自研游戏引擎开发蓝图：渲染/物理/ECS 全流程规划",
      summary: "技术博客发布现代C++自研游戏引擎完整开发蓝图，涵盖渲染管线（静态/动态批处理、GPU Instancing减少Draw Call）、物理系统、ECS架构、资源管理、输入系统等核心模块。目标是减少CPU到GPU的Draw Call命令，适合想深入理解引擎底层的开发者。",
      source: "技术博客",
      date: "2026-09-03",
      url: "http://hk.pswp.cn/news/911688.shtml",
      badge: "自研引擎",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 81,
      tags: ["C++", "自研引擎", "渲染管线", "ECS", "Draw Call"],
      content: [
        {
          title: "开发蓝图",
          type: "list",
          items: [
            "渲染管线：静态/动态批处理、GPU Instancing；",
            "目标：减少CPU→GPU的Draw Call命令；",
            "物理系统、ECS架构、资源管理核心模块；",
            "适合深入理解引擎底层的开发者。"
          ]
        }
      ]
    },
    {
      id: "three-engines-zero-base-guide",
      category: "engine",
      subcategory: "引擎对比",
      title: "2026 三大引擎零基础选型指南：Unity/Unreal/Godot 版本、语言、平台逐项对比",
      summary: "DEV Community发布2026年三大引擎零基础选型指南，逐项对比Unity（C#、移动端最强）、Unreal（C++/蓝图、AAA画质）、Godot（GDScript/C#、开源免费）的当前版本、编程语言、学习曲线、平台支持和授权模式，帮助新手根据项目类型选择合适引擎。",
      source: "DEV Community",
      date: "2026-08-29",
      url: "https://dev.to/oceanviewgames/which-game-engine-should-you-use-unity-vs-unreal-vs-godot-2026-4ndj",
      badge: "选型指南",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["引擎对比", "Unity", "Unreal", "Godot", "零基础"],
      content: [
        {
          title: "对比要点",
          type: "list",
          items: [
            "Unity：C#，移动端/2D最强，跨平台最广；",
            "Unreal：C++/蓝图，AAA画质标杆，5%分成；",
            "Godot：GDScript/C#，MIT全免费，轻量开源；",
            "按项目类型、团队规模、预算综合选择。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "anthropic-15b-credit",
      category: "industry",
      subcategory: "AI 资本",
      title: "Anthropic 将完成 150 亿美元 IPO 前信贷融资，扫清上市前关键障碍",
      summary: "据彭博社9月4日报道，Anthropic PBC即将完成将循环信贷额度扩大至150亿美元的计划，扫清了提交备受瞩目的IPO公开申请之前的一个障碍。这是AI行业继英伟达收购Hugging Face传闻后的又一重大资本动作，AI基础设施竞争持续升温。",
      source: "凤凰网科技 / 彭博社",
      date: "2026-09-04",
      url: "https://tech.ifeng.com/c/8w8YkEEp8oq",
      badge: "IPO融资",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 90,
      tags: ["Anthropic", "IPO", "150亿美元", "信贷融资", "AI资本"],
      content: [
        {
          title: "融资要点",
          type: "list",
          items: [
            "循环信贷额度扩大至150亿美元；",
            "扫清IPO公开申请前的关键障碍；",
            "AI基础设施竞争持续升温；",
            "继英伟达收购HF传闻后的又一资本大动作。"
          ]
        }
      ]
    },
    {
      id: "tencent-4b-bond",
      category: "industry",
      subcategory: "腾讯",
      title: "腾讯重返债券市场：计划发行约 40 亿美元双币种债券",
      summary: "TechShots 9月3日报道，腾讯已聘请全球大型银行 orchestrate 大规模双币种债券发行，目标融资约40亿美元。债券包括10年期和20年期美元票据，以及10年期和30年期离岸人民币票据，是腾讯近年来最大规模的债券融资之一。",
      source: "TechShots",
      date: "2026-09-03",
      url: "https://www.techshotsapp.com/business/back-in-the-bond-market-tencent-aims-for-4-billion-cash-injection",
      badge: "债券融资",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["腾讯", "债券", "40亿美元", "双币种", "融资"],
      content: [
        {
          title: "债券详情",
          type: "list",
          items: [
            "计划发行约40亿美元双币种债券；",
            "10年/20年期美元票据；",
            "10年/30年期离岸人民币票据；",
            "腾讯近年来最大规模债券融资之一。"
          ]
        }
      ]
    },
    {
      id: "primalverse-seed-funding",
      category: "industry",
      subcategory: "AI 3D",
      title: "4D 世界模型公司 PrimalVerse（元昊动力）完成数亿元种子轮融资",
      summary: "4D世界模型公司PrimalVerse（元昊动力）宣布完成数亿元种子轮融资，联想之星领投，银杏谷资本、啟赋资本、卓源亚洲等跟投，手术机器人领域精锋医疗战略投资。融资将用于4D世界模型基模研发及团队扩充，推进在游戏和机器人领域的应用。",
      source: "联想之星",
      date: "2026-09-03",
      url: "https://www.legendstar.cn/news/479122957945181405?lang=en",
      badge: "种子轮",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["PrimalVerse", "4D世界模型", "元昊动力", "联想之星", "AI 3D"],
      content: [
        {
          title: "融资详情",
          type: "list",
          items: [
            "数亿元种子轮，联想之星领投；",
            "银杏谷资本、啟赋资本、卓源亚洲跟投；",
            "精锋医疗战略投资；",
            "用于4D世界模型基模研发，推进游戏/机器人应用。"
          ]
        }
      ]
    },
    {
      id: "gamegum-roblox-funding",
      category: "industry",
      subcategory: "Roblox",
      title: "日本 GameGum 完成 Pre-seed 轮融资，加码 Roblox IP 游戏生态布局",
      summary: "日本鸟取县境港市游戏开发企业GameGum Co完成Pre-seed轮融资，金额达3000万日元。公司计划将资金全部用于团队扩招、业务扩容和Roblox平台开发体系升级，加速IP游戏化进程。Roblox生态持续吸引全球开发者和资本关注。",
      source: "新浪财经 / 看点资讯",
      date: "2026-09-01",
      url: "https://cj.sina.com.cn/articles/view/2166321755/811f725b02701vyho?froms=ttmp",
      badge: "Pre-seed",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["GameGum", "Roblox", "IP游戏", "日本", "融资"],
      content: [
        {
          title: "融资用途",
          type: "list",
          items: [
            "Pre-seed轮3000万日元；",
            "团队扩招、业务扩容；",
            "Roblox平台开发体系升级；",
            "加速IP游戏化进程。"
          ]
        }
      ]
    },
    {
      id: "onimusha-launch-day",
      category: "industry",
      subcategory: "游戏发售",
      title: "《鬼武者：剑之道》今日正式发售，试玩版全球累计下载突破 200 万次",
      summary: "卡普空《鬼武者：剑之道》于9月4日正式发售，登陆PS5/Xbox Series/Switch 2/PC全平台。主机版北京时间零点解锁，PC版中午12点开放。官方宣布试玩版全球累计下载量突破200万次，开发团队同步公布社区联动成果。M站PS5版86分，成为卡普空今年又一高分作品。",
      source: "游侠网 / 二柄",
      date: "2026-09-04",
      url: "http://www.ali213.net/news/115633/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "今日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 92,
      tags: ["鬼武者", "卡普空", "发售", "试玩版200万", "全平台"],
      content: [
        {
          title: "发售信息",
          type: "list",
          items: [
            "9月4日全平台发售，主机版0点/PC版12点解锁；",
            "试玩版全球下载突破200万次；",
            "M站PS5版86分，卡普空今年又一高分作；",
            "登陆PS5/Xbox Series/Switch 2/PC。"
          ]
        }
      ]
    },
    {
      id: "onimusha-unlock-time",
      category: "industry",
      subcategory: "游戏发售",
      title: "《鬼武者：剑之道》全球解锁时间公布：主机版 9/4 零点，PC 版 9/4 中午 12 点",
      summary: "卡普空公布《鬼武者：剑之道》全球解锁时间表：主机版（PS5/Xbox Series/Switch 2）于北京时间9月4日零点正式解锁，PC版（Steam/Epic/Microsoft Store）则在同日中午12点开放游玩。通常版售价8,780日元起，豪华版含额外内容。",
      source: "二柄 / Capcom",
      date: "2026-09-02",
      url: "https://diershoubing.com/game/241328/%E9%AC%BC%E6%AD%A6%E8%80%85%E5%89%91%E4%B9%8B%E9%81%93/news",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "解锁时间",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["鬼武者", "解锁时间", "卡普空", "PC版", "主机版"],
      content: [
        {
          title: "解锁安排",
          type: "list",
          items: [
            "主机版：北京时间9月4日零点解锁；",
            "PC版：北京时间9月4日中午12点开放；",
            "通常版8,780日元起；",
            "豪华版含额外内容。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "onimusha-famitsu-34",
      category: "games",
      subcategory: "游戏评测",
      title: "《鬼武者：剑之道》Fami 通 34 分（9/9/8/8），止步'黄金殿堂'",
      summary: "日本Fami通为《鬼武者：剑之道》打出34分（9/9/8/8），止步'黄金殿堂'（35分以上）。编辑普遍认可战斗系统的扎实手感和'一闪'反击的爽快感，但在探索深度和重复战斗方面有所保留。本作成为系列重启后值得关注的动作新作。",
      source: "游侠网 / Fami通",
      date: "2026-09-01",
      url: "http://www.ali213.net/news/115633/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "Fami通34分",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["鬼武者", "Fami通", "34分", "黄金殿堂", "评测"],
      content: [
        {
          title: "评分详情",
          type: "list",
          items: [
            "Fami通34分（9/9/8/8），止步黄金殿堂；",
            "战斗系统扎实手感获认可；",
            "'一闪'反击爽快感受好评；",
            "探索深度和重复战斗方面有所保留。"
          ]
        }
      ]
    },
    {
      id: "onimusha-metacritic-series-high",
      category: "games",
      subcategory: "游戏评测",
      title: "《鬼武者：剑之道》M 站 85 分追平系列最高，与《鬼武者 3》并列第一",
      summary: "Yomimono报道《鬼武者：剑之道》Metacritic均分85分，追平系列最高纪录（由《鬼武者3》保持）。基于80+篇PS5评测，媒体普遍盛赞以弹反为核心的战斗系统、各种鬼武器的运用以及BOSS战的关卡设计。部分评测指出小BOSS重复出现和中后期难度曲线突兀的问题。",
      source: "Yomimono / Inven Global",
      date: "2026-09-01",
      url: "https://yomimono.id/onimusha-way-of-the-sword-reviewers-hail-a-series-high-metascore-of-85",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "系列最高",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["鬼武者", "Metacritic", "85分", "系列最高", "鬼武者3"],
      content: [
        {
          title: "评测共识",
          type: "list",
          items: [
            "M站85分追平系列最高（鬼武者3）；",
            "弹反核心战斗系统获普遍盛赞；",
            "鬼武器运用和BOSS战设计受好评；",
            "小BOSS重复、中后期难度曲线被指出。"
          ]
        }
      ]
    },
    {
      id: "onimusha-review-roundup",
      category: "games",
      subcategory: "游戏评测",
      title: "《鬼武者：剑之道》评测汇总：战斗系统是绝对主角，OpenCritic 推荐度 94%",
      summary: "GameDaily发布鬼武者评测汇总：Metacritic 86分，OpenCritic 85分、94%评论家推荐。所有评测一致认为战斗系统是本作绝对主角——弹反、一闪、鬼武器切换构成的攻防博弈极具深度。宫本武藏角色塑造和京都视觉还原也获得正面评价。",
      source: "GameDaily",
      date: "2026-09-01",
      url: "https://gamedaily.com/games/onimusha-way-of-the-sword-review-roundup",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "评测汇总",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["鬼武者", "评测汇总", "OpenCritic", "战斗系统", "宫本武藏"],
      content: [
        {
          title: "评测共识",
          type: "list",
          items: [
            "Metacritic 86分，OpenCritic 85分/94%推荐；",
            "战斗系统是绝对主角；",
            "弹反+一闪+鬼武器切换构成深度攻防；",
            "宫本武藏角色和京都视觉还原获好评。"
          ]
        }
      ]
    },
    {
      id: "onimusha-reverse-delay",
      category: "games",
      subcategory: "游戏发售",
      title: "《鬼武者：剑之道》反向跳票：从 9 月 25 日提前至 9 月 4 日发售",
      summary: "Gagadget报道《鬼武者：剑之道》从原定9月25日反向跳票提前至9月4日发售，Metacritic 86分、OpenCritic 86分、94%评论家推荐。这是卡普空时隔20年的鬼武者系列正统新作，媒体普遍认为这次重启值得等待。",
      source: "Gagadget",
      date: "2026-09-02",
      url: "https://gagadget.com/en/724073-onimusha-way-of-the-sword-reviews-are-in-and-capcom-has-done-it-again/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "反向跳票",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["鬼武者", "反向跳票", "卡普空", "9月4日", "系列重启"],
      content: [
        {
          title: "发售信息",
          type: "list",
          items: [
            "从原定9月25日提前至9月4日（反向跳票）；",
            "Metacritic 86分，OpenCritic 86分；",
            "94%评论家推荐；",
            "时隔20年的系列正统新作。"
          ]
        }
      ]
    },
    {
      id: "onimusha-jp-player-reactions",
      category: "games",
      subcategory: "玩家反馈",
      title: "日本玩家《鬼武者》首日感想汇总：探索与强化要素丰富，'开心的悲鸣'",
      summary: "日本游戏速报站GameTokka汇总《鬼武者：剑之道》首日玩家感想：探索要素和强化系统比预期丰富，玩家表示'探索太广了，开心的悲鸣'。战斗手感获得普遍认可，但也有玩家指出部分场景引导不足和难度波动。游戏今日正式发售。",
      source: "GameTokka",
      date: "2026-09-04",
      url: "https://gametokka.com/onimusyabyakuerev090426/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "首日反馈",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["鬼武者", "日本玩家", "首日感想", "探索", "强化系统"],
      content: [
        {
          title: "玩家反馈",
          type: "list",
          items: [
            "探索和强化要素比预期丰富；",
            "玩家戏称'探索太广了，开心的悲鸣'；",
            "战斗手感获普遍认可；",
            "部分场景引导不足和难度波动被指出。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-heron-rl-llm",
      category: "opensource",
      subcategory: "AI NPC",
      title: "HeRoN：RL+LLM 混合框架实现自适应 NPC 行为，功能分离+批评式精炼",
      summary: "Seldre99/HeRoN是开源的强化学习+大语言模型混合NPC框架，通过功能分离和批评式精炼（critique-based refinement）整合RL与LLM，解决传统规则方法缺乏适应性、RL训练效率低、LLM幻觉和上下文漂移等问题。架构包含Helper-Reviewer-NPC三层，9月2日仍有更新。",
      source: "GitHub",
      date: "2026-09-02",
      url: "https://github.com/Seldre99/HeRoN",
      badge: "AI框架",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["HeRoN", "RL", "LLM", "AI NPC", "自适应行为"],
      content: [
        {
          title: "框架特点",
          type: "list",
          items: [
            "RL+LLM混合框架，功能分离+批评式精炼；",
            "解决规则方法缺适应性、RL训练低效、LLM幻觉；",
            "Helper-Reviewer-NPC三层架构；",
            "实现连贯且策略自适应的NPC行为。"
          ]
        }
      ]
    },
    {
      id: "repo-excaliburjs",
      category: "opensource",
      subcategory: "Web 引擎",
      title: "Excalibur.js：友好的 TypeScript 2D Web 游戏引擎，Canvas/WebGL 渲染",
      summary: "excaliburjs/Excalibur是一个友好的TypeScript 2D游戏引擎，专为Web平台设计，支持Canvas和WebGL渲染。提供完整的游戏循环、场景管理、精灵动画、碰撞检测、输入处理等API，9月3日仍有活跃更新，适合前端开发者快速构建2D网页游戏。",
      source: "GitHub",
      date: "2026-09-03",
      url: "https://github.com/excaliburjs/Excalibur",
      badge: "Web引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["Excalibur.js", "TypeScript", "2D引擎", "WebGL", "网页游戏"],
      content: [
        {
          title: "引擎特点",
          type: "list",
          items: [
            "TypeScript 2D Web游戏引擎；",
            "支持Canvas和WebGL渲染；",
            "完整游戏循环、场景管理、精灵动画、碰撞检测；",
            "适合前端开发者快速构建2D网页游戏。"
          ]
        }
      ]
    },
    {
      id: "repo-mcp-unity",
      category: "opensource",
      subcategory: "MCP",
      title: "mcp-unity：MCP 插件连接 Unity 编辑器，支持 Cursor/Claude Code/Codex",
      summary: "CoderGamester/mcp-unity是连接Unity编辑器的Model Context Protocol插件，专为Cursor、Claude Code、Codex、Windsurf等IDE和AI工具设计。通过MCP协议让AI助手能够读取Unity项目结构、操作场景和资源，实现AI辅助Unity开发工作流，8月26日仍有更新。",
      source: "GitHub",
      date: "2026-08-26",
      url: "https://github.com/CoderGamester/mcp-unity",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "MCP插件",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["mcp-unity", "MCP", "Unity", "Cursor", "Claude Code", "AI开发"],
      content: [
        {
          title: "插件功能",
          type: "list",
          items: [
            "MCP插件连接Unity编辑器；",
            "支持Cursor/Claude Code/Codex/Windsurf；",
            "AI助手可读取项目结构、操作场景和资源；",
            "实现AI辅助Unity开发工作流。"
          ]
        }
      ]
    },
    {
      id: "repo-ue4-local-llm-chat",
      category: "opensource",
      subcategory: "UE AI",
      title: "UE4-LocalLLM-Chat：本地大模型接入 UE4 完整方案，qwen2.5:7b+Ollama+FastAPI",
      summary: "CSDN博主开源UE4-LocalLLM-Chat完整方案，将本地大语言模型（qwen2.5:7b）接入UE4.27游戏。三层架构：服务端Python/FastAPI/Ollama负责LLM推理与会话管理，UE4客户端通过HTTP请求获取回复，实现消费级硬件上的真实AI对话能力，零API调用成本。",
      source: "CSDN / GitHub",
      date: "2026-09-01",
      url: "https://blog.csdn.net/zxh1592000/article/details/161343004",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "本地LLM",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 86,
      tags: ["UE4", "本地LLM", "qwen2.5", "Ollama", "FastAPI", "零成本"],
      content: [
        {
          title: "方案架构",
          type: "list",
          items: [
            "本地qwen2.5:7b模型，消费级硬件可运行；",
            "三层架构：Python/FastAPI/Ollama服务端；",
            "UE4客户端HTTP请求获取回复；",
            "零API调用成本，数据本地安全。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-high-perf-3d-engine",
      category: "tutorials",
      subcategory: "渲染",
      title: "高性能 3D 游戏引擎全攻略：Compute Shader 视锥剔除/GPU 实例化/PBR 材质",
      summary: "CSDN技术博客详解高性能3D游戏引擎渲染管线：基于Compute Shader的视锥剔除、GPU实例化渲染、多级细节纹理（Mipmapping）、PBR材质、动态全局光照方案。附现代OpenGL渲染管线代码示例，涵盖从底层API到高级渲染技术的完整路径。",
      source: "CSDN",
      date: "2026-09-02",
      url: "https://blog.csdn.net/2401_86601498/article/details/149690233",
      badge: "渲染管线",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 83,
      tags: ["3D引擎", "Compute Shader", "视锥剔除", "GPU实例化", "PBR"],
      content: [
        {
          title: "技术要点",
          type: "list",
          items: [
            "Compute Shader视锥剔除；",
            "GPU实例化渲染减少Draw Call；",
            "Mipmapping多级细节纹理；",
            "PBR材质+动态全局光照方案；",
            "附OpenGL渲染管线代码示例。"
          ]
        }
      ]
    },
    {
      id: "tut-open-world-shooter-arch",
      category: "tutorials",
      subcategory: "架构",
      title: "全平台大世界战术射击游戏架构揭秘：模块化分层/流式加载/双端协同渲染",
      summary: "CSDN博主系统阐述全平台大世界战术射击游戏开发框架：模块化分层架构、自动化工具链、双端协同渲染、流式场景加载、分布式开发流程。核心挑战是跨PC/移动端统一框架实现'一次开发全端适配'，同时应对超大世界资源管理和极致性能分级。",
      source: "CSDN",
      date: "2026-09-02",
      url: "https://blog.csdn.net/qq_33060405/article/details/152029973",
      badge: "架构揭秘",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 82,
      tags: ["大世界", "战术射击", "架构", "流式加载", "跨平台"],
      content: [
        {
          title: "架构要点",
          type: "list",
          items: [
            "模块化分层架构+自动化工具链；",
            "双端协同渲染+流式场景加载；",
            "跨PC/移动端统一框架；",
            "超大世界资源管理+性能分级；",
            "分布式开发流程支持海量团队协作。"
          ]
        }
      ]
    },
    {
      id: "tut-frame-budgets-profiler",
      category: "tutorials",
      subcategory: "Unity 性能",
      title: "Google Play × Unity 直播课：Frame Budgets/Draw Calls/Profiler 性能优化实战",
      summary: "Google Play与Unity联合举办线上直播课程（9月30日），主题为'Frame Budgets, Draw Calls, and the Unity Profiler'。课程讲解如何使用帧预算、Draw Call分析和Unity Profiler识别和解决常见性能问题，分析场景性能、调查CPU使用和渲染开销，实用优化技术减少不必要的计算。",
      source: "Google Play Games / Unity",
      date: "2026-09-30",
      url: "https://googleplaygamedev.unity.com/pages/live-sessions",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "直播课程",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Google Play", "Unity", "Frame Budget", "Profiler", "性能优化"],
      content: [
        {
          title: "课程内容",
          type: "list",
          items: [
            "9月30日直播：Frame Budgets与Unity Profiler；",
            "使用帧预算和Draw Call分析定位性能问题；",
            "分析场景性能、CPU使用和渲染开销；",
            "实用优化技术减少不必要计算。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "ai-lpm-character-system",
      category: "ai",
      subcategory: "AI NPC",
      title: "LPM 风格 AI 角色系统：长效记忆/人格锁定/低延迟口语化三大核心技术",
      summary: "CSDN博主深入解析在UE4中构建LPM风格AI角色系统的三大核心技术：长效记忆（向量库存储历史交互）、人格锁定（系统提示词+角色卡确保一致性）、低延迟口语化（流式输出+语气调整）。面向有UE4开发经验的工程师，提供完整实现思路和代码框架。",
      source: "CSDN",
      date: "2026-05-18",
      url: "https://blog.csdn.net/zxh1592000/article/details/161194192",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "AI角色",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 84,
      tags: ["LPM", "AI角色", "长效记忆", "人格锁定", "低延迟", "UE4"],
      content: [
        {
          title: "三大技术",
          type: "list",
          items: [
            "长效记忆：向量库存储历史交互上下文；",
            "人格锁定：系统提示词+角色卡确保一致性；",
            "低延迟口语化：流式输出+语气调整；",
            "面向UE4工程师的完整实现框架。"
          ]
        }
      ]
    },
    {
      id: "ai-10-npc-systems",
      category: "ai",
      subcategory: "AI NPC",
      title: "2026 十大 AI NPC 对话系统对比：功能/定价/适用场景逐项评测",
      summary: "Aivexify发布2026年十大AI NPC对话系统对比指南，覆盖主流AI对话中间件的功能、定价和适用场景。文章指出NPC对话是游戏下一个前沿，开放世界RPG中AI驱动的NPC能提供动态交互体验。对比维度包括上下文窗口、记忆系统、语音集成、成本和部署方式。",
      source: "Aivexify",
      date: "2026-06-06",
      url: "https://aivexify.com/10-best-ai-npc-conversation-systems/",
      badge: "系统对比",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["AI NPC", "对话系统", "对比评测", "定价", "开放世界"],
      content: [
        {
          title: "对比维度",
          type: "list",
          items: [
            "十大AI NPC对话系统功能/定价/场景对比；",
            "上下文窗口、记忆系统、语音集成；",
            "成本和部署方式逐项评测；",
            "NPC对话被视为游戏下一个前沿。"
          ]
        }
      ]
    },
    {
      id: "ai-minecraft-llm-npc",
      category: "ai",
      subcategory: "AI 研究",
      title: "arXiv 研究：Minecraft 中 LLM 驱动 NPC 协作完成任务，人类+2 AI 组队实验",
      summary: "arXiv论文研究人类玩家与LLM驱动NPC在Minecraft中的协作任务完成。研究人员设计了一个迷你游戏，玩家与两个GPT-4驱动的NPC合作完成任务，分析LLM NPC在协作中的沟通、决策和适应性表现。论文为AI NPC在开放世界游戏中的部署提供了实证数据。",
      source: "arXiv",
      date: "2024-07-04",
      url: "https://arxiv.org/pdf/2407.03460",
      badge: "学术研究",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["Minecraft", "LLM NPC", "协作任务", "GPT-4", "arXiv"],
      content: [
        {
          title: "研究设计",
          type: "list",
          items: [
            "Minecraft中人类+2个GPT-4 NPC协作完成任务；",
            "分析LLM NPC的沟通、决策和适应性；",
            "为AI NPC开放世界部署提供实证数据；",
            "生成式AI在游戏开发中应用持续增长。"
          ]
        }
      ]
    },
    {
      id: "ai-unity7-npc-future",
      category: "ai",
      subcategory: "AI 趋势",
      title: "Unity 7 与 AI NPC 如何改变游戏：从 InZOI 到 PUBG 的 AI 应用全景",
      summary: "土耳其游戏媒体GAME+分析Unity 7和AI NPC如何改变游戏行业，盘点5款AI突出的游戏：InZOI（模拟人生类AI模拟）、PUBG（AI队友）、Dead Meat（解谜AI）、Total War: PHARAOH（策略AI）等。文章探讨AI从工具到游戏核心玩法的转变趋势。",
      source: "GAME+",
      date: "2026-09-03",
      url: "https://gameplus.com.tr/blog/yapay-zeka-oyunlari-nasil-degistiriyor-unity-7-ve-ai-npc-ler",
      badge: "AI趋势",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["Unity 7", "AI NPC", "InZOI", "PUBG", "AI游戏"],
      content: [
        {
          title: "AI应用全景",
          type: "list",
          items: [
            "InZOI：模拟人生类AI模拟；",
            "PUBG：AI队友自适应；",
            "Dead Meat：解谜AI；",
            "Total War: PHARAOH：策略AI；",
            "AI从开发工具向游戏核心玩法转变。"
          ]
        }
      ]
    },
    {
      id: "ai-canvas-to-ai-dev",
      category: "ai",
      subcategory: "前端游戏",
      title: "从 Canvas 像素级渲染到 AI 驱动开发：前端 2D 游戏与数据可视化实战指南",
      summary: "稀土掘金文章解析前端2D游戏开发全流程：从Canvas绘图底层原理到requestAnimationFrame游戏循环，再到2026年AI辅助开发流程——Vite工程初始化+Git版本控制+AI头脑风暴+代码生成。以'飞机大战'为例展示标准研发流程，AI在原型设计和代码生成环节显著提升效率。",
      source: "稀土掘金",
      date: "2026-06-16",
      url: "https://juejin.cn/post/7651438340354048052",
      badge: "前端游戏",
      badgeType: "tutorials",
      readTime: "3 分钟",
      hotScore: 79,
      tags: ["Canvas", "前端游戏", "AI驱动开发", "Vite", "飞机大战"],
      content: [
        {
          title: "开发流程",
          type: "list",
          items: [
            "Canvas绘图底层原理+requestAnimationFrame循环；",
            "Vite工程初始化+Git版本控制；",
            "AI头脑风暴+代码生成辅助开发；",
            "以'飞机大战'为例展示完整流程。"
          ]
        }
      ]
    },
    {
      id: "ai-unity-addressables-deep",
      category: "ai",
      subcategory: "Unity 资源",
      title: "Unity Addressables 资源管理系统深度解析：从原理到实战的完整指南",
      summary: "Unity官方开发者社区发布Addressables资源管理系统深度教程，全面解析其核心原理、异步加载机制、资源打包策略、内存管理和热更新方案。Addressables是Unity现代资源管理的标准方案，掌握它对大型游戏项目的性能和可维护性至关重要。",
      source: "Unity 官方文档",
      date: "2026-09-01",
      url: "https://docs.unity3d.com/Packages/com.unity.addressables@2.2/manual/index.html",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "资源管理",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 81,
      tags: ["Unity", "Addressables", "资源管理", "异步加载", "热更新"],
      content: [
        {
          title: "教程要点",
          type: "list",
          items: [
            "Addressables核心原理与异步加载机制；",
            "资源打包策略与依赖管理；",
            "内存管理与卸载策略；",
            "热更新方案与实战案例。"
          ]
        }
      ]
    }
  ]
};
