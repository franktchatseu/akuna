import React, { useState } from 'react';
import { Camera, Filter, ArrowRight, Play, Image as ImageIcon } from 'lucide-react';

interface GalleryProps {
  language: string;
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

const translations = {
  fr: {
    title: "Galerie Photos",
    subtitle: "Découvrez notre ferme en images",
    filters: {
      all: "Tout",
      farm: "Vie de la ferme",
      team: "Équipe",
      products: "Produits",
      facilities: "Installations"
    },
    cta: "Voir toute la galerie"
  },
  en: {
    title: "Photo Gallery",
    subtitle: "Discover our farm in pictures",
    filters: {
      all: "All",
      farm: "Farm life",
      team: "Team",
      products: "Products",
      facilities: "Facilities"
    },
    cta: "View full gallery"
  }
};

export default function Gallery({ language, isPreview = false, onNavigate }: GalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const t = translations[language as keyof typeof translations];

  const galleryItems = [
    {
      id: 1,
      category: 'farm',
      title: 'Porcs dans leur environnement naturel',
      type: 'image',
      featured: true
    },
    {
      id: 2,
      category: 'facilities',
      title: 'Installations modernes et propres',
      type: 'image',
      featured: false
    },
    {
      id: 3,
      category: 'team',
      title: 'Notre équipe au travail',
      type: 'video',
      featured: false
    },
    {
      id: 4,
      category: 'products',
      title: 'Produits frais de qualité',
      type: 'image',
      featured: false
    },
    {
      id: 5,
      category: 'farm',
      title: 'Soins quotidiens aux animaux',
      type: 'image',
      featured: true
    },
    {
      id: 6,
      category: 'facilities',
      title: 'Espace de transformation',
      type: 'image',
      featured: false
    }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const displayItems = isPreview ? galleryItems.slice(0, 4) : filteredItems;

  return (
    <section className={`${isPreview ? 'py-16' : 'py-20'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {!isPreview && (
          /* Filter Tabs */
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedFilter(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                  selectedFilter === key
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.featured && !isPreview ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image placeholder */}
              <div className={`relative overflow-hidden ${
                item.featured && !isPreview ? 'h-96' : 'h-64'
              }`}>
                <img 
                  src={`https://images.pexels.com/photos/${1300355 + index}/pexels-photo-${1300355 + index}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-gray-700 ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm opacity-75">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {item.category}
                    </div>
                    {item.type === 'video' && (
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {t.filters[item.category as keyof typeof t.filters]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate && onNavigate('gallery')}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 group"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}