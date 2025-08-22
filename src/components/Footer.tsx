import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  language: string;
}

const translations = {
  fr: {
    company: "AKUNA",
    description: "Élevage porcin durable et responsable à Nkoabang, Yaoundé. Une viande de qualité premium dans le respect de l'éthique et de l'environnement.",
    quickLinks: "Liens rapides",
    contact: "Contact",
    services: "Services",
    followUs: "Suivez-nous",
    rights: "Tous droits réservés",
    madeWith: "Fait avec",
    links: {
      about: "À propos",
      products: "Boutique",
      gallery: "Galerie",
      blog: "Blog",
      visit: "Réserver une visite",
      contact: "Contact"
    },
    servicesList: {
      freshMeat: "Viande fraîche",
      processing: "Produits transformés",
      delivery: "Livraison à domicile",
      visits: "Visites de ferme"
    }
  },
  en: {
    company: "AKUNA",
    description: "Sustainable and responsible pig farming in Nkoabang, Yaoundé. Premium quality meat with respect for ethics and the environment.",
    quickLinks: "Quick links",
    contact: "Contact",
    services: "Services",
    followUs: "Follow us",
    rights: "All rights reserved",
    madeWith: "Made with",
    links: {
      about: "About",
      products: "Shop",
      gallery: "Gallery",
      blog: "Blog",
      visit: "Book a visit",
      contact: "Contact"
    },
    servicesList: {
      freshMeat: "Fresh meat",
      processing: "Processed products",
      delivery: "Home delivery",
      visits: "Farm visits"
    }
  }
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t.company}</h3>
                <p className="text-green-400 text-sm">Élevage Durable</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {t.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {Object.entries(t.links).map(([key, label]) => (
                <li key={key}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.services}</h4>
            <ul className="space-y-3">
              {Object.values(t.servicesList).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Nkoabang, Yaoundé<br />
                  Cameroun
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+237 XXX XXX XXX</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@akuna.cm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AKUNA. {t.rights}
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              {t.madeWith} <Heart className="w-4 h-4 text-red-500 mx-1" /> à Yaoundé
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}