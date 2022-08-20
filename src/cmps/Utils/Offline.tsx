import { useState, useEffect } from 'react';

export const Offline = ({
    onOffline,
    onOnline,
    children,
}: {
    readonly onOffline?: () => void;
    readonly onOnline?: () => void;
    readonly children: JSX.Element;
}) => {
    const [isOffline, setIsOffline] = useState<boolean>(false);

    const offline = () => {
        if (onOffline !== undefined) {
            onOffline();
        }
        setIsOffline(true);
    };
    const online = () => {
        if (onOnline !== undefined) {
            onOnline();
        }
        setIsOffline(false);
    };

    useEffect(() => {
        window.addEventListener('online', online);
        window.addEventListener('offline', offline);
        return () => {
            window.removeEventListener('online', online);
            window.removeEventListener('offline', offline);
        };
    }, []);

    return isOffline ? children : null;
};
