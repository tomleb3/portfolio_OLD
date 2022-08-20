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
    readonly theme: Theme;
    readonly view: View;
}

interface UserSettingsContext extends UserSettings {
    readonly toggleTheme: (theme: Theme) => void;
    readonly toggleView: (view: View) => void;
}

const getDefaultView = (): View => {
    return View.Grid;
};

const getDefaultTheme = (): Theme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;
};

export const UserSettingsProvider = ({ children }: { readonly children: JSX.Element }) => {
    const [userSettings, setUserSettings] = useState<UserSettings>(() => {
        const settingsFromStorage: UserSettings | null = storageService.load<UserSettings>(STORAGE_KEY);
        if (settingsFromStorage !== null) {
            return settingsFromStorage;
        }
        return {
            // Default to user's system preference.
            theme: getDefaultTheme(),
            view: getDefaultView(),
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

const UserSettingsContext = createContext<UserSettingsContext>({
    theme: getDefaultTheme(),
    view: getDefaultView(),
    toggleTheme: () => null,
    toggleView: () => null,
});
export const useUserSettings = () => useContext(UserSettingsContext);
