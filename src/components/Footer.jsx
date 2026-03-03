import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className="bg-dark text-white">
            {/* CTA Section */}
            <section className="py-28 md:py-40 px-6 md:px-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                    <h2 className="heading-ultra-center text-[clamp(3rem,10vw,10rem)] mb-6">
                        Ready to<br />hear more{' '}
                        <span
                            className="font-script text-coral"
                            style={{
                                fontFamily: "'Tentang Nanti One', cursive",
                                display: 'inline-block',
                                fontStyle: 'italic',
                                fontSize: '0.55em',
                            }}
                        >
                            "yes"?
                        </span>
                    </h2>
                    <div className="mt-10">
                        <Link
                            to="/contact"
                            className="btn-outline btn-outline-white"
                        >
                            Hell yes!
                        </Link>
                    </div>
                    <div className="mt-6">
                        <a
                            href="mailto:hello@bogdankolomiyets.com?subject=Hey%2C%20Bogdan!%20I%20have%20a%20project%20idea"
                            className="text-[13px] opacity-40 hover:opacity-80 transition-opacity underline underline-offset-4"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            hello@bogdankolomiyets.com
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Footer Bottom */}
            <div className="border-t border-white/[0.08] px-6 md:px-10 py-12 md:py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Navigation */}
                    <div>
                        <nav className="flex flex-col gap-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/portfolio', label: 'Portfolio' },
                                { to: '/process', label: 'My process' },
                                { to: '/about', label: 'About' },
                                { to: '/contact', label: 'Contact' },
                            ].map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="text-[13px] opacity-40 hover:opacity-90 transition-opacity"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <nav className="flex flex-col gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[13px] opacity-40 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Instagram
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[13px] opacity-40 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
                                LinkedIn
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-[13px] opacity-40 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Dribbble
                            </a>
                        </nav>
                    </div>

                    {/* Email + Copyright */}
                    <div className="flex flex-col justify-between gap-4">
                        <a
                            href="mailto:hello@bogdankolomiyets.com?subject=Hey%2C%20Bogdan!%20I%20have%20a%20project%20idea"
                            className="text-[13px] opacity-40 hover:opacity-90 transition-opacity"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            hello@bogdankolomiyets.com
                        </a>
                        <p className="text-[11px] opacity-25 mt-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            © {new Date().getFullYear()} Bogdan Kolomiyets. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
