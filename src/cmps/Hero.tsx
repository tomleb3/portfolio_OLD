import React from 'react';

import Typewriter from 'typewriter-effect';
import { Theme, useUserSettings } from '../services/userSettingsService';
import { HeroIcon } from './Icons/HeroIcon';

export const Hero = () => {
  const { theme } = useUserSettings();
  const isDarkMode: boolean = theme === Theme.Dark;
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <section
      className={[
        'main-layout',
        'hero',
        'flex',
        'col',
        'j-between',
        isDarkMode ? 'dark-mode' : '',
      ].join(' ')}
    >
      <div>
        <strong>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString('Tom Lebeodkin')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Fullstack Developer')
                .start();
            }}
          />
        </strong>
        <p>Designing and coding fully-fledged applications. Driven by passion</p>
      </div>
      <img className='avatar' src={`${publicUrl}/assets/imgs/me.webp`} alt='Me - Tom Leb' />
      <HeroIcon isDarkMode={isDarkMode} />
    </section>
  );
};
