import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export const useAnalyticsRouteTracker = () => {
    const location = window.location;
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (initialized) {
            return;
        }
        if (process.env.NODE_ENV === undefined) {
            return;
        }
        if (process.env.NODE_ENV === 'development') {
            return;
        }
        if (TRACKING_ID === undefined) {
            return;
        }
        ReactGA.initialize(TRACKING_ID);
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (!initialized) {
            return;
        }
        ReactGA.pageview(location.pathname + location.search);
    }, [initialized, location]);
};
