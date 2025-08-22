import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Award, Sparkles, TrendingUp, Shield, Leaf } from 'lucide-react';

interface HeroProps {
  language: string;
  onNavigate: (page: string) => void;
}

const translations = {
  fr: {
    badge: "🌱 Élevage Responsable",
    title: "Élevage Porcin",
    subtitle: "de Nouvelle Génération",
    company: "AKUNA",
    description: "Découvrez l'excellence de notre ferme moderne à Nkoabang, Yaoundé. Nous révolutionnons l'élevage porcin avec des pratiques durables et éthiques pour vous offrir une viande d'exception.",
    cta1: "Découvrir notre univers",
    cta2: "Commander maintenant",
    cta3: "Réserver une visite",
    stats: {
      quality: "Qualité Premium Garantie",
      sustainable: "100% Éco-Responsable",
      fresh: "Fraîcheur Optimale",
      certified: "Certifié Bio"
    },
    features: {
      innovation: "Innovation",
      quality: "Qualité",
      sustainability: "Durabilité",
      trust: "Confiance"
    }
  },
  en: {
    badge: "🌱 Responsible Farming",
    title: "Next Generation",
    subtitle: "Pig Farming",
    company: "AKUNA",
    description: "Discover the excellence of our modern farm in Nkoabang, Yaoundé. We revolutionize pig farming with sustainable and ethical practices to offer you exceptional meat.",
    cta1: "Discover our world",
    cta2: "Order now",
    cta3: "Book a visit",
    stats: {
      quality: "Premium Quality Guaranteed",
      sustainable: "100% Eco-Responsible",
      fresh: "Optimal Freshness",
      certified: "Organic Certified"
    },
    features: {
      innovation: "Innovation",
      quality: "Quality",
      sustainability: "Sustainability",
      trust: "Trust"
    }
  }
};

export default function Hero({ language, onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: TrendingUp, text: t.features.innovation, color: "from-blue-500 to-cyan-500" },
    { icon: Award, text: t.features.quality, color: "from-yellow-500 to-orange-500" },
    { icon: Leaf, text: t.features.sustainability, color: "from-green-500 to-emerald-500" },
    { icon: Shield, text: t.features.trust, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-body">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 animate-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className={`text-white space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/20 glass rounded-full text-sm font-medium text-white backdrop-blur-md border border-white/30">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              {t.badge}
            </div>
            
            <div className="space-y-6">
              <h1 className="font-display text-6xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white">{t.title}</span>
                <span className="block text-yellow-300 text-4xl lg:text-5xl font-normal mt-2">{t.subtitle}</span>
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-display font-bold text-2xl">A</span>
                </div>
                <div>
                  <h2 className="font-display text-4xl font-bold text-yellow-300">{t.company}</h2>
                  <p className="text-green-200 font-medium">Élevage Premium</p>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed max-w-2xl font-light">
                {t.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('about')}
                className="group relative overflow-hidden bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transition-all duration-500 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">{t.cta1}</span>
                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => onNavigate('products')}
                className="group relative overflow-hidden border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-500 flex items-center justify-center transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">{t.cta2}</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group p-4 glass rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-white/90">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Visual */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative z-10 glass rounded-3xl p-8 border border-white/20 backdrop-blur-md">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-400/20 animate-pulse"></div>
                </div>
                
                {/* Hero Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Ferme AKUNA - Élevage porcin moderne"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="text-center text-white relative z-10">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-yellow-400/90 to-orange-500/90 rounded-full flex items-center justify-center mx-auto animate-pulse-glow backdrop-blur-sm">
                      <Play className="w-16 h-16 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-bounce shadow-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full animate-ping shadow-lg"></div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-2 drop-shadow-lg">Visite Virtuelle 360°</h3>
                  <p className="text-green-100 mb-6 font-light drop-shadow">Explorez notre ferme moderne</p>
                  
                  <button 
                    onClick={() => onNavigate('visit')}
                    className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="flex items-center">
                      {t.cta3}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300 font-display">500+</div>
                  <div className="text-xs text-white/80 font-medium">Clients Satisfaits</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-green-300 font-display">100%</div>
                  <div className="text-xs text-white/80 font-medium">Bio & Naturel</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/70 text-xs font-medium">Découvrir</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => onNavigate('contact')}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-pulse-glow"
        >
          <Play className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}