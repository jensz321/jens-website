import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.service-item, .work-card, .skill-category, .approach-card, ' +
      '.who-content p, .project-card, .contact-card, ' +
      '.skill-column, .story-content p'
    )

    animatedElements.forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
