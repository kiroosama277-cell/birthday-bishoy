'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Lenis from 'lenis'

/* ════════════════════════════
   SVG ROSE BUILDER
════════════════════════════ */
function roseSVG(cx: number, cy: number, sz: number, petalColor: string, centerColor: string, opacity = 1) {
  const r = sz / 2
  const numP = 5
  let paths = ''
  for (let i = 0; i < numP; i++) {
    const angle = (i / numP) * 360
    const rad = angle * Math.PI / 180
    const px = cx + Math.cos(rad) * r * 0.55
    const py = cy + Math.sin(rad) * r * 0.55
    paths += `<ellipse cx="${px}" cy="${py}" rx="${r * 0.7}" ry="${r * 0.42}" fill="${petalColor}" opacity="${opacity * 0.85}" transform="rotate(${angle + 20} ${px} ${py})"/>`
  }
  const numO = 8
  for (let i = 0; i < numO; i++) {
    const angle = (i / numO) * 360 + 22
    const rad = angle * Math.PI / 180
    const px = cx + Math.cos(rad) * r * 0.88
    const py = cy + Math.sin(rad) * r * 0.88
    paths += `<ellipse cx="${px}" cy="${py}" rx="${r * 0.55}" ry="${r * 0.32}" fill="${petalColor}" opacity="${opacity * 0.6}" transform="rotate(${angle} ${px} ${py})"/>`
  }
  paths += `<circle cx="${cx}" cy="${cy}" r="${r * 0.38}" fill="${centerColor}" opacity="${opacity * 0.9}"/>`
  paths += `<circle cx="${cx}" cy="${cy}" r="${r * 0.18}" fill="#fff" opacity="${opacity * 0.2}"/>`
  return paths
}

/* ════════════════════════════
   GIFT BOX SVG
════════════════════════════ */
function GiftBoxSVG() {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'none' }}>
      <ellipse cx="100" cy="210" rx="70" ry="8" fill="#000" opacity=".3" />
      <rect x="18" y="98" width="164" height="112" rx="5" fill="#7a1f1f" />
      <rect x="18" y="98" width="164" height="112" rx="5" fill="url(#bGrad)" />
      <rect x="8" y="70" width="184" height="36" rx="5" fill="#b03030" />
      <rect x="8" y="70" width="184" height="36" rx="5" fill="url(#lGrad)" />
      <rect x="90" y="70" width="20" height="140" fill="#f2c4b8" opacity=".8" />
      <rect x="8" y="80" width="184" height="14" fill="#f2c4b8" opacity=".8" />
      <ellipse cx="72" cy="60" rx="32" ry="20" fill="#e8897a" transform="rotate(-22 72 60)" />
      <ellipse cx="72" cy="60" rx="22" ry="13" fill="#7a1f1f" transform="rotate(-22 72 60)" />
      <ellipse cx="128" cy="60" rx="32" ry="20" fill="#e8897a" transform="rotate(22 128 60)" />
      <ellipse cx="128" cy="60" rx="22" ry="13" fill="#7a1f1f" transform="rotate(22 128 60)" />
      <ellipse cx="100" cy="68" rx="16" ry="11" fill="#f2c4b8" />
      <ellipse cx="100" cy="65" rx="7" ry="5" fill="#fff" opacity=".25" />
      <rect x="20" y="74" width="50" height="7" rx="3.5" fill="#fff" opacity=".12" />
      <circle cx="55" cy="135" r="5" fill="#f2c4b8" opacity=".35" />
      <circle cx="100" cy="152" r="5" fill="#f2c4b8" opacity=".35" />
      <circle cx="145" cy="133" r="5" fill="#f2c4b8" opacity=".35" />
      <circle cx="42" cy="168" r="4" fill="#f2c4b8" opacity=".25" />
      <circle cx="155" cy="165" r="4" fill="#f2c4b8" opacity=".25" />
      <defs>
        <linearGradient id="bGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity=".08" />
          <stop offset="100%" stopColor="#000" stopOpacity=".28" />
        </linearGradient>
        <linearGradient id="lGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity=".2" />
          <stop offset="100%" stopColor="#000" stopOpacity=".1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ════════════════════════════
   CURSOR SVG
════════════════════════════ */
function CursorSVG() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,17 C4,12 1,8 1,5 C1,2.5 3,1 5.5,2.5 C7.2,3.5 9,5.8 10,7.5 C11,5.8 12.8,3.5 14.5,2.5 C17,1 19,2.5 19,5 C19,8 16,12 10,17Z" fill="#e8897a" opacity=".85" />
    </svg>
  )
}

/* ════════════════════════════
   POPUP SPAWNER
════════════════════════════ */
function spawnEl(html: string, x: number, y: number, cls: string) {
  const el = document.createElement('div')
  el.className = cls
  el.innerHTML = html
  el.style.left = x + 'px'
  el.style.top = y + 'px'
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 3200)
}

function boom(e: React.MouseEvent, type: string) {
  const x = e.clientX, y = e.clientY

  if (type === 'teddy') {
    ;['🐻', '💋', '🐻', '💝', '🤍'].forEach((s, i) =>
      setTimeout(() => spawnEl(s, x + (Math.random() - .5) * 180, y + (Math.random() - .5) * 110, 'pop'), i * 130)
    )
  }
  if (type === 'heart') {
    ;['❤️', '🤍', '💕', '💗', '💓', '💞'].forEach((s, i) =>
      setTimeout(() => spawnEl(s, x + (Math.random() - .5) * 200, y + (Math.random() - .5) * 130, 'pop'), i * 110)
    )
  }
  if (type === 'rose') {
    for (let i = 0; i < 6; i++) setTimeout(() => {
      const d = document.createElement('div')
      d.className = 'pop'
      const [pc, cc] = [['#c0463c', '#6b1a1a'], ['#e8897a', '#b03030'], ['#f2c4b8', '#c0463c']][i % 3]
      d.innerHTML = `<svg width="48" height="48" viewBox="0 0 48 48">${roseSVG(24, 24, 40, pc, cc)}</svg>`
      d.style.left = (x + (Math.random() - .5) * 200) + 'px'
      d.style.top = (y + (Math.random() - .5) * 130) + 'px'
      document.body.appendChild(d)
      setTimeout(() => d.remove(), 3200)
    }, i * 110)
  }
  if (type === 'stars') {
    for (let i = 0; i < 22; i++) {
      const s = document.createElement('div')
      s.className = 'star-p'
      const angle = (i / 22) * Math.PI * 2, dist = 80 + Math.random() * 170
      s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;
        background:${['#c9995a', '#f2c4b8', '#fff9f6', '#e8897a'][i % 4]};
        width:${2 + Math.random() * 5}px;height:${2 + Math.random() * 5}px;
        animation-delay:${Math.random() * .35}s;`
      document.body.appendChild(s)
      setTimeout(() => s.remove(), 2000)
    }
  }
  if (type === 'moon') {
    const m = document.createElement('div')
    m.className = 'moon-p'
    m.textContent = '🌙'
    m.style.left = (x - 45) + 'px'
    m.style.top = (y - 55) + 'px'
    document.body.appendChild(m)
    setTimeout(() => m.remove(), 3500)
    ;['⭐', '🌟', '✨', '💫'].forEach((s, i) =>
      setTimeout(() => spawnEl(s, x + (Math.random() - .5) * 220, y + (Math.random() - .5) * 140, 'pop'), i * 210)
    )
  }
  if (type === 'cake') {
    spawnEl('🎂', x - 30, y - 40, 'pop')
    ;['🎉', '🎊', '💕', '✨', '🎈', '🌹'].forEach((s, i) =>
      setTimeout(() => spawnEl(s, x + (Math.random() - .5) * 280, y + (Math.random() - .5) * 170, 'pop'), i * 95)
    )
  }
}

/* ════════════════════════════
   BACKGROUND ROSES BUILDER
════════════════════════════ */
function buildBgRosesHTML(id: string, n: number, colors: string[][]) {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (!el) return
  const W = el.offsetWidth || 1200
  const H = el.offsetHeight || 900
  let svg = `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`
  for (let i = 0; i < n; i++) {
    const [pc, cc] = colors[Math.floor(Math.random() * colors.length)]
    const x = Math.random() * W, y = Math.random() * H
    const sz = 60 + Math.random() * 100
    svg += roseSVG(x, y, sz, pc, cc, 0.7 + Math.random() * .3)
  }
  svg += '</svg>'
  el.innerHTML = svg
}

/* ════════════════════════════
   FLOATING PARTICLES COMPONENT
════════════════════════════ */
function FloatingParticles({ count = 15, colors = ['#e8897a', '#f2c4b8', '#c9995a'], type = 'petal' }: { count?: number; colors?: string[]; type?: 'petal' | 'star' | 'heart' | 'sparkle' }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 10,
      size: type === 'heart' ? 10 + Math.random() * 14 : type === 'sparkle' ? 6 + Math.random() * 10 : 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: -30 + Math.random() * 60,
      startY: Math.random() * 100,
    }))
  )

  return (
    <div className="floating-particles">
      {particles.current.map((p) => (
        <div
          key={p.id}
          className={`fp fp-${type}`}
          style={{
            left: `${p.x}%`,
            top: `${p.startY}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
            color: p.color,
            '--drift': `${p.drift}px`,
          } as React.CSSProperties}
        >
          {type === 'heart' && '♥'}
          {type === 'sparkle' && '✦'}
          {type === 'star' && '⋆'}
        </div>
      ))}
    </div>
  )
}

/* ════════════════════════════
   ANIMATED SECTION WRAPPER
════════════════════════════ */
function AnimatedSection({
  children,
  className,
  id,
  bgId,
  onClick,
  particleType = 'petal',
  particleCount = 12,
  particleColors,
}: {
  children: React.ReactNode
  className: string
  id: string
  bgId: string
  onClick?: (e: React.MouseEvent) => void
  particleType?: 'petal' | 'star' | 'heart' | 'sparkle'
  particleCount?: number
  particleColors?: string[]
}) {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Parallax for background
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const bgScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.15, 1, 1, 1.15])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.1, 0.28, 0.28, 0.1])

  // Content entrance
  const contentY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [100, 0, 0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0, 1, 1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.93])

  // Decorative elements rotation
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45])

  return (
    <motion.section
      ref={ref}
      className={`sec ${className}`}
      id={id}
    >
      {/* Parallax background roses */}
      <motion.div
        className="bg-roses"
        id={bgId}
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
      />

      {/* Floating particles */}
      <FloatingParticles count={particleCount} type={particleType} colors={particleColors} />

      {/* Decorative rotating elements */}
      <motion.div className="deco deco-1" style={{ rotate: rotate1 }} />
      <motion.div className="deco deco-2" style={{ rotate: rotate2 }} />

      {/* Section glow */}
      <div className="sec-glow" />

      {/* Click zone */}
      {onClick && <div className="czone" onClick={onClick} />}

      {/* Animated content */}
      <motion.div
        className="sec-inner"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

/* ════════════════════════════
   ANIMATED TEXT LINE
════════════════════════════ */
function AnimatedText({ children, className = '', delay = 0, extraStyle }: { children: React.ReactNode; className?: string; delay?: number; extraStyle?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })

  return (
    <motion.span
      ref={ref}
      className={`ln ${className}`}
      style={extraStyle}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: extraStyle?.opacity ?? 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  )
}

/* ════════════════════════════
   SHIMMER TEXT (for gold effects)
════════════════════════════ */
function ShimmerText({ children, className = '', extraStyle }: { children: React.ReactNode; className?: string; extraStyle?: React.CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })

  return (
    <motion.span
      ref={ref}
      className={`ln shimmer-text ${className}`}
      style={extraStyle}
      initial={{ opacity: 0, y: 50, scale: 0.85 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  )
}

/* ════════════════════════════
   WAVE DIVIDER
════════════════════════════ */
function WaveDivider({ flip = false, color = '#0e0404' }: { flip?: boolean; color?: string }) {
  return (
    <div className={`wave-divider ${flip ? 'flip' : ''}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

/* ════════════════════════════
   NAVIGATION DOTS
════════════════════════════ */
function NavDots() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll('.sec')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target)
            if (idx >= 0) setActive(idx)
          }
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (idx: number) => {
    const sections = document.querySelectorAll('.sec')
    sections[idx]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="nav-dots">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          className={`nav-dot ${active === i ? 'active' : ''}`}
          onClick={() => scrollTo(i)}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  )
}

/* ════════════════════════════
   MAIN PAGE COMPONENT
════════════════════════════ */
export default function Home() {
  const [stage, setStage] = useState<'gift' | 'roses' | 'text' | 'date' | 'main'>('gift')
  const [giftShaking, setGiftShaking] = useState(false)
  const [wordVisible, setWordVisible] = useState({ w1: false, w2: false, myb: false })
  const [heartDrawn, setHeartDrawn] = useState(false)
  const [dateVisible, setDateVisible] = useState(false)
  const [dateSubVisible, setDateSubVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)

  const cursorRef = useRef<HTMLDivElement>(null)
  const ytPlayerRef = useRef<any>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)

  // ═══ LENIS SMOOTH SCROLL ═══
  useEffect(() => {
    if (!mainVisible) return

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [mainVisible])

  // ═══ CUSTOM CURSOR ═══
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = (e.clientX - 9) + 'px'
        cursorRef.current.style.top = (e.clientY - 9) + 'px'
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // ═══ YOUTUBE MUSIC ═══
  useEffect(() => {
    if (typeof window === 'undefined') return
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
    ;(window as any).onYouTubeIframeAPIReady = () => {
      const YT = (window as any).YT
      if (!YT) return
      ytPlayerRef.current = new YT.Player('ytp', {
        videoId: 'rNEsMFXDkMU',
        playerVars: { autoplay: 1, loop: 1, playlist: 'rNEsMFXDkMU', controls: 0, fs: 0, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(55)
            e.target.playVideo()
            setMusicPlaying(true)
          },
        },
      })
    }
  }, [])

  const toggleMusic = useCallback(() => {
    if (!ytPlayerRef.current) return
    try {
      if (musicPlaying) { ytPlayerRef.current.pauseVideo(); setMusicPlaying(false) }
      else { ytPlayerRef.current.playVideo(); setMusicPlaying(true) }
    } catch { /* not ready */ }
  }, [musicPlaying])

  // ═══ GIFT OPEN ═══
  const openGift = useCallback(() => {
    if (stage !== 'gift') return
    let s = 0
    const doShake = () => {
      setGiftShaking(true)
      setTimeout(() => {
        setGiftShaking(false)
        s++
        if (s < 3) setTimeout(doShake, 220)
        else setStage('roses')
      }, 550)
    }
    doShake()
  }, [stage])

  // ═══ ROSE BURST ═══
  useEffect(() => {
    if (stage !== 'roses') return

    const svg = document.getElementById('roseCanvas')
    if (!svg) return
    const W = window.innerWidth, H = window.innerHeight
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)

    const colors = [
      ['#c0463c', '#6b1a1a'],
      ['#e8897a', '#b03030'],
      ['#f2c4b8', '#c0463c'],
      ['#d4706a', '#8b2a2a'],
      ['#e8a090', '#a03030'],
    ]

    let count = 0
    const total = 55
    const positions = []

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 9; col++) {
        positions.push({
          x: (col / 8) * W + (Math.random() - .5) * (W / 9),
          y: (row / 7) * H + (Math.random() - .5) * (H / 8),
          sz: 60 + Math.random() * 80,
          delay: (row * 9 + col) * 55 + Math.random() * 80,
        })
      }
    }
    positions.sort(() => Math.random() - .5)

    positions.slice(0, total).forEach((p) => {
      setTimeout(() => {
        const [pc, cc] = colors[Math.floor(Math.random() * colors.length)]
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        g.style.opacity = '0'
        g.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1)'
        g.style.transform = 'scale(0.2)'
        g.style.transformOrigin = `${p.x}px ${p.y}px`
        g.innerHTML = roseSVG(p.x, p.y, p.sz, pc, cc)
        svg.appendChild(g)
        requestAnimationFrame(() => requestAnimationFrame(() => {
          g.style.opacity = '1'
          g.style.transform = 'scale(1)'
        }))
        count++
        if (count >= total) setTimeout(() => setStage('text'), 900)
      }, p.delay)
    })
  }, [stage])

  // ═══ STAGGER TEXT ═══
  useEffect(() => {
    if (stage !== 'text') return
    const t1 = setTimeout(() => setWordVisible(v => ({ ...v, w1: true })), 150)
    const t2 = setTimeout(() => setWordVisible(v => ({ ...v, w2: true })), 850)
    const t3 = setTimeout(() => {
      setWordVisible(v => ({ ...v, myb: true }))
      setTimeout(() => setHeartDrawn(true), 350)
    }, 1650)
    const t4 = setTimeout(() => setStage('date'), 5800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [stage])

  // ═══ DATE ═══
  useEffect(() => {
    if (stage !== 'date') return
    const t1 = setTimeout(() => { setDateVisible(true); setDateSubVisible(true) }, 200)
    const t2 = setTimeout(() => setStage('main'), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [stage])

  // ═══ MAIN ═══
  useEffect(() => {
    if (stage !== 'main') return
    setMainVisible(true)
    setScrollHintVisible(true)
    const t = setTimeout(() => setScrollHintVisible(false), 7000)

    // Build background roses for each section
    setTimeout(() => {
      buildBgRosesHTML('bgr1', 12, [['#c0463c', '#6b1a1a'], ['#e8897a', '#b03030']])
      buildBgRosesHTML('bgr2', 10, [['#e8897a', '#c0463c'], ['#f2c4b8', '#e8897a']])
      buildBgRosesHTML('bgr3', 14, [['#8b2a2a', '#3d1010'], ['#c0463c', '#6b1a1a']])
      buildBgRosesHTML('bgr4', 10, [['#c9995a', '#6b3a1a'], ['#e8c98a', '#c0463c']])
      buildBgRosesHTML('bgr5', 12, [['#7070a0', '#2a2a50'], ['#a090b8', '#4a3060']])
      buildBgRosesHTML('bgr6', 16, [['#c0463c', '#6b1a1a'], ['#e8897a', '#b03030'], ['#c9995a', '#6b3a1a']])
    }, 100)

    return () => clearTimeout(t)
  }, [stage])

  // ════════════════════════════
  // RENDER STAGES
  // ════════════════════════════

  return (
    <>
      {/* Custom Cursor */}
      <div id="cursor" ref={cursorRef}>
        <CursorSVG />
      </div>

      {/* ══ STAGE 0: GIFT ══ */}
      <div
        className={`stage ${stage !== 'gift' ? 'gone' : 'entering'}`}
        id="stGift"
      >
        <div
          className={`gift-scene ${giftShaking ? 'shake-it' : ''}`}
          onClick={openGift}
        >
          <GiftBoxSVG />
          <p className="gift-label">tap to open ✦</p>
        </div>
      </div>

      {/* ══ STAGE 1: ROSES ══ */}
      <div
        className={`stage ${stage === 'gift' ? 'hidden' : stage === 'roses' ? 'entering' : 'gone'}`}
        id="stRoses"
      >
        <svg
          id="roseCanvas"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          xmlns="http://www.w3.org/2000/svg"
        />
      </div>

      {/* ══ STAGE 2: TEXT ══ */}
      <div
        className={`stage ${['gift', 'roses'].includes(stage) ? 'hidden' : stage === 'text' ? 'entering' : 'gone'}`}
        id="stText"
      >
        <div className={`wrd ${wordVisible.w1 ? 'in' : ''}`}>Happy</div>
        <div className={`wrd ${wordVisible.w2 ? 'in' : ''}`}>Birthday</div>
        <div className={`myb-row ${wordVisible.myb ? 'in' : ''}`}>
          <svg className="heart-svg-draw" viewBox="0 0 380 130" preserveAspectRatio="xMidYMid meet">
            <path
              className={`h-path ${heartDrawn ? 'draw' : ''}`}
              d="M190,112 C100,82 16,54 16,30 C16,9 42,-4 78,14 C108,28 155,58 190,80 C225,58 272,28 302,14 C338,-4 364,9 364,30 C364,54 280,82 190,112 Z"
            />
          </svg>
          <span className="myb-txt">My B</span>
        </div>
      </div>

      {/* ══ STAGE 3: DATE ══ */}
      <div
        className={`stage ${['gift', 'roses', 'text'].includes(stage) ? 'hidden' : stage === 'date' ? 'entering' : 'gone'}`}
        id="stDate"
      >
        <div className={`date-num ${dateVisible ? 'in' : ''}`}>June 19</div>
        <div className={`date-sub ${dateSubVisible ? 'in' : ''}`}>his special day</div>
      </div>

      {/* ══ SCROLL HINT ══ */}
      <div id="shint" className={scrollHintVisible ? 'in' : ''}>scroll ↓</div>

      {/* ══ MUSIC TOGGLE ══ */}
      {mainVisible && (
        <button
          className={`music-toggle ${musicPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
          aria-label={musicPlaying ? 'Pause music' : 'Play music'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {musicPlaying ? (
              <>
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </>
            ) : (
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
            )}
          </svg>
        </button>
      )}

      {/* ══ NAVIGATION DOTS ══ */}
      {mainVisible && <NavDots />}

      {/* ══ MAIN CONTENT ══ */}
      <div id="main" className={mainVisible ? 'in' : ''}>

        {/* ── S1: HERO ── */}
        <AnimatedSection
          className="sec-1"
          id="s1"
          bgId="bgr1"
          onClick={(e) => boom(e, 'teddy')}
          particleType="petal"
          particleCount={18}
          particleColors={['#e8897a', '#f2c4b8', '#c0463c', '#fff9f6']}
        >
          <AnimatedText className="hero" delay={0}>
            &ldquo;Happy Birthday, Bishoy&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.3}>
            &ldquo;Today the world celebrates you — and so do I&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.5}>
            &ldquo;But honestly? Every single day feels like your birthday to me&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.7}>
            &ldquo;Because every day with you is a gift I never want to return&rdquo;
          </AnimatedText>
          <div className="div">✦</div>
          <AnimatedText delay={1} extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>
            tap anywhere
          </AnimatedText>
        </AnimatedSection>

        <WaveDivider color="#f5ebe4" />

        {/* ── S2: LIGHT ── */}
        <AnimatedSection
          className="sec-2"
          id="s2"
          bgId="bgr2"
          onClick={(e) => boom(e, 'heart')}
          particleType="heart"
          particleCount={14}
          particleColors={['#c0463c', '#e8897a', '#f2c4b8', '#8b2a2a']}
        >
          <AnimatedText className="hero sec2-text" delay={0}>
            &ldquo;You didn&rsquo;t just walk into my life… you became it&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.3} className="sec2-text">
            &ldquo;Before you, I didn&rsquo;t know that someone could feel like home&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.5} className="sec2-text">
            &ldquo;Now I can&rsquo;t imagine a single day without your voice, your laugh, your presence&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.7} className="sec2-text">
            &ldquo;You changed everything — quietly, deeply, forever&rdquo;
          </AnimatedText>
          <div className="div sec2-div">✦</div>
          <AnimatedText delay={1} className="sec2-text" extraStyle={{ fontSize: '.78rem', opacity: .35, letterSpacing: '.2em' }}>
            tap anywhere
          </AnimatedText>
        </AnimatedSection>

        <WaveDivider flip color="#0e0404" />

        {/* ── S3: DARK ROMANTIC ── */}
        <AnimatedSection
          className="sec-3"
          id="s3"
          bgId="bgr3"
          onClick={(e) => boom(e, 'rose')}
          particleType="petal"
          particleCount={16}
          particleColors={['#8b2a2a', '#c0463c', '#e8897a', '#f2c4b8']}
        >
          <AnimatedText className="hero" delay={0}>
            &ldquo;Every moment with you feels like home&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.3}>
            &ldquo;The small moments, the silly ones, the ones no one else would understand&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.5}>
            &ldquo;Those are my favorite chapters of my life&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.7}>
            &ldquo;And you&rsquo;re the reason I love the story&rdquo;
          </AnimatedText>
          <div className="div">✦</div>
          <AnimatedText delay={1} extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>
            tap anywhere
          </AnimatedText>
        </AnimatedSection>

        {/* ── S4: GOLDEN ── */}
        <AnimatedSection
          className="sec-4"
          id="s4"
          bgId="bgr4"
          onClick={(e) => boom(e, 'stars')}
          particleType="sparkle"
          particleCount={20}
          particleColors={['#c9995a', '#e8c98a', '#f2c4b8', '#fff9f6', '#e8897a']}
        >
          <AnimatedText className="hero" delay={0}>
            &ldquo;You are my favorite person in every version of every story&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.3}>
            &ldquo;In every timeline, every lifetime, every universe —&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.5}>
            &ldquo;I&rsquo;d find you. I&rsquo;d choose you.&rdquo;
          </AnimatedText>
          <ShimmerText extraStyle={{ fontSize: 'clamp(1.6rem, 4.2vw, 2.6rem)' }}>
            &ldquo;Again and again and again.&rdquo;
          </ShimmerText>
          <div className="div">✦</div>
          <AnimatedText delay={1} extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>
            tap anywhere
          </AnimatedText>
        </AnimatedSection>

        {/* ── S5: ARABIC NIGHT ── */}
        <AnimatedSection
          className="sec-5"
          id="s5"
          bgId="bgr5"
          onClick={(e) => boom(e, 'moon')}
          particleType="star"
          particleCount={25}
          particleColors={['#7070a0', '#a090b8', '#c9995a', '#e8c98a', '#fff9f6']}
        >
          {/* Moon decoration */}
          <div className="moon-deco">🌙</div>

          <AnimatedText className="hero arabic" delay={0}>
            الماضى اية الماضى مين نسيت ف حضنك إلى شوفتة من السنين ♥
          </AnimatedText>
          <div className="div">✦</div>
          <AnimatedText className="arabic" delay={0.4}>
            انت قمري والقاف عين وإذا غابت العين ابدلنا الميم بالدال ♥
          </AnimatedText>
          <div className="div">✦</div>
          <AnimatedText className="arabic" delay={0.7}>
            ويكفينى من هذا العمر انى حظيت بك ♥
          </AnimatedText>
          <div className="div">✦</div>
          <AnimatedText delay={1} extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>
            tap anywhere
          </AnimatedText>
        </AnimatedSection>

        {/* ── S6: FINALE ── */}
        <AnimatedSection
          className="sec-6"
          id="s6"
          bgId="bgr6"
          onClick={(e) => boom(e, 'cake')}
          particleType="heart"
          particleCount={22}
          particleColors={['#c0463c', '#e8897a', '#f2c4b8', '#c9995a', '#e8c98a']}
        >
          <ShimmerText extraStyle={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontStyle: 'italic' }}>
            &ldquo;Here&rsquo;s to you, here&rsquo;s to us&rdquo;
          </ShimmerText>
          <div className="div">✦</div>
          <AnimatedText delay={0.3}>
            &ldquo;To every laugh we shared, every moment we lived&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.5}>
            &ldquo;To all the birthdays yet to come —&rdquo;
          </AnimatedText>
          <AnimatedText delay={0.7}>
            &ldquo;may I spend every single one by your side&rdquo;
          </AnimatedText>
          <div className="div">✦</div>
          <ShimmerText extraStyle={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontStyle: 'italic' }}>
            &ldquo;Happy Birthday, my love&rdquo;
          </ShimmerText>
          <AnimatedText delay={1} extraStyle={{ fontSize: '.78rem', opacity: '.4', letterSpacing: '.2em', marginTop: '.8rem' }}>
            tap anywhere
          </AnimatedText>
        </AnimatedSection>

        {/* Footer */}
        <footer className="site-footer">
          <div className="roses">🌹 🌸 🌹</div>
          <p>Made with love</p>
        </footer>
      </div>

      {/* Hidden YouTube player */}
      <div id="ytp" style={{ position: 'fixed', bottom: -9999, left: -9999, width: 1, height: 1 }} />
    </>
  )
}
