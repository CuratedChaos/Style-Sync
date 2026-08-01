import { useState, useEffect } from 'react'
import { LogoSplash } from '../Logo/Logo'
import { ADS, BRANDS } from '../../constants/splash'

/* ══════════════════════════════════════════
   SPLASH SCREEN
══════════════════════════════════════════ */



export function SplashScreen({ onEnter }: { onEnter: () => void }) {
  const [adIndex, setAdIndex]   = useState(0)
  const [exiting, setExiting]   = useState(false)
  const [prevIdx, setPrevIdx]   = useState<number | null>(null)

  // Rotate ads every 3.5 s
  useEffect(() => {
    const t = setInterval(() => {
      setPrevIdx(adIndex)
      setAdIndex(i => (i + 1) % ADS.length)
      setTimeout(() => setPrevIdx(null), 550)
    }, 3500)
    return () => clearInterval(t)
  }, [adIndex])

  function handleTap() {
    setExiting(true)
    setTimeout(onEnter, 580)
  }

  return (
    <div className={`splashScreen${exiting ? ' exiting' : ''}`} onClick={handleTap}>

      {/* ── TOP 3/4 — LOGO HERO ── */}
      <div className="splashHero">

        <LogoSplash />

        <div className="splashAiBadge">
          <i className="ri-cpu-line" />
          Powered by BodyMap™ AI Technology
        </div>

        {/* Scrolling brand marquee */}
        <div className="splashBrands">
          <div className="splashBrandsTrack">
            {BRANDS.map((b, i) => (
              <div key={i} className="brandPill">{b}</div>
            ))}
          </div>
        </div>

      </div>

      {/* ── BOTTOM 1/4 — AD ZONE ── */}
      <div className="splashAds">

        {/* Ad slides */}
        <div className="adSlider">
          {ADS.map((ad, i) => (
            <div
              key={i}
              className={`adSlide${i === adIndex ? ' active' : i === prevIdx ? ' exiting' : ''}`}
              style={{ background: ad.iconBg.replace('0.15','0.06') }}
            >
              <div className="adIcon" style={{ background: ad.iconBg }}>
                {ad.icon}
              </div>
              <div className="adText">
                <h4>{ad.title}</h4>
                <p>{ad.sub}</p>
              </div>
              <div
                className="adBadge"
                style={{ background: ad.badgeBg, color: ad.badgeColor }}
              >
                {ad.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="adDots">
          {ADS.map((_, i) => (
            <div key={i} className={`adDot${i === adIndex ? ' on' : ''}`} />
          ))}
        </div>

        {/* Tap to enter */}
        <div className="tapPrompt">
          <i className="ri-tap-line" />
          Tap anywhere to begin
          <i className="ri-tap-line" />
        </div>

      </div>
    </div>
  )
}
