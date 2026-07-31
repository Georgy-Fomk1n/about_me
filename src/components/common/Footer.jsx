import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>© {currentYear} Георгий Фомкин. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
