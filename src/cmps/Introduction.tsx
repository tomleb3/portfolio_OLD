import React from 'react';

import { useUserSettings, Theme } from '../services/userSettingsService';

export const Introduction = () => {
  const { theme } = useUserSettings();
  const isDarkMode: boolean = theme === Theme.Dark;

  return (
    <section className={['introduction', isDarkMode ? 'dark-mode' : ''].join(' ')}>
      <div className='content main-layout'>
        <h3>Hi, I’m Tom. Nice to meet you.</h3>
        <p>
          Since beginning my journey to become a Full-Stack Developer,
          <br />
          I've worked countless hours to perfect my code, my designs, and everything related.
          <br />I enjoy coding, whilst keeping the code as clean, simple and reusable as possible.
        </p>
      </div>
    </section>
  );
};
