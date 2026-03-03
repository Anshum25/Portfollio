import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="fixed inset-0 z-40 bg-dark text-white flex flex-col justify-center items-center"
                >
                    <nav className="flex flex-col items-center gap-8">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/portfolio', label: 'Portfolio' },
                            { to: '/process', label: 'My Process' },
                            { to: '/about', label: 'About' },
                            { to: '/contact', label: 'Contact' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.to}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                            >
                                <Link
                                    to={item.to}
                                    onClick={onClose}
                                    className="text-4xl font-black uppercase tracking-tight"
                                    style={{ fontFamily: 'Outfit, sans-serif' }}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-12 flex flex-col items-center gap-4"
                    >
                        <div className="flex gap-6 text-sm opacity-60">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
                        </div>
                        <p className="text-xs opacity-40">©2026 Copyright. All Rights Reserved.</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
