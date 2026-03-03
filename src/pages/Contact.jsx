import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
}

function ConfettiPiece({ index }) {
    const style = useMemo(() => {
        const colors = ['#E8533E', '#D4B96A', '#1A1A1A', '#F2EDE4', '#999', '#FF6F61']
        return {
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${4 + Math.random() * 8}px`,
            height: `${8 + Math.random() * 16}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            transform: `rotate(${Math.random() * 360}deg)`,
        }
    }, [index])

    return <div className="confetti-piece" style={style} />
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        timeline: '',
        budget: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.')
            setFormData({ name: '', email: '', timeline: '', budget: '', message: '' })
            setSubmitted(false)
        }, 1500)
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <section className="min-h-screen bg-beige relative overflow-hidden">
                {/* Confetti - only show after submission */}
                {submitted && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <ConfettiPiece key={i} index={i} />
                        ))}
                    </div>
                )}

                {/* Content container - centered */}
                <div className="flex flex-col items-center px-6 md:px-10 pt-20 md:pt-24 pb-32">
                    {/* Massive CONTACT heading - centered, semi-transparent background text */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-center text-dark/90 mb-12 md:mb-16 w-full"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.05em',
                            lineHeight: 0.88,
                            fontSize: 'clamp(5rem, 14vw, 13rem)',
                            transform: 'scaleX(0.82)',
                            transformOrigin: 'center',
                        }}
                    >
                        CONTACT
                    </motion.h1>

                    {/* Form - centered, fixed width */}
                    <motion.form
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        onSubmit={handleSubmit}
                        className="w-full max-w-[420px] space-y-7"
                    >
                        {/* Honeypot */}
                        <div className="hidden">
                            <label>Don't fill this out if you're human:</label>
                            <input type="text" name="bot-field" tabIndex="-1" autoComplete="off" />
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-[13px] font-medium mb-2.5 tracking-[0.02em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Name <span className="text-coral">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Bogdan"
                                required
                                className="w-full bg-[#E8E3DA] border-none rounded-xl px-5 py-4 text-[15px] outline-none focus:ring-2 focus:ring-coral/30 transition-all placeholder:text-dark/30"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[13px] font-medium mb-2.5 tracking-[0.02em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Email Address <span className="text-coral">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="hello@bogdankolomiyets"
                                required
                                className="w-full bg-[#E8E3DA] border-none rounded-xl px-5 py-4 text-[15px] outline-none focus:ring-2 focus:ring-coral/30 transition-all placeholder:text-dark/30"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            />
                        </div>

                        {/* Timeline */}
                        <div>
                            <label className="block text-[13px] font-medium mb-4 tracking-[0.02em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Timeline <span className="text-coral">*</span>
                            </label>
                            <div className="space-y-3.5">
                                {['ASAP', 'Within 1 month', 'Within 2-3 months', 'Not sure yet'].map((option) => (
                                    <label key={option} className="flex items-center gap-3.5 cursor-hover group" style={{ cursor: 'none' }}>
                                        <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${formData.timeline === option ? 'border-coral bg-coral' : 'border-dark/25 group-hover:border-dark/50'
                                            }`}>
                                            {formData.timeline === option && (
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                            )}
                                        </div>
                                        <input
                                            type="radio"
                                            name="timeline"
                                            value={option}
                                            checked={formData.timeline === option}
                                            onChange={handleChange}
                                            className="sr-only"
                                        />
                                        <span className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="block text-[13px] font-medium mb-4 tracking-[0.02em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Budget <span className="text-coral">*</span>
                            </label>
                            <div className="space-y-3.5">
                                {['$2,500–$5,000', '$5,000–$10,000', '$10,000–$20,000', 'Above $20,000'].map((option) => (
                                    <label key={option} className="flex items-center gap-3.5 cursor-hover group" style={{ cursor: 'none' }}>
                                        <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${formData.budget === option ? 'border-coral bg-coral' : 'border-dark/25 group-hover:border-dark/50'
                                            }`}>
                                            {formData.budget === option && (
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                            )}
                                        </div>
                                        <input
                                            type="radio"
                                            name="budget"
                                            value={option}
                                            checked={formData.budget === option}
                                            onChange={handleChange}
                                            className="sr-only"
                                        />
                                        <span className="text-[15px]" style={{ fontFamily: 'Inter, sans-serif' }}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-[13px] font-medium mb-2.5 tracking-[0.02em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Message <span className="text-coral">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                rows={5}
                                className="w-full bg-[#E8E3DA] border-none rounded-xl px-5 py-4 text-[15px] outline-none focus:ring-2 focus:ring-coral/30 transition-all resize-none placeholder:text-dark/30"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-dark text-white py-4.5 text-[14px] font-semibold uppercase tracking-[0.1em] hover:bg-dark-light transition-all duration-400 btn-animate rounded-xl"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Get in touch
                        </button>
                    </motion.form>
                </div>
            </section>
        </motion.div>
    )
}
