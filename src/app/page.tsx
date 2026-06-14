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
   CAKE CANVAS
   3-layer birthday cake with candle, blow-out animation
════════════════════════════ */
function CakeCanvas({ active, onComplete }: { active: boolean; onComplete: () => void }) {
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

    // ── Cake dimensions ──
    const cakeCx = W / 2
    const cakeCy = H / 2 + 30
    const scale = Math.min(W, H) / 600

    // Layer definitions: { w, h, color, yOffset from cakeCy }
    const layers = [
      { w: 220 * scale, h: 70 * scale, color: '#7a1f1f', yOffset: 0, label: 'bottom' },
      { w: 170 * scale, h: 60 * scale, color: '#c0463c', yOffset: -70 * scale, label: 'middle' },
      { w: 120 * scale, h: 50 * scale, color: '#f2c4b8', yOffset: -130 * scale, label: 'top' },
    ]

    // Frosting drip data per layer
    type Drip = { x: number; w: number; h: number; layerIdx: number }
    const drips: Drip[] = []
    layers.forEach((layer, li) => {
      const numDrips = 5 + Math.floor(Math.random() * 4)
      for (let i = 0; i < numDrips; i++) {
        drips.push({
          x: cakeCx - layer.w / 2 + (i + 0.5) * (layer.w / numDrips) + (Math.random() - 0.5) * 10 * scale,
          w: (4 + Math.random() * 6) * scale,
          h: (8 + Math.random() * 18) * scale,
          layerIdx: li,
        })
      }
    })

    // Sprinkles per layer
    type Sprinkle = { x: number; y: number; w: number; h: number; color: string; angle: number; layerIdx: number }
    const sprinkleColors = ['#e8897a', '#c9995a', '#e8c98a', '#f7e0d0', '#fff9f6', '#c0463c']
    const sprinkles: Sprinkle[] = []
    layers.forEach((layer, li) => {
      const numSprinkles = 10 + Math.floor(Math.random() * 6)
      for (let i = 0; i < numSprinkles; i++) {
        sprinkles.push({
          x: cakeCx - layer.w / 2 + Math.random() * layer.w,
          y: cakeCy + layer.yOffset - layer.h / 2 + Math.random() * layer.h,
          w: (2 + Math.random() * 4) * scale,
          h: (1 + Math.random() * 2) * scale,
          color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
          angle: Math.random() * Math.PI,
          layerIdx: li,
        })
      }
    })

    // Smoke particles
    type SmokeP = { x: number; y: number; vx: number; vy: number; size: number; alpha: number; life: number }
    const smokeParticles: SmokeP[] = []

    // ── Phase timing (ms) ──
    const P1_START = 0       // Cake assembly
    const P1_END = 3500
    const P2_START = 3500    // Candle + flame
    const P2_END = 4500
    const P3_START = 4500    // "Blow!" + countdown
    const P3_END = 7500
    const P4_START = 7500    // Blow out
    const P4_END = 8500
    const P5_START = 8500    // Fade out
    const P5_END = 9500
    const TOTAL = P5_END

    function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }
    function easeInQuad(t: number) { return t * t }
    function easeOutQuad(t: number) { return 1 - (1 - t) * (1 - t) }

    // ── Animation loop ──
    let animId = 0
    let startTime = 0

    function animate(now: number) {
      if (!startTime) startTime = now
      const elapsed = now - startTime

      ctx.clearRect(0, 0, W, H)

      // ── Global alpha for fade out ──
      let globalAlpha = 1
      if (elapsed >= P5_START) {
        globalAlpha = Math.max(0, 1 - (elapsed - P5_START) / (P5_END - P5_START))
      }
      if (globalAlpha <= 0.001) {
        if (!completedRef.current) {
          completedRef.current = true
          onCompleteRef.current()
        }
        return
      }

      ctx.save()
      ctx.globalAlpha = globalAlpha

      // ── Background ──
      const bgAlpha = Math.min(1, elapsed / 800)
      if (bgAlpha > 0.001) {
        const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7)
        bgGrad.addColorStop(0, `rgba(20, 8, 8, ${bgAlpha * 0.8})`)
        bgGrad.addColorStop(1, `rgba(8, 2, 2, ${bgAlpha})`)
        ctx.fillStyle = bgGrad
        ctx.fillRect(0, 0, W, H)
      }

      // ── Phase 1: Cake Assembly ──
      // Each layer slides in from the sides with staggered timing
      const layerAnimDuration = 700
      const layerDelays = [200, 1000, 1800] // when each layer starts sliding in

      for (let li = 0; li < layers.length; li++) {
        const layer = layers[li]
        const layerElapsed = elapsed - layerDelays[li]
        if (layerElapsed < 0) continue

        const progress = Math.min(1, layerElapsed / layerAnimDuration)
        const eased = easeOutCubic(progress)

        // Slide from side: bottom from left, middle from right, top from left
        const slideDir = li % 2 === 0 ? -1 : 1
        const slideDist = 300 * scale
        const offsetX = slideDir * slideDist * (1 - eased)

        const lx = cakeCx + offsetX
        const ly = cakeCy + layer.yOffset
        const lw = layer.w
        const lh = layer.h
        const radius = 8 * scale

        // Draw layer body
        ctx.save()
        ctx.globalAlpha = globalAlpha * Math.min(1, progress * 2)
        ctx.fillStyle = layer.color
        ctx.beginPath()
        ctx.moveTo(lx - lw / 2 + radius, ly - lh / 2)
        ctx.lineTo(lx + lw / 2 - radius, ly - lh / 2)
        ctx.quadraticCurveTo(lx + lw / 2, ly - lh / 2, lx + lw / 2, ly - lh / 2 + radius)
        ctx.lineTo(lx + lw / 2, ly + lh / 2 - radius)
        ctx.quadraticCurveTo(lx + lw / 2, ly + lh / 2, lx + lw / 2 - radius, ly + lh / 2)
        ctx.lineTo(lx - lw / 2 + radius, ly + lh / 2)
        ctx.quadraticCurveTo(lx - lw / 2, ly + lh / 2, lx - lw / 2, ly + lh / 2 - radius)
        ctx.lineTo(lx - lw / 2, ly - lh / 2 + radius)
        ctx.quadraticCurveTo(lx - lw / 2, ly - lh / 2, lx - lw / 2 + radius, ly - lh / 2)
        ctx.closePath()
        ctx.fill()

        // Highlight on top edge
        ctx.fillStyle = 'rgba(255,255,255,0.08)'
        ctx.fillRect(lx - lw / 2, ly - lh / 2, lw, lh * 0.15)

        ctx.restore()

        // Frosting drips — appear after layer lands
        if (progress > 0.8) {
          const dripProgress = Math.min(1, (progress - 0.8) / 0.2)
          const layerTopY = ly - lh / 2
          const frostingColor = li === 0 ? '#f2c4b8' : li === 1 ? '#f7e0d0' : '#fff9f6'

          drips.filter(d => d.layerIdx === li).forEach((drip, di) => {
            const dp = Math.min(1, (dripProgress - di * 0.05))
            if (dp <= 0) return
            const dEased = easeOutCubic(Math.max(0, dp))
            ctx.save()
            ctx.globalAlpha = globalAlpha * dEased * 0.9
            ctx.fillStyle = frostingColor
            // Frosting strip on top
            ctx.fillRect(lx - lw / 2, layerTopY - 3 * scale, lw, 5 * scale)
            // Drip
            const dripH = drip.h * dEased
            ctx.beginPath()
            ctx.ellipse(drip.x + offsetX, layerTopY + dripH / 2, drip.w / 2, dripH / 2, 0, 0, Math.PI * 2)
            ctx.fill()
            ctx.restore()
          })
        }

        // Sprinkles — appear after frosting
        if (progress >= 1) {
          sprinkles.filter(s => s.layerIdx === li).forEach((sp, si) => {
            const spDelay = layerDelays[li] + layerAnimDuration + si * 15
            const spElapsed = elapsed - spDelay
            if (spElapsed < 0) return
            const spProgress = Math.min(1, spElapsed / 200)
            ctx.save()
            ctx.globalAlpha = globalAlpha * spProgress * 0.8
            ctx.fillStyle = sp.color
            ctx.translate(sp.x + offsetX, sp.y)
            ctx.rotate(sp.angle)
            ctx.fillRect(-sp.w / 2, -sp.h / 2, sp.w, sp.h)
            ctx.restore()
          })
        }
      }

      // ── Candle ──
      const candleVisible = elapsed >= P2_START
      const candleProgress = candleVisible ? Math.min(1, (elapsed - P2_START) / (P2_END - P2_START)) : 0

      if (candleVisible) {
        const topLayer = layers[2]
        const candleX = cakeCx
        const candleBaseY = cakeCy + topLayer.yOffset - topLayer.h / 2
        const candleW = 8 * scale
        const candleH = 40 * scale
        const cEased = easeOutCubic(candleProgress)
        const candleAlpha = Math.min(1, cEased * 2)

        // Candle body
        ctx.save()
        ctx.globalAlpha = globalAlpha * candleAlpha
        ctx.fillStyle = '#f7e0d0'
        ctx.fillRect(candleX - candleW / 2, candleBaseY - candleH * cEased, candleW, candleH * cEased)
        // Stripe
        ctx.fillStyle = '#e8897a'
        ctx.fillRect(candleX - candleW / 2, candleBaseY - candleH * cEased, candleW, 3 * scale)
        ctx.fillRect(candleX - candleW / 2, candleBaseY - candleH * cEased * 0.5, candleW, 3 * scale)
        // Wick
        ctx.fillStyle = '#3d1010'
        ctx.fillRect(candleX - 1.5 * scale, candleBaseY - candleH * cEased - 6 * scale, 3 * scale, 6 * scale)
        ctx.restore()

        // ── Flame ──
        const flameBaseY = candleBaseY - candleH - 6 * scale
        const isBlownOut = elapsed >= P4_START
        const blowProgress = isBlownOut ? Math.min(1, (elapsed - P4_START) / (P4_END - P4_START)) : 0
        const flameScale = isBlownOut ? Math.max(0, 1 - easeInQuad(blowProgress)) : 1
        const flameAlpha = flameScale

        // More intense flicker during countdown (Phase 3)
        const isCountdown = elapsed >= P3_START && elapsed < P4_START
        const flickerIntensity = isCountdown ? 0.2 : 0.08
        const flickerSpeed = isCountdown ? 0.02 : 0.008

        if (flameAlpha > 0.01 && candleProgress > 0.5) {
          const flicker = Math.sin(elapsed * flickerSpeed) * flickerIntensity + Math.sin(elapsed * 0.013) * 0.04
          const fScale = (1 + flicker) * flameScale

          // Glow around flame
          const glowRadius = 60 * scale * fScale
          const glowGrad = ctx.createRadialGradient(candleX, flameBaseY - 10 * scale, 0, candleX, flameBaseY - 10 * scale, glowRadius)
          glowGrad.addColorStop(0, `rgba(255, 200, 80, ${0.25 * flameAlpha})`)
          glowGrad.addColorStop(0.3, `rgba(255, 160, 50, ${0.12 * flameAlpha})`)
          glowGrad.addColorStop(0.6, `rgba(232, 137, 122, ${0.05 * flameAlpha})`)
          glowGrad.addColorStop(1, 'rgba(232, 137, 122, 0)')
          ctx.fillStyle = glowGrad
          ctx.fillRect(candleX - glowRadius, flameBaseY - 10 * scale - glowRadius, glowRadius * 2, glowRadius * 2)

          // Outer flame
          ctx.save()
          ctx.globalAlpha = globalAlpha * flameAlpha * 0.6
          ctx.fillStyle = '#ff9933'
          ctx.beginPath()
          ctx.ellipse(candleX, flameBaseY - 14 * scale * fScale, 8 * scale * fScale, 18 * scale * fScale, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          // Inner flame
          ctx.save()
          ctx.globalAlpha = globalAlpha * flameAlpha * 0.9
          ctx.fillStyle = '#ffe066'
          ctx.beginPath()
          ctx.ellipse(candleX, flameBaseY - 12 * scale * fScale, 4 * scale * fScale, 12 * scale * fScale, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          // Core
          ctx.save()
          ctx.globalAlpha = globalAlpha * flameAlpha
          ctx.fillStyle = '#fffbe6'
          ctx.beginPath()
          ctx.ellipse(candleX, flameBaseY - 8 * scale * fScale, 2 * scale * fScale, 5 * scale * fScale, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }

        // ── Phase 4: Smoke particles ──
        if (isBlownOut && blowProgress < 1) {
          // Spawn new smoke
          if (Math.random() < 0.3 && smokeParticles.length < 30) {
            smokeParticles.push({
              x: candleX + (Math.random() - 0.5) * 6 * scale,
              y: flameBaseY - 10 * scale * flameScale,
              vx: (Math.random() - 0.5) * 0.5 * scale,
              vy: -0.8 * scale - Math.random() * 0.5 * scale,
              size: (3 + Math.random() * 5) * scale,
              alpha: 0.5,
              life: 0,
            })
          }
        }

        // Update and draw smoke
        for (let i = smokeParticles.length - 1; i >= 0; i--) {
          const sp = smokeParticles[i]
          sp.life++
          sp.x += sp.vx
          sp.y += sp.vy
          sp.vy -= 0.01 * scale
          sp.size += 0.08 * scale
          sp.alpha -= 0.008
          if (sp.alpha <= 0) {
            smokeParticles.splice(i, 1)
            continue
          }
          ctx.save()
          ctx.globalAlpha = globalAlpha * sp.alpha
          ctx.fillStyle = '#c9995a'
          ctx.beginPath()
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      // ── Phase 3: "Blow!" text + countdown ──
      if (elapsed >= P3_START && elapsed < P4_START) {
        const textProgress = Math.min(1, (elapsed - P3_START) / 500)
        const textAlpha = easeOutCubic(textProgress)

        // "Blow!" text with shimmer
        ctx.save()
        ctx.globalAlpha = globalAlpha * textAlpha
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const blowY = cakeCy + layers[2].yOffset - layers[2].h / 2 - 100 * scale
        const shimmer = 0.85 + 0.15 * Math.sin(elapsed * 0.005)

        // Glow behind text
        const textGlow = ctx.createRadialGradient(cakeCx, blowY, 0, cakeCx, blowY, 80 * scale)
        textGlow.addColorStop(0, `rgba(201, 153, 90, ${0.15 * textAlpha * shimmer})`)
        textGlow.addColorStop(1, 'rgba(201, 153, 90, 0)')
        ctx.fillStyle = textGlow
        ctx.fillRect(cakeCx - 80 * scale, blowY - 80 * scale, 160 * scale, 160 * scale)

        // "Blow!" text
        ctx.font = `300 ${Math.round(36 * scale)}px ${getComputedStyle(document.documentElement).getPropertyValue('--font-cormorant') || 'Cormorant Garamond, serif'}`
        const grad = ctx.createLinearGradient(cakeCx - 60 * scale, blowY, cakeCx + 60 * scale, blowY)
        grad.addColorStop(0, '#c9995a')
        grad.addColorStop(0.5, '#fff9f6')
        grad.addColorStop(1, '#c9995a')
        ctx.fillStyle = grad
        ctx.globalAlpha = globalAlpha * textAlpha * shimmer
        ctx.fillText('Blow!', cakeCx, blowY)

        // Countdown: 3, 2, 1
        const countdownElapsed = elapsed - P3_START
        const countdownY = blowY + 50 * scale
        let countNum = 3
        if (countdownElapsed > 2000) countNum = 1
        else if (countdownElapsed > 1000) countNum = 2

        const countAge = countdownElapsed % 1000
        const countScale = 1 + 0.15 * Math.sin((countAge / 1000) * Math.PI)

        ctx.font = `300 ${Math.round(28 * scale * countScale)}px ${getComputedStyle(document.documentElement).getPropertyValue('--font-cormorant') || 'Cormorant Garamond, serif'}`
        ctx.fillStyle = '#f2c4b8'
        ctx.globalAlpha = globalAlpha * textAlpha * 0.8
        ctx.fillText(countNum.toString(), cakeCx, countdownY)

        ctx.restore()
      }

      // ── Transition ──
      if (elapsed >= TOTAL - 200 && !completedRef.current) {
        completedRef.current = true
        onCompleteRef.current()
      }

      ctx.restore() // restore globalAlpha

      if (elapsed < TOTAL) {
        animId = requestAnimationFrame(animate)
      }
    }

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
   LETTER ENVELOPE COMPONENT
════════════════════════════ */
function LetterEnvelope({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false)

  const handleOpen = useCallback(() => {
    if (opened) return
    setOpened(true)
    onOpen()
  }, [opened, onOpen])

  return (
    <div className="letter-section">
      <motion.div
        className="letter-envelope"
        onClick={handleOpen}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope body */}
          <rect x="2" y="12" width="76" height="46" rx="4" fill="#7a1f1f" stroke="#c0463c" strokeWidth="1" />
          {/* Envelope flap (lid) */}
          <motion.path
            d="M2 14 L40 36 L78 14"
            fill="#c0463c"
            stroke="#e8897a"
            strokeWidth="0.8"
            animate={opened ? { d: 'M2 14 L40 -8 L78 14', opacity: 0.6 } : { d: 'M2 14 L40 36 L78 14', opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Heart seal */}
          {!opened && (
            <motion.circle
              cx="40" cy="30" r="7"
              fill="#e8897a"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {!opened && (
            <text x="40" y="34" textAnchor="middle" fill="#7a1f1f" fontSize="10" fontWeight="bold">♥</text>
          )}
        </svg>
      </motion.div>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="letter-content"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>I didn&apos;t mean the things I said when I was angry. I&apos;m sorry.</p>
            <p className="missed-you">I missed you. <span style={{ color: '#e8897a' }}>♥</span></p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ════════════════════════════
   MAIN PAGE COMPONENT
════════════════════════════ */
export default function Home() {
  const [stage, setStage] = useState<'music' | 'gift' | 'cake' | 'text' | 'date' | 'main'>('music')
  const [giftShaking, setGiftShaking] = useState(false)
  const [giftOpened, setGiftOpened] = useState(false)
  const [wordVisible, setWordVisible] = useState({ w1: false, w2: false, myb: false })
  const [dateVisible, setDateVisible] = useState(false)
  const [dateSubVisible, setDateSubVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)
  const [musicAccepted, setMusicAccepted] = useState(false)
  const [letterOpened, setLetterOpened] = useState(false)

  const [revealed, setRevealed] = useState({ s1: false, s2: false, s3: false, s4: false, s5: false, s6: false })

  const cursorRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)


  const handleReveal = useCallback((sectionKey: string, e: React.MouseEvent) => {
    setRevealed(prev => ({ ...prev, [sectionKey]: true }))
  }, [])

  const handleCakeComplete = useCallback(() => {
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
          setTimeout(() => setStage('cake'), 900)
        }
      }, 550)
    }
    doShake()
  }, [stage])

  // ═══ CAKE ANIMATION — handled by CakeCanvas component ═══

  // ═══ STAGGER TEXT ═══
  useEffect(() => {
    if (stage !== 'text') return
    const t1 = setTimeout(() => setWordVisible(v => ({ ...v, w1: true })), 150)
    const t2 = setTimeout(() => setWordVisible(v => ({ ...v, w2: true })), 850)
    const t3 = setTimeout(() => { setWordVisible(v => ({ ...v, myb: true })) }, 1650)
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

      {/* ══ STAGE 2: CAKE ══ — birthday cake with candle animation */}
      <div className={`stage ${stage === 'music' || stage === 'gift' ? 'hidden' : stage === 'cake' ? 'entering' : 'gone'}`} id="stCake" style={{ zIndex: 500 }}>
        <CakeCanvas active={stage === 'cake'} onComplete={handleCakeComplete} />
      </div>

      {/* ══ STAGE 3: TEXT ══ */}
      <div className={`stage ${['music', 'gift', 'cake'].includes(stage) ? 'hidden' : stage === 'text' ? 'entering' : 'gone'}`} id="stText" style={{ zIndex: 500 }}>
        <div className={`wrd ${wordVisible.w1 ? 'in' : ''}`}>Happy</div>
        <div className={`wrd ${wordVisible.w2 ? 'in' : ''}`}>Birthday</div>
        <div className={`myb-row ${wordVisible.myb ? 'in' : ''}`}>
          <svg className="heart-svg-draw" viewBox="0 0 380 130" preserveAspectRatio="xMidYMid meet">
            <path className="h-path draw" d="M190,112 C100,82 16,54 16,30 C16,9 42,-4 78,14 C108,28 155,58 190,80 C225,58 272,28 302,14 C338,-4 364,9 364,30 C364,54 280,82 190,112 Z" />
          </svg>
          <span className="myb-txt">My B</span>
        </div>
      </div>

      {/* ══ STAGE 4: DATE ══ */}
      <div className={`stage ${['music', 'gift', 'cake', 'text'].includes(stage) ? 'hidden' : stage === 'date' ? 'entering' : 'gone'}`} id="stDate" style={{ zIndex: 500 }}>
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

        {mainVisible && (
          <div className="letter-section">
            <LetterEnvelope onOpen={() => setLetterOpened(true)} />
          </div>
        )}

        <footer className="site-footer">
          <div className="roses">🌹 🌸 🌹</div>
          <p>Made with love</p>
        </footer>
      </div>
    </>
  )
}
