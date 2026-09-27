'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const slides = [
  { product: 'Moyu Chinese', className: 'hero-scene-moyu' },
  { product: 'Miaozi', className: 'hero-scene-miaozi' },
  { product: 'Moyu Chinese', className: 'hero-scene-moyu' },
  { product: 'Miaozi', className: 'hero-scene-miaozi' },
  { product: 'Moyu Chinese', className: 'hero-scene-moyu' },
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
    }, 5500)
    return () => window.clearInterval(interval)
  }, [reducedMotion, isPaused, isVisible])

  return (
    <div
      ref={rootRef}
      className="hero-carousel"
      role="region"
      aria-label="Moyu Chinese and Miaozi"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      <div className="hero-carousel-stage">
        <div className={`hero-scene ${slides[0].className}`} role="group" aria-label="Moyu Chinese 1/5" aria-hidden={active !== 0} data-active={active === 0}>
          <div className="hero-phone hero-phone-video">
            <Image src="/images/moyu-shinchan.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 39vw, 190px" priority />
          </div>
          <div className="hero-phone hero-phone-review">
            <Image src="/images/moyu-review-card.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 35vw, 175px" />
          </div>
        </div>
        <div className={`hero-scene ${slides[1].className}`} role="group" aria-label="Miaozi 2/5" aria-hidden={active !== 1} data-active={active === 1}>
          <div className="hero-miaozi-shot">
            <Image src="/images/miaozi-story-cat.webp" width={900} height={625} alt="" sizes="(max-width: 700px) 90vw, 470px" loading="eager" />
          </div>
        </div>
        <div className={`hero-scene ${slides[2].className}`} role="group" aria-label="Moyu Chinese 3/5" aria-hidden={active !== 2} data-active={active === 2}>
          <div className="hero-phone hero-phone-video">
            <Image src="/images/moyu-south-park.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 39vw, 190px" loading="eager" />
          </div>
          <div className="hero-phone hero-phone-review">
            <Image src="/images/moyu-library.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 35vw, 175px" loading="eager" />
          </div>
        </div>
        <div className={`hero-scene ${slides[3].className}`} role="group" aria-label="Miaozi 4/5" aria-hidden={active !== 3} data-active={active === 3}>
          <div className="hero-miaozi-shot">
            <Image src="/images/miaozi-story-bubble-tea.webp" width={900} height={625} alt="" sizes="(max-width: 700px) 90vw, 470px" loading="eager" />
          </div>
        </div>
        <div className={`hero-scene ${slides[4].className}`} role="group" aria-label="Moyu Chinese 5/5" aria-hidden={active !== 4} data-active={active === 4}>
          <div className="hero-phone hero-phone-video">
            <Image src="/images/moyu-dictionary-search.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 39vw, 190px" loading="eager" />
          </div>
          <div className="hero-phone hero-phone-review">
            <Image src="/images/moyu-word-sheet.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 35vw, 175px" loading="eager" />
          </div>
        </div>
      </div>
      <div className="hero-carousel-controls" aria-label="Moyu Chinese and Miaozi">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${slide.product} ${index + 1}/${slides.length}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span />
          </button>
        ))}
      </div>
      <Image className="hero-cat" src="/images/mascot/cat-sitting-left-v1.webp" width={360} height={347} alt="" aria-hidden="true" />
    </div>
  )
}
