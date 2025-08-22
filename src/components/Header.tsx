import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const translations = {
  fr: {
    home: 'Accueil',
    about: 'À propos',
    products: 'Boutique',
    gallery: 'Galerie',
    blog: 'Blog',
    visit: 'Réserver une visite',
    contact: 'Contact',
    cart: 'Panier',
    login: 'Connexion'
  },
  en: {
    home: 'Home',
    about: 'About',
    products: 'Shop',
    gallery: 'Gallery',
    blog: 'Blog',
    visit: 'Book a visit',
    contact: 'Contact',
    cart: 'Cart',
    login: 'Login'
  }
};

export default function Header({ currentPage, onNavigate, language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'products', label: t.products },
    { id: 'gallery', label: t.gallery },
    { id: 'blog', label: t.blog },
    { id: 'visit', label: t.visit },
    { id: 'contact', label: t.contact }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-body ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-green-100' 
        : 'bg-white/90 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          
          {/* Logo Premium */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 rounded-3xl flex items-center justify-center mr-4 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                <span className="text-white font-display font-bold text-2xl">A</span>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                AKUNA
              </h1>
              <p className="text-sm font-medium text-green-600 -mt-1">Élevage Premium</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-green-100">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-sm hover:scale-105 group ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl animate-pulse-glow"></div>
                  )}
                  {currentPage !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Globe className="w-4 h-4 mr-2 text-green-600" />
                <span className="font-semibold text-gray-700">{language.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4 ml-1 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-green-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={() => onLanguageChange('fr')}
                  className={`flex items-center w-full px-4 py-3 hover:bg-green-50 transition-colors ${language === 'fr' ? 'bg-green-50 text-green-600' : 'text-gray-700'}`}
                >
                  <span className="mr-3">🇫🇷</span>
                  Français
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`flex items-center w-full px-4 py-3 hover:bg-green-50 transition-colors ${language === 'en' ? 'bg-green-50 text-green-600' : 'text-gray-700'}`}
                >
                  <span className="mr-3">🇬🇧</span>
                  English
                </button>
              </div>
            </div>
            
            {/* Cart Button */}
            <button className="relative p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-110 group">
              <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
            </button>
            
            {/* User Button */}
            <button className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
              <User className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-100 p-6 mt-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 font-semibold ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-green-100">
              <div className="flex space-x-3">
                <button className="relative p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                </button>
                <button className="p-3 bg-green-600 rounded-xl hover:bg-green-700 transition-colors">
                  <User className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onLanguageChange('fr')}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${language === 'fr' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${language === 'en' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}