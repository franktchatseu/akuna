import React from 'react';
import { Users, Award, Heart, Leaf, ArrowRight } from 'lucide-react';

interface AboutProps {
  language: string;
  isPreview?: boolean;
}

const translations = {
  fr: {
    title: "À propos d'AKUNA",
    subtitle: "Notre Histoire & Valeurs",
    description: "AKUNA est née de la passion pour l'élevage éthique et durable. Située à Nkoabang, Yaoundé, notre ferme moderne allie tradition camerounaise et techniques d'élevage innovantes pour produire une viande de porc d'exception.",
    values: {
      sustainability: {
        title: "Durabilité",
        description: "Respect de l'environnement et pratiques écologiques"
      },
      quality: {
        title: "Qualité Premium",
        description: "Sélection rigoureuse et soins attentifs"
      },
      ethics: {
        title: "Éthique",
        description: "Bien-être animal et transparence totale"
      },
      community: {
        title: "Proximité",
        description: "Relation directe avec nos consommateurs"
      }
    },
    team: "Notre équipe passionnée",
    teamDescription: "Des professionnels dévoués qui veillent quotidiennement au bien-être de nos animaux et à la qualité de nos produits.",
    cta: "En savoir plus"
  },
  en: {
    title: "About AKUNA",
    subtitle: "Our Story & Values",
    description: "AKUNA was born from a passion for ethical and sustainable farming. Located in Nkoabang, Yaoundé, our modern farm combines Cameroonian tradition with innovative breeding techniques to produce exceptional pork.",
    values: {
      sustainability: {
        title: "Sustainability",
        description: "Environmental respect and ecological practices"
      },
      quality: {
        title: "Premium Quality",
        description: "Rigorous selection and attentive care"
      },
      ethics: {
        title: "Ethics",
        description: "Animal welfare and total transparency"
      },
      community: {
        title: "Community",
        description: "Direct relationship with our consumers"
      }
    },
    team: "Our passionate team",
    teamDescription: "Dedicated professionals who daily ensure the welfare of our animals and the quality of our products.",
    cta: "Learn more"
  }
};

export default function About({ language, isPreview = false }: AboutProps) {
  const t = translations[language as keyof typeof translations];

  const values = [
    {
      icon: Leaf,
      title: t.values.sustainability.title,
      description: t.values.sustainability.description,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: t.values.quality.title,
      description: t.values.quality.description,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Heart,
      title: t.values.ethics.title,
      description: t.values.ethics.description,
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users,
      title: t.values.community.title,
      description: t.values.community.description,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className={`${isPreview ? 'py-16' : 'py-20'} bg-white font-body`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6 font-medium">{t.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <div className={`inline-flex p-5 rounded-2xl ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
              </div>
            );
          })}
        </div>

        {!isPreview && (
          <>
            {/* Team Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">{t.team}</h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t.teamDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-display font-bold text-gray-900">10+ Employés</p>
                      <p className="text-sm text-gray-600">Équipe dévouée</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-display font-bold text-gray-900">5+ Années</p>
                      <p className="text-sm text-gray-600">D'expérience</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                    <div className="aspect-video rounded-2xl overflow-hidden relative">
                      <img 
                        src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Équipe AKUNA au travail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-display font-bold text-lg drop-shadow-lg">Notre équipe passionnée</p>
                        <p className="text-sm opacity-90 drop-shadow">Dédiée à l'excellence</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </>
        )}

        {isPreview && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-105">
              {t.cta}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}