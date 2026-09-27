'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const slides = [
  { name: 'Moyu videos and review', className: 'hero-scene-moyu' },
  { name: 'Miaozi story reader', className: 'hero-scene-miaozi-reader' },
  { name: 'Moyu listening practice', className: 'hero-scene-moyu-listening' },
  { name: 'Miaozi dictionary', className: 'hero-scene-miaozi-dictionary' },
  { name: 'Miaozi story library', className: 'hero-scene-miaozi-library' },
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
        <div className={`hero-scene ${slides[0].className}`} role="group" aria-roledescription="slide" aria-label={slides[0].name} aria-hidden={active !== 0} data-active={active === 0}>
          <div className="hero-phone hero-phone-video">
            <Image src="/images/moyu-spongebob.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 39vw, 190px" priority />
          </div>
          <div className="hero-phone hero-phone-review">
            <Image src="/images/moyu-review.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 35vw, 175px" />
          </div>
        </div>
        <div className={`hero-scene ${slides[1].className}`} role="group" aria-roledescription="slide" aria-label={slides[1].name} aria-hidden={active !== 1} data-active={active === 1}>
          <div className="hero-miaozi-shot hero-miaozi-story">
            <Image src="/images/miaozi-reader.webp" width={704} height={540} alt="" sizes="(max-width: 700px) 72vw, 330px" loading="eager" />
          </div>
          <div className="hero-miaozi-shot hero-miaozi-lookup">
            <Image src="/images/miaozi-reader-lookup.webp" width={900} height={385} alt="" sizes="(max-width: 700px) 80vw, 390px" loading="eager" />
          </div>
        </div>
        <div className={`hero-scene ${slides[2].className}`} role="group" aria-roledescription="slide" aria-label={slides[2].name} aria-hidden={active !== 2} data-active={active === 2}>
          <div className="hero-phone hero-phone-listening">
            <Image src="/images/moyu-video.webp" width={750} height={1631} alt="" sizes="(max-width: 700px) 43vw, 190px" loading="eager" />
          </div>
        </div>
        <div className={`hero-scene ${slides[3].className}`} role="group" aria-roledescription="slide" aria-label={slides[3].name} aria-hidden={active !== 3} data-active={active === 3}>
          <Image src="/images/miaozi-dictionary-detail.webp" width={790} height={500} alt="" sizes="(max-width: 700px) 87vw, 430px" loading="eager" />
        </div>
        <div className={`hero-scene ${slides[4].className}`} role="group" aria-roledescription="slide" aria-label={slides[4].name} aria-hidden={active !== 4} data-active={active === 4}>
          <Image src="/images/miaozi-library.webp" width={560} height={320} alt="" sizes="(max-width: 700px) 87vw, 430px" loading="eager" />
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
      <Image className="hero-cat" src="/images/mascot/cat-sitting-left-v1.webp" width={360} height={347} alt="" aria-hidden="true" />
    </div>
  )
}
