import { useEffect, useRef, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import Hls from 'hls.js'
import './App.css'
import DetailPage from './DetailPage'
import {
  AI_VIDEOS,
  VIBE_CODING,
  PRODUCT_DOCS,
  CONTENT_EVENTS,
  type Work,
} from './works'

const BACKGROUND_VIDEO =
  'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

const HUMAN_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_090051_64ea5059-da6b-492b-a171-aa7ecc767dc3.mp4'

const AI_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_093237_ff0ddc63-c068-4e29-96da-fdd0e40af133.mp4'

function parseHash() {
  const match = window.location.hash.match(/^#\/works\/(.+)$/)
  return match
    ? ({ page: 'work' as const, slug: match[1] })
    : ({ page: 'home' as const })
}

/* ---------- 组件 ---------- */

function ProjectCard({ work }: { work: Work }) {
  return (
    <a
      className="project-card"
      href={`#/works/${work.slug}`}
      style={{ '--project-accent': work.accent } as CSSProperties}
      aria-label={`查看 ${work.title}`}
    >
      <div className="project-card__copy">
        <p className="project-card__index">{work.index}</p>
        <h3>{work.title}</h3>
        <p className="project-card__subtitle">{work.subtitle}</p>
        <p className="project-card__summary">{work.description}</p>
        <div className="project-card__tags">
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="card-media">
        <img
          className="card-media__image"
          src={work.poster}
          alt={work.title}
          loading="lazy"
        />
      </div>
    </a>
  )
}

function ProjectCategory({
  part,
  title,
  intro,
  children,
}: {
  part: string
  title: ReactNode
  intro: string
  children: ReactNode
}) {
  return (
    <div className="category-block">
      <section className="work-category">
        <aside className="section-rail">
          <p className="section-number">{part}</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </aside>
        <div className="project-list">{children}</div>
      </section>
    </div>
  )
}

const MARQUEE_ITEMS = [
  'AI VIDEO',
  'PROMPT ENGINEERING',
  'VIBE CODING',
  'PRODUCT OPS',
  'CONTENT STRATEGY',
  'EVENT DESIGN',
  'GROWTH',
  'VISUAL DESIGN',
]

function Portfolio() {
  const backgroundRef = useRef<HTMLVideoElement>(null)
  const pixelCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const video = backgroundRef.current
    if (!video) return

    let hls: Hls | undefined

    if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(BACKGROUND_VIDEO)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void video.play().catch(() => {})
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = BACKGROUND_VIDEO
      void video.play().catch(() => {})
    }

    return () => hls?.destroy()
  }, [])

  useEffect(() => {
    const canvas = pixelCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const image = new Image()

    // 降低分辨率，形成真正的像素色块
    const pixelWidth = 32
    const pixelHeight = 42

    canvas.width = pixelWidth
    canvas.height = pixelHeight

    image.onload = () => {
      ctx.imageSmoothingEnabled = false
      ctx.clearRect(0, 0, pixelWidth, pixelHeight)
      ctx.drawImage(image, 0, 0, pixelWidth, pixelHeight)
    }

    image.src = `${import.meta.env.BASE_URL}me.jpg`
  }, [])

  return (
    <main className="portfolio">
      {/* 00：首页首屏 */}
      <section className="hero hero-video" id="home">
        <video
          ref={backgroundRef}
          className="hero-background"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="hero-overlay" />

        <nav className="navbar">
          <a className="logo" href="#home">
            <span className="logo-dot" />
            ZHAO YIJIE
          </a>

          <div className="nav-links">
            <a href="#works">AI 视频</a>
            <a href="#vibe">Vibe Coding</a>
            <a href="#planning">产品策划</a>
            <a href="#events">内容与活动</a>
          </div>

          <a className="nav-link" href="#contact">
            CONTACT ↗
          </a>
        </nav>

        <div className="hero-content">
          <div className="portrait-glitch" aria-label="真人与像素数字分身">
            <img
              className="portrait-layer portrait-real"
              src={`${import.meta.env.BASE_URL}me.jpg`}
              alt="个人肖像"
            />
            <canvas
              ref={pixelCanvasRef}
              className="portrait-layer portrait-pixel"
              aria-hidden="true"
            />
            <span className="portrait-caption">HUMAN / DIGITAL SELF</span>
          </div>

          <p className="eyebrow">AI · FILM · CREATIVE TECHNOLOGY</p>

          <h1 className="hero-title">
            The vision of engineering
            <br />
            is{' '}
            <span className="inline-video-word">
              <video
                className="inline-circle-video"
                src={HUMAN_VIDEO}
                autoPlay
                muted
                loop
                playsInline
              />
              <span className="muted">human</span>
            </span>
            <span className="plus"> + </span>
            <span className="inline-video-word">
              <video
                className="inline-circle-video"
                src={AI_VIDEO}
                autoPlay
                muted
                loop
                playsInline
              />
              <span className="accent">AI</span>
            </span>
          </h1>

          <div className="hero-bottom">
            <p className="description">
              A filmmaker exploring the intersection of artificial
              intelligence, visual storytelling and creative operations.
            </p>
            <a className="cta" href="#experience">
              Explore My Journey <span>↘</span>
            </a>
          </div>
        </div>

        <a className="scroll-indicator" href="#experience">
          <span className="scroll-line" />
          SCROLL TO DISCOVER
        </a>
      </section>

      {/* 01 // 实习经历 */}
      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">01 // EXPERIENCE</p>
          <h2>实习经历</h2>
          <p className="section-intro">
            Where ideas meet execution — from filmmaking to AI product growth.
          </p>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <span className="item-number">01</span>
            <div className="experience-main">
              <p className="item-category">NETEASE · AI PRODUCT OPERATIONS</p>
              <h3>网易 · 产品运营（AI 方向）</h3>
              <p>
                负责 AI MV 内容供给与社区运营，参与需求梳理、模版设计及产品迭代。
              </p>
              <div className="tag-list">
                <span>AI MV</span>
                <span>社区运营</span>
                <span>产品迭代</span>
              </div>
            </div>
            <span className="item-arrow">↗</span>
          </article>

          <article className="experience-item">
            <span className="item-number">02</span>
            <div className="experience-main">
              <p className="item-category">AI FILM & CREATIVE OPERATIONS</p>
              <h3>西影 · AI 创作运营</h3>
              <p>
                参与 AI 影视内容创作、AI 角色视频、文旅宣传内容与文创视觉设计，
                探索 AI 影像在文化传播和文旅场景中的应用。
              </p>
              <div className="tag-list">
                <span>AI 视频创作</span>
                <span>文旅传播</span>
                <span>视觉设计</span>
              </div>
            </div>
            <span className="item-arrow">↗</span>
          </article>

          <article className="experience-item">
            <span className="item-number">03</span>
            <div className="experience-main">
              <p className="item-category">ONE2X · MEDEO PRODUCT OPS</p>
              <h3>One2X · AI 产品「Medeo」· 产品运营</h3>
              <p>
                负责海外用户增长与专题创作，参与内容策划、模版设计及社区运营。
              </p>
              <div className="tag-list">
                <span>海外社媒</span>
                <span>SEO</span>
                <span>内容增长</span>
              </div>
            </div>
            <span className="item-arrow">↗</span>
          </article>

          <article className="experience-item">
            <span className="item-number">04</span>
            <div className="experience-main">
              <p className="item-category">FILMMAKING & E-COMMERCE</p>
              <h3>MCN · 编导与电商内容</h3>
              <p>
                参与短视频选题策划、内容制作与电商相关内容工作，
                积累从创意构思到内容落地的实践经验。
              </p>
              <div className="tag-list">
                <span>编导策划</span>
                <span>短视频</span>
                <span>电商内容</span>
              </div>
            </div>
            <span className="item-arrow">↗</span>
          </article>
        </div>
      </section>

      {/* 02 // 核心能力 */}
      <section className="section capabilities-section" id="capabilities">
        <div className="section-heading">
          <p className="eyebrow">02 // CAPABILITIES</p>
          <h2>从创意到落地，<span>四种能力完成闭环。</span></h2>
        </div>

        <div className="capability-grid">
          <article className="capability-card">
            <span className="capability-number">01</span>
            <h3>AI Filmmaking</h3>
            <p>AI 影像创作、创意策划、分镜设计与视频制作。</p>
          </article>
          <article className="capability-card">
            <span className="capability-number">02</span>
            <h3>Content & Growth</h3>
            <p>内容运营、海外社媒、SEO 与用户增长实践。</p>
          </article>
          <article className="capability-card">
            <span className="capability-number">03</span>
            <h3>Visual Design</h3>
            <p>视觉表达、品牌内容、海报与文创设计。</p>
          </article>
          <article className="capability-card">
            <span className="capability-number">04</span>
            <h3>AI Product</h3>
            <p>用户需求分析、内容策略、产品页面与创意应用。</p>
          </article>
        </div>
      </section>

      {/* 滚动标签带 */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* PART 1：AI 视频 */}
      <section className="section works-section" id="works">
        <ProjectCategory
          part="01 // AI VIDEO"
          title={<>AI <span>视频</span></>}
          intro="从神话叙事到文旅动画与文创影像，进行选题设计、Prompt 制定与视频产出。点击卡片进入项目详情，或直接点播放按钮观看。"
        >
          {AI_VIDEOS.map((work) => (
            <ProjectCard key={work.slug} work={work} />
          ))}
        </ProjectCategory>
      </section>

      {/* PART 2：Vibe Coding */}
      <section className="section vibe-section" id="vibe">
        <ProjectCategory
          part="02 // VIBE CODING"
          title={<>Vibe <span>Coding</span></>}
          intro="把产品想法转化为可运行原型，覆盖设计、需求梳理、前端实现和演示验证。从Figma到可交互页面，让创意快速落地。"
        >
          {VIBE_CODING.map((work) => (
            <ProjectCard key={work.slug} work={work} />
          ))}
        </ProjectCategory>
      </section>

      {/* PART 3：产品策划 */}
      <section className="section planning-section" id="planning">
        <ProjectCategory
          part="03 // PRODUCT PLANNING"
          title={<>产品 <span>策划</span></>}
          intro="从品牌路演、IP 形象到内容策划与项目申报，把想法落成可执行的方案。点击卡片查看详情。"
        >
          {PRODUCT_DOCS.map((work) => (
            <ProjectCard key={work.slug} work={work} />
          ))}
        </ProjectCategory>
      </section>

      {/* PART 4：活动策划 */}
      <section className="section events-section" id="events">
        <ProjectCategory
          part="04 // CONTENT & CAMPAIGN"
          title={<>内容与<span>活动策划</span></>}
          intro="从体验设计、内容机制到全域传播，让参与与转化发生在同一条路径上。"
        >
          {CONTENT_EVENTS.map((work) => (
            <ProjectCard key={work.slug} work={work} />
          ))}
        </ProjectCategory>
      </section>

      {/* 07：联系页 */}
      <section className="contact-section" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Let's make<br />something <span>meaningful.</span></h2>
        <p>AI filmmaker · Creative operator · Visual storyteller</p>
        <a className="cta" href="mailto:2368554645@qq.com">
          Get in touch <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <a href="#home">ZHAO YIJIE ↗ BACK TO TOP</a>
        <span>INDEPENDENT THINKING. INFINITE POSSIBILITIES.</span>
        <span>© 2026 PORTFOLIO</span>
      </footer>
    </main>
  )
}

function App() {
  const [route, setRoute] = useState(() => parseHash())

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route.page === 'work') {
    return <DetailPage slug={route.slug} onHome={() => setRoute({ page: 'home' })} />
  }

  return <Portfolio />
}

export default App
