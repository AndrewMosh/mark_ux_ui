import { useEffect, useState } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setEntries(entries);
    }, options);

    const elements = document.querySelectorAll('[data-id]');
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return entries;
};

export default useIntersectionObserver;
