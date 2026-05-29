'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
   DOM EFFECT HELPERS
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

function createExplosion(x: number, y: number, colors: string[], count = 55) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.8
    const velocity = 120 + Math.random() * 320
    const dx = Math.cos(angle) * velocity
    const dy = Math.sin(angle) * velocity - Math.random() * 80
    const color = colors[Math.floor(Math.random() * colors.length)]
    const size = 3 + Math.random() * 9
    const isRect = Math.random() > 0.4
    el.className = 'confetti-p'
    el.style.cssText = `
      left:${x}px;top:${y}px;
      width:${size}px;height:${isRect ? size * 2.5 : size}px;
      background:${color};
      border-radius:${isRect ? '2px' : '50%'};
      --dx:${dx}px;--dy:${dy}px;--rot:${(Math.random() - .5) * 1080}deg;
      animation-delay:${Math.random() * .12}s;
    `
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 2200)
  }
}

function createFlash(color: string) {
  const el = document.createElement('div')
  el.className = 'reveal-flash'
  el.style.background = color
  document.body.appendChild(el)
  requestAnimationFrame(() => {
    el.classList.add('active')
    setTimeout(() => {
      el.classList.remove('active')
      setTimeout(() => el.remove(), 600)
    }, 250)
  })
}

function triggerShake() {
  const main = document.getElementById('main')
  if (main) {
    main.classList.add('screen-shake')
    setTimeout(() => main.classList.remove('screen-shake'), 600)
  }
}

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
   FLOATING PARTICLES
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
            left: `${p.x}%`, top: `${p.startY}%`,
            animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
            width: p.size, height: p.size, color: p.color, '--drift': `${p.drift}px`,
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
   SEALED REVEAL CONFIG
════════════════════════════ */
const SEAL_CONFIG: Record<string, {
  icon: string; color: string; boomType: string
  ringColor1: string; ringColor2: string
  glowGradient: string; flashColor: string
  confettiColors: string[]; particles: string[]
}> = {
  gift: { icon: '🎁', color: '#e8897a', boomType: 'teddy', ringColor1: 'rgba(232,137,122,0.25)', ringColor2: 'rgba(201,153,90,0.15)', glowGradient: 'radial-gradient(circle, rgba(232,137,122,0.18) 0%, rgba(192,70,60,0.06) 40%, transparent 65%)', flashColor: 'rgba(232,137,122,0.35)', confettiColors: ['#e8897a', '#f2c4b8', '#c0463c', '#fff9f6', '#c9995a'], particles: ['🎀', '✨', '💝', '🤍', '✦'] },
  heart: { icon: '♥', color: '#c0463c', boomType: 'heart', ringColor1: 'rgba(192,70,60,0.3)', ringColor2: 'rgba(232,137,122,0.18)', glowGradient: 'radial-gradient(circle, rgba(192,70,60,0.2) 0%, rgba(139,42,42,0.06) 40%, transparent 65%)', flashColor: 'rgba(192,70,60,0.3)', confettiColors: ['#c0463c', '#e8897a', '#f2c4b8', '#8b2a2a', '#fff9f6'], particles: ['💗', '💕', '❤️', '🤍', '♥'] },
  rose: { icon: '🌹', color: '#e8897a', boomType: 'rose', ringColor1: 'rgba(232,137,122,0.25)', ringColor2: 'rgba(139,42,42,0.15)', glowGradient: 'radial-gradient(circle, rgba(139,42,42,0.2) 0%, rgba(107,26,26,0.06) 40%, transparent 65%)', flashColor: 'rgba(232,137,122,0.3)', confettiColors: ['#8b2a2a', '#c0463c', '#e8897a', '#f2c4b8'], particles: ['🌸', '🌺', '🌷', '✿', '❀'] },
  star: { icon: '✦', color: '#c9995a', boomType: 'stars', ringColor1: 'rgba(201,153,90,0.3)', ringColor2: 'rgba(232,201,138,0.18)', glowGradient: 'radial-gradient(circle, rgba(201,153,90,0.22) 0%, rgba(201,153,90,0.06) 40%, transparent 65%)', flashColor: 'rgba(201,153,90,0.35)', confettiColors: ['#c9995a', '#e8c98a', '#f2c4b8', '#fff9f6', '#e8897a'], particles: ['⭐', '🌟', '✨', '💫', '✦'] },
  moon: { icon: '🌙', color: '#a090b8', boomType: 'moon', ringColor1: 'rgba(160,144,184,0.25)', ringColor2: 'rgba(201,153,90,0.12)', glowGradient: 'radial-gradient(circle, rgba(160,144,184,0.18) 0%, rgba(112,112,160,0.06) 40%, transparent 65%)', flashColor: 'rgba(160,144,184,0.3)', confettiColors: ['#7070a0', '#a090b8', '#c9995a', '#e8c98a', '#fff9f6'], particles: ['⭐', '🌟', '✨', '💫', '🌙'] },
  cake: { icon: '🎂', color: '#e8897a', boomType: 'cake', ringColor1: 'rgba(232,137,122,0.25)', ringColor2: 'rgba(201,153,90,0.18)', glowGradient: 'radial-gradient(circle, rgba(192,70,60,0.2) 0%, rgba(201,153,90,0.06) 40%, transparent 65%)', flashColor: 'rgba(232,137,122,0.35)', confettiColors: ['#c0463c', '#e8897a', '#f2c4b8', '#c9995a', '#e8c98a'], particles: ['🎉', '🎊', '🎈', '✨', '🥂'] },
}

/* ════════════════════════════
   SEALED REVEAL COMPONENT
════════════════════════════ */
function SealedReveal({ type, revealed, onReveal }: { type: string; revealed: boolean; onReveal: (e: React.MouseEvent) => void }) {
  const config = SEAL_CONFIG[type]
  const ref = useRef<HTMLDivElement>(null)
  return (
    <AnimatePresence>
      {!revealed && (
        <motion.div ref={ref} className="sealed-reveal" onClick={onReveal}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: [1, 1.4, 0], opacity: [1, 1, 0], filter: ['blur(0px)', 'blur(0px)', 'blur(25px)'] }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="sealed-ring-container ring-outer" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <svg viewBox="0 0 320 320" className="sealed-ring-svg">
              <circle cx="160" cy="160" r="150" fill="none" stroke={config.ringColor1} strokeWidth="1" strokeDasharray="12 8" />
              <circle cx="160" cy="160" r="140" fill="none" stroke={config.ringColor2} strokeWidth="0.5" strokeDasharray="3 10" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                return <circle key={i} cx={160 + Math.cos(rad) * 150} cy={160 + Math.sin(rad) * 150} r="2" fill={config.ringColor1} />
              })}
            </svg>
          </motion.div>
          <motion.div className="sealed-ring-container ring-inner" animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
            <svg viewBox="0 0 320 320" className="sealed-ring-svg">
              <circle cx="160" cy="160" r="110" fill="none" stroke={config.ringColor2} strokeWidth="0.8" strokeDasharray="6 12" />
              <circle cx="160" cy="160" r="100" fill="none" stroke={config.ringColor1} strokeWidth="0.4" strokeDasharray="2 8" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                return <circle key={i} cx={160 + Math.cos(rad) * 110} cy={160 + Math.sin(rad) * 110} r="1.5" fill={config.ringColor2} />
              })}
            </svg>
          </motion.div>
          <motion.div className="sealed-icon" style={{ color: config.color }} animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            {config.icon}
          </motion.div>
          <div className="sealed-mini-particles">
            {config.particles.map((p, i) => (
              <motion.span key={i} className="sealed-mini-p" style={{ '--angle': `${(i / config.particles.length) * 360}deg`, '--distance': `${80 + Math.random() * 40}px`, color: config.color } as React.CSSProperties}
                animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1, 0.5], rotate: [0, 180] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
              >{p}</motion.span>
            ))}
          </div>
          <motion.div className="sealed-label" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
            <span className="sealed-label-line" />
            <span className="sealed-label-text">tap to reveal</span>
            <span className="sealed-label-line" />
          </motion.div>
          <div className="sealed-glow" style={{ background: config.glowGradient }} />
          <motion.div className="sealed-aura" style={{ borderColor: config.color }} animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0, 0.15] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="sealed-aura sealed-aura-2" style={{ borderColor: config.color }} animate={{ scale: [1, 1.35, 1], opacity: [0.08, 0, 0.08] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ════════════════════════════
   ANIMATED TEXT
════════════════════════════ */
function AnimatedText({ children, className = '', delay = 0, extraStyle, revealed = true, variant = 'slideUp' }: {
  children: React.ReactNode; className?: string; delay?: number; extraStyle?: React.CSSProperties; revealed?: boolean
  variant?: 'slideUp' | 'scaleIn' | 'blurIn' | 'slideLeft' | 'slideRight' | 'zoomIn'
}) {
  const variants = {
    slideUp: { hidden: { opacity: 0, y: 50, filter: 'blur(6px)' }, visible: { opacity: extraStyle?.opacity ?? 1, y: 0, filter: 'blur(0px)' } },
    scaleIn: { hidden: { opacity: 0, scale: 0.5, filter: 'blur(4px)' }, visible: { opacity: extraStyle?.opacity ?? 1, scale: 1, filter: 'blur(0px)' } },
    blurIn: { hidden: { opacity: 0, filter: 'blur(16px)' }, visible: { opacity: extraStyle?.opacity ?? 1, filter: 'blur(0px)' } },
    slideLeft: { hidden: { opacity: 0, x: 60, filter: 'blur(4px)' }, visible: { opacity: extraStyle?.opacity ?? 1, x: 0, filter: 'blur(0px)' } },
    slideRight: { hidden: { opacity: 0, x: -60, filter: 'blur(4px)' }, visible: { opacity: extraStyle?.opacity ?? 1, x: 0, filter: 'blur(0px)' } },
    zoomIn: { hidden: { opacity: 0, scale: 2, filter: 'blur(10px)' }, visible: { opacity: extraStyle?.opacity ?? 1, scale: 1, filter: 'blur(0px)' } },
  }
  const v = variants[variant]
  return (
    <motion.span className={`ln ${className}`} style={extraStyle} initial={v.hidden} animate={revealed ? v.visible : v.hidden}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.span>
  )
}

function ShimmerText({ children, className = '', extraStyle, revealed = true, delay = 0 }: {
  children: React.ReactNode; className?: string; extraStyle?: React.CSSProperties; revealed?: boolean; delay?: number
}) {
  return (
    <motion.span className={`ln shimmer-text ${className}`} style={extraStyle}
      initial={{ opacity: 0, y: 50, scale: 0.85 }}
      animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.85 }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.span>
  )
}

function RevealDivider({ revealed = true, delay = 0, className = '' }: { revealed?: boolean; delay?: number; className?: string }) {
  return (
    <motion.div className={`div ${className}`} initial={{ opacity: 0, scale: 0.3 }}
      animate={revealed ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >✦</motion.div>
  )
}

/* ════════════════════════════
   ANIMATED SECTION WRAPPER
════════════════════════════ */
function AnimatedSection({ children, className, id, bgId, onClick, particleType = 'petal', particleCount = 12, particleColors, sealType, revealed, onReveal }: {
  children: React.ReactNode; className: string; id: string; bgId: string; onClick?: (e: React.MouseEvent) => void
  particleType?: 'petal' | 'star' | 'heart' | 'sparkle'; particleCount?: number; particleColors?: string[]
  sealType: string; revealed: boolean; onReveal: (e: React.MouseEvent) => void
}) {
  const config = SEAL_CONFIG[sealType]
  const handleReveal = useCallback((e: React.MouseEvent) => {
    createExplosion(e.clientX, e.clientY, config.confettiColors, 60)
    createFlash(config.flashColor)
    boom(e, config.boomType)
    triggerShake()
    onReveal(e)
  }, [config, onReveal])

  return (
    <motion.section className={`sec ${className}`} id={id}>
      <div className="bg-roses" id={bgId} />
      <FloatingParticles count={particleCount} type={particleType} colors={particleColors} />
      <div className="deco deco-1" /><div className="deco deco-2" />
      <div className="sec-glow" />
      {onClick && revealed && <div className="czone" onClick={onClick} />}
      <SealedReveal type={sealType} revealed={revealed} onReveal={handleReveal} />
      <div className="sec-inner">{children}</div>
    </motion.section>
  )
}

function WaveDivider({ flip = false, color = '#0e0404' }: { flip?: boolean; color?: string }) {
  return (
    <div className={`wave-divider ${flip ? 'flip' : ''}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill={color} />
      </svg>
    </div>
  )
}

function NavDots() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const sections = document.querySelectorAll('.sec')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { const idx = Array.from(sections).indexOf(entry.target); if (idx >= 0) setActive(idx) } })
    }, { threshold: 0.5 })
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  const scrollTo = (idx: number) => { document.querySelectorAll('.sec')[idx]?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <div className="nav-dots">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <button key={i} className={`nav-dot ${active === i ? 'active' : ''}`} onClick={() => scrollTo(i)} aria-label={`Go to section ${i + 1}`} />
      ))}
    </div>
  )
}

/* ════════════════════════════
   MAIN PAGE COMPONENT
════════════════════════════ */
export default function Home() {
  const [stage, setStage] = useState<'music' | 'gift' | 'roses' | 'text' | 'date' | 'main'>('music')
  const [giftShaking, setGiftShaking] = useState(false)
  const [giftOpened, setGiftOpened] = useState(false)
  const [wordVisible, setWordVisible] = useState({ w1: false, w2: false, myb: false })
  const [heartDrawn, setHeartDrawn] = useState(false)
  const [dateVisible, setDateVisible] = useState(false)
  const [dateSubVisible, setDateSubVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)
  const [musicAccepted, setMusicAccepted] = useState(false)

  const [revealed, setRevealed] = useState({ s1: false, s2: false, s3: false, s4: false, s5: false, s6: false })

  const cursorRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)

  const handleReveal = useCallback((sectionKey: string, e: React.MouseEvent) => {
    setRevealed(prev => ({ ...prev, [sectionKey]: true }))
  }, [])

  // ═══ MUSIC CONSENT ═══
  const acceptMusic = useCallback(() => {
    setMusicAccepted(true)
    setMusicPlaying(true)
    setStage('gift')
  }, [])

  const declineMusic = useCallback(() => {
    setMusicAccepted(false)
    setStage('gift')
  }, [])

  // ═══ HTML5 AUDIO ═══
  useEffect(() => {
    if (!musicAccepted || typeof window === 'undefined') return
    const audio = new Audio('/song.mp3')
    audio.loop = true
    audio.volume = 0.5
    audio.play().then(() => {
      setMusicPlaying(true)
    }).catch(() => {
      // Autoplay blocked — user needs to interact first
      setMusicPlaying(false)
    })
    audioRef.current = audio
    return () => { audio.pause(); audioRef.current = null }
  }, [musicAccepted])

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return
    if (musicPlaying) { audioRef.current.pause(); setMusicPlaying(false) }
    else { audioRef.current.play().then(() => setMusicPlaying(true)).catch(() => {}) }
  }, [musicPlaying])

  // ═══ LENIS SMOOTH SCROLL ═══
  useEffect(() => {
    if (!mainVisible) return
    const lenis = new Lenis({ duration: 1.8, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), touchMultiplier: 2, infinite: false })
    lenisRef.current = lenis
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => { lenis.destroy(); lenisRef.current = null }
  }, [mainVisible])

  // ═══ CUSTOM CURSOR ═══
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) { cursorRef.current.style.left = (e.clientX - 9) + 'px'; cursorRef.current.style.top = (e.clientY - 9) + 'px' }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // ═══ GIFT OPEN ═══
  const openGift = useCallback(() => {
    if (stage !== 'gift') return
    let s = 0
    const doShake = () => {
      setGiftShaking(true)
      setTimeout(() => {
        setGiftShaking(false)
        s++
        if (s < 3) {
          setTimeout(doShake, 220)
        } else {
          // Gift opens — lid flies off, then roses burst
          setGiftOpened(true)
          setTimeout(() => setStage('roses'), 900)
        }
      }, 550)
    }
    doShake()
  }, [stage])

  // ═══ ROSE BURST — FROM GIFT CENTER ═══
  useEffect(() => {
    if (stage !== 'roses') return
    const container = document.getElementById('roseCanvasContainer')
    if (!container) return
    const W = window.innerWidth, H = window.innerHeight

    const colors = [
      ['#c0463c', '#6b1a1a'], ['#e8897a', '#b03030'], ['#f2c4b8', '#c0463c'],
      ['#d4706a', '#8b2a2a'], ['#e8a090', '#a03030'], ['#f7d6cf', '#d4706a'],
      ['#b03030', '#6b1a1a'], ['#c9995a', '#6b3a1a'],
    ]

    const total = 90
    let count = 0
    const cx = W / 2, cy = H / 2 + 20

    // Generate positions covering the screen
    const positions = []
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 12; col++) {
        const x = (col / 11) * W + (Math.random() - .5) * (W / 11)
        const y = (row / 9) * H + (Math.random() - .5) * (H / 10)
        const sz = 40 + Math.random() * 110
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        positions.push({ x, y, sz, dist })
      }
    }
    // Sort by distance from center (wave from center outward)
    positions.sort((a, b) => a.dist - b.dist)

    positions.slice(0, total).forEach((p, i) => {
      const delay = (p.dist / Math.sqrt(cx * cx + cy * cy)) * 1600 + Math.random() * 150
      setTimeout(() => {
        const [pc, cc] = colors[Math.floor(Math.random() * colors.length)]
        // Use HTML div instead of SVG for reliable CSS transforms
        const el = document.createElement('div')
        el.style.cssText = `
          position: absolute;
          left: ${p.x}px; top: ${p.y}px;
          width: ${p.sz}px; height: ${p.sz}px;
          transform: translate(${cx - p.x}px, ${cy - p.y}px) scale(0.1);
          opacity: 0;
          transition: opacity .5s ease, transform .7s cubic-bezier(.16,1,.3,1);
          pointer-events: none;
          z-index: 1;
        `
        el.innerHTML = `<svg width="${p.sz}" height="${p.sz}" viewBox="0 0 ${p.sz} ${p.sz}">${roseSVG(p.sz / 2, p.sz / 2, p.sz, pc, cc)}</svg>`
        container.appendChild(el)
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.opacity = '1'
          el.style.transform = 'translate(0px, 0px) scale(1)'
        }))
        count++
        if (count >= total) setTimeout(() => setStage('text'), 800)
      }, delay)
    })
  }, [stage])

  // ═══ STAGGER TEXT ═══
  useEffect(() => {
    if (stage !== 'text') return
    const t1 = setTimeout(() => setWordVisible(v => ({ ...v, w1: true })), 150)
    const t2 = setTimeout(() => setWordVisible(v => ({ ...v, w2: true })), 850)
    const t3 = setTimeout(() => { setWordVisible(v => ({ ...v, myb: true })); setTimeout(() => setHeartDrawn(true), 350) }, 1650)
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
      <div id="cursor" ref={cursorRef}><CursorSVG /></div>

      {/* ══ STAGE 0: MUSIC CONSENT ══ */}
      <div className={`stage ${stage !== 'music' ? 'gone' : 'entering'}`} id="stMusic">
        <motion.div
          className="music-consent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="music-consent-icon"
            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🎵
          </motion.div>
          <h2 className="music-consent-title">Allow Music?</h2>
          <p className="music-consent-desc">This experience is better with music</p>
          <div className="music-consent-buttons">
            <button className="music-btn music-accept" onClick={acceptMusic}>
              <span className="music-btn-icon">🎶</span> Yes, play music
            </button>
            <button className="music-btn music-decline" onClick={declineMusic}>
              No, silence
            </button>
          </div>
        </motion.div>
      </div>

      {/* ══ STAGE 1: GIFT ══ */}
      <div className={`stage ${stage === 'gift' ? 'entering' : 'gone'}`} id="stGift" style={{ zIndex: 500 }}>
        <div className={`gift-scene ${giftShaking ? 'shake-it' : ''} ${giftOpened ? 'gift-opened' : ''}`} onClick={!giftOpened ? openGift : undefined}>
          <div className="gift-box-wrapper">
            <GiftBoxSVG />
            {/* Lid flies off when opened */}
            {giftOpened && <div className="gift-lid-fly">🎁</div>}
          </div>
          {/* Glow burst from inside */}
          {giftOpened && <div className="gift-glow-burst" />}
          {!giftOpened && <p className="gift-label">tap to open ✦</p>}
        </div>
      </div>

      {/* ══ STAGE 2: ROSES ══ */}
      <div className={`stage ${stage === 'music' || stage === 'gift' ? 'hidden' : stage === 'roses' ? 'entering' : 'gone'}`} id="stRoses" style={{ zIndex: 500 }}>
        <div id="roseCanvasContainer" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }} />
      </div>

      {/* ══ STAGE 3: TEXT ══ */}
      <div className={`stage ${['music', 'gift', 'roses'].includes(stage) ? 'hidden' : stage === 'text' ? 'entering' : 'gone'}`} id="stText">
        <div className={`wrd ${wordVisible.w1 ? 'in' : ''}`}>Happy</div>
        <div className={`wrd ${wordVisible.w2 ? 'in' : ''}`}>Birthday</div>
        <div className={`myb-row ${wordVisible.myb ? 'in' : ''}`}>
          <svg className="heart-svg-draw" viewBox="0 0 380 130" preserveAspectRatio="xMidYMid meet">
            <path className={`h-path ${heartDrawn ? 'draw' : ''}`} d="M190,112 C100,82 16,54 16,30 C16,9 42,-4 78,14 C108,28 155,58 190,80 C225,58 272,28 302,14 C338,-4 364,9 364,30 C364,54 280,82 190,112 Z" />
          </svg>
          <span className="myb-txt">My B</span>
        </div>
      </div>

      {/* ══ STAGE 4: DATE ══ */}
      <div className={`stage ${['music', 'gift', 'roses', 'text'].includes(stage) ? 'hidden' : stage === 'date' ? 'entering' : 'gone'}`} id="stDate">
        <div className={`date-num ${dateVisible ? 'in' : ''}`}>June 19</div>
        <div className={`date-sub ${dateSubVisible ? 'in' : ''}`}>his special day</div>
      </div>

      <div id="shint" className={scrollHintVisible ? 'in' : ''}>scroll ↓</div>

      {mainVisible && (
        <button className={`music-toggle ${musicPlaying ? 'playing' : ''}`} onClick={toggleMusic} aria-label={musicPlaying ? 'Pause music' : 'Play music'}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {musicPlaying ? (<><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></>) : (<polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />)}
          </svg>
        </button>
      )}

      {mainVisible && <NavDots />}

      {/* ══ MAIN CONTENT ══ */}
      <div id="main" className={mainVisible ? 'in' : ''}>

        {/* S1 */}
        <AnimatedSection className="sec-1" id="s1" bgId="bgr1" onClick={(e) => boom(e, 'teddy')}
          particleType="petal" particleCount={18} particleColors={['#e8897a', '#f2c4b8', '#c0463c', '#fff9f6']}
          sealType="gift" revealed={revealed.s1} onReveal={(e) => handleReveal('s1', e)}
        >
          <AnimatedText className="hero" delay={0} revealed={revealed.s1} variant="slideUp">&ldquo;Happy Birthday, Bishoy&rdquo;</AnimatedText>
          <AnimatedText delay={0.2} revealed={revealed.s1} variant="slideUp">&ldquo;Today the world celebrates you — and so do I&rdquo;</AnimatedText>
          <AnimatedText delay={0.35} revealed={revealed.s1} variant="slideUp">&ldquo;But honestly? Every single day feels like your birthday to me&rdquo;</AnimatedText>
          <AnimatedText delay={0.5} revealed={revealed.s1} variant="slideUp">&ldquo;Because every day with you is a gift I never want to return&rdquo;</AnimatedText>
          <RevealDivider revealed={revealed.s1} delay={0.65} />
          <AnimatedText delay={0.8} revealed={revealed.s1} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</AnimatedText>
        </AnimatedSection>

        <WaveDivider color="#f5ebe4" />

        {/* S2 */}
        <AnimatedSection className="sec-2" id="s2" bgId="bgr2" onClick={(e) => boom(e, 'heart')}
          particleType="heart" particleCount={14} particleColors={['#c0463c', '#e8897a', '#f2c4b8', '#8b2a2a']}
          sealType="heart" revealed={revealed.s2} onReveal={(e) => handleReveal('s2', e)}
        >
          <AnimatedText className="hero sec2-text" delay={0} revealed={revealed.s2} variant="scaleIn">&ldquo;You didn&rsquo;t just walk into my life… you became it&rdquo;</AnimatedText>
          <AnimatedText delay={0.2} revealed={revealed.s2} variant="scaleIn" className="sec2-text">&ldquo;Before you, I didn&rsquo;t know that someone could feel like home&rdquo;</AnimatedText>
          <AnimatedText delay={0.35} revealed={revealed.s2} variant="scaleIn" className="sec2-text">&ldquo;Now I can&rsquo;t imagine a single day without your voice, your laugh, your presence&rdquo;</AnimatedText>
          <AnimatedText delay={0.5} revealed={revealed.s2} variant="scaleIn" className="sec2-text">&ldquo;You changed everything — quietly, deeply, forever&rdquo;</AnimatedText>
          <RevealDivider revealed={revealed.s2} delay={0.65} className="sec2-div" />
          <AnimatedText delay={0.8} revealed={revealed.s2} variant="blurIn" className="sec2-text" extraStyle={{ fontSize: '.78rem', opacity: .35, letterSpacing: '.2em' }}>tap anywhere</AnimatedText>
        </AnimatedSection>

        <WaveDivider flip color="#0e0404" />

        {/* S3 */}
        <AnimatedSection className="sec-3" id="s3" bgId="bgr3" onClick={(e) => boom(e, 'rose')}
          particleType="petal" particleCount={16} particleColors={['#8b2a2a', '#c0463c', '#e8897a', '#f2c4b8']}
          sealType="rose" revealed={revealed.s3} onReveal={(e) => handleReveal('s3', e)}
        >
          <AnimatedText className="hero" delay={0} revealed={revealed.s3} variant="blurIn">&ldquo;Every moment with you feels like home&rdquo;</AnimatedText>
          <AnimatedText delay={0.2} revealed={revealed.s3} variant="blurIn">&ldquo;The small moments, the silly ones, the ones no one else would understand&rdquo;</AnimatedText>
          <AnimatedText delay={0.35} revealed={revealed.s3} variant="blurIn">&ldquo;Those are my favorite chapters of my life&rdquo;</AnimatedText>
          <AnimatedText delay={0.5} revealed={revealed.s3} variant="blurIn">&ldquo;And you&rsquo;re the reason I love the story&rdquo;</AnimatedText>
          <RevealDivider revealed={revealed.s3} delay={0.65} />
          <AnimatedText delay={0.8} revealed={revealed.s3} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</AnimatedText>
        </AnimatedSection>

        {/* S4 */}
        <AnimatedSection className="sec-4" id="s4" bgId="bgr4" onClick={(e) => boom(e, 'stars')}
          particleType="sparkle" particleCount={20} particleColors={['#c9995a', '#e8c98a', '#f2c4b8', '#fff9f6', '#e8897a']}
          sealType="star" revealed={revealed.s4} onReveal={(e) => handleReveal('s4', e)}
        >
          <AnimatedText className="hero" delay={0} revealed={revealed.s4} variant="slideLeft">&ldquo;You are my favorite person in every version of every story&rdquo;</AnimatedText>
          <AnimatedText delay={0.2} revealed={revealed.s4} variant="slideLeft">&ldquo;In every timeline, every lifetime, every universe —&rdquo;</AnimatedText>
          <AnimatedText delay={0.35} revealed={revealed.s4} variant="slideLeft">&ldquo;I&rsquo;d find you. I&rsquo;d choose you.&rdquo;</AnimatedText>
          <ShimmerText delay={0.5} revealed={revealed.s4} extraStyle={{ fontSize: 'clamp(1.6rem, 4.2vw, 2.6rem)' }}>&ldquo;Again and again and again.&rdquo;</ShimmerText>
          <RevealDivider revealed={revealed.s4} delay={0.65} />
          <AnimatedText delay={0.8} revealed={revealed.s4} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</AnimatedText>
        </AnimatedSection>

        {/* S5 — Arabic poetry section */}
        <AnimatedSection className="sec-5" id="s5" bgId="bgr5" onClick={(e) => boom(e, 'moon')}
          particleType="star" particleCount={25} particleColors={['#7070a0', '#a090b8', '#c9995a', '#e8c98a', '#fff9f6']}
          sealType="moon" revealed={revealed.s5} onReveal={(e) => handleReveal('s5', e)}
        >
          <motion.div className="moon-deco" initial={{ opacity: 0, scale: 0 }} animate={revealed.s5 ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0 }} transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>🌙</motion.div>

          <AnimatedText className="hero arabic" delay={0} revealed={revealed.s5} variant="slideRight">انت قمري والقاف عين وإذا غابت العين ابدلنا الميم بالدال ♥</AnimatedText>
          <RevealDivider revealed={revealed.s5} delay={0.2} />

          <AnimatedText className="arabic" delay={0.35} revealed={revealed.s5} variant="slideRight">الماضى اية الماضى مين نسيت ف حضنك إلى شوفتة من السنين ♥</AnimatedText>
          <RevealDivider revealed={revealed.s5} delay={0.45} />

          <AnimatedText className="arabic" delay={0.55} revealed={revealed.s5} variant="slideRight">ويكفينى من هذا العمر انى حظيت بك ♥</AnimatedText>
          <RevealDivider revealed={revealed.s5} delay={0.65} />

          <AnimatedText className="arabic" delay={0.8} revealed={revealed.s5} variant="slideRight">متى أذنت دهرك باللقاءِ.. كأنّي لم أوطّئ ماءَ مزنِ ♥</AnimatedText>
          <RevealDivider revealed={revealed.s5} delay={0.9} />

          <AnimatedText className="arabic" delay={1.05} revealed={revealed.s5} variant="slideRight">ليس في الأرض كلّها مكانٌ.. يسعني غير المكانِ الذي أنت فيه ♥</AnimatedText>
          <RevealDivider revealed={revealed.s5} delay={1.15} />

          <AnimatedText className="arabic" delay={1.3} revealed={revealed.s5} variant="slideRight">يا مَن أحبّك قد كفاني.. من الدّهور وجودُ عينِك ♥</AnimatedText>
          <RevealDivider revealed={revealed.s5} delay={1.25} />

          <AnimatedText delay={1.4} revealed={revealed.s5} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</AnimatedText>
        </AnimatedSection>

        {/* S6 */}
        <AnimatedSection className="sec-6" id="s6" bgId="bgr6" onClick={(e) => boom(e, 'cake')}
          particleType="heart" particleCount={22} particleColors={['#c0463c', '#e8897a', '#f2c4b8', '#c9995a', '#e8c98a']}
          sealType="cake" revealed={revealed.s6} onReveal={(e) => handleReveal('s6', e)}
        >
          <ShimmerText delay={0} revealed={revealed.s6} extraStyle={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontStyle: 'italic' }}>&ldquo;Here&rsquo;s to you, here&rsquo;s to us&rdquo;</ShimmerText>
          <RevealDivider revealed={revealed.s6} delay={0.2} />
          <AnimatedText delay={0.35} revealed={revealed.s6} variant="zoomIn">&ldquo;To every laugh we shared, every moment we lived&rdquo;</AnimatedText>
          <AnimatedText delay={0.5} revealed={revealed.s6} variant="zoomIn">&ldquo;To all the birthdays yet to come —&rdquo;</AnimatedText>
          <AnimatedText delay={0.65} revealed={revealed.s6} variant="zoomIn">&ldquo;may I spend every single one by your side&rdquo;</AnimatedText>
          <RevealDivider revealed={revealed.s6} delay={0.75} />
          <ShimmerText delay={0.85} revealed={revealed.s6} extraStyle={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontStyle: 'italic' }}>&ldquo;Happy Birthday, my love&rdquo;</ShimmerText>
          <AnimatedText delay={1.1} revealed={revealed.s6} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: '.4', letterSpacing: '.2em', marginTop: '.8rem' }}>tap anywhere</AnimatedText>
        </AnimatedSection>

        <footer className="site-footer">
          <div className="roses">🌹 🌸 🌹</div>
          <p>Made with love</p>
        </footer>
      </div>
    </>
  )
}
