import React from 'react';
import { Link } from 'react-router-dom';
import { Theme, useUserSettings } from '../services/userSettingsService';

import { FacebookIcon } from './Icons/FacebookIcon';
import { GithubIcon } from './Icons/GithubIcon';
import { LinkedinIcon } from './Icons/LinkedinIcon';
import { PackageIcon } from './Icons/PackageIcon';
import { StackOverflowIcon } from './Icons/StackOverflowIcon';

export const AppFooter = () => {
    const { theme } = useUserSettings();
    const isDarkMode: boolean = theme === Theme.Dark;

    return (
        <footer className={['app-footer', isDarkMode ? 'dark-mode' : ''].join(' ')}>
            <div className='content main-layout flex col j-around'>
                <article>
                    <strong className='contact-cta_title'>Got any questions for me?</strong>
                    <p className='contact-cta_subtitle'>
                        Feel free to send me a message regarding anything and everything
                    </p>
                    <Link to='/contact' className='contact-cta_link'>
                        Contact Me
                    </Link>
                </article>
                <div className='flex col j-center a-center'>
                    <div className='social-container'>
                        <div className='flex j-center'>
                            <a
                                aria-label='My Linkedin profile'
                                href='https://www.linkedin.com/in/tomleb/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='social-link'
                            >
                                <LinkedinIcon />
                            </a>
                            <a
                                aria-label='My Facebook profile'
                                href='https://www.facebook.com/tomleb3/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='social-link'
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                aria-label='My Github page'
                                href='https://www.github.com/tomleb3'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='social-link'
                            >
                                <GithubIcon />
                            </a>
                            <a
                                aria-label='My StackOverflow page'
                                href='https://stackoverflow.com/users/15169145/tomleb'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='social-link'
                            >
                                <StackOverflowIcon />
                            </a>
                            <a
                                aria-label='My NPM page'
                                href='https://www.npmjs.com/~tomleb'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='social-link'
                            >
                                <PackageIcon />
                            </a>
                        </div>
                    </div>
                    <strong className='m-clear'>&copy; {new Date().getFullYear()} | Tom Lebeodkin</strong>
                    <small>Powered by React</small>
                </div>
            </div>
        </footer>
    );
};
