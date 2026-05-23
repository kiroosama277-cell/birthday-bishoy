'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

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
   SCROLL EFFECTS — ENHANCED
════════════════════════════ */
function useScrollEffects(mainVisible: boolean) {
  useEffect(() => {
    if (!mainVisible) return

    // 1) Add "in-view" class to sections for CSS-driven entrance
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
          } else {
            e.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.15, rootMargin: '-5% 0px -5% 0px' }
    )
    document.querySelectorAll('.sec').forEach((el) => sectionObs.observe(el))

    // 2) Text line reveal (staggered per line)
    const textObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.ln').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200)
            })
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.sec-inner').forEach((el) => textObs.observe(el))

    // 3) Parallax + zoom on scroll
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        document.querySelectorAll('.sec').forEach((sec) => {
          const rect = sec.getBoundingClientRect()
          const inView = rect.top < window.innerHeight && rect.bottom > 0
          if (!inView) return

          const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)

          // Background roses: slow parallax + subtle zoom
          const bgRoses = sec.querySelector('.bg-roses') as HTMLElement
          if (bgRoses) {
            const parallaxY = (progress - 0.5) * -30
            const scaleVal = 1 + Math.max(0, 1 - Math.abs(progress - 0.5) * 2.5) * 0.06
            bgRoses.style.transform = `translateY(${parallaxY}px) scale(${scaleVal})`
          }
        })
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      sectionObs.disconnect()
      textObs.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mainVisible])
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
   MAIN PAGE COMPONENT
════════════════════════════ */
export default function Home() {
  // Stage: gift → roses → text → date → main
  const [stage, setStage] = useState<'gift' | 'roses' | 'text' | 'date' | 'main'>('gift')
  const [giftShaking, setGiftShaking] = useState(false)
  const [wordVisible, setWordVisible] = useState({ w1: false, w2: false, myb: false })
  const [heartDrawn, setHeartDrawn] = useState(false)
  const [dateVisible, setDateVisible] = useState(false)
  const [dateSubVisible, setDateSubVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)

  // Cursor
  const cursorRef = useRef<HTMLDivElement>(null)

  // YouTube
  const ytPlayerRef = useRef<any>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)

  // Scroll effects
  useScrollEffects(mainVisible)

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

      {/* ══ MAIN CONTENT ══ */}
      <div id="main" className={mainVisible ? 'in' : ''}>

        {/* S1 */}
        <section className="sec sec-1" id="s1">
          <div className="bg-roses" id="bgr1" />
          <div className="czone" onClick={(e) => boom(e, 'teddy')} />
          <div className="sec-inner">
            <span className="ln hero">&ldquo;Happy Birthday, Bishoy&rdquo;</span>
            <span className="ln">&ldquo;Today the world celebrates you — and so do I&rdquo;</span>
            <span className="ln">&ldquo;But honestly? Every single day feels like your birthday to me&rdquo;</span>
            <span className="ln">&ldquo;Because every day with you is a gift I never want to return&rdquo;</span>
            <div className="div">✦</div>
            <span className="ln" style={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</span>
          </div>
        </section>

        {/* S2 */}
        <section className="sec sec-2" id="s2">
          <div className="bg-roses" id="bgr2" />
          <div className="czone" onClick={(e) => boom(e, 'heart')} />
          <div className="sec-inner">
            <span className="ln hero">&ldquo;You didn&rsquo;t just walk into my life… you became it&rdquo;</span>
            <span className="ln">&ldquo;Before you, I didn&rsquo;t know that someone could feel like home&rdquo;</span>
            <span className="ln">&ldquo;Now I can&rsquo;t imagine a single day without your voice, your laugh, your presence&rdquo;</span>
            <span className="ln">&ldquo;You changed everything — quietly, deeply, forever&rdquo;</span>
            <div className="div">✦</div>
            <span className="ln" style={{ fontSize: '.78rem', opacity: .35, letterSpacing: '.2em' }}>tap anywhere</span>
          </div>
        </section>

        {/* S3 */}
        <section className="sec sec-3" id="s3">
          <div className="bg-roses" id="bgr3" />
          <div className="czone" onClick={(e) => boom(e, 'rose')} />
          <div className="sec-inner">
            <span className="ln hero">&ldquo;Every moment with you feels like home&rdquo;</span>
            <span className="ln">&ldquo;The small moments, the silly ones, the ones no one else would understand&rdquo;</span>
            <span className="ln">&ldquo;Those are my favorite chapters of my life&rdquo;</span>
            <span className="ln">&ldquo;And you&rsquo;re the reason I love the story&rdquo;</span>
            <div className="div">✦</div>
            <span className="ln" style={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</span>
          </div>
        </section>

        {/* S4 */}
        <section className="sec sec-4" id="s4">
          <div className="bg-roses" id="bgr4" />
          <div className="czone" onClick={(e) => boom(e, 'stars')} />
          <div className="sec-inner">
            <span className="ln hero">&ldquo;You are my favorite person in every version of every story&rdquo;</span>
            <span className="ln">&ldquo;In every timeline, every lifetime, every universe —&rdquo;</span>
            <span className="ln">&ldquo;I&rsquo;d find you. I&rsquo;d choose you.&rdquo;</span>
            <span className="ln gold-txt" style={{ fontSize: 'clamp(1.6rem, 4.2vw, 2.6rem)' }}>&ldquo;Again and again and again.&rdquo;</span>
            <div className="div">✦</div>
            <span className="ln" style={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</span>
          </div>
        </section>

        {/* S5 */}
        <section className="sec sec-5" id="s5">
          <div className="bg-roses" id="bgr5" />
          <div className="czone" onClick={(e) => boom(e, 'moon')} />
          <div className="sec-inner">
            <span className="ln arabic">الماضى اية الماضى مين نسيت ف حضنك إلى شوفتة من السنين ♥</span>
            <div className="div">✦</div>
            <span className="ln arabic">انت قمري والقاف عين وإذا غابت العين ابدلنا الميم بالدال ♥</span>
            <div className="div">✦</div>
            <span className="ln arabic">ويكفينى من هذا العمر انى حظيت بك ♥</span>
            <div className="div">✦</div>
            <span className="ln" style={{ fontSize: '.78rem', opacity: .4, letterSpacing: '.2em' }}>tap anywhere</span>
          </div>
        </section>

        {/* S6 */}
        <section className="sec sec-6" id="s6">
          <div className="bg-roses" id="bgr6" />
          <div className="czone" onClick={(e) => boom(e, 'cake')} />
          <div className="sec-inner">
            <span className="ln gold-txt" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontStyle: 'italic' }}>&ldquo;Here&rsquo;s to you, here&rsquo;s to us&rdquo;</span>
            <div className="div">✦</div>
            <span className="ln">&ldquo;To every laugh we shared, every moment we lived&rdquo;</span>
            <span className="ln">&ldquo;To all the birthdays yet to come —&rdquo;</span>
            <span className="ln">&ldquo;may I spend every single one by your side&rdquo;</span>
            <div className="div">✦</div>
            <span className="ln gold-txt" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontStyle: 'italic' }}>&ldquo;Happy Birthday, my love&rdquo;</span>
            <span className="ln" style={{ fontSize: '.78rem', opacity: '.4', letterSpacing: '.2em', marginTop: '.8rem' }}>tap anywhere</span>
          </div>
        </section>

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
