import { useEffect } from 'react';

export function Helmet({
    title,
    scrollToTop = false,
    children,
}: {
    readonly title: string;
    readonly scrollToTop?: boolean;
    readonly children: JSX.Element;
}) {
    useEffect(() => {
        document.title = title;
        if (scrollToTop) {
            window.scrollTo(0, 0);
        }
    });

    return children;
}
