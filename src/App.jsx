import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Home from '@pages/Home';
import Cases from '@pages/Cases';
import About from '@pages/About';
import Contact from '@pages/Contact';
import '@styles/main.css';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/about_me">
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
