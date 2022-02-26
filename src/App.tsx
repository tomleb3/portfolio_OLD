import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { UserSettingsProvider } from './services/userSettingsService';
import { useAnalyticsRouteTracker } from './services/analyticsService';
import { Offline } from './cmps/Utils/Offline';
import { Helmet } from './cmps/Utils/Helmet';

const OFFLINE_BODY_CLASSNAME = 'offline';

export const App = () => {
  useAnalyticsRouteTracker();

  const onOffline = () => document.body.classList.add(OFFLINE_BODY_CLASSNAME);
  const onOnline = () => document.body.classList.remove(OFFLINE_BODY_CLASSNAME);

  return (
    <>
      <Offline onOffline={onOffline} onOnline={onOnline}>
        <div className='offline-indicator'>
          You are currently offline. Some of the features may not work as intended.
        </div>
      </Offline>

      <UserSettingsProvider>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route
              path='/contact'
              element={
                <Helmet title={'Tom Leb \u2022 Contact'} scrollToTop>
                  <Contact />
                </Helmet>
              }
            />
            <Route
              path='/resume'
              element={
                <Helmet title={'Tom Leb \u2022 Resume'} scrollToTop>
                  <Resume />
                </Helmet>
              }
            />
            <Route
              path='/'
              element={
                <Helmet title={'Tom Leb \u2022 Portfolio'} scrollToTop>
                  <Home />
                </Helmet>
              }
            />
          </Routes>
          <AppFooter />
        </BrowserRouter>
      </UserSettingsProvider>
    </>
  );
};
