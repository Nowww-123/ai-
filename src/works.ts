export type MediaItem = { src: string; caption: string; kind?: 'image' | 'video' }

export type Section = { heading: string; body: string }

export type Work = {
  slug: string
  part: '01' | '02' | '03' | '04'
  partLabel: string
  index: string
  title: string
  subtitle: string
  /** 每个项目的强调色，用于详情页 eyebrow / 副标题 / 引言竖线 / 光晕，以及首页卡片主题色 */
  accent: string
  description: string
  tags: string[]
  poster: string
  large?: boolean
  /** 详情页 STORY 首段的小标题，例如「故事简介」「项目背景」 */
  storyHeading: string
  /** 前情提要：故事简介 / 项目背景 / 产品介绍 */
  intro: string
  /** 前情提要后续小节：视觉设计 / 制作流程 / 工作内容 … */
  sections: Section[]
  /** TIME / DURATION */
  duration: string
  /** ROLE（详情页 meta 行，与 roles 同源） */
  roles: string[]
  /** TOOLS / TAGS */
  tools: string[]
  gallery: MediaItem[]
  video?: string
  videoUnavailable?: string
  file?: { href: string; type: string }
}

export type EventItem = {
  index: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export const AI_VIDEOS: Work[] = [
  {
    slug: 'changanyun-wzry',
    part: '01',
    partLabel: 'AI VIDEO',
    index: '01 / 01',
    title: '长安云 × 王者荣耀联名动画',
    subtitle: 'IP COLLABORATION ANIMATION',
    accent: '#8fb8e8',
    description:
      '长安云与王者荣耀的 IP 联名动画项目。以「长安云」原创角色与王者荣耀的世界观对话，完成从角色视觉设定、场景概念到动画成片的完整创作。两个 IP 在同一套影像语言里自然衔接，既保留各自的识别度，也让联名叙事成立。',
    tags: ['IP 联名', 'Animation', '角色设计'],
    poster: '/works/posters/changanyun-wzry.jpg',
    large: true,
    storyHeading: '项目背景',
    intro:
      '长安云与王者荣耀的 IP 联名动画项目。项目起点是两个独立 IP 如何在同一支片子里「同框」而不违和：一边是长安云原创角色的国风叙事，一边是王者荣耀的英雄世界观。我的工作是从角色视觉设定、场景概念到动画成片，把两个体系融进同一套影像语言，让观众能同时认出两者，又不会觉得画面被撕裂。最终交付 01:37 的动画短片，用于联名宣发与社媒传播。',
    sections: [
      {
        heading: '视觉设计',
        body:
          '围绕联名主题确立画面的色彩与气质——以国风色彩为底，叠加游戏化的镜头节奏。角色配色与场景光源统一设计，保证成片里两个 IP 的形象既有各自的识别度，又处在同一套影像语言之下。',
      },
      {
        heading: '角色与场景',
        body:
          '先输出角色三视图与场景概念，把造型、比例与空间关系定下来，再进入动画制作，避免成片里的形象与设定漂移。',
      },
      {
        heading: '制作流程',
        body:
          '从分镜脚本、关键帧生成到剪辑调色，逐环节推进并迭代画面。由于是两个 IP 的联名，每一镜都需要确认双方形象的呈现尺度，最终在高频沟通中完成 01:37 的动画成片。',
      },
    ],
    duration: '01:37',
    roles: ['角色与场景设定', '动画制作', '剪辑与调色'],
    tools: ['即梦 AI', 'PR', 'AE'],
    gallery: [],
    video: '/works/videos/changanyun-wzry.mp4',
  },
  {
    slug: 'mazu',
    part: '01',
    partLabel: 'AI VIDEO',
    index: '02 / 01',
    title: '《妈祖·沧海灵佑》',
    subtitle: 'MYTH REIMAGINED WITH AI',
    accent: '#d6a46f',
    description:
      '以传统妈祖神话为基底，打破「神赐护佑」的固有叙事，聚焦凡人林默的抉择与成长。从剧本撰写、分镜设计到 AI 生成与后期合成，完成一部 03:08 的中式神话剧情短片。',
    tags: ['AIGC', 'Narrative', 'Visual Design'],
    poster: '/works/posters/mazu.jpg',
    storyHeading: '故事简介',
    intro:
      '《妈祖·沧海灵佑》是一部传统中式神话风格的剧情短片，讲述了林默从凡人到海神妈祖的蜕变历程。影片以湄洲湾风暴为背景，展现林默不顾个人安危救助渔民，最终舍身成仁，被天帝敕封为海神，护佑一方渔家平安的故事。核心主旨升华了凡人之仁的伟大，强调护佑苍生非为求神位，只为守护平安的初心。',
    sections: [
      {
        heading: '视觉设计',
        body:
          '在视觉表达上，以水墨丹青的质感勾勒山海野性与人间暖意，用强烈的色彩对比——墨黑海浪与暖黄灯火、素白衣衫与赤金神袍——凸显「凡人之躯比肩神明」的悲壮与崇高。通过蒙太奇手法串联回忆与现实，让「长篙」「贝壳手链」「琉璃灯」成为精神符号，完成情感闭环，并实现传统神话的当代价值重构。',
      },
      {
        heading: 'AI 生成与合成',
        body:
          '从分镜设计、提示词工程、画面生成到剪辑调色，逐镜推进。在保持水墨风格一致性的同时，反复调整提示词与参考图，让人物形象与场景氛围在全片中保持统一。',
      },
    ],
    duration: '03:08',
    roles: ['视觉设计', '剧本撰写', '分镜设计'],
    tools: ['豆包', 'Oii', 'PR', 'AE'],
    gallery: [
      { src: '/works/images/storyboard-01.webp', caption: '分镜设计 · 01' },
      { src: '/works/images/storyboard-02.webp', caption: '分镜设计 · 02' },
      { src: '/works/images/visual-design-02.webp', caption: '视觉设定 · 01' },
      { src: '/works/images/visual-design-03.webp', caption: '视觉设定 · 02' },
    ],
    video: '/works/videos/mazu.mp4',
  },
  {
    slug: 'datang-ep3',
    part: '01',
    partLabel: 'AI VIDEO',
    index: '03 / 01',
    title: '大唐诗光机 · 第三期',
    subtitle: 'TANG DYNASTY POETRY · EP.3',
    accent: '#c9a86b',
    description:
      '文旅主题 AI 动画系列作品的第三期。以唐诗为线索，用 AI 影像把诗句里的长安重新拍一遍，让观众跟着镜头走进诗里描述的那座城。',
    tags: ['文旅', 'AI 动画', '系列作品'],
    poster: '/works/posters/datang-ep3.jpg',
    storyHeading: '故事简介',
    intro:
      '「大唐诗光机」系列第三期，是一档以唐诗为线索的文旅 AI 动画作品。项目选择一首具有强画面感的诗作，用影像把「诗中长安」重新拍一遍：从宫阙灯火到市井长街，从一位旅人的行程串联起诗中的意象。我的工作覆盖选题策划、分镜与提示词设计、AI 影像生成与剪辑合成，最终交付 02:54 的成片，适配文旅账号的传播节奏与平台算法偏好。',
    sections: [
      {
        heading: '视觉设计',
        body:
          '以暖金与黛青为主调，把大唐的繁盛与诗意压进同一个色温里。通过大景别的空间纵深与小景别的细节特写交替，兼顾史诗感与观看节奏，让画面既有文旅宣传的质感，也保留诗词的留白。',
      },
      {
        heading: '选题策划',
        body:
          '从诗作中提炼可视觉化的意象，确定每期主线与情绪基调，让系列内容在风格统一的前提下各有主题。',
      },
      {
        heading: 'AI 影像生成',
        body:
          '依据分镜逐镜生成画面，反复调整提示词与参考图，兼顾诗意氛围与画面稳定性，最后完成配乐、字幕与节奏剪辑。',
      },
    ],
    duration: '02:54',
    roles: ['选题策划', '分镜与提示词设计', 'AI 影像生成'],
    tools: ['即梦 AI', 'PR', '剪映'],
    gallery: [],
    video: '/works/videos/datang-ep3.mp4',
  },
  {
    slug: 'datang-ep2',
    part: '01',
    partLabel: 'AI VIDEO',
    index: '04 / 01',
    title: '大唐诗光机 · 第二期',
    subtitle: 'TANG DYNASTY POETRY · EP.2',
    accent: '#c9a86b',
    description:
      '大唐诗光机系列第二期，继续用 AI 影像探索诗词文化的当代动画表达。围绕一首唐诗的诗意内核，用一段段可以停留的画面把熟悉的句子重新交还给眼睛。',
    tags: ['文旅', 'AI 动画', '诗词'],
    poster: '/works/posters/datang-ep2.jpg',
    storyHeading: '故事简介',
    intro:
      '「大唐诗光机」系列第二期，继续用 AI 影像探索诗词文化的当代动画表达。与第三期不同，这一期更强调「慢」：围绕一首唐诗的诗意内核，用大面积留白与低饱和处理，把情绪留在人物的姿态与光影里。我希望观众不是在被讲述诗意，而是在画面的停顿与呼吸中重新记起那些句子。项目同样由我完成选题、分镜、生成与剪辑，最终成片 02:51。',
    sections: [
      {
        heading: '视觉设计',
        body:
          '以水墨与暖色为主调，让画面的呼吸感贴合诗朗诵的节奏。关键场景采用大面积留白与低饱和处理，把情绪留在人物的姿态与光影里，而不是堆满信息。',
      },
      {
        heading: '视觉与生成',
        body:
          '用 AI 生成关键场景，并通过提示词迭代保证人物与场景风格的统一；反复筛选可用镜头，避免同一角色在不同镜头中出现形象漂移。',
      },
      {
        heading: '剪辑合成',
        body:
          '以诗朗诵、环境音效与背景音乐铺陈情绪，完成约 2 分 51 秒的成片剪辑，适配文旅账号的传播节奏。',
      },
    ],
    duration: '02:51',
    roles: ['选题策划', '分镜与提示词设计', 'AI 影像生成'],
    tools: ['即梦 AI', 'PR', '剪映'],
    gallery: [],
    video: '/works/videos/datang-ep2.mp4',
  },
  {
    slug: 'changanyun-ep1',
    part: '01',
    partLabel: 'AI VIDEO',
    index: '05 / 01',
    title: '《长安云》动画 · 第一集',
    subtitle: "CHANG'AN CLOUD · EPISODE 1",
    accent: '#8fc9a8',
    description:
      '《长安云》原创 IP 动画第一集。以秦岭文化为背景，围绕树爷爷、男孩女孩等原创角色展开一段关于自然、记忆与成长的故事，完成从角色设定、场景美术到动画合成的完整链路。',
    tags: ['原创动画', '长安云', 'IP'],
    poster: '/works/posters/changanyun-ep1.jpg',
    storyHeading: '故事简介',
    intro:
      '《长安云》是一部以秦岭文化与长安意象为底的原创 IP 动画。第一集从「山里的云」讲起：男孩与女孩在秦岭深处遇见树爷爷，借由一张残破的地图，踏上寻找长安云秘境的旅程。项目覆盖了角色三视图、场景概念、分镜脚本到动画合成的完整创作链路，尝试用清新明亮的国风视觉与轻盈的叙事节奏，把一个关于自然、记忆与成长的故事讲给孩子，也讲给曾经是孩子的成年人。',
    sections: [
      {
        heading: '视觉设计',
        body:
          '以秦岭四季为色彩基底：春野的嫩绿、溪水的青蓝、岩石的暖灰与云层的柔白构成主调。角色造型保留手绘温度，场景则偏向开阔自然主义，让秘境既有现实地理的熟悉感，又有可被想象的延展空间。',
      },
      {
        heading: '角色与世界',
        body:
          '围绕树爷爷、男孩、女孩三个核心角色建立人物档案与三视图，明确每个角色的性格、比例与动作倾向；再把角色放进场馆场景、山林秘境等关键空间，验证形象与世界的匹配度。',
      },
      {
        heading: '制作方式',
        body:
          '从剧本、分镜到关键帧绘制，再到动画合成与字幕包装，逐环节推进。第一集作为整个系列的开篇，重点建立视觉基调与情感内核，为后续集数奠定统一基准。',
      },
    ],
    duration: '—',
    roles: ['角色与场景设定', '分镜与动画', '后期合成'],
    tools: ['AI 生成', 'PR', 'AE'],
    gallery: [],
    videoUnavailable: '成片暂不可播放，正在更新视频文件。',
  },
  {
    slug: '20x6',
    part: '01',
    partLabel: 'AI VIDEO',
    index: '06 / 01',
    title: '<20X6>',
    subtitle: 'EXPERIMENTAL FILM',
    accent: '#9fc3d9',
    description:
      '一部带有科幻质感的实验影像作品。画面在纯白虚空与幽暗现实之间切换，讨论身份与归属，用人物状态本身推动全片叙事。',
    tags: ['实验影像', '叙事', 'Film'],
    poster: '/works/posters/20x6.jpg',
    storyHeading: '故事简介',
    intro:
      '<20X6> 是一部带有科幻质感的实验短片。画面在纯白虚空与幽暗现实之间切换：白色空间里漂浮的人物与线缆植入的头部装置，构成冷峻的未来感；低照度的现实场景则用色温与景深的变化拉开另一个世界的距离。全片不依赖事件推动，而是让人物的状态本身成为叙事主线，配合字幕点题——「我不属于任何地方」——把情绪交给画面与节奏。',
    sections: [
      {
        heading: '视觉设计',
        body:
          '白色虚空里漂浮的人物与线缆植入的头部装置，构成冷峻的未来感；后期转入低照度的现实场景，用色温与景深的变化拉开两个世界的距离。整体以极简构图和高对比光影建立视觉秩序。',
      },
      {
        heading: '叙事结构',
        body:
          '以人物状态而非事件推动全片，用字幕点题，把情绪交给画面与节奏，留给观众自行补全上下文的空间。',
      },
      {
        heading: '制作方式',
        body:
          '从概念设定、AI 影像生成到调色剪辑，用对比强烈的视觉段落完成情绪递进，最终交付 03:17 的成片。',
      },
    ],
    duration: '03:17',
    roles: ['概念设定', 'AI 影像生成', '调色与剪辑'],
    tools: ['Midjourney', '可灵 AI', '达芬奇'],
    gallery: [
      { src: '/works/images/20x6-frame-1.jpg', caption: '画面 · 白场' },
      { src: '/works/images/20x6-frame-3.jpg', caption: '画面 · 漂浮' },
      { src: '/works/images/20x6-frame-2.jpg', caption: '画面 · 夜场' },
    ],
    video: '/works/videos/20x6.mp4',
  },
]

export const VIBE_CODING: Work[] = [
  {
    slug: 'ai-mv-workflow',
    part: '02',
    partLabel: 'VIBE CODING',
    index: '01 / 02',
    title: '网易云 AI MV视频生产工作流',
    subtitle: 'MUSIC ANALYSIS TO VIDEO EXPORT',
    accent: '#38c8ff',
    description:
      '以画风为模版维度，将音乐分析、Prompt工程、分镜生产与合成导出整合为一套完整的AI MV生产工作流后台系统。',
    tags: ['AI Product', 'Workflow', 'Prototype'],
    poster: 'https://dulicharen.cn/huiyouweb/media/ai-mv/workflow-cover.webp',
    storyHeading: '项目背景',
    intro:
      '这是一个 AI 视频画风拓展项目，属于网易云音乐"歌曲 + AI 生成 MV"沉浸式视频流产品的前期探索与内容生产环节。短视频已成为音乐消费的重要入口，但传统 MV 制作成本高，大量优质音乐缺乏配套视觉内容。项目以"画风"为核心维度，用 AI 为歌曲生成风格化 MV，让"每首歌都有 MV"成为可能。',
    sections: [
      {
        heading: '项目目标',
        body:
          '新歌 AI MV 模版覆盖率达到 80% 以上；同一首歌在视频流场景下的红心转化，较传统播放页提升 20%+。',
      },
      {
        heading: '项目成果',
        body:
          '制定并拓展 8—10 种音乐 MV 画风模版，完善端到端生产工作流，提高新歌 MV 的内容供给效率。',
      },
    ],
    duration: '2026',
    roles: ['流程沉淀', 'Vibecoding', '需求分析'],
    tools: ['Codex', 'AI Product', 'Workflow'],
    gallery: [],
    file: { href: '/demos/ai-music-video-workflow.html', type: 'PROTOTYPE' },
  },
  {
    slug: 'huiyou-notes',
    part: '02',
    partLabel: 'VIBE CODING',
    index: '02 / 02',
    title: '《洄游笔记》',
    subtitle: 'MAP-BASED TRAVEL MEMORY',
    accent: '#6be7d5',
    description:
      '以地图为入口的个人旅行记录产品，帮助用户将城市、照片与随笔整理为可回望的空间记忆。',
    tags: ['Travel', 'Map', 'Memory'],
    poster: 'https://dulicharen.cn/huiyouweb/media/product/huiyou-notes.svg',
    storyHeading: '产品介绍',
    intro:
      '《洄游笔记》是一款以地图为入口的个人旅行记录产品，帮助用户将城市、照片与随笔整理为可回望的空间记忆。用户可以在地图上看见自己走过的路径，也能在某个地点重新打开当时的情绪与故事。',
    sections: [
      {
        heading: '核心功能',
        body:
          '产品以地图散点为核心：用户可新增城市足迹，上传旅行照片、撰写随笔并添加时间与标签；点击城市散点即可浏览该地的图文记录，也可按年份、地点或主题筛选和回顾旅行内容。',
      },
      {
        heading: '目标人群',
        body:
          '面向热爱旅行、摄影与文字表达的年轻用户，尤其适合希望长期保存个人记忆、整理旅行素材，并以更具空间感方式展示生活轨迹的人群。',
      },
    ],
    duration: '2026',
    roles: ['产品策划', '用户研究', '信息架构'],
    tools: ['Figma', 'PRD', 'Prototype'],
    gallery: [],
    file: { href: 'https://dulicharen.cn/huiyouweb/huiyoubiji/', type: 'PROTOTYPE' },
  },
  {
    slug: 'filmspectrum',
    part: '02',
    partLabel: 'VIBE CODING',
    index: '03 / 02',
    title: '《影谱》',
    subtitle: 'AI-POWERED FILM CREATION PLATFORM',
    accent: '#d4a574',
    description:
      '以AI为引擎的汉语电影辅助创作平台，帮助电影创作者将灵感、剧本与制作流程整合为可协作、可追溯的智能化创作空间。',
    tags: ['Film', 'AI Writing', 'Product'],
    poster: 'https://aka.doubaocdn.com/s/BqCBFnNRSY',
    storyHeading: '产品介绍',
    intro:
      '《影谱》是一款以AI为引擎的汉语电影辅助创作平台，帮助电影创作者将灵感、剧本与制作流程整合为可协作、可追溯的智能化创作空间。用户可以从一个想法出发，在平台上完成从剧本生成、评估、修改到分镜设计、样片生成乃至制片管理的完整链路，也能在同一个项目空间中与编剧、导演、制片等多角色协同推进创作。',
    sections: [
      {
        heading: '核心功能',
        body:
          '产品以剧本全流程AI辅助为核心：用户可输入故事灵感，系统引导完成故事策划、大纲构建与正文生成，快速产出剧本初稿；也可上传已有剧本进行智能评估，围绕故事构思、情节构建、角色塑造、市场价值等维度生成结构化"体检报告"，并提供分段优化建议。对于进入修改阶段的剧本，系统提供对话式启发与实时反馈，精准洞察叙事逻辑、强化人物动机与弧光，打磨关键场景与对白。',
      },
      {
        heading: '导演与制片助手',
        body:
          '导演助手通过跨模态语义对齐锁定角色与场景视觉一致性，驱动分镜脚本与视频样片的高速生成。制片助手则实现剧本要素智能标注、顺场分场精细化管控，打通剧本拆解、资源统筹与拍摄排期全链路。',
      },
      {
        heading: '目标人群',
        body:
          '面向电影编剧、导演、制片人等一线影视创作者，尤其适合希望提升剧本开发效率、缩短创作周期的专业团队，以及影视院校师生和故事创作爱好者。平台自2025年3月起已面向全国青年编剧、导演开展多轮AI协同创作训练营，致力于以智能化工具降低创作门槛、释放创意潜力。',
      },
    ],
    duration: '2025 — 至今',
    roles: ['产品策划', 'AI 创作流程设计', '用户研究'],
    tools: ['AI Product', 'Scriptwriting', 'Storyboard'],
    gallery: [],
    file: { href: 'https://filmspectrum.com/', type: 'WEB' },
  },
]

export const PRODUCT_DOCS: Work[] = [
  {
    slug: 'se34-roadshow',
    part: '03',
    partLabel: 'PRODUCT PLANNING',
    index: '01 / 03',
    title: '黑客松商赛路演项目',
    subtitle: 'HACKATHON BUSINESS PITCH',
    accent: '#7fa8d4',
    description:
      '黑客松商赛路演方案。从产品定位、视觉体系到传播策略，把项目整合成一套可以现场讲清楚、下线后接得住的完整方案。',
    tags: ['Branding', 'Roadshow', 'Marketing'],
    poster: '/works/posters/doc-se34.jpg',
    storyHeading: '项目介绍',
    intro:
      '黑客松商赛路演项目方案。项目需要回答三个问题：产品核心价值是什么？视觉如何被快速识别？现场表达如何打动评委？方案从产品定位、成分价值与消费场景切入，明确差异化卖点与目标人群；再建立统一的视觉体系；最后设计从现场路演到后续落地的节奏，让路演现场讲得通、下线后接得住。',
    sections: [
      {
        heading: '品牌定位',
        body:
          '从产品核心价值、目标用户与消费场景出发，明确差异化卖点与目标人群，把核心优势转译为听众听得懂的日常价值。',
      },
      {
        heading: '视觉体系',
        body:
          '建立统一的主色与视觉物料规范，兼顾现场展示与后续传播的呈现需求，覆盖演示文稿、产品视觉与线上物料。',
      },
      {
        heading: '传播策略',
        body:
          '设计从产品发布到终端联动的传播节奏，配合路演现场的表达结构，让方案在现场讲得通、下线后接得住。',
      },
    ],
    duration: '2026',
    roles: ['品牌策划', '路演方案撰写', '视觉规划'],
    tools: ['PPT', '品牌视觉', '营销传播'],
    gallery: [],
    file: { href: 'https://wutiantian.cn/ankang/', type: 'WEB' },
  },
  {
    slug: 'changanyun-ip',
    part: '03',
    partLabel: 'PRODUCT PLANNING',
    index: '02 / 03',
    title: '西影文创 · 长安云 IP 形象与内容策划',
    subtitle: 'CULTURAL IP DESIGN & CONTENT PLAN',
    accent: '#b58cff',
    description:
      '为西影文创打造「长安云」IP 形象体系与短视频内容策划。从世界观设定、角色形象到内容选题机制，把抽象的品牌概念落成可识别、可传播的完整文创产品。',
    tags: ['IP Design', '文创', 'Content Plan'],
    poster: '/works/posters/doc-changanyun-ip.jpg',
    storyHeading: '项目背景',
    intro:
      '「长安云」是西影文创旗下的文化 IP，但早期只有一个概念和一个名字，缺少可被识别的形象系统，也没有可持续的内容输出机制。这个项目需要把抽象的品牌概念落成一组有性格、有比例规范、能延展到场馆与周边的角色形象，同时解决"有IP、缺内容"的困境。我的工作覆盖角色设定、三视图绘制、应用场景延展与短视频内容策划，让IP从视觉形象到内容输出形成闭环。',
    sections: [
      {
        heading: '角色设定与形象规范',
        body:
          '围绕「长安云」的世界观，设计核心角色的性格、造型与配色，形成可延展的 IP 人格；输出角色三视图与比例规范，明确线条、配色与表情的边界，为后续动画、衍生品与场景应用提供统一基准。',
      },
      {
        heading: '应用场景延展',
        body:
          '将 IP 形象落地到场馆导视、文创周边与动画短片中，验证形象的延展性与识别度。',
      },
      {
        heading: '短视频内容策划',
        body:
          '基于 IP 调性与平台算法偏好确定账号的内容气质与核心受众画像；建立涵盖角色故事、幕后花絮、文化科普与节点营销四类内容的选题池；制定周更频率、发布时段与数据复盘机制，把内容产出与账号增长挂钩。',
      },
    ],
    duration: '2026',
    roles: ['IP 形象设计', '三视图绘制', '内容策划'],
    tools: ['Illustrator', '文创延展', '短视频'],
    gallery: [],
    file: { href: '/works/docs/changanyun-ip.pdf', type: 'PDF' },
  },
]

export const CONTENT_EVENTS: Work[] = [
  {
    slug: 'medeo-new-year-growth',
    part: '04',
    partLabel: 'CONTENT & CAMPAIGN',
    index: '01 / 04',
    title: '开拍鹅 · 马年新春"分享裂变"活动',
    subtitle: 'SOCIAL GROWTH CAMPAIGN',
    accent: '#f45454',
    description:
      '围绕一键生成春节拜年视频，设计朋友圈、大群、小红书与评选联动的14天裂变活动。',
    tags: ['Growth', 'Campaign', 'Social'],
    poster: 'https://dulicharen.cn/huiyouweb/media/activity/medeo-new-year/01.webp',
    storyHeading: '项目介绍',
    intro:
      '围绕Medeo一键生成春节拜年视频的功能，设计朋友圈、大群、小红书与最佳拜年视频评选联动的14天裂变活动。负责策略策划、活动运营与传播文案。',
    sections: [
      {
        heading: '活动内容',
        body:
          '朋友圈集赞挑战赛 × 大群扩散计划 × 小红书种草挑战 × 最佳拜年视频评选，14天完成从策划到长效运营的完整闭环。',
      },
    ],
    duration: '14天',
    roles: ['策略策划', '活动运营', '传播文案'],
    tools: ['朋友圈', '社群', '小红书'],
    gallery: [
      { src: 'https://dulicharen.cn/huiyouweb/media/activity/medeo-new-year/01.webp', caption: '马年新春裂变活动方案视觉材料' },
    ],
  },
  {
    slug: 'qinling-postcard',
    part: '04',
    partLabel: 'CONTENT & CAMPAIGN',
    index: '02 / 04',
    title: '秦岭文创明信片互换',
    subtitle: 'CULTURAL PRODUCT CAMPAIGN',
    accent: '#83b08a',
    description:
      '让秦岭文化从单向展示走向用户参与式传播，以文创流转带动UGC内容回流。',
    tags: ['Culture', 'UGC', 'Brand'],
    poster: 'https://dulicharen.cn/huiyouweb/media/activity/qinling/01.webp',
    storyHeading: '项目概述',
    intro:
      '以"走读秦岭"社科普及项目为母体，通过明信片、徽章、透卡等文创产品的社交化推广，让秦岭文化从"单向展示"走向"用户参与式传播"，实现从"被看见 → 被记住 → 被热爱"的品牌心智沉淀。',
    sections: [
      {
        heading: '产品推广策略',
        body:
          '明信片：用于书写寄友、藏书票与手帐装饰，通过实物流转与UGC内容回流，配套"寄给秦岭的明信片"征集活动。徽章与透卡：用于日常穿搭和包包装饰，通过小红书打卡互动引导传播，并配套话题晒图抽奖。',
      },
    ],
    duration: '2025',
    roles: ['项目负责人', '文创传播', '活动策划'],
    tools: ['明信片', '徽章', '透卡'],
    gallery: [
      { src: 'https://dulicharen.cn/huiyouweb/media/activity/qinling/01.webp', caption: '秦岭文创活动材料一' },
      { src: 'https://dulicharen.cn/huiyouweb/media/activity/qinling/02.webp', caption: '秦岭文创活动材料二' },
    ],
  },
  {
    slug: 'content-operations',
    part: '04',
    partLabel: 'CONTENT & CAMPAIGN',
    index: '03 / 04',
    title: '内容运营与输出',
    subtitle: 'CONTENT OPERATIONS',
    accent: '#71a9ff',
    description:
      '负责Medeo官号、动漫IP向国内外账号、探店打卡等多类型矩阵号的内容策划与运营。',
    tags: ['Content', 'AIGC', 'Operations'],
    poster: 'https://dulicharen.cn/huiyouweb/media/media-work/content-profile.webp',
    storyHeading: '账号案例：梦想视图',
    intro:
      '面向年轻泛二次元与影视游戏爱好者的AI互动内容账号，以"热门IP × 星座测试 × 沉浸式选择"为核心内容模式。通过AI生成的剧情场景、角色互动和投票式叙事，满足用户的代入感、娱乐性与社交分享需求。',
    sections: [
      {
        heading: '工作内容',
        body:
          '负责账号内容策划与运营，包括热点IP选题、星座互动模版设计、AI视频生成及图文包装；围绕《哈利·波特》《鬼灭之刃》等热门内容打造系列化账号矩阵，并通过标题、封面、互动机制和数据复盘持续优化内容曝光、互动与转化。',
      },
    ],
    duration: '2025—2026',
    roles: ['选题策划', '视频产出', '账号运营'],
    tools: ['小红书', 'Medeo', '数据复盘'],
    gallery: [
      { src: 'https://dulicharen.cn/huiyouweb/media/media-work/content-profile.webp', caption: '梦想视图账号主页' },
      { src: 'https://dulicharen.cn/huiyouweb/media/media-work/content-grid.webp', caption: '梦想视图内容矩阵' },
    ],
  },
]

const assetUrl = (url: string) => url.startsWith('/') ? `${import.meta.env.BASE_URL}${url.slice(1)}` : url

export const ALL_DETAIL_WORKS: Work[] = [...AI_VIDEOS, ...VIBE_CODING, ...PRODUCT_DOCS, ...CONTENT_EVENTS]
for (const work of ALL_DETAIL_WORKS) {
  work.poster = assetUrl(work.poster)
  if (work.video) work.video = assetUrl(work.video)
  if (work.file) work.file.href = assetUrl(work.file.href)
  for (const media of work.gallery) media.src = assetUrl(media.src)
}

export function findWork(slug: string): Work | undefined {
  return ALL_DETAIL_WORKS.find((w) => w.slug === slug)
}

export function getWorkIndex(slug: string): number {
  return ALL_DETAIL_WORKS.findIndex((w) => w.slug === slug)
}

/** index 形如 "02 / 01"（项目序号 / 板块序号），转成参考站的 "1.02" 编号 */
export function getWorkCode(work: Work): string {
  const [itemNo, partNo] = work.index.split('/').map((s) => s.trim())
  return `${Number(partNo)}.${itemNo}`
}
