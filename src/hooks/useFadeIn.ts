import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollKeys = new Set([
  'ArrowDown',
  'ArrowUp',
  'PageDown',
  'PageUp',
  'Home',
  'End',
  ' ',
]);

export const useFadeIn = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let userScrolled = false;

    const resetElements = () => {
      document.querySelectorAll('.fadeIn').forEach((element) => {
        element.classList.remove('effected');
      });
    };

    const updateFadeIn = () => {
      // 初回表示時点で画面内にある要素も、ユーザーが一度操作するまでは
      // フェードインさせない（ロード直後に一斉表示されるのを防ぐ）
      if (!userScrolled) {
        return;
      }

      document.querySelectorAll('.fadeIn').forEach((element) => {
        const boxOffset =
          (element as HTMLElement).getBoundingClientRect().top + window.scrollY;
        const scrollPos = window.scrollY;
        const wh = window.innerHeight;

        if (scrollPos > boxOffset - wh + 10) {
          element.classList.add('effected');
        } else {
          element.classList.remove('effected');
        }
      });
    };

    const markUserScroll = () => {
      userScrolled = true;
      updateFadeIn();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (scrollKeys.has(event.key)) {
        markUserScroll();
      }
    };

    resetElements();

    window.addEventListener('scroll', updateFadeIn);
    window.addEventListener('wheel', markUserScroll, { passive: true });
    window.addEventListener('touchmove', markUserScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', updateFadeIn);
      window.removeEventListener('wheel', markUserScroll);
      window.removeEventListener('touchmove', markUserScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pathname]);
};
