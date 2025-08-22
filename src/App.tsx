import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import BookVisit from './components/BookVisit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('fr');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About language={language} />;
      case 'products':
        return <Products language={language} />;
      case 'gallery':
        return <Gallery language={language} />;
      case 'blog':
        return <Blog language={language} />;
      case 'visit':
        return <BookVisit language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return (
          <>
            <Hero language={language} onNavigate={setCurrentPage} />
            <About language={language} isPreview={true} />
            <Products language={language} isPreview={true} onNavigate={setCurrentPage} />
            <Gallery language={language} isPreview={true} onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      <Header 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;