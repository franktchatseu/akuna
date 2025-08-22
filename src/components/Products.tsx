import React, { useState } from 'react';
import { ShoppingCart, Star, Package, Truck, ArrowRight } from 'lucide-react';

interface ProductsProps {
  language: string;
  isPreview?: boolean;
  onNavigate?: (page: string) => void;
}

const translations = {
  fr: {
    title: "Nos Produits",
    subtitle: "Viande de Porc Premium",
    categories: {
      fresh: "Viande Fraîche",
      processed: "Produits Transformés",
      packs: "Packs Familiaux"
    },
    addToCart: "Ajouter au panier",
    viewDetails: "Voir détails",
    features: {
      quality: "Qualité contrôlée",
      fresh: "Toujours frais",
      delivery: "Livraison rapide",
      origin: "Traçabilité complète"
    },
    cta: "Voir toute la boutique"
  },
  en: {
    title: "Our Products",
    subtitle: "Premium Pork Meat",
    categories: {
      fresh: "Fresh Meat",
      processed: "Processed Products",
      packs: "Family Packs"
    },
    addToCart: "Add to cart",
    viewDetails: "View details",
    features: {
      quality: "Quality controlled",
      fresh: "Always fresh",
      delivery: "Fast delivery",
      origin: "Full traceability"
    },
    cta: "View all products"
  }
};

export default function Products({ language, isPreview = false, onNavigate }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState('fresh');
  const t = translations[language as keyof typeof translations];

  const products = {
    fresh: [
      {
        id: 1,
        name: "Côtelettes de Porc",
        price: "3500 FCFA/kg",
        rating: 5,
        image: "fresh-chops",
        badge: "Premium"
      },
      {
        id: 2,
        name: "Filet de Porc",
        price: "4200 FCFA/kg",
        rating: 5,
        image: "pork-fillet",
        badge: "Bio"
      },
      {
        id: 3,
        name: "Épaule de Porc",
        price: "2800 FCFA/kg",
        rating: 4,
        image: "pork-shoulder",
        badge: null
      }
    ],
    processed: [
      {
        id: 4,
        name: "Saucisses Artisanales",
        price: "2500 FCFA/pack",
        rating: 5,
        image: "sausages",
        badge: "Artisanal"
      },
      {
        id: 5,
        name: "Jambon Fumé",
        price: "3800 FCFA/kg",
        rating: 5,
        image: "smoked-ham",
        badge: "Premium"
      }
    ],
    packs: [
      {
        id: 6,
        name: "Pack Famille (5kg)",
        price: "15000 FCFA",
        rating: 5,
        image: "family-pack",
        badge: "Économique"
      }
    ]
  };

  const currentProducts = products[selectedCategory as keyof typeof products];

  const features = [
    { icon: Star, text: t.features.quality, color: "text-yellow-500" },
    { icon: Package, text: t.features.fresh, color: "text-green-500" },
    { icon: Truck, text: t.features.delivery, color: "text-blue-500" },
    { icon: ShoppingCart, text: t.features.origin, color: "text-purple-500" }
  ];

  return (
    <section className={`${isPreview ? 'py-16' : 'py-20'} bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 bg-white rounded-full shadow-lg mb-3">
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-700">{feature.text}</p>
              </div>
            );
          })}
        </div>

        {!isPreview && (
          <>
            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-white rounded-full p-2 shadow-lg">
                {Object.entries(t.categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === key
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isPreview ? products.fresh.slice(0, 3) : currentProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/${product.id === 1 ? '1300355' : product.id === 2 ? '1300355' : '1300355'}/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">{product.price}</p>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t.addToCart}
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
                    <Package className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate && onNavigate('products')}
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