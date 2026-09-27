'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const slides = [
  { name: 'Moyu Chinese', className: 'hero-scene-moyu' },
  { name: 'Miaozi', className: 'hero-scene-miaozi' },
] as const

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    updateMotion()
    media.addEventListener('change', updateMotion)
    return () => media.removeEventListener('change', updateMotion)
  }, [])

  useEffect(() => {
    if (!rootRef.current) return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reducedMotion || isPaused || !isVisible) return
    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') setActive((current) => (current + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(interval)
  }, [reducedMotion, isPaused, isVisible])

  return (
    <div
      ref={rootRef}
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Screens from Moyu Chinese and Miaozi"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      <div className="hero-carousel-stage">
        <div className={`hero-scene ${slides[0].className}`} role="group" aria-roledescription="slide" aria-label="Moyu Chinese screenshots" aria-hidden={active !== 0} data-active={active === 0}>
          <div className="hero-phone hero-phone-video">
            <Image src="/images/moyu-spongebob.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 39vw, 190px" priority />
          </div>
          <div className="hero-phone hero-phone-review">
            <Image src="/images/moyu-review.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 35vw, 175px" />
          </div>
        </div>
        <div className={`hero-scene ${slides[1].className}`} role="group" aria-roledescription="slide" aria-label="Miaozi screenshots" aria-hidden={active !== 1} data-active={active === 1}>
          <div className="hero-miaozi-shot hero-miaozi-reader">
            <Image src="/images/miaozi-reader.webp" width={704} height={540} alt="" sizes="(max-width: 700px) 72vw, 330px" loading="eager" />
          </div>
          <div className="hero-miaozi-shot hero-miaozi-dictionary">
            <Image src="/images/miaozi-dictionary.webp" width={620} height={385} alt="" sizes="(max-width: 700px) 62vw, 285px" loading="eager" />
          </div>
        </div>
      </div>
      <div className="hero-carousel-controls" aria-label="Choose a product screenshot">
        {slides.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            aria-label={`Show ${slide.name} screenshots`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span />
          </button>
        ))}
      </div>
      <Image className="hero-cat" src="/images/mascot/cat-sitting.webp" width={460} height={484} alt="" aria-hidden="true" />
    </div>
  )
}
