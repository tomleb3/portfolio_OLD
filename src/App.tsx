import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { UserSettingsProvider } from './services/userSettingsService';
import { useAnalyticsRouteTracker } from './services/analyticsService';

const OFFLINE_BODY_CLASSNAME = 'offline';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Offline = ({ children }: { children: JSX.Element }) => {
  const [isOffline, setIsOffline] = useState<boolean>(false);

  const onOnline = () => {
    document.body.classList.remove(OFFLINE_BODY_CLASSNAME);
    setIsOffline(false);
  };
  const onOffline = () => {
    document.body.classList.add(OFFLINE_BODY_CLASSNAME);
    setIsOffline(true);
  };

  useEffect(() => {
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  return isOffline ? children : null;
};

export const App = () => {
  useAnalyticsRouteTracker();

  return (
    <main className='App'>
      <Offline>
        <div className='offline-indicator'>
          You are currently offline. Some of the features may not work as intended.
        </div>
      </Offline>

      <UserSettingsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppHeader />
          <Routes>
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/' element={<Home />} />
            <Route element={<Home />} />
          </Routes>
          <AppFooter />
        </BrowserRouter>
      </UserSettingsProvider>
    </main>
  );
};
