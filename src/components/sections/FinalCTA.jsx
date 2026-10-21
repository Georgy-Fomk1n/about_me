import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <div className="final-cta fade-in">
      <h2>Проектируем решения на стыке технологий, управления и реальных потребностей людей.</h2>
      <Link to="/contact" className="btn-primary">
        Обсудить проект
      </Link>
    </div>
  );
};

export default FinalCTA;
