import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
}

const processSteps = [
    {
        number: '01',
        title: 'We carefully map your project before we build',
        description: 'First step: understanding your business inside out: what you sell, who buys it, what makes them say yes. You get a complete site blueprint before any design starts: structure, purpose, and what each page needs to accomplish.',
    },
    {
        number: '02',
        title: 'Messaging locked in before design starts',
        description: 'Figma stays closed until we nail the strategy. We define your positioning, content hierarchy, and user flows first, so every element on the site solves an actual client problem, not just looks good.',
    },
    {
        number: '03',
        title: 'A site that looks like it costs what you charge',
        description: 'Design that mirrors your expertise and pricing. Clean, confident, and free of visual noise, so clients instantly perceive competence and reliability without having to guess.',
    },
    {
        number: '04',
        title: 'Professional websites you can easily keep up to date',
        description: 'I deliver fully SEO-optimized, high-performance sites with clean structure and a CMS, so your team can update services, cases, and content anytime. No need to call me for every little change.',
    },
    {
        number: '05',
        title: 'Feedback without the drama',
        description: "You see work in stages, not in one big \"ta‑da\". We refine as we go, with clear rounds of feedback, so the project doesn't turn into a revision nightmare.",
    },
    {
        number: '06',
        title: "Launch and what's after",
        description: "I don't vanish after launch. You get 30 days of free post-launch support: bug fixes, performance tweaks, and video walkthroughs so you can confidently update content without me.",
    },
]

const whatYouGet = [
    {
        title: 'A website that closes the perception gap',
        description: 'Most expertise-led websites scream "cheap template" from the first scroll. I build sites that radiate quality — crisp communication, zero confusion, instant premium vibe.',
    },
    {
        title: 'No more explaining yourself',
        description: 'Sales calls won\'t start with "let me tell you what we do." Your website will tell your story and show your value naturally, without 20 screens of text.',
    },
    {
        title: 'Builds trust before a single conversation',
        description: 'Clients will see that your website reflects a real, professional business, not something hastily thrown together, and this will significantly increase their trust in you.',
    },
    {
        title: 'Turns casual interest into confident decisions',
        description: 'The site will filter out clients who aren\'t a fit, while giving the right clients confidence that you\'re the obvious choice.',
    },
]

const realityCheck = [
    {
        title: 'No "pay me, get rich" guarantees',
        description: 'No "pay $5K, make $50K by next month" guarantees here. That\'s fantasy math. What I do guarantee: a site that attracts the right clients, highlights your expertise, and earns trust before anyone picks up the phone.',
    },
    {
        title: "Your website won't magically find clients for you",
        description: "Websites are closers, not prospectors. They turn \"maybe\" into \"yes\" when someone visits. It amplifies what you're already doing: marketing, networking, referrals.",
    },
    {
        title: 'Broken business models – stay broken',
        description: "Beautiful websites don't override bad business fundamentals. If your positioning is off, your pricing makes no sense, or your service solves the wrong problem...design won't rescue you.",
    },
]

export default function Process() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 100])

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero */}
            <section ref={heroRef} className="hero-gradient relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-10">
                <div className="relative z-10 w-full pb-32">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="heading-ultra text-[clamp(3.5rem,15vw,18rem)] text-dark relative"
                    >
                        <span
                            className="font-script text-coral block mb-1"
                            style={{
                                fontFamily: "'Tentang Nanti One', cursive",
                                transform: 'scaleX(1) rotate(-3deg)',
                                fontWeight: 700,
                                fontSize: '0.3em',
                                fontStyle: 'italic',
                                lineHeight: 1.2,
                                display: 'block',
                            }}
                        >
                            My
                        </span>
                        PROCESS
                    </motion.h1>
                </div>

                {/* Portrait */}
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    style={{ y: heroImgY }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[35vw] max-w-[420px] min-w-[220px]"
                >
                    <img
                        src="/images/hero-portrait-Photoroom.png"
                        alt="Portrait"
                        className="w-full object-cover object-top grayscale contrast-125"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                        }}
                    />
                </motion.div>

                <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 flex justify-between items-end z-30">
                    <p className="text-[13px] max-w-[260px] leading-relaxed opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your website either communicates your expertise or it doesn't. I build websites that make your value obvious and "yes" inevitable.
                    </p>
                    <p className="text-[13px] uppercase tracking-[0.15em] opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                        (Scroll to my system)
                    </p>
                </div>
            </section>

            {/* My System */}
            <section className="py-24 md:py-40 px-6 md:px-10 bg-beige">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h2 className="heading-ultra text-[clamp(2.5rem,7vw,6rem)] mb-4">
                            <span className="font-script text-coral" style={{ fontFamily: "'Tentang Nanti One', cursive", display: 'inline-block', fontSize: '0.55em', fontStyle: 'italic' }}>My </span>
                            System
                        </h2>
                    </motion.div>

                    <div className="mt-16">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, ease: [0.76, 0, 0.24, 1] }}
                                className="border-t border-dark/[0.12] py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                            >
                                <div className="md:col-span-1">
                                    <span className="step-number text-[20px]" style={{ fontFamily: "'Tentang Nanti One', cursive" }}>({step.number})</span>
                                </div>
                                <div className="md:col-span-4">
                                    <h3 className="text-[18px] md:text-[22px] font-semibold leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        {step.title}
                                    </h3>
                                </div>
                                <div className="md:col-span-7">
                                    <p className="text-[15px] leading-relaxed opacity-55" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-dark/[0.12]" />
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 md:py-40 px-6 md:px-10 bg-dark text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h2 className="heading-ultra text-[clamp(2.5rem,7vw,6rem)] mb-4">
                            What you get IS
                        </h2>
                        <p className="font-script text-coral text-[clamp(1.8rem,4vw,3.5rem)] mb-16" style={{ fontFamily: "'Tentang Nanti One', cursive", fontStyle: 'italic' }}>
                            Website that works!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {whatYouGet.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                                className="border border-white/[0.08] rounded-lg p-7 md:p-9 hover:border-white/[0.15] transition-colors duration-400"
                            >
                                <h3 className="text-[18px] md:text-[22px] font-semibold mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {item.title}
                                </h3>
                                <p className="text-[14px] leading-relaxed opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reality Check */}
            <section className="py-24 md:py-40 px-6 md:px-10 bg-coral text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h2 className="heading-ultra text-[clamp(2.5rem,7vw,6rem)] mb-16">
                            Reality
                            <span className="font-script" style={{ fontFamily: "'Tentang Nanti One', cursive", display: 'inline-block', fontSize: '0.55em', fontStyle: 'italic' }}>
                                {' '}check
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {realityCheck.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                                className="border-t border-white/30 pt-8"
                            >
                                <h3 className="text-[22px] md:text-[28px] font-bold mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {item.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed opacity-75 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
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
