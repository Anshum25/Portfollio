import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
}

const thinkingPoints = [
    {
        title: "Visuals without strategy don't work at scale.",
        description: "Pretty layouts don't close deals. Your website should earn trust, position you as an expert, and make \"yes\" feel inevitable, not just win awards.",
    },
    {
        title: "Good news: websites don't have to suck.",
        description: "I prioritize effectiveness over aesthetics, but a low-budget look undermines credibility. Cheap design and premium pricing don't coexist.",
    },
    {
        title: 'Your website should speak for your expertise.',
        description: "Visitors should understand what you do, who it's for, and why it matters — before the first conversation.",
    },
    {
        title: 'A website is a business tool, not a magic fix.',
        description: "It solves specific business problems. A website doesn't solve everything and if you don't actually need one, I'll tell you that directly.",
    },
]

export default function About() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero */}
            <section className="min-h-screen flex flex-col justify-end bg-beige pb-20 pt-32 px-6 md:px-10 relative">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h1 className="heading-ultra text-[clamp(4rem,16vw,20rem)] text-dark mb-10">
                            ABOUT
                        </h1>
                        <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-light max-w-4xl leading-[1.4] opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                            For 5 years fixing the gap between how good your business is and how it looks online.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What I Do */}
            <section className="py-24 md:py-32 px-6 md:px-10 bg-beige">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h2 className="text-[clamp(1.5rem,3.5vw,3rem)] font-semibold leading-[1.2] mb-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            I work with companies who sell expertise, not volume and need their site to show it
                        </h2>
                        <p className="text-[16px] opacity-50 leading-relaxed max-w-3xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            High-impact websites for companies that want to be perceived differently.
                        </p>
                    </motion.div>

                    <div className="mt-16 space-y-0">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: [0.76, 0, 0.24, 1] }}
                            className="border-t border-dark/[0.12] py-10"
                        >
                            <h3 className="text-[18px] md:text-[22px] font-semibold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Building websites that reflect real expertise
                            </h3>
                            <p className="text-[15px] leading-relaxed opacity-55 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Expertise-led businesses around the world face the same challenge: sites that undersell their value.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: [0.76, 0, 0.24, 1] }}
                            className="border-t border-dark/[0.12] py-10"
                        >
                            <p className="text-[15px] leading-relaxed opacity-55 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                                I'm the guy who answers emails on weekends, remembers your business goals, and doesn't nickel-and-dime you for every comma change. One point of contact from strategy call to launch day.
                            </p>
                        </motion.div>
                        <div className="border-t border-dark/[0.12]" />
                    </div>
                </div>
            </section>

            {/* Personal Photos - Clothesline / Polaroid style */}
            <section className="py-28 md:py-40 bg-coral overflow-hidden relative">
                {/* Clothesline curve */}
                <div className="absolute top-16 md:top-20 left-0 right-0">
                    <svg className="w-full h-32" viewBox="0 0 1400 120" fill="none" preserveAspectRatio="none">
                        <path d="M0 20 Q350 90 700 40 Q1050 -10 1400 60" stroke="#1A1A1A" strokeWidth="2" fill="none" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16 md:mt-24">
                        {/* Polaroid 1 - Barbara */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: -6 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                            className="relative"
                        >
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-5 tape rounded-sm z-20" />
                            <div className="polaroid max-w-[240px] md:max-w-[300px]">
                                <img
                                    src="/images/about-personal.png"
                                    alt="Barbara"
                                    className="w-full aspect-square object-cover"
                                />
                            </div>
                            <span className="font-script text-white text-lg absolute -bottom-1 right-2 opacity-90" style={{ fontFamily: "'Tentang Nanti One', cursive", fontStyle: 'italic' }}>
                                Barbara →
                            </span>
                        </motion.div>

                        {/* Polaroid 2 - Me */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: 4 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
                            className="relative mt-10 md:mt-16"
                        >
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-5 tape rounded-sm z-20" />
                            <div className="polaroid max-w-[240px] md:max-w-[300px]">
                                <img
                                    src="/images/hero-portrait-Photoroom.png"
                                    alt="Me"
                                    className="w-full aspect-square object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Polaroid 3 - Honey */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: -3 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.24, ease: [0.76, 0, 0.24, 1] }}
                            className="relative"
                        >
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-5 tape rounded-sm z-20" />
                            <div className="polaroid max-w-[240px] md:max-w-[300px]">
                                <img
                                    src="/images/about-personal.png"
                                    alt="Honey"
                                    className="w-full aspect-square object-cover"
                                    style={{ filter: 'sepia(0.2) brightness(1.05)' }}
                                />
                            </div>
                            <span className="font-script text-white text-lg absolute -bottom-1 left-2 opacity-90" style={{ fontFamily: "'Tentang Nanti One', cursive", fontStyle: 'italic' }}>
                                ← Honey
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How I Think About Websites */}
            <section className="py-24 md:py-40 px-6 md:px-10 bg-beige">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.76, 0, 0.24, 1] }}
                        className="heading-ultra text-[clamp(2.5rem,7vw,6rem)] mb-16"
                    >
                        How I think about{' '}
                        <span className="font-script text-coral" style={{ fontFamily: "'Tentang Nanti One', cursive", display: 'inline-block', fontSize: '0.5em', fontStyle: 'italic' }}>
                            websites
                        </span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
                        {thinkingPoints.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                                className="border-t border-dark/[0.12] py-10"
                            >
                                <h3 className="text-[18px] md:text-[22px] font-semibold mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {item.title}
                                </h3>
                                <p className="text-[14px] leading-relaxed opacity-55" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
