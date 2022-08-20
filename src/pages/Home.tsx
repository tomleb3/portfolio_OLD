import React, { lazy, Suspense } from 'react';

import { Hero } from '../cmps/Hero';
import { Introduction } from '../cmps/Introduction';
import { Spinner } from '../cmps/Spinner';
import { Theme, useUserSettings } from '../services/userSettingsService';
import { Work, workService } from '../services/workService';

const Skills = lazy(() =>
    import('../cmps/Skills').then(module => ({
        default: module.Skills,
    })),
);
const RecentWork = lazy(() =>
    import('../cmps/RecentWork').then(module => ({
        default: module.RecentWork,
    })),
);
const EarlyWork = lazy(() =>
    import('../cmps/EarlyWork').then(module => ({
        default: module.EarlyWork,
    })),
);

export const Home = () => {
    const { theme } = useUserSettings();
    const isDarkMode: boolean = theme === Theme.Dark;
    let works: readonly Work[] = workService.query();

    return (
        <main className='home'>
            <Hero />
            <Suspense
                fallback={
                    <article className={['spinner-container', isDarkMode ? 'dark-mode' : ''].join(' ')}>
                        <Spinner />
                    </article>
                }
            >
                <Introduction />
                <Skills />
                <RecentWork works={works} />
                <EarlyWork works={works} />
            </Suspense>
        </main>
    );
};
