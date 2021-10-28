import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { SettingsContext } from '../App'
import { UserSettings } from './UserSettings'
import { HamburgerIcon } from './Icons/HamburgerIcon'

export const AppHeader = () => {

    const { settings } = useContext(SettingsContext)
    const { darkMode } = settings
    const [menu, setMenu] = useState(false)
    const headerRef = useRef(null)
    const lastScrollY = useRef(0)

    const handleScroll = useCallback(() => {
        closeMenu()
        window.scrollY ?
            headerRef.current.style.borderBottom = '1px solid #e2e2e2'
            : headerRef.current.style.borderBottom = 'none'
        window.scrollY > lastScrollY.current ?
            headerRef.current.style.top = '-77px'
            : headerRef.current.style.top = 0
        lastScrollY.current = window.scrollY
    }, [])

    const toggleMenu = () => setMenu(!menu)
    const closeMenu = () => setMenu(false)

    let routeLinks = (
        <div className="routes-container flex">
            <NavLink to="/" exact activeClassName="active-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/resume/" activeClassName="active-link" onClick={closeMenu}>Resume</NavLink>
            <NavLink to="/contact/" activeClassName="active-link" onClick={closeMenu}>Contact</NavLink>
        </div>
    )

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll())
        return () =>
            window.removeEventListener('scroll', () => handleScroll())
    }, [handleScroll])

    return <header className={`app-header ${darkMode ? 'dark-mode' : ''}`} ref={headerRef}>
        <section className="main-layout flex j-between a-center">
            <NavLink name="Home" to="/" onClick={() => window.scrollTo({ top: 0 })}>
                <img className="logo" src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Home" />
            </NavLink>
            <nav className="flex a-center">
                {routeLinks}
                <button name="Menu" onClick={toggleMenu}>⚙️</button>
            </nav>
            <button name="Menu" className="hamburger-menu d-none" onClick={toggleMenu}>
                <HamburgerIcon isDarkMode={darkMode} />
            </button>
            <div className={`menu-container ${menu ? '' : 'd-none'}`}>
                <div className="dialog-bubble"></div>
                {routeLinks}
                <UserSettings />
                <div className="dialog-background" onClick={closeMenu}></div>
            </div>
        </section>
    </header>
}