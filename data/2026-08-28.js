/**
 * 游戏开发与行业资讯日报 - 2026-08-28
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-08-28",
    weekday: "星期五",
    title: "游戏开发与行业资讯日报",
    subtitle: "Unity / 虚幻引擎 / 游戏行业 / GitHub开源 / AI前沿技术深度追踪",
    updateTime: "2026-08-28 09:50",
    editor: "资讯聚合机器人 & 行业观察组",
    highlights: [
      "🎮 GTA6 26分钟实机演示凌晨首发：双主角犯罪生活首秀，11月19日发售",
      "🏙 UE《城市示例》重大更新：新增 PCG 与 Unreal MCP 程序化世界构建工作流",
      "🐲 米哈游《源初之结》主创科隆访谈：穷奇等山海经异兽概念稿曝光，确认免费无抽卡",
      "📊 Unity 发布 2026 游戏开发报告：聚焦韧性生存与五大行业趋势",
      "⚙️ Unreal Fest 首尔站详解 UE6 架构创新，引擎级变革拉开序幕"
    ],
    engineStatus: [
      { name: "Unity 7", type: "unity", status: "即将到来·下一代主版本", badge: "新架构", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "最新 LTS 长期支持版", badge: "LTS 生产推荐", color: "blue" },
      { name: "团结引擎 1.10.1", type: "tuanjie", status: "8月12日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8", type: "unreal", status: "当前主版本·City Sample已更新", badge: "UE5最终大版", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "架构创新", color: "pink" },
      { name: "UEFN", type: "unreal", status: "内嵌 MCP Server", badge: "AI Agent 建岛", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-gta6-extended-look",
    category: "games",
    categoryName: "热门游戏 · 焦点头条",
    tag: "全球焦点",
    title: "GTA6 26分钟实机演示全球首发：双主角犯罪生活首秀，11月19日发售",
    summary: "北京时间8月28日凌晨3点，Rockstar 在 Netflix 平台独家首播《GTA6》26分钟加长版实机演示《An Extended Look（分量十足的一瞥）》。演示以双主角 Jason 与 Lucia 的互动为主线，PS5 主机实机录制，画面质感、角色动画、UI 较泄露版全面飞跃，首次展示任务系统、载具操作、情侣互动与虚拟电视生态等核心机制。官方确认 2026 年 11 月 19 日发售，登陆 PS5 与 Xbox Series。",
    image: "https://aka.doubaocdn.com/s/NgOm3tEgIj",
    source: "Rockstar / 游侠网 / 3DM / 爱范儿",
    date: "2026-08-28",
    url: "https://3g.ali213.net/news/html/1034965.html",
    readTime: "4 分钟",
    hotScore: 99,
    badges: ["全球首曝", "26分钟实机", "11月19日发售", "PS5录制"],
    tags: ["GTA6", "Rockstar", "双主角", "开放世界", "2026大作"],
    content: [
      {
        title: "演示核心内容",
        type: "list",
        items: [
          "26分钟加长版实机《An Extended Look》于8/28凌晨3点 Netflix 独家首播，6小时后全平台开放；",
          "PS5 主机实机录制，画面、角色动画、UI 较早期泄露版大幅进化；",
          "首次完整展示双主角 Jason 与 Lucia 的日常互动：等待选择、电视生态、情侣任务；",
          "涵盖角色互动、任务系统、载具操作、环境细节等多维度玩法；",
          "官方确认 2026 年 11 月 19 日发售，登陆 PS5 与 Xbox Series。"
        ]
      },
      {
        title: "技术与行业意义",
        type: "text",
        text: "从泄露的布料物理细节（衣褶随动作起皱）到虚拟电视生态，《GTA6》再次定义开放世界技术上限。科隆展品牌总监称其为行业'北极星'。其 2026-11-19 发售窗口将直接冲击年末主机市场与 3A 格局，也被视为观察次世代主机销量的关键节点。"
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
      id: "ue-city-sample-pcg",
      category: "engine",
      subcategory: "Unreal Engine",
      title: "UE《城市示例》重大更新：新增 PCG 与 Unreal MCP 程序化世界构建",
      summary: "Epic 发布针对 UE 5.8 的《城市示例》(City Sample) 重大更新：新增利用最新引擎能力打造的关卡，并带来 PCG 程序化内容生成与 Unreal MCP 工作流的完整工具集、内容与示例，程序化建城进入生产可用阶段。",
      source: "Unreal Engine 官方",
      date: "2026-08-27",
      url: "https://www.unrealengine.com/?method=individual&r=0",
      image: "https://aka.doubaocdn.com/s/ufhSJUFwjh",
      badge: "重大更新",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 95,
      tags: ["UE5.8", "City Sample", "PCG", "Unreal MCP", "程序化构建"],
      content: [
        {
          title: "更新要点",
          type: "list",
          items: [
            "针对 UE 5.8 全面更新，新增全新关卡与最新引擎能力演示；",
            "完整集成 PCG 程序化内容生成工具集，实现自动化城市与街区构建；",
            "新增 Unreal MCP 工作流，AI Agent 可直接操作编辑器进行程序化世界搭建；",
            "配套内容与示例工程，是世界构建与数字孪生团队的官方参考基线。"
          ]
        },
        {
          title: "价值判断",
          type: "text",
          text: "PCG + MCP 的组合意味着'程序化生成 + AI 驱动'成为 UE 世界构建的官方标准路径。对开放世界、大世界、城市数字孪生项目而言，这套工作流可显著降低重复搭建成本，建议团队尽早评估接入。"
        }
      ]
    },
    {
      id: "unity-gaming-report-2026",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 发布 2026 游戏开发报告：聚焦五大趋势与工作室韧性",
      summary: "Unity 官方发布《2026 Unity 游戏开发报告》，基于全球开发者调研，探讨工作室如何在行业快速变化中构建具有韧性与可持续性的未来，核心问题已从'能否生存'转向'如何建立韧性'。",
      source: "Unity 官方",
      date: "2026-08-27",
      url: "https://unity.com/cn/resources/gaming-report",
      badge: "行业报告",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 90,
      tags: ["Unity", "游戏开发报告", "行业趋势", "开发者调研"],
      content: [
        {
          title: "报告核心",
          type: "list",
          items: [
            "基于全球开发者与工作室调研，覆盖平台策略、玩家社区与商业模式；",
            "探讨在复杂平台生态中最大化曝光与维系玩家社区的方法论；",
            "总结五大行业趋势，聚焦工作室韧性与可持续发展；",
            "为中小团队提供数据化的立项与增长参考。"
          ]
        }
      ]
    },
    {
      id: "unreal-fest-seoul",
      category: "engine",
      subcategory: "Unreal Engine",
      title: "Unreal Fest 首尔站详解 UE6：引擎级架构创新取代炫技",
      summary: "Epic 在 8/20-21 的 Unreal Fest Seoul 2026 上详解 UE6 技术路线，一改以往主打炫目图形技术，转而聚焦引擎级架构创新，为 UE6 的 Verse-first 与 AI 深度集成奠定基调。",
      source: "Unreal Fest Seoul / 什么值得买",
      date: "2026-08-26",
      url: "https://gangnamstylegames.com/korean-developers-set-to-shine-in-the-unreal-engine-6-era/",
      badge: "官方活动",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 91,
      tags: ["UE6", "Unreal Fest", "架构创新", "Verse", "韩国"],
      content: [
        {
          title: "要点",
          type: "list",
          items: [
            "8/20-21 Unreal Fest 首尔站，Epic CEO Tim Sweeney 与韩国负责人出席；",
            "UE6 技术路线图细化：聚焦引擎级架构创新，而非单纯图形展示；",
            "强调 Verse 语言与 AI 深度集成，为 UEFN 融合铺路；",
            "韩国开发者被寄予 UE6 时代领跑厚望。"
          ]
        }
      ]
    },
    {
      id: "unity7-upcoming",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 7 官方预热：下一代编辑器与运行时即将到来",
      summary: "Unity 官网更新 Unity 7 信息：作为编辑器与运行时的下一个主要版本，Unity 7 将带来全新架构（CoreCLR 方向）与内置 AI 工具链，官方持续释放预热内容。",
      source: "Unity 官方",
      date: "2026-08-28",
      url: "https://unity.com/cn",
      badge: "预热",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["Unity7", "下一代引擎", "CoreCLR", "AI工具链"],
      content: [
        {
          title: "已知信息",
          type: "list",
          items: [
            "Unity 7 为编辑器与运行时的下一个主要版本；",
            "面向 CoreCLR 架构演进，Shader 编译与渲染管线深度优化；",
            "内置 MCP 协议 AI 工具链，支持大模型驱动编辑器；",
            "建议开发者关注官方博客与 Learn 平台的迁移指引。"
          ]
        }
      ]
    },
    {
      id: "gears-eday",
      category: "engine",
      subcategory: "Unreal Engine",
      title: "《战争机器：事变日》首发：虚幻5 大场景痛点获突破",
      summary: "《战争机器：事变日》正式首发，作为 UE5 重负载项目，其在超大场景流送、全局光照与战斗反馈上的表现，被业内视为虚幻5 大场景痛点的一次正面突破。",
      source: "快科技 / 17173",
      date: "2026-08-28",
      url: "https://news.mydrivers.com/tag/xuhuan5.htm",
      badge: "3A首发",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 89,
      tags: ["战争机器", "UE5", "3A", "场景流送", "首发"],
      content: [
        {
          title: "看点",
          type: "list",
          items: [
            "《战争机器：事变日》正式首发，为 UE5 重负载 3A 代表；",
            "超大场景流送与 Lumen 全局光照表现受行业关注；",
            "被视为验证 UE5 大型线性关卡生产管线的标杆案例。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "gta6-gamescom",
      category: "industry",
      subcategory: "展会动态",
      title: "科隆展进行时：GTA6 深度展示成为全场最高热度焦点",
      summary: "2026 科隆游戏展（8/26-30）进行中，《GTA6》专属深度展示环节于北京时间 8/28 凌晨 3 点全球首播，成为本届展会最受关注内容；科隆展品牌总监称《GTA6》如行业'北极星'。",
      source: "17173 / 什么值得买",
      date: "2026-08-28",
      url: "http://news.17173.com/content/08252026/174935813.shtml",
      badge: "国际展会",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 96,
      tags: ["科隆展", "GTA6", "Gamescom", "深度展示"],
      content: [
        {
          title: "展会看点",
          type: "list",
          items: [
            "科隆展 8/26-30 举办，GTA6 深度展示为最高热度环节；",
            "科隆品牌总监评价：像 GTA 这样的大作是行业的'北极星'；",
            "中国厂商（米哈游、网易等）与 60 家中国企业阵容持续刷屏。"
          ]
        }
      ]
    },
    {
      id: "nodusfall-interview",
      category: "industry",
      subcategory: "大厂动态",
      title: "米哈游《源初之结》主创科隆访谈：穷奇概念稿曝光，确认免费无抽卡",
      summary: "米哈游《源初之结》主创团队在科隆接受专访，公开《山海经》穷奇等异兽概念稿（取'状如虎、有翼'形象并加曲角设计），并确认游戏将免费推出、角色不会通过随机抽卡获取。",
      source: "今日头条 / 二柄 / 游民星空",
      date: "2026-08-28",
      url: "http://m.toutiao.com/group/7678732829580182016/",
      image: "https://aka.doubaocdn.com/s/0WFtXyxcTl",
      badge: "主创访谈",
      badgeType: "event",
      readTime: "3 分钟",
      hotScore: 95,
      tags: ["源初之结", "米哈游", "山海经", "免费无抽卡", "科隆访谈"],
      content: [
        {
          title: "访谈核心",
          type: "list",
          items: [
            "《源初之结》取材全球多元神话：十日并出、穷奇、九尾狐等山海经意象 + 欧洲神话巨龙；",
            "穷奇概念稿取《海内北经》'状如虎、有翼'形象，加入巨大曲角与风化木石质感；",
            "确认游戏将免费推出，角色不会通过随机抽卡获取；",
            "由东京、蒙特利尔工作室联合开发，瞄准全球主机市场。"
          ]
        },
        {
          title: "商业模式意义",
          type: "text",
          text: "米哈游首次以'免费无抽卡'切入主机 3A 赛道，若落地将是头部厂商对传统买断制与抽卡模式的又一次实验性突破，其商业化路径值得行业长期观察。"
        }
      ]
    },
    {
      id: "pal4-remake",
      category: "industry",
      subcategory: "大厂动态",
      title: "中手游财报：仙剑奇侠传四重制版定档 2027 上半年发售",
      summary: "中手游业绩报告披露《仙剑奇侠传四：重制版》将于 2027 上半年发售，仙剑 IP 重制节奏持续推进，成为国产单机经典 IP 重生的重点观察对象。",
      source: "二柄 / 中手游",
      date: "2026-08-26",
      url: "https://diershoubing.com/",
      badge: "定档",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["仙剑奇侠传四", "重制版", "中手游", "2027", "IP"],
      content: [
        {
          title: "要点",
          type: "list",
          items: [
            "中手游业绩报告确认《仙剑奇侠传四：重制版》2027 上半年发售；",
            "仙剑 IP 经典重制持续推进，为国产单机 IP 复活代表案例；",
            "配合仙剑六 PS5 版 8/26 发售，仙剑 IP 多线布局。"
          ]
        }
      ]
    },
    {
      id: "xbox-nextgen",
      category: "industry",
      subcategory: "平台动态",
      title: "Xbox CEO 谈下一代主机：正考虑如何让价格更'亲民'",
      summary: "Xbox CEO 表示正在考虑如何让下一代主机价格更加亲民，应对主机市场成本压力与 GTA6 发售窗口前的用户争夺，硬件定价策略成为平台之争焦点。",
      source: "二柄",
      date: "2026-08-26",
      url: "https://diershoubing.com/",
      badge: "平台动态",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["Xbox", "下一代主机", "定价", "亲民"],
      content: [
        {
          title: "要点",
          type: "list",
          items: [
            "Xbox CEO 透露考虑下一代主机价格'亲民'化；",
            "应对 GTA6 发售与年末主机大战前的成本与用户争夺；",
            "硬件定价与订阅策略将成为次世代竞争关键变量。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "gta6-weight-system",
      category: "games",
      subcategory: "GTA6",
      title: "报道称 GTA6 体重系统回归：饮食与锻炼影响角色体型",
      summary: "外媒报道《GTA6》将引入回归的体重系统，玩家的饮食与锻炼行为会影响角色体型变化，进一步强化开放世界的角色沉浸与拟真生态。",
      source: "二柄 / 外媒",
      date: "2026-08-26",
      url: "https://diershoubing.com/",
      badge: "玩法细节",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["GTA6", "体重系统", "角色定制", "拟真"],
      content: [
        {
          title: "细节",
          type: "list",
          items: [
            "GTA6 或回归体重系统：饮食与锻炼影响角色体型；",
            "强化角色成长与开放世界拟真生态联动；",
            "与 26 分钟实机中细腻的布料/动画表现相呼应。"
          ]
        }
      ]
    },
    {
      id: "zhongkui-dabei",
      category: "games",
      subcategory: "黑神话钟馗",
      title: "玩家发现：黑神话钟馗'大蚌真君'与2月短片角色神似",
      summary: "贴吧网友发现《黑神话：钟馗》15 分钟实机中的 Boss'大蚌真君'，其精瘦中长发、八字胡+山羊胡的造型与此前 2 月'6 分钟实机小短片'中为小厨娘打下手的帮手高度相似，引发角色关联猜想。",
      source: "九游 / 贴吧",
      date: "2026-08-27",
      url: "https://a.9game.cn/hshzk/gonglue-0-2/",
      badge: "细节考据",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["黑神话钟馗", "大蚌真君", "角色关联", "细节考据"],
      content: [
        {
          title: "玩家发现",
          type: "list",
          items: [
            "大蚌真君面部造型与 2 月 6 分钟短片中的'厨娘帮手'高度相似；",
            "二者均为精瘦、中长发、八字胡+山羊胡形象；",
            "引发对钟馗'精怪收服/灵体附身'机制的进一步猜想。"
          ]
        }
      ]
    },
    {
      id: "nodusfall-gamersky",
      category: "games",
      subcategory: "源初之结",
      title: "《源初之结》科隆实机：白毛角色战巨龙，'酷似老头环'引热议",
      summary: "游民星空放出《源初之结》科隆开幕夜实机截图：玩家角色在荒漠峡谷中对战巨型龙类遗骸，西方巨龙与格斯风格人形 BOSS 辨识度极高，被玩家称为米哈游'画风突变'的 3A 新作。",
      source: "游民星空",
      date: "2026-08-26",
      url: "https://wap.gamersky.com/news/Content-2196173.html",
      image: "https://aka.doubaocdn.com/s/WPkQfDUwn8",
      badge: "实机截图",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 93,
      tags: ["源初之结", "米哈游", "实机", "巨龙BOSS", "动作游戏"],
      content: [
        {
          title: "实机看点",
          type: "list",
          items: [
            "荒漠峡谷对巨型龙类遗骸战斗场景，画面冷峻写实；",
            "西方巨龙与格斯风格人形 BOSS 造型辨识度极高；",
            "融合山海经与世界神话的多元怪物生态持续曝光。"
          ]
        }
      ]
    },
    {
      id: "gamescom-lineup-0828",
      category: "games",
      subcategory: "科隆新作",
      title: "科隆展新作持续轰炸：《地铁2039》《最终幻想VII：启示录》等亮相",
      summary: "科隆展期间新作信息密集释放：《地铁2039》《最终幻想VII：启示录》《湮灭之潮》43分钟实机、《巫师3》重制版等陆续公布，2026 年末 3A 大战格局逐步清晰。",
      source: "3DM / 抖音 / 抖音游戏",
      date: "2026-08-28",
      url: "https://m.3dmgame.com/news/202608/3951447.html",
      badge: "展会资讯",
      badgeType: "event",
      readTime: "3 分钟",
      hotScore: 92,
      tags: ["科隆展", "地铁2039", "FF7启示录", "湮灭之潮", "巫师3"],
      content: [
        {
          title: "重点新作",
          type: "list",
          items: [
            "《地铁2039》《最终幻想VII：启示录》等科隆亮相；",
            "国产《湮灭之潮》放出 43 分钟加长实机，亚瑟王题材买断动作；",
            "《巫师3》重制版领衔，2026 年末 3A 大战格局渐明。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-forge-gas",
      category: "opensource",
      subcategory: "玩法框架",
      title: "gamesmiths-guild/forge：C# 实现的引擎无关 GAS 玩法框架",
      summary: "forge 是受 UE GAS 启发的 C# 游戏玩法框架（引擎无关），以属性、能力、效果为核心抽象，可在任意 .NET 游戏栈中复现 UE 风格的 Gameplay Ability System。",
      source: "GitHub / gamesmiths-guild",
      date: "2026-08-17",
      url: "https://github.com/gamesmiths-guild/forge/",
      badge: "玩法框架",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["forge", "GAS", "C#", "玩法框架", "引擎无关"],
      content: [
        {
          title: "特性",
          type: "list",
          items: [
            "引擎无关的 C# GAS 实现，可复用于 Unity/MonoGame 等；",
            "以 attributes / abilities / effects 为核心抽象；",
            "适合需要复杂能力系统的动作与 RPG 项目参考。"
          ]
        }
      ]
    },
    {
      id: "repo-unity-gas",
      category: "opensource",
      subcategory: "Unity",
      title: "Unity 版 GAS：受 UE GAS 启发的灵活可扩展能力系统",
      summary: "GitHub 上活跃的 Unity 开源项目提供 UE GAS 风格的能力系统，管理能力、属性与效果，为 Unity 动作/RPG 项目提供成熟的可扩展 Gameplay Ability 架构参考。",
      source: "GitHub",
      date: "2026-05-25",
      url: "https://github.com/sajad0131/Unity-Gameplay-Ability-System",
      badge: "能力系统",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["Unity", "GAS", "能力系统", "可扩展"],
      content: [
        {
          title: "项目价值",
          type: "list",
          items: [
            "Unity 原生 GAS 参考实现，管理 abilities/attributes/effects；",
            "面向复杂战斗与角色能力的可扩展架构；",
            "适合 Unity 动作、MMO、RPG 项目学习与改造。"
          ]
        }
      ]
    },
    {
      id: "repo-unity-cli-agent",
      category: "opensource",
      subcategory: "AI / 工具链",
      title: "Low-token Unity Editor CLI：AI Agent 低 token 控制实时编辑器",
      summary: "GitHub 新项目提供面向 AI Agent 的低 token CLI，让大模型以极低上下文开销控制实时 Unity Editor，是 AI 驱动 Unity 全流程工具链的重要拼图。",
      source: "GitHub",
      date: "2026-08-15",
      url: "https://github.com/NotNull92/hera-agent-unity",
      badge: "AI 工具",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["Unity CLI", "AI Agent", "低token", "编辑器控制"],
      content: [
        {
          title: "亮点",
          type: "list",
          items: [
            "以低 token 消耗让 LLM 控制 Unity Editor；",
            "与 MCP 生态结合，支持 AI 自动化开发与测试；",
            "Go/C# 实现，关注效率与集成便捷性。"
          ]
        }
      ]
    },
    {
      id: "repo-web-sim-forge",
      category: "opensource",
      subcategory: "Web3D",
      title: "immersive-web-simulation-forge：AI Agent 的 Web3D 仿真与验证工具包",
      summary: "该开源项目为 AI Agent 提供基于 Web 的 3D/物理仿真开发、渲染与验证工具包，基于 Three.js/WebGL，支持 Codex 等 Agent 协作构建沉浸式 Web 仿真场景。",
      source: "GitHub",
      date: "2026-08-19",
      url: "https://github.com/ictseoyoungmin/immersive-web-simulation-forge",
      badge: "Web3D",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["Web3D", "Three.js", "AI Agent", "仿真", "开源"],
      content: [
        {
          title: "项目定位",
          type: "list",
          items: [
            "Web-based 3D 与物理仿真开发、渲染、验证工具包；",
            "基于 Three.js/WebGL，面向 AI Agent 训练与验证；",
            "支持 Codex/Claude Skills 协作构建仿真场景。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-unreal-to-unity",
      category: "tutorials",
      subcategory: "引擎迁移",
      title: "Unity Learn 官方教程：从 Unreal 过渡到 Unity 全流程指南",
      summary: "Unity Learn 上线《从 Unreal 过渡到 Unity》官方教程，帮助 UE 开发者熟悉 Unity 编辑器、核心概念与工作流差异，30 分钟完成概念映射，是双引擎团队转型的官方入口。",
      source: "Unity Learn",
      date: "2026-08-04",
      url: "https://learn.unity.com/tutorial/cong-unreal-guo-du-dao-unity",
      badge: "官方教程",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["Unreal", "Unity", "引擎迁移", "官方教程"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "从 UE 到 Unity 的编辑器与工作流概念映射；",
            "覆盖场景、蓝图→C#、材质与光照等核心差异；",
            "30 分钟中级教程，含配套资源与文档。"
          ]
        }
      ]
    },
    {
      id: "tut-unity6-resources",
      category: "tutorials",
      subcategory: "Unity 6",
      title: "Unity 6 资源中心：官方文档、示例与免费课程合集",
      summary: "Unity 官方更新 Unity 6 资源中心，提供全面教程与示例，包括网页/移动端坦克战斗游戏课程、2D Roguelike 从零开发等，帮助开发者快速掌握 Unity 6 最新功能。",
      source: "Unity 官方",
      date: "2026-08-02",
      url: "https://unity.com/cn/campaign/unity-6-resources",
      badge: "免费资源",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["Unity6", "资源中心", "教程", "Roguelike", "坦克"],
      content: [
        {
          title: "资源清单",
          type: "list",
          items: [
            "改版坦克战斗游戏课程（网页/移动端发布）；",
            "2D Roguelike 从概念到完成的完整项目教程；",
            "官方文档、示例与教程的一站式入口。"
          ]
        }
      ]
    },
    {
      id: "tut-lighting",
      category: "tutorials",
      subcategory: "光照渲染",
      title: "Unity Learn：Make Your Game Look Great 光照系列课程",
      summary: "Unity Learn 推出'让游戏更好看'系列，涵盖实时光照、Light Probe、光照贴图的使用场景，以及 URP 下的 Creative Core 光照课程（烘焙光照、反射探针、阴影配置）。",
      source: "Unity Learn",
      date: "2026-08-04",
      url: "https://learn.unity.com/collection/make-your-game-look-great",
      badge: "光照课程",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["Unity", "光照", "URP", "Light Probe", "烘焙"],
      content: [
        {
          title: "课程要点",
          type: "list",
          items: [
            "实时光照、Light Probe、光照贴图各自适用场景；",
            "Creative Core 光照课：URP 烘焙光照、反射探针、阴影配置；",
            "着色器、特效与后期处理的最终视觉层。"
          ]
        }
      ]
    },

    // ------------------------- AI 游戏前沿 (AI) -------------------------
    {
      id: "ai-unreal-mcp-city",
      category: "ai",
      subcategory: "AI 工具链",
      title: "Unreal MCP 工作流正式进入 City Sample：AI 驱动程序化建城",
      summary: "UE《城市示例》更新首次把 Unreal MCP 纳入官方示例工作流，AI Agent 可通过 MCP 直接参与程序化世界构建，标志着 UE 官方对'AI 驱动开发'的正式背书。",
      source: "Unreal Engine",
      date: "2026-08-27",
      url: "https://www.unrealengine.com/?method=individual&r=0",
      badge: "AI 集成",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 93,
      tags: ["Unreal MCP", "City Sample", "AI建城", "程序化"],
      content: [
        {
          title: "意义",
          type: "list",
          items: [
            "官方示例首次内置 Unreal MCP 工作流；",
            "AI Agent 可操作编辑器进行程序化世界构建；",
            "与 UEFN MCP、UE5.8 官方 MCP 插件形成完整 AI 生态。"
          ]
        }
      ]
    },
    {
      id: "ai-unity7-native",
      category: "ai",
      subcategory: "AI 工具链",
      title: "Unity 7 内置 AI 工具链：MCP 协议与大模型驱动编辑器",
      summary: "Unity 7 将内置 MCP 协议 AI 编程工具链，支持大模型直接驱动编辑器资产与场景，官方正在系统培养开发者 AI 使用习惯（Agentic Assistant 13 个实战 demo 等）。",
      source: "Unity 官方",
      date: "2026-08-28",
      url: "https://unity.com/cn",
      badge: "官方 AI",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 90,
      tags: ["Unity7", "MCP", "AI Assistant", "编辑器AI"],
      content: [
        {
          title: "进展",
          type: "list",
          items: [
            "Unity 7 内置 MCP 协议 AI 工具链，自然语言驱动编辑器；",
            "Agentic Assistant 支持场景搭建、光照生成与脚本编写；",
            "官方 Learn 平台已上线 13 个实战 demo 教学。"
          ]
        }
      ]
    },
    {
      id: "ai-gamedev-trend",
      category: "ai",
      subcategory: "AI 趋势",
      title: "AI 游戏开发进入工程化阶段：从'外挂工具'到'引擎原生能力'",
      summary: "2026 年 AI 游戏开发加速工程化：MCP 成为事实标准、AI Agent 直接操控编辑器、NVIDIA ACE 与本地小模型推进端侧智能 NPC，AI 正从外挂工具演变为引擎原生能力。",
      source: "综合 / GDC / NVIDIA",
      date: "2026-08-28",
      url: "https://developer.nvidia.cn/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/",
      badge: "行业趋势",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 89,
      tags: ["AI游戏", "MCP", "Agentic", "ACE", "端侧推理"],
      content: [
        {
          title: "趋势要点",
          type: "list",
          items: [
            "MCP 成为 AI 接入引擎的事实标准（UE/Unity/UEFN 全覆盖）；",
            "AI Agent 从代码生成走向直接操控编辑器与运行时；",
            "NVIDIA ACE 与本地 4GB 小模型推进端侧智能 NPC 落地；",
            "建议团队尽早建立 AI 产出评审规范，实现可控可审计。"
          ]
        }
      ]
    }
  ]
};
