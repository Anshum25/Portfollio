import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
import CustomCursor from '../components/CustomCursor'
import SmoothScroll from '../components/SmoothScroll'
import { useState } from 'react'

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-beige">
                <CustomCursor />
                <Navbar onMenuToggle={() => setMenuOpen(!menuOpen)} />
                <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    )
}
