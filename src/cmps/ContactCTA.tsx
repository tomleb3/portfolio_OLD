import React from 'react';

import { Link } from 'react-router-dom';
import { Theme, useUserSettings } from '../services/userSettingsService';

export const ContactCTA = () => {
  const { theme } = useUserSettings();
  const isDarkMode: boolean = theme === Theme.Dark;

  return (
    <section
      className={[
        'main-layout',
        'contact-cta',
        'flex',
        'j-around',
        'a-center',
        isDarkMode ? 'dark-mode' : '',
      ].join(' ')}
    >
      <strong>Got any questions for me?</strong>
      <p>Feel free to send me a message regarding anything and everything</p>
      <Link to='/contact'>Contact Me</Link>
    </section>
  );
};
