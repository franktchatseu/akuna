import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Check } from 'lucide-react';

interface ContactProps {
  language: string;
}

const translations = {
  fr: {
    title: "Contactez-nous",
    subtitle: "Nous sommes là pour répondre à toutes vos questions",
    form: {
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message"
    },
    info: {
      address: "Nkoabang, Yaoundé - Cameroun",
      phone: "+237 XXX XXX XXX",
      email: "contact@akuna.cm",
      hours: "Lun-Sam: 8h-18h",
      whatsapp: "WhatsApp"
    },
    confirmation: "Votre message a été envoyé avec succès !"
  },
  en: {
    title: "Contact us",
    subtitle: "We're here to answer all your questions",
    form: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message"
    },
    info: {
      address: "Nkoabang, Yaoundé - Cameroon",
      phone: "+237 XXX XXX XXX",
      email: "contact@akuna.cm",
      hours: "Mon-Sat: 8am-6pm",
      whatsapp: "WhatsApp"
    },
    confirmation: "Your message has been sent successfully!"
  }
};

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-green-100">{t.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-green-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p className="text-green-100">{t.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-green-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-green-100">{t.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-green-200 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Horaires</h4>
                    <p className="text-green-100">{t.info.hours}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button className="w-full mt-8 bg-green-500 hover:bg-green-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                {t.info.whatsapp}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé !</h3>
                  <p className="text-gray-600">{t.confirmation}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h3>
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
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
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
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.subject}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t.form.send}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Carte de localisation</p>
              <p className="text-sm">Nkoabang, Yaoundé - Cameroun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}