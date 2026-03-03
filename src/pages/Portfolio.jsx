import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
}

const portfolioItems = [
    {
        id: 'estelle',
        title: 'Estelle',
        description: 'Portfolio website for a sophisticated, high-end architectural firm.',
        tags: ['Design', 'Architecture', '2025'],
        image: '/images/portfolio-estelle.png',
        isNew: true,
    },
    {
        id: 'kivra-architecture',
        title: 'Kivra Architecture',
        description: 'Website for architecture studio whose bold vision demands attention.',
        tags: ['Design', 'Architecture', '2025'],
        image: '/images/portfolio-kivra.png',
    },
    {
        id: 'collection-v2',
        title: 'Collection v.2',
        description: 'A slick showcase of past projects and fresh concepts combined.',
        tags: ['Design', 'Portfolio', '2023-2025'],
        image: '/images/portfolio-collection.png',
    },
    {
        id: 'shovk-studio',
        title: 'Shovk Studio',
        description: 'Website concept maximizing impact through minimal modern form.',
        tags: ['Design', 'Architecture', '2024'],
        image: '/images/portfolio-shovk.png',
    },
    {
        id: 'collection-v1',
        title: 'Collection v.1',
        description: 'A focused collection of earlier work and concepts over time.',
        tags: ['Design', 'Portfolio', '2024-2023'],
        image: '/images/portfolio-collection.png',
    },
]

export default function Portfolio() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Hero */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-beige pt-20 pb-8 px-6 relative">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="heading-ultra-center text-center text-[clamp(3.5rem,15vw,18rem)] text-dark"
                >
                    SELECTED<br />
                    WORK
                    <span
                        className="font-script text-coral inline-block ml-2"
                        style={{
                            fontFamily: "'Tentang Nanti One', cursive",
                            transform: 'scaleX(1) rotate(-5deg)',
                            fontWeight: 700,
                            fontSize: '0.4em',
                            fontStyle: 'italic',
                        }}
                    >
                        (5)
                    </span>
                </motion.h1>
                <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 flex justify-between items-end">
                    <p className="text-[13px] opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>Curated work only.</p>
                    <p className="text-[13px] opacity-50" style={{ fontFamily: 'Inter, sans-serif' }}>Recent and past projects.</p>
                </div>
            </section>

            {/* Portfolio Items */}
            <section className="px-6 md:px-10 pb-32">
                <div className="max-w-7xl mx-auto space-y-6">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <Link to="#" className="group block">
                                <div className="portfolio-card overflow-hidden rounded-xl">
                                    {/* Image */}
                                    <div className="relative overflow-hidden bg-beige-dark">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full aspect-[16/9] object-cover"
                                        />
                                        {item.isNew && (
                                            <span
                                                className="absolute top-4 left-4 font-script text-coral text-base italic bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm"
                                                style={{ fontFamily: "'Tentang Nanti One', cursive" }}
                                            >
                                                NEW
                                            </span>
                                        )}
                                    </div>

                                    {/* Info bar */}
                                    <div className="flex flex-wrap items-center justify-between py-5 gap-4">
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="tag-pill">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="text-right">
                                            <h3 className="text-[18px] md:text-[22px] font-bold group-hover:text-coral transition-colors duration-400" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-[13px] opacity-50 mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    )
}
