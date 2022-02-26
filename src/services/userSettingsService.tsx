import React, { createContext, useContext, useEffect, useState } from 'react';
import { storageService } from './storageService';

const DARKMODE_BODY_CLASSNAME = 'dark-mode';
const STORAGE_KEY = 'user-settings';

export const enum Theme {
  Dark = 'dark',
  Light = 'light',
  Unset = 'unset',
}

export const enum View {
  List = 'list',
  Grid = 'grid',
  Unset = 'unset',
}

interface UserSettings {
  theme: Theme;
  view: View;
}

interface UserSettingsContext extends UserSettings {
  toggleTheme: (theme: Theme) => void;
  toggleView: (view: View) => void;
}

const UserSettingsContext = createContext<UserSettingsContext | null>(null);
export const useUserSettings = () => useContext(UserSettingsContext);

export const UserSettingsProvider = ({ children }: { children: JSX.Element }) => {
  const [userSettings, setUserSettings] = useState<UserSettings>(() => {
    const settingsFromStorage: UserSettings | null = storageService.load<UserSettings>(STORAGE_KEY);
    if (settingsFromStorage !== null) {
      return settingsFromStorage;
    }
    return {
      // Default to user's system preference.
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light,
      view: View.Grid,
    };
  });

  const { theme, view } = userSettings;

  useEffect(() => {
    theme === Theme.Dark
      ? document.body.classList.add(DARKMODE_BODY_CLASSNAME)
      : document.body.classList.remove(DARKMODE_BODY_CLASSNAME);
    storageService.save(STORAGE_KEY, userSettings);
  }, [userSettings]);

  const toggleTheme = (newTheme: Theme) => {
    if (newTheme === theme) {
      return;
    }
    setUserSettings({
      ...userSettings,
      theme: newTheme,
    });
  };

  const toggleView = (newView: View) => {
    if (newView === view) {
      return;
    }
    setUserSettings({
      ...userSettings,
      view: newView,
    });
  };

  return (
    <UserSettingsContext.Provider value={{ theme, view, toggleTheme, toggleView }}>
      {children}
    </UserSettingsContext.Provider>
  );
};
