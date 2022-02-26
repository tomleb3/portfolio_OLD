import { useEffect } from 'react';

export function Helmet({
  title,
  scrollToTop = false,
  children,
}: {
  title: string;
  scrollToTop?: boolean;
  children: JSX.Element;
}) {
  useEffect(() => {
    document.title = title;
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  });

  return children;
}
