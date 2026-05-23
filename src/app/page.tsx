'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/* ============ GIFT BOX SVG ============ */
function GiftBoxSVG() {
  return (
    <svg width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="85" width="150" height="105" rx="4" fill="#8b2a2a" />
      <rect x="15" y="85" width="150" height="105" rx="4" fill="url(#boxGrad)" />
      <rect x="5" y="60" width="170" height="34" rx="4" fill="#c85c5c" />
      <rect x="5" y="60" width="170" height="34" rx="4" fill="url(#lidGrad)" />
      <rect x="82" y="60" width="16" height="130" fill="#f2c4a0" opacity="0.85" />
      <rect x="5" y="71" width="170" height="12" fill="#f2c4a0" opacity="0.85" />
      <ellipse cx="65" cy="52" rx="28" ry="18" fill="#e8a0a0" transform="rotate(-20 65 52)" />
      <ellipse cx="65" cy="52" rx="20" ry="12" fill="#8b2a2a" transform="rotate(-20 65 52)" />
      <ellipse cx="115" cy="52" rx="28" ry="18" fill="#e8a0a0" transform="rotate(20 115 52)" />
      <ellipse cx="115" cy="52" rx="20" ry="12" fill="#8b2a2a" transform="rotate(20 115 52)" />
      <ellipse cx="90" cy="58" rx="14" ry="10" fill="#f2c4a0" />
      <rect x="18" y="64" width="40" height="6" rx="3" fill="white" opacity="0.15" />
      <circle cx="55" cy="120" r="4" fill="#f2c4a0" opacity="0.4" />
      <circle cx="90" cy="135" r="4" fill="#f2c4a0" opacity="0.4" />
      <circle cx="125" cy="118" r="4" fill="#f2c4a0" opacity="0.4" />
      <circle cx="45" cy="150" r="3" fill="#f2c4a0" opacity="0.3" />
      <circle cx="135" cy="148" r="3" fill="#f2c4a0" opacity="0.3" />
      <defs>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ============ POPUP SPAWNER ============ */
function spawnPopup(html: string, x: number, y: number, cls: string, extra?: React.CSSProperties) {
  const el = document.createElement('div')
  el.className = cls
  el.innerHTML = html
  el.style.left = x + 'px'
  el.style.top = y + 'px'
  if (extra) Object.assign(el.style, extra)
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 3500)
}

function handleClickEffect(e: React.MouseEvent, type: string) {
  const x = e.clientX
  const y = e.clientY

  if (type === 'teddy') {
    const items = ['🐻', '💋', '💝', '🤍']
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        spawnPopup(items[Math.floor(Math.random() * items.length)],
          x + (Math.random() - 0.5) * 160, y + (Math.random() - 0.5) * 100, 'popup')
      }, i * 120)
    }
  }

  if (type === 'heart') {
    const h = ['❤️', '🤍', '💕', '💗', '💓', '💞']
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        spawnPopup(h[Math.floor(Math.random() * h.length)],
          x + (Math.random() - 0.5) * 180, y + (Math.random() - 0.5) * 120, 'popup')
      }, i * 100)
    }
  }

  if (type === 'rose') {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        spawnPopup('🌹', x + (Math.random() - 0.5) * 180, y + (Math.random() - 0.5) * 110, 'popup')
      }, i * 130)
    }
  }

  if (type === 'stars') {
    for (let i = 0; i < 20; i++) {
      const s = document.createElement('div')
      s.className = 'star-pop'
      const angle = (i / 20) * Math.PI * 2
      const dist = 70 + Math.random() * 160
      s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;
        background:${['#d4a96a', '#f2c4a0', '#fff8f5', '#e8a0a0'][i % 4]};
        width:${2 + Math.random() * 4}px;height:${2 + Math.random() * 4}px;
        animation-delay:${Math.random() * 0.3}s;`
      document.body.appendChild(s)
      setTimeout(() => s.remove(), 2000)
    }
    spawnPopup('✨', x, y - 40, 'popup')
  }

  if (type === 'moon') {
    const el = document.createElement('div')
    el.className = 'moon-pop'
    el.textContent = '🌙'
    el.style.left = (x - 40) + 'px'
    el.style.top = (y - 50) + 'px'
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 3500)
    const sym = ['⭐', '🌟', '✨', '💫']
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        spawnPopup(sym[i], x + (Math.random() - 0.5) * 200, y + (Math.random() - 0.5) * 130, 'popup')
      }, i * 200)
    }
  }

  if (type === 'cake') {
    spawnPopup('🎂', x - 30, y - 40, 'popup')
    const c = ['🎉', '🎊', '🌹', '💕', '✨', '🎈']
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        spawnPopup(c[Math.floor(Math.random() * c.length)],
          x + (Math.random() - 0.5) * 260, y + (Math.random() - 0.5) * 160, 'popup')
      }, i * 90)
    }
  }
}

/* ============ SCROLL REVEAL (runs after main mounts) ============ */
function useScrollReveal(mainVisible: boolean) {
  useEffect(() => {
    if (!mainVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.line')
            lines.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 190)
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.section-content').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [mainVisible])
}

/* ============ MAIN PAGE ============ */
export default function Home() {
  // Stage management: gift → roses → text → date → main
  const [stage, setStage] = useState<'gift' | 'roses' | 'text' | 'date' | 'main'>('gift')
  const [giftShaking, setGiftShaking] = useState(false)
  const [wordVisible, setWordVisible] = useState({ w1: false, w2: false, myb: false })
  const [heartDrawn, setHeartDrawn] = useState(false)
  const [dateVisible, setDateVisible] = useState(false)
  const [mainVisible, setMainVisible] = useState(false)
  const [scrollHintVisible, setScrollHintVisible] = useState(false)

  const roseStageRef = useRef<HTMLDivElement>(null)
  useScrollReveal(mainVisible)

  // YouTube player
  const ytPlayerRef = useRef<any>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [ytReady, setYtReady] = useState(false)

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Add YT API script
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      const YT = (window as any).YT
      if (!YT) return

      ytPlayerRef.current = new YT.Player('ytplayer', {
        videoId: 'rNEsMFXDkMU',
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'rNEsMFXDkMU',
          controls: 0,
          fs: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(50)
            e.target.playVideo()
            setYtReady(true)
            setMusicPlaying(true)
          },
        },
      })
    }
  }, [])

  const toggleMusic = useCallback(() => {
    if (!ytPlayerRef.current) return
    try {
      if (musicPlaying) {
        ytPlayerRef.current.pauseVideo()
        setMusicPlaying(false)
      } else {
        ytPlayerRef.current.playVideo()
        setMusicPlaying(true)
      }
    } catch {
      // player not ready
    }
  }, [musicPlaying])

  // ============ GIFT BOX OPEN ============
  const openGift = useCallback(() => {
    if (stage !== 'gift') return

    setGiftShaking(true)
    setTimeout(() => {
      setGiftShaking(false)
      setTimeout(() => {
        setGiftShaking(true)
        setTimeout(() => {
          setGiftShaking(false)
          setStage('roses')
        }, 500)
      }, 300)
    }, 500)
  }, [stage])

  // ============ ROSE BURST ============
  useEffect(() => {
    if (stage !== 'roses') return

    const icons = ['🌹', '🌸', '🌺', '🌷', '💮']
    const container = roseStageRef.current
    if (!container) return

    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        const r = document.createElement('div')
        r.className = 'rose-fall'
        r.textContent = icons[Math.floor(Math.random() * icons.length)]
        r.style.left = (Math.random() * 105 - 2) + 'vw'
        r.style.fontSize = (1.2 + Math.random() * 1.8) + 'rem'
        const dur = 2.2 + Math.random() * 1.8
        r.style.animation = `roseDrop ${dur}s ${Math.random() * 0.5}s linear forwards`
        container.appendChild(r)
        setTimeout(() => r.remove(), (dur + 0.6) * 1000)
      }, i * 45)
    }

    const timer = setTimeout(() => setStage('text'), 2000)
    return () => clearTimeout(timer)
  }, [stage])

  // ============ STAGGER TEXT ============
  useEffect(() => {
    if (stage !== 'text') return

    const t1 = setTimeout(() => setWordVisible(v => ({ ...v, w1: true })), 200)
    const t2 = setTimeout(() => setWordVisible(v => ({ ...v, w2: true })), 900)
    const t3 = setTimeout(() => {
      setWordVisible(v => ({ ...v, myb: true }))
      setTimeout(() => setHeartDrawn(true), 300)
    }, 1700)

    const t4 = setTimeout(() => setStage('date'), 5200)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [stage])

  // ============ DATE ============
  useEffect(() => {
    if (stage !== 'date') return

    const t1 = setTimeout(() => setDateVisible(true), 200)
    const t2 = setTimeout(() => setStage('main'), 2800)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [stage])

  // ============ MAIN ============
  useEffect(() => {
    if (stage !== 'main') return

    setMainVisible(true)
    setScrollHintVisible(true)
    const t = setTimeout(() => setScrollHintVisible(false), 6000)
    return () => clearTimeout(t)
  }, [stage])

  // ============ RENDER STAGES ============

  // Stage 1: Gift Box
  if (stage === 'gift') {
    return (
      <div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{ background: 'radial-gradient(ellipse at center, #2a0808 0%, #0d0303 100%)' }}
      >
        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1.5 + Math.random() * 2}px`,
                height: `${1.5 + Math.random() * 2}px`,
                background: `rgba(242, 196, 160, ${0.15 + Math.random() * 0.2})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `softGlow ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`gift-wrap ${giftShaking ? 'shake' : ''}`}
          onClick={openGift}
        >
          <GiftBoxSVG />
          <p className="gift-hint">tap to open ✦</p>
        </div>
      </div>
    )
  }

  // Stage 2: Rose Burst
  if (stage === 'roses') {
    return (
      <div
        className="fixed inset-0 z-[190] overflow-hidden"
        ref={roseStageRef}
        style={{ background: 'radial-gradient(ellipse at center, #2a0808 0%, #0d0303 100%)' }}
      />
    )
  }

  // Stage 3: Stagger Text
  if (stage === 'text') {
    return (
      <div
        className="fixed inset-0 z-[180] flex flex-col items-center justify-center"
        style={{ background: 'radial-gradient(ellipse at center, #2a0808 0%, #0d0303 100%)' }}
      >
        <div className={`w ${wordVisible.w1 ? 'show' : ''}`}>Happy</div>
        <div className={`w ${wordVisible.w2 ? 'show' : ''}`}>Birthday</div>
        <div className={`myb-wrap ${wordVisible.myb ? 'show' : ''}`}>
          <svg
            className="heart-draw"
            width="340"
            height="120"
            viewBox="0 0 340 120"
          >
            <path
              className={`heart-stroke ${heartDrawn ? 'draw' : ''}`}
              d="M170,105 C90,75 15,50 15,28 C15,8 38,-4 70,12 C100,26 140,52 170,72
                 C200,52 240,26 270,12 C302,-4 325,8 325,28 C325,50 250,75 170,105 Z"
            />
          </svg>
          <span className="myb-label">My B</span>
        </div>
      </div>
    )
  }

  // Stage 4: Date
  if (stage === 'date') {
    return (
      <div
        className="fixed inset-0 z-[170] flex items-center justify-center"
        style={{
          background: 'radial-gradient(ellipse at center, #2a0808 0%, #0d0303 100%)',
          transition: 'opacity 1.2s ease',
        }}
      >
        <div className={`date-big ${dateVisible ? 'show' : ''}`}>June 19</div>
      </div>
    )
  }

  // ============ MAIN CONTENT ============
  return (
    <>
      {/* Hidden YouTube player */}
      <div id="ytplayer" style={{ position: 'fixed', bottom: -9999, left: -9999, width: 1, height: 1 }} />

      {/* Music toggle */}
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

      {/* Scroll hint */}
      <div id="scrollHint" className={scrollHintVisible ? 'show' : ''}>scroll ↓</div>

      {/* Main sections */}
      <div
        id="main"
        style={{
          opacity: mainVisible ? 1 : 0,
          transition: 'opacity 1.5s ease',
        }}
      >
        {/* ====== S1 ====== */}
        <section className="section s1">
          <div className="petal" style={{ background: '#c85c5c', left: '10%', animationDuration: '9s', animationDelay: '0s' }} />
          <div className="petal" style={{ background: '#e8a0a0', left: '28%', animationDuration: '12s', animationDelay: '2s' }} />
          <div className="petal" style={{ background: '#f2c4a0', left: '52%', animationDuration: '8s', animationDelay: '4s' }} />
          <div className="petal" style={{ background: '#c85c5c', left: '74%', animationDuration: '11s', animationDelay: '1s' }} />
          <div className="petal" style={{ background: '#e8a0a0', left: '90%', animationDuration: '7s', animationDelay: '3s' }} />
          <div className="click-area" onClick={(e) => handleClickEffect(e, 'teddy')} />
          <div className="section-content">
            <span className="line hero">&ldquo;Happy Birthday, Bishoy&rdquo;</span>
            <span className="line">&ldquo;Today the world celebrates you — and so do I&rdquo;</span>
            <span className="line">&ldquo;But honestly? Every single day feels like your birthday to me&rdquo;</span>
            <span className="line">&ldquo;Because every day with you is a gift I never want to return&rdquo;</span>
            <div className="divider">🌹</div>
            <span className="line" style={{ fontSize: '0.8rem', opacity: 0.45, letterSpacing: '0.18em' }}>tap anywhere ✦</span>
          </div>
        </section>

        {/* ====== S2 ====== */}
        <section className="section s2">
          <div className="petal" style={{ background: '#8b2a2a', left: '15%', animationDuration: '10s', animationDelay: '1s' }} />
          <div className="petal" style={{ background: '#c85c5c', left: '42%', animationDuration: '8s', animationDelay: '0s' }} />
          <div className="petal" style={{ background: '#8b2a2a', left: '68%', animationDuration: '13s', animationDelay: '3s' }} />
          <div className="click-area" onClick={(e) => handleClickEffect(e, 'heart')} />
          <div className="section-content">
            <span className="line hero">&ldquo;You didn&rsquo;t just walk into my life… you became it&rdquo;</span>
            <span className="line">&ldquo;Before you, I didn&rsquo;t know that someone could feel like home&rdquo;</span>
            <span className="line">&ldquo;Now I can&rsquo;t imagine a single day without your voice, your laugh, your presence&rdquo;</span>
            <span className="line">&ldquo;You changed everything — quietly, deeply, forever&rdquo;</span>
            <div className="divider">♥</div>
            <span className="line" style={{ fontSize: '0.8rem', opacity: 0.35, letterSpacing: '0.18em' }}>tap anywhere ✦</span>
          </div>
        </section>

        {/* ====== S3 ====== */}
        <section className="section s3">
          <div className="petal" style={{ background: '#c85c5c', left: '6%', animationDuration: '9s', animationDelay: '2s' }} />
          <div className="petal" style={{ background: '#f2c4a0', left: '33%', animationDuration: '11s', animationDelay: '0s' }} />
          <div className="petal" style={{ background: '#e8a0a0', left: '58%', animationDuration: '8s', animationDelay: '5s' }} />
          <div className="petal" style={{ background: '#c85c5c', left: '82%', animationDuration: '10s', animationDelay: '1s' }} />
          <div className="click-area" onClick={(e) => handleClickEffect(e, 'rose')} />
          <div className="section-content">
            <span className="line hero">&ldquo;Every moment with you feels like home&rdquo;</span>
            <span className="line">&ldquo;The small moments, the silly ones, the ones no one else would understand&rdquo;</span>
            <span className="line">&ldquo;Those are my favorite chapters of my life&rdquo;</span>
            <span className="line">&ldquo;And you&rsquo;re the reason I love the story&rdquo;</span>
            <div className="divider">🌹</div>
            <span className="line" style={{ fontSize: '0.8rem', opacity: 0.45, letterSpacing: '0.18em' }}>tap anywhere ✦</span>
          </div>
        </section>

        {/* ====== S4 ====== */}
        <section className="section s4">
          <div className="petal" style={{ background: '#d4a96a', left: '20%', animationDuration: '10s', animationDelay: '0s' }} />
          <div className="petal" style={{ background: '#f2c4a0', left: '48%', animationDuration: '12s', animationDelay: '3s' }} />
          <div className="petal" style={{ background: '#d4a96a', left: '72%', animationDuration: '8s', animationDelay: '1s' }} />
          <div className="click-area" onClick={(e) => handleClickEffect(e, 'stars')} />
          <div className="section-content">
            <span className="line hero">&ldquo;You are my favorite person in every version of every story&rdquo;</span>
            <span className="line">&ldquo;In every timeline, every lifetime, every universe —&rdquo;</span>
            <span className="line">&ldquo;I&rsquo;d find you. I&rsquo;d choose you.&rdquo;</span>
            <span className="line gold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)' }}>&ldquo;Again and again and again.&rdquo;</span>
            <div className="divider">✦</div>
            <span className="line" style={{ fontSize: '0.8rem', opacity: 0.45, letterSpacing: '0.18em' }}>tap anywhere ✦</span>
          </div>
        </section>

        {/* ====== S5 (ARABIC) ====== */}
        <section className="section s5">
          <div className="petal" style={{ background: '#a0a0c8', left: '12%', animationDuration: '11s', animationDelay: '2s' }} />
          <div className="petal" style={{ background: '#e8a0a0', left: '38%', animationDuration: '9s', animationDelay: '0s' }} />
          <div className="petal" style={{ background: '#a0a0c8', left: '64%', animationDuration: '12s', animationDelay: '4s' }} />
          <div className="click-area" onClick={(e) => handleClickEffect(e, 'moon')} />
          <div className="section-content">
            <span className="line arabic">الماضى اية الماضى مين نسيت ف حضنك إلى شوفتة من السنين ♥️</span>
            <div className="divider">🌙</div>
            <span className="line arabic">انت قمري والقاف عين وإذا غابت العين ابدلنا الميم بالدال ♥️</span>
            <div className="divider">🌙</div>
            <span className="line arabic">ويكفينى من هذا العمر انى حظيت بك ♥️</span>
            <div className="divider">✦</div>
            <span className="line" style={{ fontSize: '0.8rem', opacity: 0.45, letterSpacing: '0.18em' }}>tap anywhere ✦</span>
          </div>
        </section>

        {/* ====== S6 ====== */}
        <section className="section s6">
          <div className="petal" style={{ background: '#c85c5c', left: '8%', animationDuration: '9s', animationDelay: '1s' }} />
          <div className="petal" style={{ background: '#d4a96a', left: '30%', animationDuration: '11s', animationDelay: '3s' }} />
          <div className="petal" style={{ background: '#e8a0a0', left: '54%', animationDuration: '8s', animationDelay: '0s' }} />
          <div className="petal" style={{ background: '#f2c4a0', left: '78%', animationDuration: '12s', animationDelay: '2s' }} />
          <div className="click-area" onClick={(e) => handleClickEffect(e, 'cake')} />
          <div className="section-content">
            <span className="line gold" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', fontStyle: 'italic' }}>&ldquo;Here&rsquo;s to you, here&rsquo;s to us&rdquo;</span>
            <div className="divider">🌹</div>
            <span className="line">&ldquo;To every laugh we shared, every moment we lived&rdquo;</span>
            <span className="line">&ldquo;To all the birthdays yet to come —&rdquo;</span>
            <span className="line">&ldquo;may I spend every single one by your side&rdquo;</span>
            <div className="divider">✦</div>
            <span className="line gold" style={{ fontSize: 'clamp(2rem, 6vw, 4.2rem)', fontStyle: 'italic' }}>&ldquo;Happy Birthday, my love&rdquo; 🎂</span>
            <span className="line" style={{ fontSize: '0.8rem', opacity: 0.45, letterSpacing: '0.18em', marginTop: '1rem' }}>tap anywhere ✦</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="roses">🌹 🌸 🌹</div>
          <p>Made with love</p>
        </footer>
      </div>
    </>
  )
}
