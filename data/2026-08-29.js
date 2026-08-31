/**
 * 游戏开发与行业资讯日报 - 2026-08-29
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-08-29",
    weekday: "星期六",
    title: "游戏开发与行业资讯日报",
    subtitle: "Unity / 虚幻引擎 / 游戏行业 / GitHub开源 / AI前沿技术深度追踪",
    updateTime: "2026-08-29 08:15",
    editor: "资讯聚合机器人 & 行业观察组",
    highlights: [
      "🎮 GTA6 实机深度拆解：IGN汇总69个细节，玩家评价两极分化，主机版锁4K/30帧",
      "🏆 科隆展第三天：72家厂商亮相，13款国产游戏登场，海外媒体称'中国震撼'",
      "⚔️ 《影之刃零》定档10月29日全球发售，全平台预售开启；《巫师3》重制版9/29免费更新",
      "🔧 团结引擎发布1.10.2版本；Code Philosophy四款核心工具上架Unity中国资源商店",
      "🤖 Unity官方MCP Server+CLI+Pipeline发布，Editor/Player/CI/外部Agent统一接口"
    ],
    engineStatus: [
      { name: "Unity 7", type: "unity", status: "即将到来·下一代主版本", badge: "新架构", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "最新 LTS 长期支持版", badge: "LTS 生产推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "8月27日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8", type: "unreal", status: "当前主版本·City Sample已更新", badge: "UE5最终大版", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "架构创新", color: "pink" },
      { name: "UEFN", type: "unreal", status: "内嵌 MCP Server", badge: "AI Agent 建岛", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-gta6-deep-dive",
    category: "games",
    categoryName: "热门游戏 · 焦点头条",
    tag: "全球焦点",
    title: "GTA6 实机深度拆解：IGN汇总69个隐藏细节，玩家评价两极分化，主机版锁4K/30帧",
    summary: "GTA6 26分钟实机演示发布后持续发酵：IGN汇总出69个隐藏细节（游戏商店购物、耳机自定义、开锁偷车迷你游戏、虚拟电视生态等），GamingBolt也盘点25个易被忽略的细节；但玩家社区评价两极分化，一派称赞细节进化与迈阿密还原度，另一派认为玩法缺乏创新只是'料堆得更多'。官方确认单人主线约80小时，PS5基础版目标4K/30帧，标准版79.99美元/终极版99.99美元，11月19日发售。",
    image: "https://aka.doubaocdn.com/s/Uh4aRlyMxE",
    source: "IGN / GamingBolt / 游侠网 / 电玩迷 / 网易",
    date: "2026-08-29",
    url: "https://gamingbolt.com/gta-6-25-details-hidden-in-the-27-minute-gameplay-showcase",
    readTime: "5 分钟",
    hotScore: 98,
    badges: ["深度拆解", "69个细节", "两极评价", "4K/30帧", "80小时主线"],
    tags: ["GTA6", "Rockstar", "实机细节", "开放世界", "玩家评价"],
    content: [
      {
        title: "实机隐藏细节盘点",
        type: "list",
        items: [
          "IGN汇总69个隐藏细节：游戏内商店可购物、耳机等配饰可自定义、开锁/偷车迷你小游戏回归；",
          "虚拟电视生态：房间内电视可观看节目，R星聘请外部动画工作室打造大量游戏内电视内容；",
          "双主角日常互动：Lucia衣橱选装时Jason可选'催促'或'耐心等待'，情侣任务与共同居所；",
          "迈阿密还原度获本地人称赞：罪恶都市对现实迈阿密的地理与氛围还原超乎预期；",
          "GamingBolt盘点25个易被忽略细节，涵盖NPC行为、环境交互、UI界面进化等。"
        ]
      },
      {
        title: "玩家评价两极与技术参数",
        type: "text",
        text: "实机发布后玩家社区评价明显分化：一派认为画面、动画、细节全面进化，是'值得等13年的神作'；另一派则认为玩法层面缺乏让人眼前一亮的创新，只是'细节更真实、料堆得更多'。官方确认单人主线流程约80小时，PS5基础版目标维持4K/30帧（性能要求极高），标准版售价79.99美元、终极版99.99美元，2026年11月19日全球发售。受其影响，《星际公民》衍生作《42中队》已宣布跳票至2027年Q2以避锋芒。"
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
    // ------------------------- 引擎前沿 (Engine) -------------------------
    {
      id: "tuanjie-1102",
      category: "engine",
      subcategory: "团结引擎",
      title: "团结引擎发布 1.10.2 版本更新",
      summary: "Unity 中国官方开发者社区公告，团结引擎发布 1.10.2 版本更新，持续优化全平台适配与编辑器稳定性，为国内开发者提供更稳定的生产环境。",
      source: "Unity 官方开发者社区",
      date: "2026-08-27",
      url: "https://developer.unity.cn/articles?q=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E6%B8%B8%E6%88%8F",
      badge: "版本更新",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["团结引擎", "版本更新", "全平台适配"],
      content: [
        {
          title: "更新要点",
          type: "list",
          items: [
            "团结引擎 1.10.2 版本正式发布，持续优化编辑器稳定性；",
            "全平台适配能力进一步增强，覆盖移动端、PC、主机与Web；",
            "建议国内团队评估升级以获得最新修复与性能改进。"
          ]
        }
      ]
    },
    {
      id: "code-philosophy-store",
      category: "engine",
      subcategory: "Unity 生态",
      title: "Code Philosophy 四款核心工具上架 Unity 中国资源商店",
      summary: "Code Philosophy 四款核心工具——HybridCLR 热更新、Luban 配表、Obfuz 代码混淆、ZLua Lua 脚本——已上架 Unity 中国资源商店，社区版免费使用，为国内 Unity 开发者提供一站式生产工具链。",
      source: "Unity 官方开发者社区",
      date: "2026-08-28",
      url: "https://developer.unity.cn/articles?q=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E6%B8%B8%E6%88%8F",
      badge: "工具上架",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["HybridCLR", "Luban", "Obfuz", "ZLua", "Unity中国"],
      content: [
        {
          title: "四款工具",
          type: "list",
          items: [
            "HybridCLR：业界主流 C# 热更新方案，社区版免费；",
            "Luban：强大的游戏配置表工具，支持多格式导出；",
            "Obfuz：代码混淆工具，保护 C# 源码安全；",
            "ZLua：轻量 Lua 脚本方案，与 Unity 深度集成。"
          ]
        }
      ]
    },
    {
      id: "unity-report-2026-detail",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 2026 游戏开发报告详解：小型游戏机会与 URP 采用率上升",
      summary: "Unity 官方发布 2026 游戏开发报告详细内容：大多数工作室正将重点转向小型游戏，通过多样化收入来源资助开发；Unity 开发者项目开发时间大幅减少；URP（通用渲染管线）采用率持续上升；工作室仍专注于具有广泛吸引力的游戏类型。",
      source: "Unity 官方",
      date: "2026-08-28",
      url: "https://unity.com/cn/resources/gaming-report",
      badge: "行业报告",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 88,
      tags: ["Unity", "游戏开发报告", "URP", "小型游戏", "行业趋势"],
      content: [
        {
          title: "报告核心发现",
          type: "list",
          items: [
            "大多数工作室正将重点转向小型游戏，寻找更灵活的立项策略；",
            "工作室通过多样化收入来源资助开发，降低单一商业模式风险；",
            "Unity 开发者项目开发时间大幅减少，工具链效率提升；",
            "URP 通用渲染管线采用率持续上升，成为中小团队首选；",
            "工作室仍专注于具有广泛吸引力的游戏类型，谨慎创新。"
          ]
        }
      ]
    },
    {
      id: "gdc2026-engine-adoption",
      category: "engine",
      subcategory: "行业数据",
      title: "GDC 2026 行业报告：UE 在 AA/AAA 采用率 59%/47%，老 indie 仍 54% 用 Unity",
      summary: "GDC 2026《State of the Game Industry》报告显示引擎采用率分化：Unreal Engine 在 AA 工作室采用率 59%、AAA 工作室 47%，新成立 indie 也达 41%；而成立较久的 indie 工作室中 54% 仍主要使用 Unity，引擎选择与团队规模和项目类型高度相关。",
      source: "GDC 2026 / SOTI Report",
      date: "2026-08-28",
      url: "https://images.reg.techweb.com/Web/UBMTechweb/%7Bfbdfe6c4-e33f-458e-a8ac-96db55fda684%7D_541400_GDC26_PDF_SOTI_Report_Final.pdf",
      badge: "行业数据",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 89,
      tags: ["GDC2026", "引擎采用率", "Unreal", "Unity", "行业报告"],
      content: [
        {
          title: "引擎采用率数据",
          type: "list",
          items: [
            "UE 在 AA 工作室采用率 59%、AAA 工作室 47%，主导中大型项目；",
            "新成立 indie 工作室 UE 采用率 41%，呈上升趋势；",
            "成立较久的 indie 工作室 54% 仍主要使用 Unity，迁移成本高；",
            "引擎选择与团队规模、项目类型、目标平台高度相关；",
            "双引擎能力成为行业常态，跨引擎人才需求持续增长。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "gamescom-day3-china",
      category: "industry",
      subcategory: "科隆展",
      title: "科隆展第三天：72家厂商亮相，13款国产游戏登场，海外媒体称'中国震撼'",
      summary: "2026 科隆游戏展进入第三天，中国厂商阵容创纪录：共计72家厂商亮相，开幕夜直播中13款国产游戏先后登场，出场频率远超其他任何国家，被海外媒体形容为'中国震撼'。米哈游《源初之结》全球首曝点燃全场，网易《无限大》、《影之刃零》等国产3A集中展示。",
      source: "今日头条 / 叶哲茗 / 科隆展官方",
      date: "2026-08-29",
      url: "http://m.toutiao.com/group/7679113338462208531/",
      badge: "国际展会",
      badgeType: "event",
      readTime: "3 分钟",
      hotScore: 94,
      tags: ["科隆展", "中国厂商", "国产游戏", "米哈游", "网易"],
      content: [
        {
          title: "中国厂商表现",
          type: "list",
          items: [
            "72家中国厂商亮相科隆展，创历史纪录；",
            "开幕夜13款国产游戏登场，出场频率全球第一；",
            "米哈游《源初之结》全球首曝实机，点燃全场热情；",
            "网易《无限大》都市开放世界、《影之刃零》定档发售；",
            "海外媒体评价为'中国震撼'，国产3A进入集中收获期。"
          ]
        }
      ]
    },
    {
      id: "gamescom-theft",
      category: "industry",
      subcategory: "展会动态",
      title: "科隆游戏展多个展位失窃，展会安全引关注",
      summary: "据极客早知道报道，2026 科隆游戏展期间多个展位发生失窃事件，展会安全管理引发关注。大型国际展会的展品与设备安全再次成为厂商和主办方需要重视的问题。",
      source: "极客公园 / 极客早知道",
      date: "2026-08-29",
      url: "https://hea.163.com/keywords/7/d/79d196866e38620f5c55/1.html",
      badge: "展会动态",
      badgeType: "event",
      readTime: "1 分钟",
      hotScore: 78,
      tags: ["科隆展", "失窃", "展会安全"],
      content: [
        {
          title: "事件概要",
          type: "list",
          items: [
            "科隆展期间多个展位发生失窃事件；",
            "大型国际展会展品与设备安全引关注；",
            "主办方与厂商需加强展会期间的安全管理。"
          ]
        }
      ]
    },
    {
      id: "squadron42-delay",
      category: "industry",
      subcategory: "大厂动向",
      title: "《星际公民》衍生作《42中队》跳票至2027年Q2，避 GTA6 锋芒",
      summary: "Cloud Imperium Games 宣布《星际公民》单人衍生作《42中队》将延期至2027年第二季度发售，官方暗示是为避开《GTA6》11月19日发售窗口的竞争锋芒。GTA6 被业界称为'吸引玩家注意力的黑洞'，多家厂商调整发售档期。",
      source: "电玩迷",
      date: "2026-08-28",
      url: "http://www.dianwanmi.com/?oid=YYc2hGPaY4Rm6DC5M9Rj7WLr",
      badge: "跳票",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["星际公民", "42中队", "跳票", "GTA6", "发售档期"],
      content: [
        {
          title: "跳票详情",
          type: "list",
          items: [
            "《42中队》延期至2027年Q2发售；",
            "官方暗示避开 GTA6 11月19日发售窗口；",
            "GTA6 被称为'吸引玩家注意力的黑洞'；",
            "年末3A大战格局因 GTA6 而重新洗牌。"
          ]
        }
      ]
    },
    {
      id: "ai-game-industry-36kr",
      category: "industry",
      subcategory: "AI 行业",
      title: "36氪：AI 席卷游戏行业，Unity 展示 Vector/Offerwall/Aura 与 Unity Ads MCP",
      summary: "36氪报道，AI 正全面席卷游戏行业。Unity 在展会重点展示 Vector（AI 驱动广告优化）、Offerwall、Aura 三款产品，以及即将推出的 Unity Ads MCP 和 Campaign Assistant 对话式 AI 助手。Vector 已深度融合 AI，开发者只需设定业务目标，AI 即可持续优化以达成预期效果。",
      source: "36氪",
      date: "2026-08-20",
      url: "https://36kr.com/p/3946527216958851",
      badge: "行业趋势",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 87,
      tags: ["AI游戏", "Unity", "Vector", "MCP", "广告优化"],
      content: [
        {
          title: "AI 产品布局",
          type: "list",
          items: [
            "Vector：AI 驱动的广告优化工具，设定目标后自动优化；",
            "Unity Ads MCP：即将推出，让 AI Agent 可操作广告系统；",
            "Campaign Assistant：对话式 AI 助手，简化广告运营；",
            "Unity 支撑全球超70%头部移动游戏，月活设备超30亿；",
            "AI 正从研发工具延伸到发行与运营全链路。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "gta6-console-30fps",
      category: "games",
      subcategory: "GTA6",
      title: "GTA6 主机版锁 4K/30帧，单人主线流程约 80 小时",
      summary: "据电玩迷报道，由于塞入大量新内容与沉浸式系统，《GTA6》单人主线流程时长达到约80小时；由于性能要求极高，在本世代 PS5 基础版主机上目标是维持 4K/30 帧画面。游戏拥有大量小游戏增强沉浸感，标准版售价79.99美元、终极版99.99美元。",
      source: "电玩迷 / 九游",
      date: "2026-08-28",
      url: "http://www.dianwanmi.com/?oid=YYc2hGPaY4Rm6DC5M9Rj7WLr",
      image: "https://aka.doubaocdn.com/s/VPVhUVr9l8",
      badge: "技术参数",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 90,
      tags: ["GTA6", "4K30帧", "80小时", "PS5", "售价"],
      content: [
        {
          title: "关键参数",
          type: "list",
          items: [
            "单人主线流程约80小时，内容量远超 GTA5；",
            "PS5 基础版目标 4K/30 帧，性能要求极高；",
            "大量内置小游戏增强沉浸感；",
            "标准版79.99美元、终极版99.99美元；",
            "11月19日全球发售，登陆 PS5/Xbox Series。"
          ]
        }
      ]
    },
    {
      id: "witcher3-remaster",
      category: "games",
      subcategory: "巫师3",
      title: "《巫师3》重制版 9月29日免费更新，全新 DLC《旧时曲》2027年推出",
      summary: "CDPR 在科隆展开幕夜宣布：《巫师3：狂猎》重制版将于9月29日推出，拥有本体的玩家可免费获得次世代升级；同时公布全新大型 DLC《巫师3：旧时曲》全球首曝预告，这是《巫师3》时隔近十年推出的全新资料片，衔接未来《巫师4》世界观，预计2027年推出。",
      source: "抖音 / 网易 / 科隆展",
      date: "2026-08-26",
      url: "https://c.m.163.com/news/a/L599VL0I0526JULF.html",
      badge: "重制+DLC",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 91,
      tags: ["巫师3", "重制版", "旧时曲", "CDPR", "免费更新"],
      content: [
        {
          title: "发布信息",
          type: "list",
          items: [
            "《巫师3》重制版 9月29日推出，本体玩家免费升级；",
            "重制版售价399港币，Switch 玩家画质大幅提升；",
            "全新大型 DLC《旧时曲》首曝预告，衔接《巫师4》世界观；",
            "《旧时曲》预计2027年推出，为巫师3时隔十年的新资料片。"
          ]
        }
      ]
    },
    {
      id: "shadow-blade-zero",
      category: "games",
      subcategory: "国产3A",
      title: "《影之刃零》定档 10月29日全球发售，全平台预售开启",
      summary: "灵游坊武侠动作大作《影之刃零》在科隆展正式定档 2026年10月29日全球发售，研发全部完工，全平台预售已开启。游戏以黑暗国风美学、丝滑连招和原创江湖剧情为卖点，被视为今年下半年最稳的国产3A大作之一，玩家可准备对战'打10个的甄子丹'。",
      source: "抖音 / 科隆展",
      date: "2026-08-26",
      url: "https://www.iesdouyin.com/share/video/7678207656087096585",
      badge: "定档发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 90,
      tags: ["影之刃零", "国产3A", "武侠动作", "定档", "灵游坊"],
      content: [
        {
          title: "游戏亮点",
          type: "list",
          items: [
            "定档10月29日全球发售，研发全部完工；",
            "全平台预售已开启，支持多平台；",
            "黑暗国风美学+丝滑连招+原创江湖剧情；",
            "被视为今年下半年最稳的国产3A大作之一。"
          ]
        }
      ]
    },
    {
      id: "cod-switch2",
      category: "games",
      subcategory: "Switch 2",
      title: "Switch 2 版《使命召唤》科隆首次开放 6v6 试玩，10月发售",
      summary: "任天堂在科隆游戏展首次开放 Switch 2 版《使命召唤》的 6v6 多人对战试玩，这款 FPS 新作标志着使命召唤系列正式登陆任天堂新平台。游戏计划于2026年10月发售，Switch 2 的性能表现与跨平台联机成为关注焦点。",
      source: "什么值得买 / 任天堂",
      date: "2026-08-27",
      url: "https://post.m.smzdm.com/p/avgr2zd7/",
      badge: "平台新作",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["使命召唤", "Switch2", "6v6试玩", "科隆展", "FPS"],
      content: [
        {
          title: "试玩信息",
          type: "list",
          items: [
            "Switch 2 版《使命召唤》科隆首次开放6v6试玩；",
            "使命召唤系列正式登陆任天堂新平台；",
            "计划2026年10月发售；",
            "Switch 2 性能表现与跨平台联机成关注焦点。"
          ]
        }
      ]
    },
    {
      id: "iron-man-leak",
      category: "games",
      subcategory: "EA Motive",
      title: "EA Motive 钢铁侠新作实机画面疑泄露，高速飞行与高自由度露脸",
      summary: "据网易科技报道，EA Motive 开发的钢铁侠单人游戏实机画面疑似泄露，视频展示了高速飞行、高自由度的战甲操作与战斗场景。这是 EA Motive 继《死亡空间重制版》后的重点项目，采用寒霜引擎开发，钢铁侠的飞行机动性与破坏场景成为核心卖点。",
      source: "网易科技 / 字节漫游指南",
      date: "2026-08-29",
      url: "https://tech.163.com/keywords/6/3/6e38620f/1.html",
      badge: "疑似泄露",
      badgeType: "hot",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["钢铁侠", "EA Motive", "实机泄露", "寒霜引擎", "漫威"],
      content: [
        {
          title: "泄露内容",
          type: "list",
          items: [
            "EA Motive 钢铁侠新作实机画面疑似泄露；",
            "展示高速飞行与高自由度战甲操作；",
            "EA Motive 继《死亡空间重制版》后重点项目；",
            "采用寒霜引擎，飞行机动性与破坏场景为核心卖点。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-shader-dump",
      category: "opensource",
      subcategory: "工具链",
      title: "shader-dump-preview-recovery：Shader dump/预览恢复工具，支持 Unity AssetBundle",
      summary: "GitHub 新项目 fhkdguc/shader-dump-preview-recovery 是 Windows 桌面工具，用于 shader dump/预览恢复，提供批量工作流、导出预设和引导式 GUI/CLI，服务于本地资产管线，支持 Unity AssetBundle 资产的 shader 恢复与预览。",
      source: "GitHub",
      date: "2026-08-28",
      url: "https://github.com/fhkdguc/shader-dump-preview-recovery",
      badge: "工具开源",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["Shader", "Unity", "AssetBundle", "工具链", "CLI"],
      content: [
        {
          title: "项目特性",
          type: "list",
          items: [
            "Windows 桌面工具，shader dump/预览恢复；",
            "批量工作流+导出预设+引导式 GUI/CLI；",
            "支持 Unity AssetBundle 资产管线；",
            "适合需要恢复和预览 shader 资产的开发者。"
          ]
        }
      ]
    },
    {
      id: "repo-realmshards",
      category: "opensource",
      subcategory: "Unity 6",
      title: "RealmShards：基于 Unity 6 URP 的 2D 开源项目",
      summary: "GitHub 项目 VitorFontenelle/RealmShards 是基于 Unity 6 URP 的 2D 游戏开源项目，展示了 Unity 6 最新渲染管线在 2D 项目中的应用实践，适合学习 Unity 6 URP 2D 渲染与项目结构。",
      source: "GitHub",
      date: "2026-08-18",
      url: "https://github.com/VitorFontenelle/RealmShards",
      badge: "Unity 6 项目",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Unity6", "URP", "2D", "开源项目"],
      content: [
        {
          title: "项目价值",
          type: "list",
          items: [
            "基于 Unity 6 URP 的 2D 游戏开源项目；",
            "展示 Unity 6 最新渲染管线在 2D 中的应用；",
            "适合学习 Unity 6 URP 2D 渲染与项目结构。"
          ]
        }
      ]
    },
    {
      id: "repo-godot-template",
      category: "opensource",
      subcategory: "Godot",
      title: "Godot-Game-Template：Godot 游戏开发模板项目",
      summary: "GitHub 项目 Maaack/Godot-Game-Template 是 Godot 引擎的游戏开发模板，提供项目结构、常用系统和最佳实践的起点，帮助 Godot 开发者快速启动新项目，8月28日有更新。",
      source: "GitHub",
      date: "2026-08-28",
      url: "https://github.com/Maaack/Godot-Game-Template",
      badge: "Godot 模板",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["Godot", "游戏模板", "项目结构", "最佳实践"],
      content: [
        {
          title: "模板内容",
          type: "list",
          items: [
            "Godot 引擎游戏开发模板，提供项目起点；",
            "包含常用系统与最佳实践；",
            "帮助开发者快速启动新项目，8月28日更新。"
          ]
        }
      ]
    },
    {
      id: "repo-indie-tools",
      category: "opensource",
      subcategory: "独立开发",
      title: "独立开发者工具分享：鲁班数学表、开源 Unity 多人联机库、ObservableCollections",
      summary: "独立开发者在抖音分享常用第三方库与插件：鲁班游戏数学表工具（可导出多种格式，与 HybridCLR 同一作者）、开源 Unity 多人联机网络库（可构建无头战斗服务器或 P2P 对战）、ObservableCollections（日本公司提供的实用工具库，含 Z70 零开销字符串构建）。",
      source: "抖音 / 独立开发者分享",
      date: "2026-08-24",
      url: "https://www.iesdouyin.com/share/video/7677441193650785582",
      badge: "工具分享",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["独立开发", "Unity插件", "多人联机", "数学表", "ObservableCollections"],
      content: [
        {
          title: "推荐工具",
          type: "list",
          items: [
            "鲁班游戏数学表工具：多格式导出，与 HybridCLR 同作者；",
            "开源 Unity 多人联机网络库：无头战斗服务器/P2P 对战；",
            "ObservableCollections：日本公司实用工具库，Z70 零开销；",
            "适合独立开发者提升开发效率的工具链组合。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-epic-august-learning",
      category: "tutorials",
      subcategory: "Unreal Engine",
      title: "Epic 8月免费学习内容：网络物理基础、Mesh Terrain、项目优化、材质与音频",
      summary: "Unreal Engine 官方发布8月免费学习内容合集，涵盖网络物理基础（多人游戏物理对象同步）、Mesh Terrain 新功能、项目优化工作流、材质创建和动态音频处理等深度主题，为 UE 开发者提供系统的进阶学习路径。",
      source: "Unreal Engine 官方",
      date: "2026-08-28",
      url: "https://www.unrealengine.com/learning/augusts-epic-learning-content-networked-physics-dynamic-audio-and-more",
      badge: "官方教程",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 86,
      tags: ["UE5", "网络物理", "Mesh Terrain", "项目优化", "官方教程"],
      content: [
        {
          title: "学习内容",
          type: "list",
          items: [
            "网络物理基础：多人游戏中物理对象同步原理与实践；",
            "Mesh Terrain：最新地形功能使用教程；",
            "项目优化工作流：性能分析与优化技巧；",
            "材质创建与动态音频处理：视听效果进阶；",
            "全部免费，适合 UE 开发者系统进阶。"
          ]
        }
      ]
    },
    {
      id: "tut-unity-gpu-animation",
      category: "tutorials",
      subcategory: "Unity 渲染",
      title: "Unity GPU 动画完整教程：录制烘焙+运行使用，支持大量同屏",
      summary: "Unity 官方开发者社区分享 GPU 动画完整教程：将动画预先录制烘焙成浮点贴图，运行时通过 Shader 顶点着色器播放，抛弃 SkinnedMeshRenderer，支持 GPU Instancing 实现大量同屏角色动画，适合大规模人群与同屏单位优化。",
      source: "Unity 官方开发者社区 / UnityJun24",
      date: "2026-08-03",
      url: "https://developer.unity.cn/search?q=%E4%BA%A4%E4%BA%92",
      badge: "性能优化",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["Unity", "GPU动画", "烘焙", "GPU Instancing", "性能优化"],
      content: [
        {
          title: "教程要点",
          type: "list",
          items: [
            "动画预先录制烘焙成浮点贴图；",
            "运行时 Shader 顶点着色器播放，抛弃 SkinnedMeshRenderer；",
            "支持 GPU Instancing，大量同屏角色动画；",
            "适合大规模人群与同屏单位性能优化。"
          ]
        }
      ]
    },
    {
      id: "tut-unity-build-toolchain",
      category: "tutorials",
      subcategory: "工程化",
      title: "大一实习三个月开源 Unity 全平台自动化构建工具链",
      summary: "Unity 官方开发者社区分享：一位大一实习生在遭遇全组只有一台 Mac 的困境后，开发了覆盖三端的 Unity 全自动打包发布工具，实现代码到商店全链路闭环，包含构建、上传、通知全流程，并已开源，适合团队 CI/CD 参考。",
      source: "Unity 官方开发者社区 / Penny Lu",
      date: "2026-08-16",
      url: "https://developer.unity.cn/articles?q=%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81",
      badge: "工程实践",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["Unity", "自动化构建", "CI/CD", "全平台", "开源"],
      content: [
        {
          title: "工具链亮点",
          type: "list",
          items: [
            "覆盖三端的 Unity 全自动打包发布工具；",
            "代码到商店全链路闭环：构建+上传+通知；",
            "解决多平台构建环境不一致问题；",
            "已开源，适合团队 CI/CD 参考实践。"
          ]
        }
      ]
    },

    // ------------------------- AI游戏前沿 (AI) -------------------------
    {
      id: "ai-unity-mcp-server",
      category: "ai",
      subcategory: "Unity AI",
      title: "Unity 官方 MCP Server + CLI + Pipeline：Editor/Player/CI/外部 Agent 统一接口",
      summary: "钛媒体报道，Unity 在 2026 年推出官方 MCP Server 后，又继续发布 CLI 和 Pipeline，将 Editor、运行中的 Player、CI 以及外部 Agent 连接到同一套可编程接口中。第三方 Unity MCP 在 2025 年已能让 Claude、Cursor 管理场景/资产/脚本并运行测试，官方方案进一步标准化了 AI 与游戏引擎的连接方式。",
      source: "钛媒体 / 今日头条",
      date: "2026-08-22",
      url: "http://m.toutiao.com/group/7676677005102694954/",
      badge: "官方 AI",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 90,
      tags: ["Unity", "MCP Server", "CLI", "Pipeline", "AI Agent"],
      content: [
        {
          title: "AI 工具链布局",
          type: "list",
          items: [
            "Unity 官方 MCP Server 已发布，标准化 AI 接入；",
            "CLI + Pipeline 连接 Editor、Player、CI、外部 Agent；",
            "第三方 Unity MCP 2025年已支持 Claude/Cursor 管理场景资产；",
            "AI 正从代码生成走向直接操控编辑器与运行时；",
            "建议团队尽早建立 AI 产出评审规范，实现可控可审计。"
          ]
        }
      ]
    },
    {
      id: "ai-chinajoy-trend",
      category: "ai",
      subcategory: "行业趋势",
      title: "从 2026 ChinaJoy 看 AI 游戏新趋势：引擎 MCP 升级为 Agent 调用铺平道路",
      summary: "钛媒体深度报道，过去一年游戏研发与 AI 的连接方式迅速成熟。游戏引擎 MCP 升级为 Agent 调用铺平道路，AI 正从外挂工具演变为引擎原生能力。NVIDIA ACE 与本地小模型推进端侧智能 NPC，AI Agent 直接操控编辑器成为现实，游戏行业的 AI 变革才刚刚开始。",
      source: "钛媒体",
      date: "2026-08-22",
      url: "http://m.toutiao.com/group/7676677005102694954/",
      badge: "行业趋势",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 88,
      tags: ["AI游戏", "ChinaJoy", "MCP", "AI Agent", "NVIDIA ACE"],
      content: [
        {
          title: "趋势要点",
          type: "list",
          items: [
            "游戏引擎 MCP 升级，为 AI Agent 调用铺平道路；",
            "AI 从外挂工具演变为引擎原生能力；",
            "NVIDIA ACE 与本地小模型推进端侧智能 NPC；",
            "AI Agent 直接操控编辑器成为现实；",
            "游戏行业的 AI 变革进入工程化落地阶段。"
          ]
        }
      ]
    }
  ]
};
