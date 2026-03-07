import { useEffect, useRef, useCallback } from 'react'

export default function YesTrail({ containerRef }) {
    const lastSpawnTime = useRef(0)
    const lastSpawnPos = useRef({ x: 0, y: 0 })
    const isActive = useRef(false)

    const spawnYes = useCallback((x, y, container) => {
        const now = Date.now()
        // Throttle spawning by time
        if (now - lastSpawnTime.current < 40) return
        
        // Throttle spawning by distance
        const dist = Math.hypot(x - lastSpawnPos.current.x, y - lastSpawnPos.current.y)
        if (dist < 100) return // Adjust this value to require more distance between spawns
        
        lastSpawnTime.current = now
        lastSpawnPos.current = { x, y }

        const containerRect = container.getBoundingClientRect()
        const relX = x - containerRect.left
        const relY = y - containerRect.top

        const el = document.createElement('span')
        el.textContent = 'YES!'
        el.className = 'yes-trail-text'

        // Randomize properties for organic feel like the original site
        const scale = 1.3 + Math.random() * 0.90 // 0.7 to 1.7
        const rotation = -30 + Math.random() * 60 // -30 to 30 degrees
        const offsetX = -20 + Math.random() * 40
        const offsetY = -20 + Math.random() * 40

        el.style.cssText = `
            position: absolute;
            left: ${relX + offsetX}px;
            top: ${relY + offsetY}px;
            font-family: 'Tentang Nanti One', cursive;
            font-weight: 500;
            font-style: italic;
            font-size: ${26 * scale}px;
            color: #E8533E;
            pointer-events: none;
            z-index: 15;
            transform: translate(-50%, -50%) rotate(${rotation}deg);
            opacity: 0.9;
            user-select: none;
            white-space: nowrap;
            will-change: opacity, transform;
        `

        container.appendChild(el)

        // Animate: fall down with gravity + fade out
        let startTime = null
        const duration = 2500 // 1.4 seconds total

        const animateFade = (timestamp) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease-in for gravity feel (accelerates downward)
            const gravityEased = progress * progress
            const fallDistance = gravityEased * 120 // falls 120px down

            // Fade out with ease-out curve (starts fading later, then speeds up)
            const fadeProgress = Math.max(0, (progress - 0.2) / 0.8) // delay fade start
            const currentOpacity = 0.9 * (1 - fadeProgress * fadeProgress)
            const currentScale = scale * (1 - progress * 0.15)

            el.style.opacity = currentOpacity
            el.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${currentScale}) translateY(${fallDistance}px)`

            if (progress < 1) {
                requestAnimationFrame(animateFade)
            } else {
                if (el.parentNode) {
                    el.parentNode.removeChild(el)
                }
            }
        }

        // Start fade after a brief pause (text stays full for 200ms)
        setTimeout(() => {
            requestAnimationFrame(animateFade)
        }, 200)
    }, [])

    useEffect(() => {
        const container = containerRef?.current
        if (!container) return

        const handleMouseMove = (e) => {
            if (isActive.current) {
                spawnYes(e.clientX, e.clientY, container)
            }
        }

        const handleMouseEnter = () => {
            isActive.current = true
        }

        const handleMouseLeave = () => {
            isActive.current = false
        }

        container.addEventListener('mousemove', handleMouseMove)
        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            container.removeEventListener('mousemove', handleMouseMove)
            container.removeEventListener('mouseenter', handleMouseEnter)
            container.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [containerRef, spawnYes])

    return null
}
