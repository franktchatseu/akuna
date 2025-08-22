import React, { useState } from 'react';
import { Calendar, Users, Clock, MapPin, Check, Phone, Mail } from 'lucide-react';

interface BookVisitProps {
  language: string;
}

const translations = {
  fr: {
    title: "Réserver une visite",
    subtitle: "Découvrez notre ferme et rencontrez nos équipes",
    form: {
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      visitors: "Nombre de visiteurs",
      date: "Date souhaitée",
      visitType: "Type de visite",
      message: "Message (optionnel)",
      submit: "Réserver la visite"
    },
    visitTypes: {
      family: "Visite familiale",
      school: "Visite scolaire",
      professional: "Visite professionnelle"
    },
    info: {
      duration: "Durée : 2h",
      price: "Gratuit",
      schedule: "Lun-Sam: 9h-17h",
      location: "Nkoabang, Yaoundé"
    },
    confirmation: "Votre demande de visite a été envoyée avec succès !"
  },
  en: {
    title: "Book a visit",
    subtitle: "Discover our farm and meet our teams",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      visitors: "Number of visitors",
      date: "Preferred date",
      visitType: "Visit type",
      message: "Message (optional)",
      submit: "Book the visit"
    },
    visitTypes: {
      family: "Family visit",
      school: "School visit",
      professional: "Professional visit"
    },
    info: {
      duration: "Duration: 2h",
      price: "Free",
      schedule: "Mon-Sat: 9am-5pm",
      location: "Nkoabang, Yaoundé"
    },
    confirmation: "Your visit request has been sent successfully!"
  }
};

export default function BookVisit({ language }: BookVisitProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitors: '2',
    date: '',
    visitType: 'family',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[language as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Visit Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.info.duration}</h4>
                    <p className="text-gray-600 text-sm">{t.info.schedule}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.info.price}</h4>
                    <p className="text-gray-600 text-sm">Pour tous les âges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.info.location}</h4>
                    <p className="text-gray-600 text-sm">Ferme AKUNA</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Contact direct</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+237 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>contact@akuna.cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Demande envoyée !</h3>
                  <p className="text-gray-600">{t.confirmation}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.visitors}
                      </label>
                      <select
                        name="visitors"
                        value={formData.visitors}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                        ))}
                        <option value="10+">Plus de 10</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.date}
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.visitType}
                      </label>
                      <select
                        name="visitType"
                        value={formData.visitType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        <option value="family">{t.visitTypes.family}</option>
                        <option value="school">{t.visitTypes.school}</option>
                        <option value="professional">{t.visitTypes.professional}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}