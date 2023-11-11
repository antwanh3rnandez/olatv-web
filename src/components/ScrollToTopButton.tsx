import { useState, useEffect } from 'react';
import { IconChevronUp } from '@tabler/icons-react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
      <IconChevronUp size={64} />
    </button>
  );
};