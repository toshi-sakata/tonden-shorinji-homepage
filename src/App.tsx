import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFadeIn } from './hooks/useFadeIn';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Practice } from './components/Practice';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Edu } from './pages/Edu';
import { Shidou } from './pages/Shidou';
import { Info } from './pages/Info';

const ScrollRestoration = () => {
  useEffect(() => {
    // ブラウザのスクロール位置復元を無効化
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    });
  }, [pathname]);

  return null;
};


const AppContent = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [hasPlayedOpening, setHasPlayedOpening] = useState(() => !isHome);
  const [heroVisible, setHeroVisible] = useState(() => !isHome);
  const [navVisible, setNavVisible] = useState(() => !isHome);

  const shouldShowOpening = isHome && !hasPlayedOpening;

  useEffect(() => {
    if (!isHome || !heroVisible || navVisible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setNavVisible(true);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [isHome, heroVisible, navVisible]);

  const finishOpening = () => {
    setHasPlayedOpening(true);
    setHeroVisible(true);
  };

  useFadeIn();

  return (
    <>
      <ScrollRestoration />
      <ScrollToTop />
      {shouldShowOpening && (
        <>
          <div className="shutter react-opening-shutter" />
          <div className="opening react-opening-logo">
            <img src="/images/souen.gif" alt="" />
          </div>
          <div
            className="shutter2 react-opening-shutter2"
            onAnimationEnd={finishOpening}
          />
        </>
      )}
      <div id="wrapper">
        <Header openingFinished={!isHome || navVisible} />

        <Routes>
          <Route path="/" element={<Home heroVisible={heroVisible} />} />
          <Route path="/about" element={<About />} />
          <Route path="/edu" element={<Edu />} />
          <Route path="/shidou" element={<Shidou />} />
          <Route path="/info" element={<Info />} />
        </Routes>

        <Practice />
        <Footer />
      </div>
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
