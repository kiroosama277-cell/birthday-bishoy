'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/* ============ PETAL DATA ============ */
const PETAL_COUNT = 20
const petalData = Array.from({ length: PETAL_COUNT }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 18}s`,
  duration: `${12 + Math.random() * 16}s`,
  drift: `${-80 + Math.random() * 160}px`,
  spin: `${360 + Math.random() * 720}deg`,
  size: `${8 + Math.random() * 16}px`,
  opacity: 0.25 + Math.random() * 0.35,
}))

/* ============ SPARKLE DATA ============ */
const SPARKLE_COUNT = 14
const sparkleData = Array.from({ length: SPARKLE_COUNT }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 3}s`,
  duration: `${1.5 + Math.random() * 2.5}s`,
  size: `${3 + Math.random() * 7}px`,
}))

/* ============ SVG COMPONENTS ============ */
function RoseSVG({ color = '#C76B8F', size = 40, className = '' }: { color?: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
      <ellipse cx="50" cy="35" rx="18" ry="22" fill={color} opacity="0.9" />
      <ellipse cx="35" cy="50" rx="18" ry="22" fill={color} opacity="0.7" transform="rotate(-30 35 50)" />
      <ellipse cx="65" cy="50" rx="18" ry="22" fill={color} opacity="0.7" transform="rotate(30 65 50)" />
      <ellipse cx="42" cy="60" rx="16" ry="20" fill={color} opacity="0.6" transform="rotate(-15 42 60)" />
      <ellipse cx="58" cy="60" rx="16" ry="20" fill={color} opacity="0.6" transform="rotate(15 58 60)" />
      <ellipse cx="50" cy="50" rx="12" ry="14" fill={color} opacity="0.95" />
      <ellipse cx="50" cy="48" rx="6" ry="8" fill={color} filter="url(#brighten)" />
      <path d="M50 70 Q48 85 45 100" stroke="#4a7c4f" strokeWidth="2.5" fill="none" />
      <path d="M48 80 Q40 75 35 78" stroke="#4a7c4f" strokeWidth="1.5" fill="none" />
      <path d="M47 85 Q55 80 60 83" stroke="#4a7c4f" strokeWidth="1.5" fill="none" />
      <defs>
        <filter id="brighten">
          <feColorMatrix type="matrix" values="1.3 0 0 0 0.1  0 1.3 0 0 0.1  0 0 1.3 0 0.1  0 0 0 1 0" />
        </filter>
      </defs>
    </svg>
  )
}

function HeartSVGOutline({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M256 448l-30.164-27.211C118.718 322.927 48 258.373 48 179.59 48 114.867 98.533 64 163.2 64c36.48 0 71.514 17.005 92.8 43.733C277.286 81.005 312.32 64 348.8 64 413.467 64 464 114.867 464 179.59c0 78.783-70.718 143.337-177.836 241.199L256 448z"
        className="heart-svg-path"
        stroke="#E8686A"
        strokeWidth={5}
      />
    </svg>
  )
}

function HeartSVGFilled({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="#E8686A" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 448l-30.164-27.211C118.718 322.927 48 258.373 48 179.59 48 114.867 98.533 64 163.2 64c36.48 0 71.514 17.005 92.8 43.733C277.286 81.005 312.32 64 348.8 64 413.467 64 464 114.867 464 179.59c0 78.783-70.718 143.337-177.836 241.199L256 448z" />
    </svg>
  )
}

function TeddyBearSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="55" cy="45" r="22" fill="#C4956A" />
      <circle cx="55" cy="45" r="13" fill="#E8B88A" />
      <circle cx="145" cy="45" r="22" fill="#C4956A" />
      <circle cx="145" cy="45" r="13" fill="#E8B88A" />
      {/* Head */}
      <circle cx="100" cy="80" r="48" fill="#C4956A" />
      <circle cx="100" cy="80" r="40" fill="#D4A574" />
      {/* Eyes */}
      <circle cx="82" cy="73" r="6" fill="#3D2B1F" />
      <circle cx="118" cy="73" r="6" fill="#3D2B1F" />
      <circle cx="84" cy="71" r="2.5" fill="#fff" />
      <circle cx="120" cy="71" r="2.5" fill="#fff" />
      {/* Nose */}
      <ellipse cx="100" cy="87" rx="8" ry="6" fill="#3D2B1F" />
      <ellipse cx="100" cy="86" rx="3" ry="2" fill="#5C4033" />
      {/* Mouth / Kiss face */}
      <path d="M94 93 Q100 100 106 93" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="72" cy="89" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="128" cy="89" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      {/* Body */}
      <ellipse cx="100" cy="155" rx="40" ry="42" fill="#C4956A" />
      <ellipse cx="100" cy="155" rx="32" ry="35" fill="#E8B88A" />
      {/* Arms */}
      <ellipse cx="55" cy="148" rx="14" ry="28" fill="#C4956A" transform="rotate(20 55 148)" />
      <ellipse cx="145" cy="148" rx="14" ry="28" fill="#C4956A" transform="rotate(-20 145 148)" />
      {/* Heart on belly */}
      <path d="M100 150 C95 142 82 142 82 152 C82 162 100 172 100 172 C100 172 118 162 118 152 C118 142 105 142 100 150Z" fill="#E8686A" opacity="0.85" />
    </svg>
  )
}

function CrescentMoonSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="moonFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="100%" stopColor="#F5E6B8" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#moonGlow)" />
      <path d="M120 20 A70 70 0 1 0 120 180 A55 55 0 1 1 120 20Z" fill="url(#moonFace)" />
      <circle cx="95" cy="70" r="4" fill="#E8D898" opacity="0.3" />
      <circle cx="80" cy="110" r="3" fill="#E8D898" opacity="0.2" />
      <circle cx="105" cy="140" r="5" fill="#E8D898" opacity="0.25" />
      <circle cx="160" cy="40" r="2" fill="#FFF8DC" opacity="0.8" />
      <circle cx="170" cy="80" r="1.5" fill="#FFF8DC" opacity="0.6" />
      <circle cx="155" cy="150" r="2" fill="#FFF8DC" opacity="0.7" />
      <circle cx="175" cy="120" r="1" fill="#FFF8DC" opacity="0.5" />
    </svg>
  )
}

function BirthdayCakeSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 230" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Plate */}
      <ellipse cx="100" cy="195" rx="82" ry="12" fill="#F5E6CC" opacity="0.4" />
      {/* Bottom tier */}
      <rect x="28" y="135" width="144" height="55" rx="10" fill="#FFB6C1" />
      <rect x="28" y="135" width="144" height="14" rx="7" fill="#E8686A" opacity="0.5" />
      {/* Middle tier */}
      <rect x="42" y="88" width="116" height="50" rx="8" fill="#FFD1DC" />
      <rect x="42" y="88" width="116" height="12" rx="6" fill="#C76B8F" opacity="0.4" />
      {/* Top tier */}
      <rect x="56" y="50" width="88" height="42" rx="6" fill="#FFDAB9" />
      <rect x="56" y="50" width="88" height="10" rx="5" fill="#E8686A" opacity="0.35" />
      {/* Frosting drips */}
      <path d="M42 143 Q48 155 54 143 Q60 155 66 143 Q72 155 78 143 Q84 155 90 143" stroke="#fff" strokeWidth="3.5" fill="none" opacity="0.5" />
      <path d="M56 96 Q62 106 68 96 Q74 106 80 96 Q86 106 92 96" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.5" />
      {/* Decorative dots */}
      <circle cx="50" cy="160" r="4" fill="#E8686A" opacity="0.7" />
      <circle cx="75" cy="158" r="4" fill="#C76B8F" opacity="0.7" />
      <circle cx="100" cy="162" r="4" fill="#E8686A" opacity="0.7" />
      <circle cx="125" cy="158" r="4" fill="#C76B8F" opacity="0.7" />
      <circle cx="150" cy="160" r="4" fill="#E8686A" opacity="0.7" />
      {/* Candles */}
      <rect x="80" y="18" width="5" height="35" rx="2.5" fill="#FFD1DC" />
      <rect x="97" y="12" width="5" height="41" rx="2.5" fill="#FFB6C1" />
      <rect x="114" y="18" width="5" height="35" rx="2.5" fill="#FFD1DC" />
      {/* Flames */}
      <g className="candle-flicker">
        <ellipse cx="82.5" cy="13" rx="6" ry="9" fill="#FFD700" opacity="0.9" />
        <ellipse cx="82.5" cy="11" rx="3.5" ry="5.5" fill="#FFF8DC" />
      </g>
      <g className="candle-flicker" style={{ animationDelay: '0.1s' }}>
        <ellipse cx="99.5" cy="7" rx="6" ry="9" fill="#FFD700" opacity="0.9" />
        <ellipse cx="99.5" cy="5" rx="3.5" ry="5.5" fill="#FFF8DC" />
      </g>
      <g className="candle-flicker" style={{ animationDelay: '0.2s' }}>
        <ellipse cx="116.5" cy="13" rx="6" ry="9" fill="#FFD700" opacity="0.9" />
        <ellipse cx="116.5" cy="11" rx="3.5" ry="5.5" fill="#FFF8DC" />
      </g>
    </svg>
  )
}

/* ============ SHOOTING STARS COMPONENT ============ */
function ShootingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute shooting-star"
          style={{
            top: `${5 + Math.random() * 50}%`,
            left: `${Math.random() * 50}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${0.7 + Math.random() * 0.5}s`,
          }}
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: '3px',
              height: '3px',
              boxShadow: '0 0 8px 3px rgba(255,255,255,0.7), -30px -15px 12px rgba(255,255,255,0.2)',
            }}
          />
        </div>
      ))}
      {[...Array(20)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute star-twinkle"
          style={{
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <div className="rounded-full bg-white" style={{ width: '2px', height: '2px', boxShadow: '0 0 6px rgba(255,255,255,0.5)' }} />
        </div>
      ))}
    </div>
  )
}

/* ============ FLOATING PETALS ============ */
function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petalData.map((p) => (
        <div
          key={p.id}
          className="rose-petal"
          style={{
            left: p.left,
            '--delay': p.delay,
            '--duration': p.duration,
            '--drift': p.drift,
            '--spin': p.spin,
          } as React.CSSProperties}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            <ellipse cx="10" cy="10" rx="8" ry="5" fill="#FFB6C1" opacity={p.opacity} transform="rotate(-30 10 10)" />
          </svg>
        </div>
      ))}
    </div>
  )
}

/* ============ SECTION COMPONENT ============ */
interface SectionProps {
  id: string
  children: React.ReactNode
  onClickAction: () => void
  interactiveContent: React.ReactNode | null
  showInteractive: boolean
  clickPromptText: string
  bgGradient: string
  roseColors: string[]
  roseCount: number
}

function RomanticSection({ id, children, onClickAction, interactiveContent, showInteractive, clickPromptText, bgGradient, roseColors, roseCount }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textEls = entry.target.querySelectorAll('.text-reveal')
            textEls.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, idx * 300)
            })
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 py-20"
      onClick={onClickAction}
      style={{ cursor: 'pointer' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: bgGradient }} />

      {/* Decorative roses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: roseCount }, (_, i) => (
          <div
            key={i}
            className="absolute decorative-rose"
            style={{
              top: `${8 + ((i * 83) % 78)}%`,
              left: `${(i * 137 + 5) % 90}%`,
              opacity: 0.08 + (i % 3) * 0.03,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${4.5 + i * 0.6}s`,
            }}
          >
            <RoseSVG color={roseColors[i % roseColors.length]} size={45 + (i % 4) * 18} />
          </div>
        ))}
      </div>

      {/* Content */}
      {children}

      {/* Interactive overlay */}
      {showInteractive && interactiveContent && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          {interactiveContent}
        </div>
      )}

      {/* Click prompt */}
      {!showInteractive && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 click-prompt z-10">
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(255, 209, 220, 0.45)', fontFamily: 'var(--font-playfair)' }}>
            {clickPromptText}
          </span>
        </div>
      )}
    </section>
  )
}

/* ============ KISS PARTICLE ============ */
function KissParticle({ x, y }: { x: number; y: number }) {
  return (
    <div className="absolute kiss-float pointer-events-none" style={{ left: x, top: y }}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <text x="12" y="18" textAnchor="middle" fontSize="18" fill="#E8686A">&#x2764;</text>
      </svg>
    </div>
  )
}

/* ============ MAIN PAGE ============ */
export default function Home() {
  const [openingPhase, setOpeningPhase] = useState(0)
  const [showRoseBloom, setShowRoseBloom] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const [openingComplete, setOpeningComplete] = useState(false)
  const [activeAnimations, setActiveAnimations] = useState<Record<string, boolean>>({})

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)

  // Opening animation sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    timers.push(setTimeout(() => setOpeningPhase(1), 500))
    timers.push(setTimeout(() => setShowRoseBloom(true), 7000))
    timers.push(setTimeout(() => setShowDate(true), 9000))
    timers.push(setTimeout(() => setOpeningPhase(5), 12000))
    timers.push(setTimeout(() => setOpeningComplete(true), 13500))
    return () => timers.forEach(clearTimeout)
  }, [])

  // Auto-play music on first interaction
  useEffect(() => {
    const handleInteraction = async () => {
      if (audioRef.current && !musicPlaying) {
        try {
          await audioRef.current.play()
          setMusicPlaying(true)
        } catch {
          // Autoplay blocked
        }
      }
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
    document.addEventListener('click', handleInteraction, { once: true })
    document.addEventListener('touchstart', handleInteraction, { once: true })
    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [musicPlaying])

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause()
        setMusicPlaying(false)
      } else {
        audioRef.current.play()
        setMusicPlaying(true)
      }
    }
  }, [musicPlaying])

  const triggerAnimation = useCallback((key: string) => {
    setActiveAnimations(prev => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setActiveAnimations(prev => ({ ...prev, [key]: false }))
    }, 5000)
  }, [])

  // ============ OPENING SCREEN ============
  if (!openingComplete) {
    return (
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden ${openingPhase === 5 ? 'opening-fade-out' : ''}`}
        style={{ background: 'radial-gradient(ellipse at center, #2a0a14 0%, #1a0a0e 50%, #0d0507 100%)' }}
      >
        {/* Audio element */}
        <audio ref={audioRef} loop preload="auto">
          <source src="https://cdn.pixabay.com/audio/2022/02/22/audio_d1718ab41b.mp3" type="audio/mpeg" />
        </audio>

        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1.5 + Math.random() * 3}px`,
                height: `${1.5 + Math.random() * 3}px`,
                background: `rgba(255, 182, 193, ${0.15 + Math.random() * 0.25})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `softGlow ${3 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Main text area */}
        <div className="relative z-10 flex flex-col items-center select-none">
          {/* Line 1: Happy Birthday */}
          <div className="flex items-baseline gap-3 sm:gap-5 flex-wrap justify-center mb-3 sm:mb-4">
            <span
              className="opening-word opening-word-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide"
              style={{ color: '#FFD1DC', fontFamily: 'var(--font-playfair)' }}
            >
              Happy
            </span>
            <span
              className="opening-word opening-word-2 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-wide"
              style={{ color: '#E8686A', fontFamily: 'var(--font-playfair)' }}
            >
              Birthday
            </span>
          </div>

          {/* Line 2: My B with heart frame */}
          <div className="relative flex items-center justify-center mt-2 sm:mt-4">
            <span
              className="opening-word opening-word-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light"
              style={{ color: '#FFB6C1', fontFamily: 'var(--font-playfair)' }}
            >
              My
            </span>
            <span
              className="opening-word opening-word-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-2 sm:ml-3"
              style={{ color: '#C76B8F', fontFamily: 'var(--font-playfair)' }}
            >
              B
            </span>

            {/* Heart outline framing the "My B" */}
            <div className="absolute pointer-events-none" style={{ width: 'clamp(260px, 50vw, 420px)', height: 'clamp(180px, 35vw, 300px)' }}>
              <HeartSVGOutline className="w-full h-full heart-svg-glow" />
            </div>
          </div>
        </div>

        {/* Roses blooming around the edges */}
        {showRoseBloom && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {Array.from({ length: 20 }, (_, i) => {
              const angle = (i / 20) * Math.PI * 2
              const radius = 36 + Math.random() * 14
              const x = 50 + Math.cos(angle) * radius
              const y = 50 + Math.sin(angle) * radius
              return (
                <div
                  key={i}
                  className="absolute rose-bloom"
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <RoseSVG
                    color={['#C76B8F', '#FFB6C1', '#E8686A', '#FFD1DC', '#8B2252'][i % 5]}
                    size={30 + Math.random() * 35}
                  />
                </div>
              )
            })}
            {Array.from({ length: 14 }, (_, i) => {
              const angle = ((i + 0.5) / 14) * Math.PI * 2
              const radius = 28 + Math.random() * 18
              const x = 50 + Math.cos(angle) * radius
              const y = 50 + Math.sin(angle) * radius
              return (
                <div
                  key={`fill-${i}`}
                  className="absolute rose-bloom"
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${0.7 + i * 0.08}s`,
                  }}
                >
                  <RoseSVG
                    color={['#C76B8F', '#FFB6C1', '#E8686A'][i % 3]}
                    size={22 + Math.random() * 25}
                  />
                </div>
              )
            })}
          </div>
        )}

        {/* Date reveal */}
        {showDate && (
          <div className="absolute z-30 date-reveal" style={{ bottom: '22%' }}>
            <span
              className="text-2xl sm:text-4xl md:text-5xl font-light"
              style={{ color: '#D4AF37', fontFamily: 'var(--font-playfair)', letterSpacing: '8px' }}
            >
              June 19
            </span>
          </div>
        )}
      </div>
    )
  }

  // ============ MAIN CONTENT ============
  return (
    <main className="relative" style={{ background: '#1a0a0e' }}>
      {/* Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://cdn.pixabay.com/audio/2022/02/22/audio_d1718ab41b.mp3" type="audio/mpeg" />
      </audio>

      {/* Music toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleMusic() }}
        className={`fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md ${musicPlaying ? 'music-btn-playing' : ''}`}
        style={{ background: 'rgba(199, 107, 143, 0.25)', border: '1px solid rgba(255, 182, 193, 0.25)' }}
        aria-label={musicPlaying ? 'Pause music' : 'Play music'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD1DC" strokeWidth="2" strokeLinecap="round">
          {musicPlaying ? (
            <>
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </>
          ) : (
            <polygon points="5 3 19 12 5 21 5 3" fill="#FFD1DC" />
          )}
        </svg>
      </button>

      {/* Floating petals overlay */}
      <FloatingPetals />

      {/* ====== SECTION 1 ====== */}
      <RomanticSection
        id="section1"
        onClickAction={() => triggerAnimation('teddy')}
        interactiveContent={
          activeAnimations['teddy'] ? (
            <div className="relative teddy-appear">
              <TeddyBearSVG className="w-28 h-28 sm:w-40 sm:h-40" />
              {/* Kiss hearts floating up */}
              <KissParticle x={-15} y={-10} />
              <KissParticle x={20} y={-20} />
              <KissParticle x={-5} y={-35} />
            </div>
          ) : null
        }
        showInteractive={!!activeAnimations['teddy']}
        clickPromptText="tap for a surprise"
        bgGradient="radial-gradient(ellipse at 50% 40%, rgba(255, 209, 220, 0.07) 0%, rgba(199, 107, 143, 0.04) 40%, rgba(26, 10, 14, 1) 100%)"
        roseColors={['#C76B8F', '#FFB6C1', '#E8686A', '#FFD1DC']}
        roseCount={8}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
          <h2 className="text-reveal text-4xl sm:text-5xl md:text-6xl font-semibold" style={{ color: '#FFD1DC', fontFamily: 'var(--font-playfair)' }}>
            Happy Birthday, Bishoy
          </h2>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 209, 220, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            Today the world celebrates you — and so do I
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 182, 193, 0.75)', fontFamily: 'var(--font-playfair)' }}>
            But honestly? Every single day feels like your birthday to me
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(232, 104, 106, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            Because every day with you is a gift I never want to return
          </p>
        </div>
      </RomanticSection>

      {/* ====== SECTION 2 ====== */}
      <RomanticSection
        id="section2"
        onClickAction={() => triggerAnimation('breathingHeart')}
        interactiveContent={
          activeAnimations['breathingHeart'] ? (
            <div className="heart-breathe">
              <HeartSVGFilled className="w-24 h-24 sm:w-36 sm:h-36" />
            </div>
          ) : null
        }
        showInteractive={!!activeAnimations['breathingHeart']}
        clickPromptText="tap to feel the heartbeat"
        bgGradient="radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 209, 220, 0.03) 40%, rgba(26, 10, 14, 1) 100%)"
        roseColors={['#FFD1DC', '#FFB6C1', '#ffffff']}
        roseCount={7}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'var(--font-playfair)' }}>
            You didn&apos;t just walk into my life… you became it
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 209, 220, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            Before you, I didn&apos;t know that someone could feel like home
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 182, 193, 0.75)', fontFamily: 'var(--font-playfair)' }}>
            Now I can&apos;t imagine a single day without your voice, your laugh, your presence
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(232, 104, 106, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            You changed everything — quietly, deeply, forever
          </p>
        </div>
      </RomanticSection>

      {/* ====== SECTION 3 ====== */}
      <RomanticSection
        id="section3"
        onClickAction={() => triggerAnimation('bloomRose')}
        interactiveContent={
          activeAnimations['bloomRose'] ? (
            <div className="rose-bloom-interactive">
              <RoseSVG color="#E8686A" size={150} />
            </div>
          ) : null
        }
        showInteractive={!!activeAnimations['bloomRose']}
        clickPromptText="tap to bloom a rose"
        bgGradient="radial-gradient(ellipse at 50% 45%, rgba(232, 104, 106, 0.08) 0%, rgba(139, 34, 82, 0.05) 40%, rgba(26, 10, 14, 1) 100%)"
        roseColors={['#8B2252', '#E8686A', '#C76B8F']}
        roseCount={9}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
          <p className="text-reveal text-2xl sm:text-3xl md:text-4xl font-medium" style={{ color: '#E8686A', fontFamily: 'var(--font-playfair)' }}>
            Every moment with you feels like home
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 209, 220, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            The small moments, the silly ones, the ones no one else would understand
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 182, 193, 0.75)', fontFamily: 'var(--font-playfair)' }}>
            Those are my favorite chapters of my life
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(199, 107, 143, 0.85)', fontFamily: 'var(--font-playfair)' }}>
            And you&apos;re the reason I love the story
          </p>
        </div>
      </RomanticSection>

      {/* ====== SECTION 4 ====== */}
      <RomanticSection
        id="section4"
        onClickAction={() => triggerAnimation('shootingStars')}
        interactiveContent={
          activeAnimations['shootingStars'] ? (
            <ShootingStars />
          ) : null
        }
        showInteractive={!!activeAnimations['shootingStars']}
        clickPromptText="tap to make a wish"
        bgGradient="radial-gradient(ellipse at 50% 40%, rgba(255, 209, 220, 0.05) 0%, rgba(212, 175, 55, 0.02) 40%, rgba(26, 10, 14, 1) 100%)"
        roseColors={['#FFB6C1', '#FFD1DC', '#D4AF37']}
        roseCount={7}
      >
        {/* Golden sparkles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {sparkleData.map((s) => (
            <div
              key={s.id}
              className="absolute golden-sparkle"
              style={{
                top: s.top,
                left: s.left,
                '--sparkle-delay': s.delay,
                '--sparkle-duration': s.duration,
                width: s.size,
                height: s.size,
              } as React.CSSProperties}
            >
              <div className="w-full h-full rounded-full" style={{ background: '#D4AF37', boxShadow: '0 0 6px rgba(212, 175, 55, 0.5)' }} />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
          <p className="text-reveal text-2xl sm:text-3xl md:text-4xl font-medium" style={{ color: '#FFD1DC', fontFamily: 'var(--font-playfair)' }}>
            You are my favorite person in every version of every story
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 209, 220, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            In every timeline, every lifetime, every universe —
          </p>
          <p className="text-reveal text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed" style={{ color: '#D4AF37', fontFamily: 'var(--font-playfair)' }}>
            I&apos;d find you. I&apos;d choose you. Again and again and again.
          </p>
        </div>
      </RomanticSection>

      {/* ====== SECTION 5 (ARABIC) ====== */}
      <RomanticSection
        id="section5"
        onClickAction={() => triggerAnimation('moon')}
        interactiveContent={
          activeAnimations['moon'] ? (
            <div className="moon-glow">
              <CrescentMoonSVG className="w-28 h-28 sm:w-44 sm:h-44" />
            </div>
          ) : null
        }
        showInteractive={!!activeAnimations['moon']}
        clickPromptText="tap for moonlight"
        bgGradient="radial-gradient(ellipse at 70% 25%, rgba(255, 248, 220, 0.04) 0%, rgba(139, 34, 82, 0.06) 30%, rgba(26, 10, 14, 1) 100%)"
        roseColors={['#C76B8F', '#8B2252', '#FFB6C1']}
        roseCount={8}
      >
        {/* Moonlight glow */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 pointer-events-none" style={{ background: 'radial-gradient(circle at 75% 15%, rgba(255, 248, 220, 0.025) 0%, transparent 55%)' }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8" dir="rtl">
          <p className="text-reveal text-xl sm:text-2xl md:text-3xl leading-loose" style={{ color: 'rgba(255, 248, 220, 0.88)', fontFamily: 'var(--font-amiri), Amiri, serif' }}>
            الماضى اية الماضى مين نسيت ف حضنك إلى شوفتة من السنين ♥️
          </p>
          <p className="text-reveal text-xl sm:text-2xl md:text-3xl leading-loose" style={{ color: 'rgba(255, 209, 220, 0.88)', fontFamily: 'var(--font-amiri), Amiri, serif' }}>
            انت قمري والقاف عين وإذا غابت العين ابدلنا الميم بالدال ♥️
          </p>
          <p className="text-reveal text-xl sm:text-2xl md:text-3xl leading-loose" style={{ color: 'rgba(232, 104, 106, 0.88)', fontFamily: 'var(--font-amiri), Amiri, serif' }}>
            ويكفينى من هذا العمر انى حظيت بك ♥️
          </p>
        </div>
      </RomanticSection>

      {/* ====== SECTION 6 ====== */}
      <RomanticSection
        id="section6"
        onClickAction={() => triggerAnimation('cake')}
        interactiveContent={
          activeAnimations['cake'] ? (
            <div className="cake-appear">
              <BirthdayCakeSVG className="w-36 h-40 sm:w-48 sm:h-52" />
            </div>
          ) : null
        }
        showInteractive={!!activeAnimations['cake']}
        clickPromptText="tap to celebrate"
        bgGradient="radial-gradient(ellipse at 50% 50%, rgba(255, 209, 220, 0.07) 0%, rgba(199, 107, 143, 0.04) 30%, rgba(232, 104, 106, 0.02) 55%, rgba(26, 10, 14, 1) 100%)"
        roseColors={['#C76B8F', '#FFB6C1', '#E8686A', '#FFD1DC', '#D4AF37']}
        roseCount={10}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-7">
          <h2 className="text-reveal text-3xl sm:text-4xl md:text-5xl font-semibold" style={{ color: '#FFD1DC', fontFamily: 'var(--font-playfair)' }}>
            Here&apos;s to you, here&apos;s to us
          </h2>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 209, 220, 0.8)', fontFamily: 'var(--font-playfair)' }}>
            To every laugh we shared, every moment we lived
          </p>
          <p className="text-reveal text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255, 182, 193, 0.75)', fontFamily: 'var(--font-playfair)' }}>
            To all the birthdays yet to come — may I spend every single one by your side
          </p>
          <p className="text-reveal text-2xl sm:text-3xl md:text-4xl font-medium" style={{ color: '#E8686A', fontFamily: 'var(--font-playfair)' }}>
            Happy Birthday my love
          </p>
        </div>
      </RomanticSection>

      {/* Footer */}
      <footer className="relative py-14 text-center" style={{ background: 'linear-gradient(to bottom, #1a0a0e, #0d0507)' }}>
        <div className="flex items-center justify-center gap-3 mb-5">
          <RoseSVG color="#C76B8F" size={22} />
          <RoseSVG color="#E8686A" size={28} />
          <RoseSVG color="#FFB6C1" size={22} />
        </div>
        <p className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(255, 182, 193, 0.35)', fontFamily: 'var(--font-playfair)' }}>
          Made with love
        </p>
      </footer>
    </main>
  )
}
