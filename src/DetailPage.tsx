import { useEffect } from 'react'
import type { CSSProperties } from 'react'
import {
  findWork,
  getWorkIndex,
  getWorkCode,
  ALL_DETAIL_WORKS,
} from './works'
import './App.css'

function openHash(slug: string) {
  window.location.hash = `#/works/${slug}`
}

export default function DetailPage({
  slug,
  onHome,
}: {
  slug: string
  onHome: () => void
}) {
  const work = findWork(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  if (!work) {
    return (
      <main className="detail-page">
        <nav className="detail-nav">
          <a href="#works" onClick={onHome}>
            ← BACK TO WORKS
          </a>
        </nav>
        <section className="project-hero">
          <h1>Project not found</h1>
        </section>
      </main>
    )
  }

  const idx = getWorkIndex(slug)
  const next = ALL_DETAIL_WORKS[(idx + 1) % ALL_DETAIL_WORKS.length]
  const prev =
    ALL_DETAIL_WORKS[(idx - 1 + ALL_DETAIL_WORKS.length) % ALL_DETAIL_WORKS.length]

  return (
    <main
      className="detail-page"
      style={{ '--project-accent': work.accent } as CSSProperties}
    >
      <nav className="navbar">
        <a className="logo" href="#home" onClick={onHome}>
          <span className="logo-dot" />
          ZHAO YIJIE
        </a>

        <div className="nav-links">
          <a href="#works" onClick={onHome}>AI 视频</a>
          <a href="#vibe" onClick={onHome}>Vibe Coding</a>
          <a href="#planning" onClick={onHome}>产品策划</a>
          <a href="#events" onClick={onHome}>内容与活动</a>
        </div>

        <a className="nav-link" href="#contact" onClick={onHome}>
          CONTACT ↗
        </a>
      </nav>

      {/* 前情提要：标题 + 元信息 + 故事简介 */}
      <header className="project-hero">
        <div className="project-hero__glow" aria-hidden="true" />

        <p className="eyebrow">PROJECT / {getWorkCode(work)}</p>
        <h1>{work.title}</h1>
        <p className="project-hero__subtitle">{work.subtitle}</p>

        <div className="project-meta">
          <div>
            <span>TIME / DURATION</span>
            <strong>{work.duration}</strong>
          </div>
          <div>
            <span>ROLE</span>
            <strong>{work.roles.join(' · ')}</strong>
          </div>
          <div>
            <span>TOOLS / TAGS</span>
            <strong>{work.tools.join(' · ')}</strong>
          </div>
        </div>

        <div className="project-story">
          <article>
            <h2>{work.storyHeading}</h2>
            <p>{work.intro}</p>
          </article>
          {work.sections.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </header>

      {work.videoUnavailable && (
        <figure className="detail-player">
          <img src={work.poster} alt={work.title} style={{ width: '100%' }} />
          <figcaption>{work.videoUnavailable}</figcaption>
        </figure>
      )}

      {work.video && (
        <figure className="detail-player">
          <video
            src={work.video}
            poster={work.poster}
            controls
            playsInline
            preload="metadata"
          />
          <figcaption>
            {work.partLabel === 'AI VIDEO'
              ? `AI 视频成片 · ${work.duration}`
              : `项目文件 · ${work.duration}`}
          </figcaption>
        </figure>
      )}

      {work.file && !work.video && (
        <figure className="detail-doc-preview">
          <a
            className="doc-cover-link"
            href={work.file.href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={work.poster} alt={work.title} />
            <span className="doc-cover-badge">
              OPEN {work.file.type} ↗
            </span>
          </a>
          <figcaption>
            {work.file.type} 方案文件 · 点击封面打开原件
          </figcaption>
        </figure>
      )}

      {work.gallery.length > 0 && (
        <section className="detail-gallery">
          <h2>创作素材</h2>
          <div className="gallery-grid">
            {work.gallery.map((item) =>
              item.kind === 'video' ? (
                <figure className="gallery-item" key={item.src}>
                  <video src={item.src} controls playsInline preload="metadata" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ) : (
                <figure className="gallery-item" key={item.src}>
                  <img src={item.src} alt={item.caption} loading="lazy" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ),
            )}
          </div>
        </section>
      )}

      {work.file && work.video && (
        <div className="detail-file-cta">
          <a
            className="cta"
            href={work.file.href}
            target="_blank"
            rel="noreferrer"
          >
            查看/下载 {work.file.type} 方案文件 <span>↗</span>
          </a>
        </div>
      )}

      <footer className="detail-footer">
        <button
          type="button"
          className="detail-nav-button"
          onClick={() => openHash(prev.slug)}
        >
          <span>← PREV</span>
          <strong>{prev.title}</strong>
        </button>
        <button
          type="button"
          className="detail-nav-button next"
          onClick={() => openHash(next.slug)}
        >
          <span>NEXT →</span>
          <strong>{next.title}</strong>
        </button>
      </footer>
    </main>
  )
}
