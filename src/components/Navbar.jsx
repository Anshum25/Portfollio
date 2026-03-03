import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function NavLink({ to, label }) {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link
            to={to}
            className={`nav-link text-[13px] font-medium tracking-[0.08em] uppercase ${isActive ? 'opacity-50' : ''}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            <span className="link-text">{label}</span>
            <span className="link-text-hover">{label}</span>
        </Link>
    )
}

export default function Navbar({ onMenuToggle }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-4' : ''
                }`}
            style={{
                background: scrolled ? 'rgba(242, 237, 228, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
            }}
        >
            {/* Logo - BK monogram */}
            <Link to="/" className="relative z-50">
                <span
                    className="text-[26px] leading-none"
                    style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                    }}
                >
                    BK
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
                <NavLink to="/portfolio" label="Portfolio" />
                <NavLink to="/process" label="My Process" />
                <NavLink to="/about" label="About" />
            </nav>

            {/* Let's Talk Button */}
            <Link
                to="/contact"
                className="hidden md:flex items-center gap-3 bg-dark text-white px-5 py-3 text-[13px] font-medium tracking-[0.06em] uppercase btn-animate rounded-[4px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                <img
                    src="/images/hero-portrait.png"
                    alt="Profile"
                    className="w-7 h-7 rounded-[3px] object-cover"
                />
                LET'S TALK
            </Link>

            {/* Mobile Menu Toggle */}
            <button
                onClick={onMenuToggle}
                className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
            >
                <span className="w-6 h-[2px] bg-dark block" />
                <span className="w-6 h-[2px] bg-dark block" />
                <span className="w-4 h-[2px] bg-dark block" />
            </button>
        </header>
    )
}
