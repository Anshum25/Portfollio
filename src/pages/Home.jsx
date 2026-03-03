import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import YesTrail from '../components/YesTrail'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
}

const testimonials = [
    {
        quote: "A website that finally matched the level of our business",
        text: "He didn't just design and build our website, he helped us figure out what we really wanted to say and how to bring it to life. The process was clear and collaborative, and the final site feels like us: professional, confident, and true to what we do.",
    },
    {
        quote: "From generic to premium",
        text: "He completely transformed our old, generic website into something that finally represents who we are. The difference was clear right away. The new site feels premium, focused, and much more aligned with the level we operate at.",
    },
    {
        quote: "A premium presence, without trying too hard",
        text: "He helped us move from a generic Squarespace website to something much more refined and confident. The new design feels premium without trying too hard, and it perfectly captures the balance we were aiming for.",
    },
    {
        quote: "A website that feels intentional",
        text: "Everything about the final result feels thoughtful and deliberate. He brought real structure and clarity to our website, helping us express what we do and why it matters in a simple, confident way.",
    },
]

const faqItems = [
    {
        id: 'Q1',
        question: 'Who is this for?',
        answer: 'I work with companies built on expertise — consultants, studios, firms, and specialists. The kind of businesses where trust and reputation really drive results. If your work is strong but your website doesn\'t show it, I help close that gap so your online presence actually matches your level.',
    },
    {
        id: 'Q2',
        question: 'Who is this not for?',
        answer: 'If you\'re after "Apple vibes" on a ramen budget, or hoping a redesign will revive a business that hasn\'t had clients in years, I\'ll have to pass. But if you want something thoughtful, real, and built to last — that\'s where I come in.',
    },
    {
        id: 'Q3',
        question: 'Do you only do design, or development as well?',
        answer: 'Both, so you get a complete, ready-to-use website. I handle everything from start to finish and deliver a finished product that\'s ready to go live.',
    },
    {
        id: 'Q4',
        question: 'How much does a website cost?',
        answer: 'It really depends on the size and complexity of your project, but most websites I design and build land somewhere between $2.5K and $8K USD.',
    },
    {
        id: 'Q5',
        question: 'How long does it take to create a website?',
        answer: 'Most projects take around 4–8 weeks, depending on size and feedback speed. Smaller sites are usually done in about a month, while bigger builds can take closer to two.',
    },
    {
        id: 'Q6',
        question: 'Do you guarantee results?',
        answer: 'Absolutely! I\'ll create a website that attracts the right clients, highlights your expertise, and earns genuine trust — all before a single conversation happens. Everything under my control is guaranteed.',
    },
    {
        id: 'Q7',
        question: 'How do we start?',
        answer: 'If this sounds like something that fits, just fill up the contact form or email me. We\'ll have a quick chat to see if we\'re a good fit. If there is — great, we move forward. If not, no hard feelings.',
    },
]

const portfolioProjects = [
    {
        number: '01',
        title: 'Estelle',
        subtitle: 'Portfolio website for a sophisticated, high-end architectural firm.',
        image: '/images/portfolio-estelle.png',
        isNew: true,
    },
    {
        number: '02',
        title: 'Kivra Architecture',
        subtitle: 'Website for architecture studio whose bold vision demands attention.',
        image: '/images/portfolio-kivra.png',
    },
    {
        number: '03',
        title: 'Shovk Studio',
        subtitle: 'Website concept maximizing impact through minimal modern form.',
        image: '/images/portfolio-shovk.png',
    },
]

export default function Home() {
    const [openFaq, setOpenFaq] = useState(null)
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
            {/* Hero Section */}
            <section ref={heroRef} className="hero-gradient relative min-h-screen flex flex-col justify-center overflow-hidden">
                {/* YES! cursor trail effect */}
                <YesTrail containerRef={heroRef} />

                {/* Hero heading - positioned to fill the viewport */}
                <div className="relative z-10 w-full px-2 md:px-6" style={{ marginTop: '5vh' }}>
                    <h1
                        className="text-dark"
                        style={{
                            fontFamily: 'Outfit, sans-serif',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.04em',
                            lineHeight: 0.92,
                            fontSize: 'clamp(3rem, 11vw, 13rem)',
                            transform: 'scaleX(0.85)',
                            transformOrigin: 'left',
                        }}
                    >
                        <span className="flex justify-between w-full" style={{ width: 'calc(100% / 0.85)' }}>
                            <span>WEBSITES</span>
                            <span>THAT</span>
                            <span>MAKE</span>
                        </span>
                        <span className="flex items-baseline w-full" style={{ width: 'calc(100% / 0.85)' }}>
                            <span>CLIENTS</span>
                            <span className="flex-1" />
                            <span>SAY</span>
                            <span className="ml-2 md:ml-4">
                                <span
                                    className="font-script text-coral inline-block"
                                    style={{
                                        fontFamily: "'Tentang Nanti One', cursive",
                                        transform: 'rotate(-4deg)',
                                        fontWeight: 700,
                                        fontStyle: 'italic',
                                        fontSize: '0.55em',
                                        lineHeight: 1,
                                    }}
                                >
                                    "YES!"
                                </span>
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Hero Portrait - absolutely positioned center */}
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    style={{ y: heroImgY }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[32vw] max-w-[400px] min-w-[200px]"
                >
                    <img
                        src="/images/hero-portrait.png"
                        alt="Portrait"
                        className="w-full object-cover object-top grayscale contrast-125"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                        }}
                    />
                </motion.div>

                {/* Bottom text */}
                <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 flex justify-between items-end z-30">
                    <p className="text-[13px] max-w-[260px] leading-relaxed opacity-80" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Your website sets your level before you speak. I build the kind that puts you a step above.
                    </p>
                    <p className="text-[13px] uppercase tracking-[0.15em] opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                        (Scroll to see how)
                    </p>
                </div>
            </section>

            {/* I BUILD WEBSITES Section */}
            <section className="py-24 md:py-40 px-6 md:px-10 bg-beige">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h2 className="heading-ultra text-[clamp(2.5rem,8vw,8rem)] text-dark mb-8">
                            I build websites<br />
                            <span className="text-dark/40">For expertise-led</span><br />
                            <span className="text-dark/40">businesses</span>
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Video Section - Coming Soon */}
            <section className="px-6 md:px-10 pb-24 md:pb-40 bg-beige">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className="relative rounded-xl overflow-hidden bg-dark aspect-video flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-dark/90 to-dark/60" />
                            <div className="relative z-10 text-center">
                                <span className="inline-block text-white/60 text-[13px] tracking-[0.15em] uppercase">
                                    Coming soon
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-[13px] opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                                ↗ Showreel 2025
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Projects - Horizontal Large Cards */}
            <section className="bg-dark text-white py-24 md:py-32 overflow-hidden">
                <div className="px-6 md:px-10">
                    {portfolioProjects.map((project, i) => (
                        <motion.div
                            key={project.number}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                            className="mb-24 md:mb-32 last:mb-0"
                        >
                            <Link to="/portfolio" className="group block">
                                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                                    {/* Text side */}
                                    <div className="flex-1 w-full">
                                        <div className="flex items-start gap-4 mb-6">
                                            <span className="font-script text-coral text-3xl md:text-4xl italic" style={{ fontFamily: "'Tentang Nanti One', cursive" }}>
                                                ({project.number})
                                            </span>
                                            {project.isNew && (
                                                <span className="font-script text-coral text-lg italic mt-1" style={{ fontFamily: "'Tentang Nanti One', cursive" }}>
                                                    NEW
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="heading-ultra text-[clamp(2.5rem,7vw,7rem)] text-white group-hover:text-coral transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                        <p className="text-[15px] opacity-50 mt-6 max-w-md leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {project.subtitle}
                                        </p>
                                        <div className="mt-8">
                                            <span className="btn-outline btn-outline-white text-[12px]">
                                                See project
                                            </span>
                                        </div>
                                    </div>
                                    {/* Image side */}
                                    <div className="flex-1 w-full">
                                        <div className="overflow-hidden rounded-lg portfolio-card">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full aspect-[4/3] object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Portfolio Thumbnails Preview */}
            <section className="py-16 md:py-24 px-6 md:px-10 bg-beige">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="flex items-end gap-3 md:gap-5 overflow-x-auto pb-2">
                            {portfolioProjects.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                                    className="group flex-shrink-0"
                                >
                                    <Link to="/portfolio" className="block">
                                        <div className="relative overflow-hidden rounded-lg portfolio-card w-[260px] md:w-[320px]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full aspect-[4/3] object-cover"
                                            />
                                            {item.isNew && (
                                                <span
                                                    className="absolute top-3 left-3 font-script text-coral text-base italic bg-white/90 px-2.5 py-0.5 rounded-sm"
                                                    style={{ fontFamily: "'Tentang Nanti One', cursive" }}
                                                >
                                                    NEW
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <Link
                            to="/portfolio"
                            className="text-[13px] font-medium underline underline-offset-4 hover:opacity-50 transition-opacity flex-shrink-0"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            See all (05)
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-24 md:py-32 px-6 md:px-10 bg-beige">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h2 className="text-[13px] uppercase tracking-[0.15em] mb-10 opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                            About
                        </h2>
                        <p className="text-[clamp(1.5rem,3.5vw,3.2rem)] font-light leading-[1.25] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Hi, I'm Bogdan. I create websites that position expertise-led service businesses as the obvious choice — without overexplaining or overselling.
                        </p>
                        <p className="text-[16px] md:text-[18px] opacity-50 leading-relaxed mb-10 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Most expertise-led companies websites are like bad first dates. They try too hard, confuse everyone, and nobody wants to commit. I build websites that communicate clearly, project confidence, and make "yes" feel natural.
                        </p>
                        <Link
                            to="/about"
                            className="btn-outline text-dark"
                        >
                            Learn about me
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 md:py-32 px-6 md:px-10 bg-dark text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.76, 0, 0.24, 1] }}
                        className="heading-ultra text-[clamp(2.5rem,7vw,6rem)] mb-16"
                    >
                        They said{' '}
                        <span
                            className="font-script text-coral"
                            style={{
                                fontFamily: "'Tentang Nanti One', cursive",
                                transform: 'none',
                                display: 'inline-block',
                                fontStyle: 'italic',
                                fontSize: '0.7em',
                            }}
                        >
                            "yes!"
                        </span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {testimonials.map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                                className="testimonial-card bg-white/[0.04] border border-white/[0.08] rounded-lg p-7 md:p-9"
                            >
                                <h3 className="text-[18px] md:text-[22px] font-semibold mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    "{testimonial.quote}"
                                </h3>
                                <p className="text-[14px] leading-relaxed opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {testimonial.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 md:py-32 px-6 md:px-10 bg-beige">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: [0.76, 0, 0.24, 1] }}
                        className="heading-ultra text-[clamp(2.5rem,7vw,6rem)] mb-16"
                    >
                        Got questions?
                    </motion.h2>
                    <div>
                        {faqItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-t border-dark/[0.12]"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                                    className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="step-number text-[18px]" style={{ fontFamily: "'Tentang Nanti One', cursive" }}>
                                            ({item.id})
                                        </span>
                                        <span className="text-[16px] md:text-[18px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {item.question}
                                        </span>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: openFaq === item.id ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                        className="text-[22px] font-light flex-shrink-0 ml-4 opacity-60"
                                    >
                                        +
                                    </motion.span>
                                </button>
                                <div className={`faq-answer ${openFaq === item.id ? 'open' : ''}`}>
                                    <p className="text-[15px] leading-relaxed opacity-55 pl-14 pb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-dark/[0.12]" />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
