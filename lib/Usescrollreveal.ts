'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all reveal elements on navigation
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => el.classList.remove('is-visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Small delay to let the new page render first
    const timeout = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);
}