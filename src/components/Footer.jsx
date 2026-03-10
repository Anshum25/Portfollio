import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#EAE4DB] to-[#F1553E] text-dark pt-16 md:pt-32 pb-4 border-t border-dark/20">
            {/* Top Navigation Grid */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                
                {/* Column 1: Menu */}
                <div className="flex gap-4 md:gap-16 w-full md:w-auto">
                    <span className="text-[11px] md:text-[12px] opacity-100 uppercase mt-1">(MENU)</span>
                    <nav className="flex flex-col gap-2">
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
                                className="text-[17px] md:text-[18px] opacity-90 transition-opacity hover:opacity-50"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Column 2: Socials */}
                <div className="flex gap-4 md:gap-16 w-full md:w-auto mt-10 md:mt-0">
                    <span className="text-[11px] md:text-[12px] opacity-100 uppercase mt-1">(SOCIALS)</span>
                    <nav className="flex flex-col gap-2">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[17px] md:text-[18px] opacity-90 transition-opacity hover:opacity-50">
                            Instagram
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[17px] md:text-[18px] opacity-90 transition-opacity hover:opacity-50">
                            LinkedIn
                        </a>
                        <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-[17px] md:text-[18px] opacity-90 transition-opacity hover:opacity-50">
                            Dribbble
                        </a>
                    </nav>
                </div>

                {/* Column 3: Email */}
                <div className="flex flex-col items-end w-full md:w-auto mt-10 md:mt-0">
                    <span className="text-[11px] md:text-[12px] opacity-100 uppercase mb-2">(SAY "HELLO")</span>
                    <a
                        href="mailto:hello@anshumdev.com"
                        className="text-[17px] md:text-[18px] opacity-90 transition-opacity hover:opacity-50"
                    >
                        hello@anshumdev.com
                    </a>
                </div>
            </div>

            {/* Huge Name at bottom */}
            <div className="mt-20 md:mt-32 w-full flex justify-center items-center px-4 md:px-0 overflow-hidden">
                <h1 
                    className="heading-ultra text-dark m-0 p-0 text-center uppercase leading-[1.2] md:leading-[1.75] select-none whitespace-nowrap"
                    style={{ 
                        fontSize: 'clamp(3.5rem, 15vw, 490px)',
                        transform: 'scaleX(1.00)',
                        letterSpacing: '-0.035em'
                    }}
                >
                    ANSHUM DEV
                </h1>
            </div>

            {/* Very Bottom Banner */}
            <div className="relative mt-8 md:mt-16 w-full flex justify-between items-center px-4 md:px-10 text-[11px] md:text-[12px] font-medium opacity-70" style={{ fontFamily: 'Inter, sans-serif' }}>
                <h1>©{new Date().getFullYear()} Anshum Dev</h1>
                <p>From India with love ❤️</p>
            </div>
        </footer>
    )
}
