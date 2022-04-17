import React from 'react';

import { FacebookIcon } from './Icons/FacebookIcon';
import { GithubIcon } from './Icons/GithubIcon';
import { LinkedinIcon } from './Icons/LinkedinIcon';
import { PackageIcon } from './Icons/PackageIcon';
import { StackOverflowIcon } from './Icons/StackOverflowIcon';

export const AppFooter = () => (
  <footer className='app-footer'>
    <div className='content main-layout flex col j-center a-center'>
      <div className='social-container'>
        <div className='flex j-evenly'>
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
        </div>
        <div className='flex j-evenly'>
          <a
            aria-label='My Github page'
            href='https://stackoverflow.com/users/15169145/tomleb'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'
          >
            <StackOverflowIcon />
          </a>
          <a
            aria-label='My Github page'
            href='https://www.npmjs.com/~tomleb'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'
          >
            <PackageIcon />
          </a>
        </div>
      </div>
      <strong className='m-clear'>&copy; 2021 | Tom Lebeodkin</strong>
      <small>Powered by React</small>
    </div>
  </footer>
);
