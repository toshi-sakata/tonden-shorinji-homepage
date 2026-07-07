import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  openingFinished: boolean;
};

export const Header = ({ openingFinished }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isNavTop, setIsNavTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavTop(window.scrollY > 700);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <a
        className="hum_click"
        href="#"
        onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
        }}
      >
      <div className={`hum_shade ${isMenuOpen ? 'open' : 'close'}`} />
      </a>
      <div className="hum">
        <Link className="logo_souen" to="/">
          <img src="/images/logo_souen.gif" alt="札幌屯田 丘珠スポーツ少年団" />
        </Link>
        <a className="logo_shorinji" href="index.html">
          <img src="/images/logo_shorinji.gif" alt="少林寺拳法" />
        </a>

        <a
          className={`hum_icon ${isMenuOpen ? 'active' : ''}`}
          href="#"
          aria-label="メニュー"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span />
          <span />
          <span />
            <div className={`hum_str hum_str2 ${isMenuOpen ? 'active' : ''}`}>
              CLOSE
            </div>

            <div className={`hum_str ${isMenuOpen ? 'active' : ''}`}>
              MENU
            </div>
        </a>
      </div>
      <div className="dummy" />

      <nav
        className={`nav ${
          !openingFinished ? 'nav-hidden' : ''
        } ${isMenuOpen ? 'open' : 'close'} ${
          isNavTop ? 'nav_top' : ''
        }`}
      >
        <ul id="navlinks">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img className="home_icon" src="/images/home_icon.gif" alt="ホーム" />
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>少林寺拳法とは</Link>
          </li>
          <li>
            <Link to="/edu" onClick={() => setIsMenuOpen(false)}>学び</Link>
          </li>
          <li>
            <Link to="/shidou" onClick={() => setIsMenuOpen(false)}>指導者紹介</Link>
          </li>
          <li>
            <Link to="/info" onClick={() => setIsMenuOpen(false)}>始めるために</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};