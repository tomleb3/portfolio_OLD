import React from 'react';

import { Theme, useUserSettings, View } from '../services/userSettingsService';

export const UserSettingsMenu = () => {
  const { theme, view, toggleTheme, toggleView } = useUserSettings();
  const isDarkMode: boolean = theme === Theme.Dark;
  const isListView: boolean = view === View.List;
  const clickSoundUrl = `${process.env.PUBLIC_URL}/assets/sounds/click.mp3`;
  let audio = new Audio(clickSoundUrl);

  const onChangeTheme = (theme: Theme) => {
    audio.play();
    toggleTheme(theme);
  };
  const onChangeView = (view: View) => {
    audio.play();
    toggleView(view);
  };

  return (
    <main className={['user-settings', 'flex', 'col', 'a-center'].join(' ')}>
      <header>
        <label>
          <span>⚙️</span>Settings
        </label>
      </header>
      <div className='settings-container'>
        <div className='theme-container flex j-between a-center'>
          <label>Theme</label>
          <div className='flex a-center'>
            <button
              name='Light'
              className={isDarkMode ? 'inactive' : ''}
              onClick={() => onChangeTheme(Theme.Light)}
            >
              ☀️
            </button>
            <div className='border'></div>
            <button
              name='Dark'
              className={isDarkMode ? '' : 'inactive'}
              onClick={() => onChangeTheme(Theme.Dark)}
            >
              🌑
            </button>
          </div>
        </div>
        <div className='view-container flex j-between a-center'>
          <label>View</label>
          <div className='flex a-center'>
            <button
              className={isListView ? '' : 'inactive'}
              onClick={() => onChangeView(View.List)}
            >
              List
            </button>
            <div className='border'></div>
            <button
              className={isListView ? 'inactive' : ''}
              onClick={() => onChangeView(View.Grid)}
            >
              Grid
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
