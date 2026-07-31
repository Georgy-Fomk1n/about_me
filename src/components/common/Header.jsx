import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '@data/config.json';
import { useHeaderScroll, useMobileMenu } from '@utils/hooks';

const Header = () => {
  const location = useLocation();
  const { isOpen, toggle, close } = useMobileMenu();
  useHeaderScroll();

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={close}>
          Георгий <span>Фомкин</span>
        </Link>
        
        <nav className={`nav ${isMobile ? 'mobile' : ''} ${isOpen ? 'open' : ''}`}>
          {config.navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {!isMobile && (
          <Link to="/contact" className="btn-primary">
            Обсудить проект
          </Link>
        )}

        <div className="mobile-actions">
          <Link to="/contact" className="mobile-cta" onClick={close} aria-label="Обсудить проект">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </Link>
          <button 
            className={`mobile-toggle ${isOpen ? 'open' : ''}`} 
            onClick={toggle}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
