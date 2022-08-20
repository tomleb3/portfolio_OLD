import React, { useCallback, useEffect, useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { UserSettingsMenu } from './UserSettingsMenu';
import { HamburgerIcon } from './Icons/HamburgerIcon';
import { Theme, useUserSettings } from '../services/userSettingsService';
import { MenuIcon } from './Icons/MenuIcon';

export const AppHeader = () => {
    const { theme } = useUserSettings();
    const isDarkMode: boolean = theme === Theme.Dark;
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const lastScrollY = useRef<number>(0);

    const handleScroll = useCallback(() => {
        closeMenu();
        if (headerRef.current === null) {
            return;
        }
        window.scrollY === 0
            ? (headerRef.current.style.borderBottom = 'none')
            : (headerRef.current.style.borderBottom = '1px solid #e2e2e2');
        window.scrollY > lastScrollY.current
            ? (headerRef.current.style.top = '-77px')
            : (headerRef.current.style.top = '0');
        lastScrollY.current = window.scrollY;
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const routeLinks = (
        <div className='routes-container flex'>
            <NavLink to='/' end className={prop => (prop.isActive ? 'active-link' : '')} onClick={closeMenu}>
                Home
            </NavLink>
            <NavLink to='/resume/' className={prop => (prop.isActive ? 'active-link' : '')} onClick={closeMenu}>
                Resume
            </NavLink>
            <NavLink to='/contact/' className={prop => (prop.isActive ? 'active-link' : '')} onClick={closeMenu}>
                Contact
            </NavLink>
        </div>
    );

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
        return () => window.removeEventListener('scroll', () => handleScroll());
    }, [handleScroll]);

    return (
        <header className={['app-header', isDarkMode ? 'dark-mode' : ''].join(' ')} ref={headerRef}>
            <section className='main-layout flex j-between a-center'>
                <NavLink aria-label='Home' to='/' onClick={() => window.scrollTo({ top: 0 })}>
                    <img className='logo' src={`${process.env.PUBLIC_URL}/favicon.png`} alt='Home' />
                </NavLink>
                <nav className='flex a-center'>
                    {routeLinks}
                    <button name='Menu' className='flex' onClick={toggleMenu}>
                        <MenuIcon isDarkMode={isDarkMode} />
                    </button>
                </nav>
                <button name='Menu' className='hamburger-menu d-none' onClick={toggleMenu}>
                    <HamburgerIcon isDarkMode={isDarkMode} />
                </button>
                <div className={['menu-container', isMenuOpen ? '' : 'd-none'].join(' ')}>
                    <div className='dialog-bubble'></div>
                    {routeLinks}
                    <UserSettingsMenu />
                    <div className='dialog-background' onClick={closeMenu}></div>
                </div>
            </section>
        </header>
    );
};
