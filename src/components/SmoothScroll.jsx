import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScroll({ children }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        })

        lenis.on('scroll', ScrollTrigger.update)

        ScrollTrigger.scrollerProxy(document.documentElement, {
            scrollTop(value) {
                if (typeof value === 'number') {
                    lenis.scrollTo(value, { immediate: true })
                }
                return window.scrollY || document.documentElement.scrollTop || 0
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            },
            pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
        })

        ScrollTrigger.defaults({ scroller: document.documentElement })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        const handleRefresh = () => lenis.resize()
        ScrollTrigger.addEventListener('refresh', handleRefresh)
        ScrollTrigger.refresh()

        return () => {
            ScrollTrigger.removeEventListener('refresh', handleRefresh)
            ScrollTrigger.killAll(false)
            lenis.destroy()
        }
    }, [])

    return children
}
