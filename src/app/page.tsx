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
            <span className="sealed-label-text">اضغط بلطف ✦</span>
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
   PARTICLE HEART CANVAS
   Sparkling beads converge to form a big heart
════════════════════════════ */
function ParticleHeartCanvas({ active, onComplete }: { active: boolean; onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const completedRef = useRef(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (!active) return
    completedRef.current = false

    const canvas = canvasRef.current
    if (!canvas) return

    const W = window.innerWidth
    const H = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    // ── Heart parametric curve ──
    const heartCx = W / 2, heartCy = H / 2 + 10
    const hScale = Math.min(W, H) / 36

    function heartX(t: number) { return 16 * Math.pow(Math.sin(t), 3) }
    function heartY(t: number) { return -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) }

    // ── Bead colors — gold, rose-gold, warm white, ruby ──
    const beadColors = [
      '#e8c98a', '#c9995a', '#f2c4b8', '#e8897a',
      '#f7e0d0', '#d4a574', '#ffffff', '#c0463c',
      '#f0d0a0', '#dbb870',
    ]

    type Bead = {
      sx: number; sy: number
      tx: number; ty: number
      size: number; color: string
      baseAlpha: number
      trail: { x: number; y: number; a: number }[]
      delay: number
      driftAngle: number; driftDist: number
    }

    const beads: Bead[] = []

    // Outline beads (dense, on the heart curve) — use full circle
    const outlineCount = 90
    for (let i = 0; i < outlineCount; i++) {
      const t = (i / outlineCount) * Math.PI * 2
      const hx = heartX(t) * hScale + heartCx
      const hy = heartY(t) * hScale + heartCy
      const jitter = 4
      const color = beadColors[Math.floor(Math.random() * beadColors.length)]
      beads.push({
        sx: Math.random() * W, sy: Math.random() * H,
        tx: hx + (Math.random() - .5) * jitter, ty: hy + (Math.random() - .5) * jitter,
        size: 3 + Math.random() * 4, color,
        baseAlpha: 0.85 + Math.random() * 0.15,
        trail: [],
        delay: i * 12 + Math.random() * 60,
        driftAngle: Math.random() * Math.PI * 2,
        driftDist: 80 + Math.random() * 200,
      })
    }

    // Fill beads (inside heart, denser)
    const fillCount = 150
    for (let i = 0; i < fillCount; i++) {
      const t = Math.random() * Math.PI * 2
      const r = Math.random() * 0.85
      const hx = heartX(t) * r * hScale + heartCx
      const hy = heartY(t) * r * hScale + heartCy
      const jitter = 6
      const color = beadColors[Math.floor(Math.random() * beadColors.length)]
      beads.push({
        sx: Math.random() * W, sy: Math.random() * H,
        tx: hx + (Math.random() - .5) * jitter, ty: hy + (Math.random() - .5) * jitter,
        size: 2 + Math.random() * 3.5, color,
        baseAlpha: 0.6 + Math.random() * 0.35,
        trail: [],
        delay: outlineCount * 12 + i * 8 + Math.random() * 40,
        driftAngle: Math.random() * Math.PI * 2,
        driftDist: 50 + Math.random() * 180,
      })
    }

    // Sparkle beads (scattered just outside heart)
    const sparkleCount = 40
    for (let i = 0; i < sparkleCount; i++) {
      const t = Math.random() * Math.PI * 2
      const r = 1.02 + Math.random() * 0.25
      const hx = heartX(t) * r * hScale + heartCx
      const hy = heartY(t) * r * hScale + heartCy
      const color = beadColors[Math.floor(Math.random() * 4)]
      beads.push({
        sx: Math.random() * W, sy: Math.random() * H,
        tx: hx + (Math.random() - .5) * 15, ty: hy + (Math.random() - .5) * 15,
        size: 1.5 + Math.random() * 2.5, color,
        baseAlpha: 0.3 + Math.random() * 0.3,
        trail: [],
        delay: outlineCount * 12 + fillCount * 8 + i * 15 + Math.random() * 30,
        driftAngle: Math.random() * Math.PI * 2,
        driftDist: 100 + Math.random() * 250,
      })
    }

    // ── Animation timing ──
    const gatherDuration = 2200
    const maxDelay = Math.max(...beads.map(b => b.delay))
    const convergeEnd = maxDelay + gatherDuration + 300
    const pulseStart = convergeEnd
    const pulseDuration = 2400
    const dissolveStart = pulseStart + pulseDuration
    const dissolveDuration = 3000
    const totalDuration = dissolveStart + dissolveDuration

    // ── Easing ──
    function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4) }
    function easeInQuad(t: number) { return t * t }

    // ── Pulse: 3 heartbeats ──
    function getHeartScale(elapsed: number): number {
      if (elapsed < 0) return 1
      if (elapsed < 300) return 1 + 0.10 * Math.sin((elapsed / 300) * Math.PI)
      if (elapsed < 650) return 1
      if (elapsed < 950) return 1 + 0.16 * Math.sin(((elapsed - 650) / 300) * Math.PI)
      if (elapsed < 1300) return 1
      if (elapsed < 1550) return 1 + 0.06 * Math.sin(((elapsed - 1300) / 250) * Math.PI)
      return 1
    }

    // ── Animation loop ──
    let animId = 0
    let startTime = 0

    function animate(now: number) {
      if (!startTime) startTime = now
      const elapsed = now - startTime

      ctx.clearRect(0, 0, W, H)

      // ── Background: dark vignette ──
      const bgAlpha = Math.min(1, elapsed / 1200) * Math.max(0, 1 - Math.max(0, (elapsed - dissolveStart) / 1500))
      if (bgAlpha > 0.001) {
        const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7)
        bgGrad.addColorStop(0, `rgba(20, 8, 8, ${bgAlpha * 0.8})`)
        bgGrad.addColorStop(1, `rgba(8, 2, 2, ${bgAlpha})`)
        ctx.fillStyle = bgGrad
        ctx.fillRect(0, 0, W, H)
      }

      // ── Glow behind heart ──
      const pulseElapsed = elapsed - pulseStart
      const convergence = Math.min(1, Math.max(0, (elapsed - 500) / convergeEnd))
      let glowIntensity = convergence * 0.35
      if (pulseElapsed >= 0 && pulseElapsed < 300) glowIntensity += 0.25
      else if (pulseElapsed >= 650 && pulseElapsed < 950) glowIntensity += 0.35
      else if (pulseElapsed >= 1300 && pulseElapsed < 1550) glowIntensity += 0.15
      const dissolveElapsed = elapsed - dissolveStart
      if (dissolveElapsed > 0) glowIntensity *= Math.max(0, 1 - dissolveElapsed / 1500)

      if (glowIntensity > 0.005) {
        const glowSize = Math.min(W, H) * 0.45 * convergence
        if (glowSize > 1) {
          const glowGrad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, glowSize)
          glowGrad.addColorStop(0, `rgba(232, 137, 122, ${glowIntensity})`)
          glowGrad.addColorStop(0.3, `rgba(201, 153, 90, ${glowIntensity * 0.5})`)
          glowGrad.addColorStop(0.6, `rgba(192, 70, 60, ${glowIntensity * 0.15})`)
          glowGrad.addColorStop(1, 'rgba(139, 42, 42, 0)')
          ctx.fillStyle = glowGrad
          ctx.fillRect(0, 0, W, H)
        }
      }

      // ── Heart scale (pulse) ──
      const heartScale = pulseElapsed >= 0 ? getHeartScale(pulseElapsed) : 1

      // ── Draw beads ──
      for (let i = 0; i < beads.length; i++) {
        const b = beads[i]
        const beadElapsed = elapsed - b.delay

        if (beadElapsed < 0) {
          const fadeIn = Math.min(1, elapsed / 800)
          const alpha = fadeIn * b.baseAlpha * 0.4
          if (alpha < 0.01) continue
          ctx.save()
          ctx.globalAlpha = alpha
          ctx.fillStyle = b.color
          ctx.beginPath()
          ctx.arc(b.sx, b.sy, b.size * 0.6, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
          continue
        }

        const gatherProgress = Math.min(1, beadElapsed / gatherDuration)
        const easedGather = easeOutQuart(gatherProgress)

        let bx = b.sx + (b.tx - b.sx) * easedGather
        let by = b.sy + (b.ty - b.sy) * easedGather

        // Pulse after converged
        if (gatherProgress > 0.9) {
          const pulseInfluence = Math.min(1, (gatherProgress - 0.9) / 0.1)
          const px = heartCx + (b.tx - heartCx) * heartScale
          const py = heartCy + (b.ty - heartCy) * heartScale
          bx = bx + (px - bx) * pulseInfluence
          by = by + (py - by) * pulseInfluence
        }

        // Dissolve
        let dissolveAlpha = 1
        if (dissolveElapsed > 0) {
          const stagger = i * 8
          const actualDissolve = dissolveElapsed - stagger
          if (actualDissolve > 0) {
            const dp = Math.min(1, actualDissolve / dissolveDuration)
            dissolveAlpha = 1 - easeInQuad(dp)
            const drift = easeOutQuart(Math.min(1, dp * 1.3))
            bx += Math.cos(b.driftAngle) * b.driftDist * drift
            by += Math.sin(b.driftAngle) * b.driftDist * drift - 20 * drift
          }
        }

        if (dissolveAlpha < 0.01) continue
        const alpha = b.baseAlpha * dissolveAlpha
        if (alpha < 0.01) continue

        // Trail during convergence
        if (gatherProgress < 1 && gatherProgress > 0.05) {
          b.trail.push({ x: bx, y: by, a: alpha * 0.3 })
          if (b.trail.length > 3) b.trail.shift()
          b.trail.forEach((pt, ti) => {
            const trailAlpha = pt.a * (ti / b.trail.length) * 0.4
            if (trailAlpha > 0.01) {
              ctx.save()
              ctx.globalAlpha = trailAlpha
              ctx.fillStyle = b.color
              ctx.beginPath()
              ctx.arc(pt.x, pt.y, b.size * 0.4, 0, Math.PI * 2)
              ctx.fill()
              ctx.restore()
            }
          })
        } else {
          b.trail = []
        }

        // Sparkle twinkle after converged
        let twinkle = 1
        if (gatherProgress >= 1 && dissolveElapsed < 0) {
          twinkle = 0.7 + 0.3 * Math.sin(elapsed * 0.005 + i * 1.7)
        }

        // Draw bead: glow → body → highlight
        ctx.save()
        // Soft glow
        ctx.globalAlpha = alpha * twinkle * 0.2
        ctx.fillStyle = b.color
        ctx.beginPath()
        ctx.arc(bx, by, b.size * 2.5, 0, Math.PI * 2)
        ctx.fill()
        // Main bead
        ctx.globalAlpha = alpha * twinkle
        ctx.fillStyle = b.color
        ctx.beginPath()
        ctx.arc(bx, by, b.size, 0, Math.PI * 2)
        ctx.fill()
        // Center highlight
        ctx.fillStyle = '#ffffff'
        ctx.globalAlpha = alpha * twinkle * 0.6
        ctx.beginPath()
        ctx.arc(bx, by, b.size * 0.35, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Transition to next stage
      if (elapsed >= totalDuration - 600 && !completedRef.current) {
        completedRef.current = true
        onCompleteRef.current()
      }

      if (elapsed < totalDuration) {
        animId = requestAnimationFrame(animate)
      }
    }

    // Start animation on next frame to ensure canvas is painted
    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
    }
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
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

  const handleHeartComplete = useCallback(() => {
    setStage('text')
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

  // ═══ PARTICLE HEART — handled by ParticleHeartCanvas component ═══

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

      {/* ══ STAGE 2: BEAD HEART ══ — sparkling beads converge to form a heart */}
      <div className={`stage ${stage === 'music' || stage === 'gift' ? 'hidden' : stage === 'roses' ? 'entering' : 'gone'}`} id="stRoses" style={{ zIndex: 500 }}>
        <ParticleHeartCanvas active={stage === 'roses'} onComplete={handleHeartComplete} />
      </div>

      {/* ══ STAGE 3: TEXT ══ */}
      <div className={`stage ${['music', 'gift', 'roses'].includes(stage) ? 'hidden' : stage === 'text' ? 'entering' : 'gone'}`} id="stText" style={{ zIndex: 500 }}>
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
      <div className={`stage ${['music', 'gift', 'roses', 'text'].includes(stage) ? 'hidden' : stage === 'date' ? 'entering' : 'gone'}`} id="stDate" style={{ zIndex: 500 }}>
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
          <AnimatedText delay={0.8} revealed={revealed.s1} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap gently</AnimatedText>
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
          <AnimatedText delay={0.8} revealed={revealed.s2} variant="blurIn" className="sec2-text" extraStyle={{ fontSize: '.78rem', opacity: .35, letterSpacing: '.2em' }}>tap gently</AnimatedText>
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
          <AnimatedText delay={0.8} revealed={revealed.s3} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap gently</AnimatedText>
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
          <AnimatedText delay={0.8} revealed={revealed.s4} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap gently</AnimatedText>
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

          <AnimatedText delay={1.4} revealed={revealed.s5} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap gently</AnimatedText>
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
          <AnimatedText delay={1.1} revealed={revealed.s6} variant="blurIn" extraStyle={{ fontSize: '.78rem', opacity: '.4', letterSpacing: '.2em', marginTop: '.8rem' }}>tap gently</AnimatedText>
        </AnimatedSection>

        <footer className="site-footer">
          <div className="roses">🌹 🌸 🌹</div>
          <p>Made with love</p>
        </footer>
      </div>
    </>
  )
}
