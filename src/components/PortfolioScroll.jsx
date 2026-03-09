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
  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
>

  {/* Top Caption */}
  <p
    className="uppercase text-[13px] tracking-[0.18em] text-white/70 mb-10"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    WHAT SAYING{" "}
    <span
      className="text-[#ff5a3c]"
      style={{
        fontFamily: "'Tentang Nanti One', cursive",
        transform: "rotate(-6deg)",
        display: "inline-block",
        fontSize: "1.2em",
        textTransform: "none",
        letterSpacing: "normal"
      }}
    >
      'yes!'
    </span>{" "}
    LOOKS LIKE
  </p>

  {/* Project Title */}
  <div className="relative flex items-start justify-center">

    <h2
      className="heading-ultra text-white uppercase leading-[1.22] tracking-[-0.04em]"
      style={{
        fontSize: "clamp(5rem, 14vw, 13rem)"
      }}
    >
      {proj.title}
    </h2>

   

  </div>

 {/* Subtitle */}
<p
  className="mt-14 md:mt-16 text-[12px] md:text-[13px] text-white/70 uppercase tracking-[0.22em] max-w-[720px] leading-[1.8] mx-auto text-center"
  style={{ fontFamily: "Inter, sans-serif" }}
>
  {proj.subtitle}
</p>

{/* Button */}
<div className="mt-10 md:mt-12 flex justify-center pointer-events-auto">
  <Link
    to="/portfolio"
    className="
      inline-flex items-center justify-center
      px-7 py-3
      md:px-9 md:py-3.5
      mt-14 md:mt-16
      text-[12px] md:text-[13px]
      uppercase tracking-[0.18em]
      bg-white text-black
      border border-white
      rounded-md
      transition-all duration-300
      hover:bg-transparent hover:text-white
    "
  >
    SEE PROJECT
  </Link>
</div>
</motion.div>
                    )
                })}
            </div>

            {/* Scrolling Images Container */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" style={{ clipPath: 'inset(0 0 0 0)' }}>
                {projects.map((proj, i) => {
                    // Alternate left/right based on index
                    const isLeft = i % 2 !== 0; // 0=right, 1=left, 2=right
                    
                    return (
                        <div key={i} className="absolute w-full" style={{ top: `${i * blockHeight}vh`, height: `${blockHeight}vh` }}>
                            {/* Image Container with Lines */}
                            <div 
                                className={`absolute ${isLeft ? 'left-[0%] md:left-[5%]' : 'right-[0%] md:right-[5%]'} w-[80%] md:w-[35%] flex flex-col`} 
                                style={{ top: '80vh' }}
                            >
                                {/* Vertical Decorative Lines */}
                                <div className="relative w-full h-[40vh]">
                                    <div className="absolute bg-[#e5e5e5] w-[2px]" style={{ left: '10%', top: isLeft ? '0%' : '40%', bottom: '0' }}></div>
                                    <div className="absolute bg-[#e5e5e5] w-[2px]" style={{ left: '50%', top: isLeft ? '30%' : '10%', bottom: '0' }}></div>
                                    <div className="absolute bg-[#e5e5e5] w-[2px]" style={{ left: '90%', top: isLeft ? '50%' : '30%', bottom: '0' }}></div>
                                </div>
                                
                                {/* Sharp-edged Image */}
                                <div className="w-full shadow-2xl relative bg-dark" style={{ aspectRatio: isLeft ? '16/10' : '4/3' }}>
                                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
