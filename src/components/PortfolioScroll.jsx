import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PortfolioScroll({ projects }) {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Height calculation: 200vh per project block
    const blockHeight = 200
    const totalHeight = projects.length * blockHeight

    return (
        <section 
            ref={containerRef} 
            className="relative w-full bg-dark text-white" 
            style={{ height: `${totalHeight}vh` }}
        >
            {/* Sticky Titles Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-10">
                {projects.map((proj, i) => {
                    // Mapped scroll values for crossfading titles
                    const startFadeIn = (i - 0.2) / projects.length
                    const fullOpacityStart = i / projects.length
                    const fullOpacityEnd = (i + 0.7) / projects.length
                    const endFadeOut = (i + 1) / projects.length

                    const opacity = useTransform(
                        scrollYProgress,
                        [
                            Math.max(0, startFadeIn), 
                            Math.max(0, fullOpacityStart), 
                            Math.min(1, fullOpacityEnd), 
                            Math.min(1, endFadeOut)
                        ],
                        [0, 1, 1, 0]
                    )

                    const y = useTransform(
                        scrollYProgress,
                        [
                            Math.max(0, startFadeIn), 
                            Math.max(0, fullOpacityStart), 
                            Math.min(1, fullOpacityEnd), 
                            Math.min(1, endFadeOut)
                        ],
                        [50, 0, 0, -50]
                    )

                    return (
                        <motion.div 
                            key={i} 
                            style={{ opacity, y }} 
                            className="absolute flex flex-col items-center justify-center w-full px-6 text-center"
                        >
                            <div className="flex items-start justify-center gap-4 mb-2 md:mb-6">
                                <span className="font-script text-coral text-3xl md:text-5xl italic" style={{ fontFamily: "'Tentang Nanti One', cursive" }}>
                                    ({proj.number})
                                </span>
                                {proj.isNew && (
                                    <span className="font-script text-coral text-lg italic mt-1 md:mt-2 inline-block" style={{ fontFamily: "'Tentang Nanti One', cursive" }}>
                                        NEW
                                    </span>
                                )}
                            </div>
                            <h3 className="heading-ultra text-[clamp(3.5rem,8vw,9rem)] leading-[0.85] text-white">
                                {proj.title}
                            </h3>
                            <p className="text-[14px] md:text-[16px] opacity-50 mt-4 md:mt-8 max-w-md leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {proj.subtitle}
                            </p>
                            <div className="mt-8 md:mt-12 pointer-events-auto">
                                <Link to="/portfolio" className="btn-outline btn-outline-white text-[12px]">
                                    See project
                                </Link>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Scrolling Images Container */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" style={{ clipPath: 'inset(0 0 0 0)' }}>
                {projects.map((proj, i) => {
                    return (
                        <div key={i} className="absolute w-full" style={{ top: `${i * blockHeight}vh`, height: `${blockHeight}vh` }}>
                            {/* Left Image */}
                            <div 
                                className="absolute left-[5%] md:left-[10%] w-[40%] md:w-[32%] rounded-xl overflow-hidden shadow-2xl" 
                                style={{ top: '70vh', aspectRatio: '4/3' }}
                            >
                                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                            </div>
                            
                            {/* Right Image */}
                            <div 
                                className="absolute right-[5%] md:right-[10%] w-[40%] md:w-[32%] rounded-xl overflow-hidden shadow-2xl" 
                                style={{ top: '150vh', aspectRatio: '3/4' }}
                            >
                                {/* Using placeholder random crop of same image if right image doesn't exist */}
                                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover object-left" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
