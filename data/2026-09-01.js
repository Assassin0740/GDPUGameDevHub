/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-01
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-01",
    weekday: "星期二",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-01 08:35",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "🎮 9月游戏发售大潮开启：鬼武者/寂静岭/巫师3重制/火焰纹章齐聚",
      "💰 腾讯计划2亿欧元增持育碧股份至9.99%，另投1亿欧元公司债",
      "🔧 Unite Seoul 2026回顾：Unity 7正式官宣，下一代引擎架构揭晓",
      "🤖 Voyage AI RPG平台发布：生成式NPC重塑角色扮演体验",
      "📈 沙特PIF 550亿美元收购EA完成，游戏行业并购潮持续"
    ],
    engineStatus: [
      { name: "Unity 7", type: "unity", status: "Unite Seoul官宣·下一代主版本", badge: "新架构", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 长期支持", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "8月27日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁", badge: "UE5工业化", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "Verse语言", color: "pink" },
      { name: "Godot 4.4", type: "godot", status: "Jolt物理集成·开源引擎", badge: "轻量开源", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-september-2026-releases",
    category: "games",
    categoryName: "热门游戏 · 头条深度",
    tag: "🔥 9月发售潮",
    title: "9月游戏发售大潮开启：鬼武者/寂静岭/巫师3重制/火焰纹章齐聚，钱包准备好了吗？",
    summary: "进入9月，2026年秋季游戏发售季正式拉开帷幕。本月全平台共有21款大作登场：卡普空《鬼武者：剑之道》9月4日率先发售（Steam关注近5万），《寂静岭：Townfall》9月24日回归心理恐怖，《巫师3：狂猎》重制版9月29日全平台免费升级，Switch 2独占《火焰纹章：万缕千丝》9月17日发售，此外《沙丘：觉醒》《黎明行者之血》等也将在本月亮相。Metro评出9月19款最受期待游戏，堪称近年最密集的发售月之一。",
    image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
    source: "游民星空 / Metro / GamerBolt / 杉果娘",
    date: "2026-09-01",
    url: "https://metro.co.uk/2026/08/31/19-exciting-video-game-releases-september-2026-29447973/",
    readTime: "4 分钟深度",
    hotScore: 96,
    tags: ["9月新游", "鬼武者", "寂静岭", "巫师3重制", "火焰纹章"],
    content: [
      {
        title: "9月重点发售清单",
        type: "list",
        items: [
          "9月4日：《鬼武者：剑之道》——卡普空经典IP重启，Steam关注近5万；",
          "9月17日：《火焰纹章：万缕千丝》——Switch 2独占，系列首次为新主机打造；",
          "9月22日：《沙丘：觉醒》——开放世界MMO，沙丘IP改编；",
          "9月24日：《寂静岭：Townfall》——心理恐怖回归，苏格兰团队打造；",
          "9月29日：《巫师3：狂猎》重制版——全平台免费升级，光线追踪+重做战斗。"
        ]
      },
      {
        title: "发售潮对行业的意义",
        type: "text",
        text: "9月历来是游戏行业的黄金发售期，2026年尤其密集：既有卡普空、科乐美、CDPR等大厂的IP重启与重制，也有Switch 2平台的独占新作护航。对开发者而言，这波发售潮将带动玩家活跃度与硬件销量，同时也为后续圣诞季奠定用户基础。建议关注各款作品的技术实现（如巫师3重制的光追方案、鬼武者的战斗系统）作为技术参考。"
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
      id: "unity7-unite-seoul",
      category: "engine",
      subcategory: "Unity",
      title: "Unite Seoul 2026 回顾：Unity 7 正式官宣，下一代编辑器与运行时架构揭晓",
      summary: "Unity 在 Unite Seoul 2026 主题演讲中正式宣布 Unity 7——Unity 编辑器和运行时的下一个主要版本，基于 Unity 6.x 构建以实现更快的迭代和连接。演讲涵盖引擎、变现和协作工具的全面更新，标志着 Unity 进入新一代架构周期。",
      source: "Unity 官方博客",
      date: "2026-07-21",
      url: "https://unity.com/blog/unite-seoul-keynote-2026-recap",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "引擎官宣",
      badgeType: "engine",
      readTime: "5 分钟",
      hotScore: 92,
      tags: ["Unity", "Unity 7", "Unite Seoul", "引擎架构"],
      content: [
        {
          title: "核心发布",
          type: "list",
          items: [
            "Unity 7 正式官宣，为编辑器和运行时下一个主要版本；",
            "基于 Unity 6.x 基础构建，目标更快迭代与连接；",
            "涵盖引擎、变现和协作工具的全面更新；",
            "主题演讲全程直播，可在 Unity 官网回看。"
          ]
        },
        {
          title: "开发者建议",
          type: "text",
          text: "Unity 7 尚处于早期阶段，生产项目建议继续使用 Unity 6.3 LTS。关注其架构变化（尤其是运行时和迭代速度改进），为未来迁移做技术储备。"
        }
      ]
    },
    {
      id: "unity7-vs-ue6-analysis",
      category: "engine",
      subcategory: "引擎对比",
      title: "Unity 7 和 UE6 前后脚官宣，现在入局游戏开发该学谁？国内用户先看清这个现实",
      summary: "深度分析 Unity 7 与 UE6 的路线差异：Unity 7 基于 6.x 迭代，强调更快迭代；UE6 更像愿景宣言——合并 UE5 与 UEFN 为统一编辑器，用 Verse 逐步替代 C++，计划淘汰蓝图，目标 2027 年底抢先体验，商用版本要到 2028-2029 年。国内用户需考虑生态与授权现实。",
      source: "什么值得买",
      date: "2026-08-30",
      url: "https://post.m.smzdm.com/p/a267xrrn/",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "深度分析",
      badgeType: "engine",
      readTime: "5 分钟",
      hotScore: 88,
      tags: ["Unity 7", "UE6", "引擎选型", "Verse", "蓝图"],
      content: [
        {
          title: "两大引擎路线对比",
          type: "list",
          items: [
            "Unity 7：基于6.x迭代，强调更快迭代与连接，路线务实；",
            "UE6：合并UE5与UEFN为统一编辑器，Verse逐步替代C++；",
            "UE6计划淘汰蓝图可视化脚本，时间线拉长至2027年底EA；",
            "商用版本预计2028-2029年，短期内UE5仍是主力。"
          ]
        }
      ]
    },
    {
      id: "three-engines-comparison",
      category: "engine",
      subcategory: "引擎对比",
      title: "三大游戏引擎终极对比：渲染能力/学习成本/授权模式一文说透",
      summary: "社区深度对比 Unity/Unreal/Godot 三大引擎：2026 GDC 数据显示 Unity 约占 30% 引擎使用份额，Godot 凭借《杀戮尖塔2》等爆款知名度持续攀升，Unreal 在 AA/AAA 团队主导。Godot 工作在开发者对商业模式日益警惕的行业中越发重要，大量独立开发者从商用引擎转向全免费开源工具。",
      source: "什么值得买 / GDC2026",
      date: "2026-08-28",
      url: "https://post.m.smzdm.com/p/a6zq8mqo/",
      badge: "选型参考",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 86,
      tags: ["Unity", "Unreal", "Godot", "引擎对比", "GDC"],
      content: [
        {
          title: "对比要点",
          type: "list",
          items: [
            "Unity约占30%引擎使用份额，移动端与2D生态优势明显；",
            "Unreal在AA(59%)/AAA(47%)团队主导，渲染上限高；",
            "Godot完全开源免费，靠《杀戮尖塔2》等爆款带动热度；",
            "授权模式差异大：Unity订阅制、UE 5%分成、Godot零成本；",
            "选型需结合项目类型、团队规模与商业模式综合判断。"
          ]
        }
      ]
    },
    {
      id: "unity-vs-unreal-2026",
      category: "engine",
      subcategory: "引擎对比",
      title: "Unity vs Unreal Engine：2026年哪个游戏引擎更好？资深架构师实话实说",
      summary: "SoonLab 资深系统架构师撰文对比 Unity 与 Unreal 在 2026 年的真实表现，指出大多数入门文章回避的关键问题：两个引擎的学习曲线、生态成熟度、2D/3D 侧重、团队规模适配性存在本质差异，选择应基于项目需求而非社区热度。",
      source: "SoonLab",
      date: "2026-08-31",
      url: "https://www.soonlab.ai/blog/unity-vs-unreal/",
      badge: "深度对比",
      badgeType: "engine",
      readTime: "5 分钟",
      hotScore: 85,
      tags: ["Unity", "Unreal", "引擎对比", "架构师"],
      content: [
        {
          title: "核心观点",
          type: "list",
          items: [
            "入门选择不应只看社区热度，需结合项目类型；",
            "Unity在2D/移动端/中小团队仍有明显优势；",
            "Unreal在3A写实/高保真渲染领域保持领先；",
            "学习曲线差异：Unity上手快但精通难，Unreal入门门槛高但上限高。"
          ]
        }
      ]
    },
    {
      id: "ue582-hotfix",
      category: "engine",
      subcategory: "Unreal",
      title: "UE 5.8.2 Hotfix 发布：修复 Metal RT、Mac 渲染断言等稳定性问题",
      summary: "Epic 发布 Unreal Engine 5.8.2 Hotfix，重点修复 Metal 光线追踪中 Any-Hit/Intersection 融合着色器问题、DrawTileMesh 半透明路径深度模板绑定、Mac 端渲染断言与零尺寸视口回退缓冲区、WebKit/ApplePlatform 相关 Bug 等稳定性问题。",
      source: "Epic Developer Community",
      date: "2026-08-25",
      url: "https://forums.unrealengine.com/t/5-8-2-hotfix-released/2746335",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "Hotfix",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["Unreal", "UE5.8", "Hotfix", "Metal RT", "渲染"],
      content: [
        {
          title: "修复内容",
          type: "list",
          items: [
            "修复 Metal RT 中 Any-Hit/Intersection 融合着色器问题；",
            "修复 DrawTileMesh 半透明路径深度模板绑定；",
            "修复 Mac 端渲染断言与零尺寸视口问题；",
            "修复 WebKit/ApplePlatform 相关命令 Bug。"
          ]
        },
        {
          title: "升级建议",
          type: "text",
          text: "正在 Mac 平台开发或使用 Metal 光线追踪的团队建议升级到 5.8.2 Hotfix，可显著减少渲染断言与崩溃类问题。"
        }
      ]
    },
    {
      id: "godot44-release",
      category: "engine",
      subcategory: "Godot",
      title: "Godot 4.4 发布：近 3000 次提交、Jolt 物理直接集成，超500位贡献者",
      summary: "开源跨平台游戏引擎 Godot 4.4 正式发布，包含近 3000 次提交（不含合并），重点改进编辑器整体工作流与易用性，并将此前作为扩展的 Jolt Physics 代码直接集成进引擎，同时提升游戏内交互式编辑能力，超过 500 位贡献者参与本次功能更新。",
      source: "Godot Engine 官方",
      date: "2026-08-25",
      url: "https://godotengine.org/releases/4.4/index.html",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "版本发布",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 90,
      tags: ["Godot", "Godot 4.4", "Jolt Physics", "开源引擎"],
      content: [
        {
          title: "发布亮点",
          type: "list",
          items: [
            "近3000次提交，重点提升编辑器工作流与易用性；",
            "Jolt Physics 代码直接集成进引擎；",
            "游戏内交互式编辑能力改进；",
            "超500位贡献者参与本次功能更新。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "tencent-ubisoft-investment",
      category: "industry",
      subcategory: "大厂动向",
      title: "腾讯计划2亿欧元增持育碧股份至9.99%，另投1亿欧元公司债",
      summary: "据 Bloomberg 报道，腾讯计划投资 2 亿欧元将其在育碧（Ubisoft）的直接持股从 4.5% 增至 9.99%，隐含价格为每股 80 欧元，同时另向育碧公司投资 1 亿欧元。此举将加深腾讯与育碧的资本绑定，育碧旗下拥有《刺客信条》《彩虹六号》等重磅 IP。",
      source: "TEXXR / Bloomberg",
      date: "2026-08-31",
      url: "https://texxr.com/982569/tencent-doubles-ubisoft-stake-300m-eur",
      image: "https://aka.doubaocdn.com/s/oC7uFJZg0R",
      badge: "资本动向",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 93,
      tags: ["腾讯", "育碧", "股权投资", "Bloomberg", "刺客信条"],
      content: [
        {
          title: "交易要点",
          type: "list",
          items: [
            "腾讯计划2亿欧元增持育碧直接持股至9.99%；",
            "隐含价格每股80欧元，另投1亿欧元公司债；",
            "育碧旗下拥有《刺客信条》《彩虹六号》等重磅IP；",
            "加深腾讯与欧洲3A大厂的资本与业务绑定。"
          ]
        },
        {
          title: "行业影响",
          type: "text",
          text: "腾讯持续加码全球3A厂商投资，此前已持有拳头、Epic、蓝洞等股份。增持育碧有助于腾讯在全球游戏发行、IP合作和技术交流方面获得更多话语权，也反映出中国资本对海外优质游戏资产的长期看好。"
        }
      ]
    },
    {
      id: "giant-network-block-trade",
      category: "industry",
      subcategory: "A股游戏",
      title: "巨人网络大宗交易折价成交1.22亿元，《007：初露锋芒》Switch2版再度延期",
      summary: "8月31日巨人网络完成大宗交易，合计成交475.2万股，成交总金额1.22亿元，占当日个股总成交额的6.7%，成交价格均为25.64元，相对当日收盘价折价。同时《007：初露锋芒》Switch 2 版本再度延期，引发投资者关注。",
      source: "每日经济新闻 / 今日头条",
      date: "2026-09-01",
      url: "http://m.toutiao.com/group/7680327013462213155/",
      badge: "A股动态",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["巨人网络", "大宗交易", "007", "Switch2", "延期"],
      content: [
        {
          title: "交易与产品动态",
          type: "list",
          items: [
            "巨人网络大宗交易成交475.2万股，金额1.22亿元；",
            "成交价25.64元，相对收盘价折价；",
            "《007：初露锋芒》Switch 2版再度延期；",
            "占当日个股总成交额6.7%。"
          ]
        }
      ]
    },
    {
      id: "saudi-pif-ea-acquisition",
      category: "industry",
      subcategory: "并购",
      title: "沙特 PIF 550 亿美元收购 EA 完成，《模拟人生》《植物大战僵尸》IP 收入囊中",
      summary: "沙特公共投资基金（PIF）牵头，联合银湖资本及 Affinity Partners，以 550 亿美元（约合人民币 3710 亿元）现金完成对美国艺电（EA）的私有化收购。EA 旗下《植物大战僵尸》《模拟人生》《FIFA/EA Sports》等 IP 悉数易主，这是游戏行业史上最大规模并购之一。",
      source: "界面新闻",
      date: "2026-08-25",
      url: "https://www.jiemian.com/article/14978464.html",
      badge: "行业并购",
      badgeType: "business",
      readTime: "4 分钟",
      hotScore: 91,
      tags: ["沙特PIF", "EA", "并购", "550亿美元", "模拟人生"],
      content: [
        {
          title: "交易概况",
          type: "list",
          items: [
            "沙特PIF联合银湖资本、Affinity Partners完成收购；",
            "交易金额550亿美元（约3710亿元人民币）现金；",
            "EA旗下《模拟人生》《植物大战僵尸》《FIFA》等IP易主；",
            "游戏行业史上最大规模并购之一。"
          ]
        },
        {
          title: "行业趋势",
          type: "text",
          text: "沙特PIF持续加码全球游戏产业，此前已投资任天堂、卡普空、Nexon等。大规模主权基金入场正在重塑全球游戏行业的资本格局，未来可能出现更多重量级并购。"
        }
      ]
    },
    {
      id: "sony-gungho-alliance",
      category: "industry",
      subcategory: "日厂动态",
      title: "Sony Music 与 GungHo 达成资本业务联盟，交易额约 1.79 亿美元",
      summary: "GungHo Online Entertainment 宣布与 Sony Music Entertainment Japan（SME）达成资本与业务联盟。SME 将通过场外交易收购 GungHo 股份，总交易额约 286.36 亿日元（约 1.79 亿美元）。双方将在游戏开发、IP 运营和音乐内容领域展开深度合作。",
      source: "Anime News Network",
      date: "2026-08-31",
      url: "https://www.animenewsnetwork.com/news/2026-08-31/sony-music-entertainment-japan-gungho-online-entertainment-form-capital-business-alliance/.241132",
      badge: "资本联盟",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["Sony Music", "GungHo", "资本联盟", "日本游戏", "IP运营"],
      content: [
        {
          title: "联盟要点",
          type: "list",
          items: [
            "SME通过场外交易收购GungHo股份；",
            "总交易额约286.36亿日元（1.79亿美元）；",
            "双方在游戏开发、IP运营、音乐内容领域合作；",
            "GungHo旗下有《智龙迷城》等知名手游IP。"
          ]
        }
      ]
    },
    {
      id: "keling-ai-fund-investment",
      category: "industry",
      subcategory: "AI 资本",
      title: "可灵获国家人工智能基金 14 亿元增资，快手视频大模型再获国家队加持",
      summary: "8月31日快手董事会宣布，可灵分别与国家人工智能产业投资基金及正大机器人订立加入协议，国家人工智能基金向北京可灵注入现金资本 14 亿元，正大机器人注资约 1929 万美元（约 1.31 亿元）。视频生成大模型在游戏内容生产中的应用潜力持续被资本看好。",
      source: "澎湃新闻",
      date: "2026-09-01",
      url: "https://m.thepaper.cn/newsDetail_forward_33979746",
      badge: "AI 融资",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["可灵", "快手", "国家AI基金", "视频大模型", "增资"],
      content: [
        {
          title: "增资详情",
          type: "list",
          items: [
            "国家人工智能基金向可灵注资14亿元；",
            "正大机器人注资约1929万美元（1.31亿元）；",
            "可灵为快手旗下视频生成大模型；",
            "视频大模型在游戏内容生产中应用潜力被看好。"
          ]
        }
      ]
    },
    {
      id: "gamescom-awards-2026",
      category: "industry",
      subcategory: "科隆展会",
      title: "2026 科隆游戏奖名单出炉：19项大奖揭晓，CDPR与世嘉各揽3奖",
      summary: "2026科隆游戏展官方公布全部19项大奖归属：CD Projekt RED 凭借《巫师3》重制版与《旧时曲》DLC 斩获最佳预告、最佳展台、最佳周边三项大奖；世嘉以《异形：隔离2》最佳音效、《全面战争：战锤40K》最佳PC游戏等同样揽获三项。卡普空与育碧各获两项。",
      source: "gamescom 官方",
      date: "2026-08-28",
      url: "https://www.gamescom.global/en/gamescom-award-2026-the-winners-are",
      badge: "科隆大奖",
      badgeType: "event",
      readTime: "3 分钟",
      hotScore: 89,
      tags: ["科隆展", "游戏大奖", "巫师3", "世嘉", "CDPR"],
      content: [
        {
          title: "获奖情况",
          type: "list",
          items: [
            "CDPR与世嘉各获三项大奖，成最大赢家；",
            "《巫师3》获最佳预告、最佳展台、最佳周边；",
            "《异形：隔离2》获最佳音效；",
            "《全面战争：战锤40K》获最佳PC游戏；",
            "卡普空与育碧各获两项大奖。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "onimusha-release",
      category: "games",
      subcategory: "卡普空",
      title: "《鬼武者：剑之道》9月4日发售：Steam关注近5万，经典IP时隔多年重启",
      summary: "卡普空《鬼武者：剑之道》（Onimusha: Way of the Sword）将于 9月4日 正式发售，登陆 PC/PS5/Xbox Series。本作是经典动作 IP 时隔多年的重启之作，以刀光血影的极致剑戟战斗为核心，在面目全非的'京都'中斩杀幻魔，Steam 关注人数已接近 5 万。",
      source: "杉果娘 / 今日头条",
      date: "2026-08-24",
      url: "http://m.toutiao.com/group/7677543060624032297/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "9月4日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 90,
      tags: ["鬼武者", "卡普空", "剑戟动作", "9月发售", "Steam"],
      content: [
        {
          title: "游戏亮点",
          type: "list",
          items: [
            "9月4日全平台发售，Steam关注近5万；",
            "经典鬼武者IP时隔多年重启；",
            "极致刀光剑影的剑戟战斗系统；",
            "背景设定在面目全非的'京都'，斩杀幻魔。"
          ]
        }
      ]
    },
    {
      id: "witcher3-remaster-release",
      category: "games",
      subcategory: "CDPR",
      title: "《巫师3：狂猎》重制版 9月29日全平台发售：光线追踪+重做战斗+更强怪物AI",
      summary: "CDPR 确认《巫师3：狂猎》重制版将于 9月29日 登陆 PC/PS5/Xbox Series/Switch 2，已拥有本体的玩家可免费升级。重制版包含光线追踪、重做的移动与战斗系统、升级的骑马操作、更聪明的怪物 AI 与新能力系统，《血与酒》《石之心》资料片同步免费升级。",
      source: "GamerBolt / CDPR",
      date: "2026-08-31",
      url: "https://www.gamerbolt.com/the-best-games-for-september-2026/",
      image: "https://aka.doubaocdn.com/s/FCvxcueazL",
      badge: "9月29日发售",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 92,
      tags: ["巫师3", "重制版", "CDPR", "光线追踪", "免费升级"],
      content: [
        {
          title: "重制内容",
          type: "list",
          items: [
            "9月29日全平台发售，本体玩家免费升级；",
            "包含光线追踪、重做移动与战斗系统；",
            "升级骑马操作与更聪明的怪物AI；",
            "新增能力系统，视觉与植被全面现代化；",
            "血与酒、石之心资料片同步免费升级。"
          ]
        }
      ]
    },
    {
      id: "fire-emblem-switch2",
      category: "games",
      subcategory: "任天堂",
      title: "《火焰纹章：万缕千丝》9月17日 Switch 2 独占：系列首次为新主机打造",
      summary: "任天堂官方确认《火焰纹章：万缕千丝》将于 2026年9月17日 正式发售，Switch 2 平台独占。这是火焰纹章系列首次专为新一代主机打造的正统续作，容量较前作暴涨 2.5 倍，官方直面会展示了全新的战斗系统与剧情走向。",
      source: "什么值得买 / 任天堂",
      date: "2026-08-07",
      url: "https://post.m.smzdm.com/p/aom07mk6/",
      badge: "Switch2独占",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["火焰纹章", "Switch2", "任天堂", "战棋RPG", "9月发售"],
      content: [
        {
          title: "新作特点",
          type: "list",
          items: [
            "9月17日发售，Switch 2平台独占；",
            "系列首次专为新一代主机打造的正统续作；",
            "容量较前作暴涨2.5倍；",
            "全新战斗系统与剧情走向。"
          ]
        }
      ]
    },
    {
      id: "silent-hill-townfall",
      category: "games",
      subcategory: "科乐美",
      title: "《寂静岭：Townfall》9月24日发售：苏格兰团队重塑第一人称生存恐怖",
      summary: "《寂静岭：Townfall》将于 9月24日 登陆 PC/PS5。本作由苏格兰工作室 Screen Burn 开发，科乐美全面放权，以描绘精神被逐渐侵蚀的心理恐怖感为核心，主角 Simon 在孤立的海滨小镇中追寻神秘信号，逐步面对自身的记忆与错误。",
      source: "腾讯新闻 / 科乐美",
      date: "2026-08-18",
      url: "http://news.qq.com/rain/a/20260817A0BP9F00",
      image: "https://aka.doubaocdn.com/s/2dfW9gFW8q",
      badge: "9月24日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["寂静岭", "Townfall", "心理恐怖", "科乐美", "第一人称"],
      content: [
        {
          title: "游戏特色",
          type: "list",
          items: [
            "9月24日登陆PC/PS5；",
            "苏格兰工作室Screen Burn开发，科乐美全面放权；",
            "第一人称生存恐怖，精神侵蚀主题；",
            "主角在孤立海滨小镇追寻神秘信号。"
          ]
        }
      ]
    },
    {
      id: "september-19-exciting-releases",
      category: "games",
      subcategory: "发售前瞻",
      title: "Metro 评出9月19款最受期待游戏：从魂类到开放世界RPG应有尽有",
      summary: "Metro 发布 2026 年 9 月最受期待的 19 款游戏榜单，涵盖《Crimson Moon》（哥特奇幻魂类）、《黎明行者之血》（半吸血鬼开放世界）、《Orbitals》（双人合作冒险）、《沙丘：觉醒》等多种类型。9月堪称近年最密集的游戏发售月之一。",
      source: "Metro",
      date: "2026-08-31",
      url: "https://metro.co.uk/2026/08/31/19-exciting-video-game-releases-september-2026-29447973/",
      badge: "发售前瞻",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 84,
      tags: ["9月新游", "Metro", "发售前瞻", "魂类", "开放世界"],
      content: [
        {
          title: "榜单亮点",
          type: "list",
          items: [
            "《Crimson Moon》哥特奇幻魂类，人/天使混血主角；",
            "《黎明行者之血》14世纪欧洲半吸血鬼开放世界RPG；",
            "《Orbitals》Switch 2双人合作冒险，经典动漫美学；",
            "《沙丘：觉醒》9月22日开放世界MMO；",
            "9月共19款重点游戏，类型覆盖全面。"
          ]
        }
      ]
    },
    {
      id: "dune-awakening-release",
      category: "games",
      subcategory: "MMO",
      title: "《沙丘：觉醒》9月22日发售：开放世界 MMO，沙丘 IP 改编",
      summary: "《沙丘：觉醒》（Dune: Awakening）将于 9月22日 正式发售，登陆 PC/PS5/Xbox Series。本作是基于沙丘 IP 的开放世界 MMO，玩家将在阿拉基斯星球上采集香料、建造基地、与其他玩家争夺资源，体验沙丘宇宙的生存与政治博弈。",
      source: "游民星空",
      date: "2026-08-25",
      url: "https://ku.gamersky.com/release/ps5_202609/",
      badge: "9月22日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["沙丘", "开放世界", "MMO", "生存", "IP改编"],
      content: [
        {
          title: "游戏特色",
          type: "list",
          items: [
            "9月22日全平台发售；",
            "基于沙丘IP的开放世界MMO；",
            "在阿拉基斯星球采集香料、建造基地；",
            "玩家间资源争夺与政治博弈。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-gdevelop",
      category: "opensource",
      subcategory: "无代码引擎",
      title: "GDevelop：开源跨平台 2D/3D/多人游戏引擎，主打无代码开发",
      summary: "GDevelop 是开源跨平台 2D/3D/多人游戏引擎，主打'人人可做游戏'的无代码理念，支持 HTML5 与本地部署，具备事件驱动开发、可视化编辑与多人在线能力，GitHub 长期高活跃度，8月31日仍有更新。",
      source: "GitHub",
      date: "2026-08-31",
      url: "https://github.com/4ian/GDevelop",
      badge: "无代码",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["GDevelop", "无代码", "2D", "3D", "多人游戏"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "开源跨平台2D/3D/多人游戏引擎；",
            "事件驱动无代码开发，人人可上手；",
            "支持HTML5与本地部署；",
            "GitHub活跃维护，8月底持续更新。"
          ]
        }
      ]
    },
    {
      id: "repo-libgdx",
      category: "opensource",
      subcategory: "Java 框架",
      title: "libGDX：Java 跨平台游戏开发框架，桌面/Android/HTML5/iOS 全覆盖",
      summary: "libGDX 是基于 Java 的跨平台游戏开发框架，支持桌面（Windows/Linux/Mac）、Android、HTML5、iOS 等平台，提供完整的 2D/3D 渲染、输入、音频、物理 API，是 Java 游戏开发的主流选择，8月25日仍有更新。",
      source: "GitHub",
      date: "2026-08-25",
      url: "https://github.com/libgdx/libgdx",
      badge: "Java框架",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["libGDX", "Java", "跨平台", "游戏框架", "Android"],
      content: [
        {
          title: "框架特点",
          type: "list",
          items: [
            "基于Java的跨平台游戏开发框架；",
            "支持桌面/Android/HTML5/iOS全平台；",
            "提供完整2D/3D渲染、输入、音频、物理API；",
            "Java游戏开发的主流选择。"
          ]
        }
      ]
    },
    {
      id: "repo-panda3d",
      category: "opensource",
      subcategory: "Python 引擎",
      title: "Panda3D：迪士尼与 CMU 联合开发的开源跨平台 3D 游戏引擎",
      summary: "Panda3D 是由迪士尼和卡内基梅隆大学（CMU）联合开发的成熟开源跨平台 3D 游戏引擎，支持 Python 和 C++，提供完整的 3D 渲染、物理、音频、网络 API，适合教育、研究和中小型 3D 游戏项目。",
      source: "GitHub",
      date: "2026-07-28",
      url: "https://github.com/panda3d/panda3d",
      badge: "Python引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["Panda3D", "Python", "3D引擎", "迪士尼", "CMU"],
      content: [
        {
          title: "引擎特点",
          type: "list",
          items: [
            "迪士尼与CMU联合开发的开源3D引擎；",
            "支持Python和C++双语言；",
            "完整3D渲染、物理、音频、网络API；",
            "适合教育、研究和中小型3D项目。"
          ]
        }
      ]
    },
    {
      id: "repo-awesome-ai-game",
      category: "opensource",
      subcategory: "AI 游戏",
      title: "awesome-ai-game：AI 游戏开源资源精选清单，按热度排序附评测",
      summary: "GitHub 项目 bowen-aigame/awesome-ai-game 是 AI 游戏领域的精选资源清单，收录 AI 互动叙事与角色扮演（如 AI Dungeon、Friends & Fables）、AI NPC 等热门项目，按热度排序并给出评测结论，是了解 AI 游戏生态的入口。",
      source: "GitHub",
      date: "2026-08-26",
      url: "https://github.com/bowen-aigame/awesome-ai-game/blob/main/README.md",
      badge: "资源清单",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["AI游戏", "开源清单", "AI Dungeon", "AI Game Master"],
      content: [
        {
          title: "清单内容",
          type: "list",
          items: [
            "收录AI互动叙事与角色扮演代表作品；",
            "AI Dungeon被列为AI互动小说先驱；",
            "Friends & Fables提供AI Game Master跑团体验；",
            "按热度排序并附评测结论。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-urp-optimize",
      category: "tutorials",
      subcategory: "Unity 渲染",
      title: "Unity URP 性能优化官方指南：Profiler、渲染路径与全局光照选择",
      summary: "Unity 官方文档详解 URP 项目性能优化：使用 Unity Profiler 获取 CPU/内存数据，理解关键 Profiler 标记；调整渲染路径（Forward/Forward+/Deferred）与全局光照选择；URP 移动端性能与配置优化建议一应俱全，是 URP 开发者的必读优化手册。",
      source: "Unity 官方文档",
      date: "2026-08-04",
      url: "https://docs.unity.cn/cn/Packages-cn/com.unity.render-pipelines.universal@14.1/manual/optimize-for-better-performance.html",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "官方优化",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 87,
      tags: ["Unity", "URP", "性能优化", "Profiler", "渲染路径"],
      content: [
        {
          title: "优化要点",
          type: "list",
          items: [
            "使用Unity Profiler定位CPU/内存瓶颈；",
            "理解影响URP帧性能的关键Profiler标记；",
            "合理选择Forward/Forward+/Deferred渲染路径；",
            "根据平台配置HDR、阴影分辨率与渲染层级。"
          ]
        }
      ]
    },
    {
      id: "tut-epic-august-learning",
      category: "tutorials",
      subcategory: "Unreal",
      title: "Epic 8月免费学习内容：网络物理、Mesh Terrain、动态音频等深度主题",
      summary: "Unreal Engine 官方发布8月免费学习内容合集，涵盖网络物理基础（多人游戏物理对象同步）、Mesh Terrain 新功能、项目优化工作流、材质创建、动态音频处理以及 UE5.8 新特性 Accumulation Depth of Field 插件深入解析等深度主题。",
      source: "Unreal Engine 官方",
      date: "2026-08-28",
      url: "https://www.unrealengine.com/learning/augusts-epic-learning-content-networked-physics-dynamic-audio-and-more",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "官方教程",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 86,
      tags: ["Unreal", "网络物理", "Mesh Terrain", "动态音频", "DoF"],
      content: [
        {
          title: "学习内容",
          type: "list",
          items: [
            "网络物理基础：多人游戏中物理对象同步原理与实践；",
            "Mesh Terrain：最新地形功能使用教程；",
            "Accumulation Depth of Field插件深入解析（UE5.8电影级景深）；",
            "材质创建与动态音频处理：视听效果进阶；",
            "全部免费，适合UE开发者系统进阶。"
          ]
        }
      ]
    },
    {
      id: "tut-godot-gdscript",
      category: "tutorials",
      subcategory: "Godot",
      title: "零基础入门：用 Godot 4 开发游戏学习 GDScript，环境搭建到第一个项目",
      summary: "Packt 官方教程详解如何从零开始用 Godot 4 学习 GDScript 游戏开发：从下载安装 Godot、创建第一个项目、理解节点系统，到编写第一个 GDScript 脚本。教程覆盖 Forward+/Mobile/Compatibility 三种渲染器的选择，适合完全零基础的初学者。",
      source: "Packt",
      date: "2026-05-01",
      url: "https://www.packtpub.com/en-es/product/learning-gdscript-by-developing-a-game-with-godot-4-9781804616987/chapter/chapter-1-setting-up-the-environment-2/section/getting-and-preparing-godot-ch02lvl1sec05",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "入门教程",
      badgeType: "engine",
      readTime: "5 分钟",
      hotScore: 83,
      tags: ["Godot", "GDScript", "入门教程", "环境搭建", "渲染器"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "从零下载安装Godot 4并创建第一个项目；",
            "理解节点系统与场景结构；",
            "编写第一个GDScript脚本；",
            "Forward+/Mobile/Compatibility三种渲染器选择指南；",
            "适合完全零基础的初学者。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "voyage-ai-rpg",
      category: "ai",
      subcategory: "AI RPG",
      title: "Voyage AI RPG 平台发布：生成式 NPC 重塑角色扮演游戏体验",
      summary: "Voyage AI RPG 平台于8月31日正式发布，这是一个创新的 AI 驱动 RPG 平台，玩家可以构建完全自定义的游戏世界。平台利用先进的生成式 AI 创建动态的、无脚本的 NPC 交互，NPC 能对玩家选择做出真实反应，摆脱了传统对话树的 rigid 限制。",
      source: "TechShots",
      date: "2026-08-31",
      url: "https://www.techshotsapp.com/technology/voyage-ai-rpg-platform-launches-to-revolutionize-gaming-with-generative-npcs",
      badge: "AI 平台",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["Voyage AI", "AI RPG", "生成式NPC", "自定义世界", "无脚本交互"],
      content: [
        {
          title: "平台亮点",
          type: "list",
          items: [
            "AI驱动的RPG平台，玩家可构建自定义游戏世界；",
            "生成式AI创建动态、无脚本的NPC交互；",
            "NPC对玩家选择做出真实反应；",
            "摆脱传统对话树的刚性限制。"
          ]
        }
      ]
    },
    {
      id: "nvidia-ace-games",
      category: "ai",
      subcategory: "NVIDIA",
      title: "NVIDIA ACE 游戏开发版：生成式 AI 让虚拟角色真正'活'起来",
      summary: "NVIDIA ACE Game Development Edition 基于 Omniverse 构建，为游戏提供优化的语音、对话和角色动画 AI 基础模型，包括 NeMo 大语言模型（可根据游戏世界观与角色背景定制）、语音合成与面部动画驱动。开发者可将 AI 角色集成到游戏中，实现真正的动态交互。",
      source: "Shulou / NVIDIA",
      date: "2026-08-31",
      url: "https://www.shulou.com/a582768",
      badge: "NVIDIA ACE",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 87,
      tags: ["NVIDIA", "ACE", "AI角色", "Omniverse", "NeMo"],
      content: [
        {
          title: "技术栈",
          type: "list",
          items: [
            "基于NVIDIA Omniverse构建；",
            "NeMo大语言模型可按游戏世界观定制；",
            "优化的语音、对话、角色动画AI模型；",
            "实现虚拟角色的动态语音与表情交互。"
          ]
        }
      ]
    },
    {
      id: "dq10-ai-slime",
      category: "ai",
      subcategory: "AI NPC",
      title: "《勇者斗恶龙X》AI 史莱姆实测：Gemini 驱动 NPC，沉浸感拉满还是智商掉线？",
      summary: "《勇者斗恶龙X》引入基于 Gemini Live API 的 AI 史莱姆 NPC，具备多模态理解能力，可读取屏幕内容并结合游戏数据生成符合世界观的回复。封闭测试已于2026年3月结束。玩家实测反馈两极分化：支持者称与NPC聊了三小时沉浸感拉满，批评者认为AI回复有时脱离游戏设定。",
      source: "什么值得买",
      date: "2026-08-31",
      url: "https://post.m.smzdm.com/p/a039n3k9/",
      badge: "AI NPC实测",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 85,
      tags: ["勇者斗恶龙X", "AI史莱姆", "Gemini", "AI NPC", "实测"],
      content: [
        {
          title: "实测反馈",
          type: "list",
          items: [
            "基于Gemini Live API，多模态理解屏幕内容；",
            "结合游戏数据生成符合世界观的回复；",
            "支持者：与NPC聊三小时，沉浸感拉满；",
            "批评者：AI回复有时脱离游戏设定，智商掉线；",
            "封闭测试已于2026年3月结束。"
          ]
        }
      ]
    },
    {
      id: "star-valley-ai-npc",
      category: "ai",
      subcategory: "米哈游",
      title: "《星布谷地》二测揭秘：四个 AI NPC 用记忆、情绪和协作重塑游戏社交",
      summary: "米哈游《星布谷地》完成第二次封闭测试（'星旅测试'），核心亮点是引入由米哈游自研 AI 驱动的多个智能 NPC 角色。这些角色不再依赖传统脚本对话，而是具备长期记忆、情绪系统和协作能力，玩家与 NPC 的互动会被记住并影响后续行为，重塑了游戏社交体验。",
      source: "什么值得买 / 米哈游",
      date: "2026-06-22",
      url: "https://post.m.smzdm.com/p/am963kpz/",
      badge: "米哈游AI",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 86,
      tags: ["星布谷地", "米哈游", "AI NPC", "记忆系统", "情绪系统"],
      content: [
        {
          title: "AI NPC 系统",
          type: "list",
          items: [
            "米哈游自研AI驱动的多个智能NPC；",
            "具备长期记忆，玩家互动会被记住；",
            "情绪系统影响NPC行为与对话；",
            "NPC间可协作，重塑游戏社交体验；",
            "第二次封闭测试'星旅测试'已完成。"
          ]
        }
      ]
    },
    {
      id: "fortnite-ai-npc-tool",
      category: "ai",
      subcategory: "Epic",
      title: "Fortnite 推出 AI 驱动的 NPC 定制工具：20行提示词打造个性角色",
      summary: "Fortnite 公布全新 AI 驱动的 NPC 定制工具，开发者只需约20行提示词即可创建具有独特个性、语音与说话风格的交互式 NPC。演示中的'Mr. Buttons'角色只为一件事而活——说服玩家按下显眼的红色按钮，对场景问题还能机智回应。",
      source: "AI D-A-M-N",
      date: "2026-08-29",
      url: "https://ai-damn.com/fortnite-unveils-ai-powered-npc-customization-tool-1749081569736",
      badge: "AI 功能",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["Fortnite", "AI NPC", "UEFN", "提示词", "智能体"],
      content: [
        {
          title: "功能亮点",
          type: "list",
          items: [
            "约20行提示词创建带个性/语音/说话风格的NPC；",
            "演示NPC'Mr. Buttons'以说服玩家按按钮为目标；",
            "NPC可对场景问题机智回应，交互自然；",
            "为UEFN创作者提供AI角色能力。"
          ]
        }
      ]
    }
  ]
};
