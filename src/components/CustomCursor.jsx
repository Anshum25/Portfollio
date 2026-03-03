import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const dotRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const dot = dotRef.current
        if (!cursor || !dot) return

        let mouseX = 0, mouseY = 0
        let cursorX = 0, cursorY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            dot.style.left = mouseX + 'px'
            dot.style.top = mouseY + 'px'
        }

        const handleMouseOver = (e) => {
            const target = e.target
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')
            ) {
                cursor.classList.add('hovering')
            }
        }

        const handleMouseOut = (e) => {
            const target = e.target
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')
            ) {
                cursor.classList.remove('hovering')
            }
        }

        // Smooth follow with lerp
        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.15
            cursorY += (mouseY - cursorY) * 0.15
            cursor.style.left = cursorX + 'px'
            cursor.style.top = cursorY + 'px'
            requestAnimationFrame(animate)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)
        animate()

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <>
            <div ref={cursorRef} className="custom-cursor hidden md:block" />
            <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
        </>
    )
}
