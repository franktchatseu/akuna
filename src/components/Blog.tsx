import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

interface BlogProps {
  language: string;
}

const translations = {
  fr: {
    title: "Blog & Actualités",
    subtitle: "Conseils, recettes et nouvelles de la ferme",
    readMore: "Lire la suite",
    categories: {
      recipes: "Recettes",
      farming: "Élevage",
      news: "Actualités",
      tips: "Conseils"
    }
  },
  en: {
    title: "Blog & News",
    subtitle: "Tips, recipes and news from the farm",
    readMore: "Read more",
    categories: {
      recipes: "Recipes",
      farming: "Farming",
      news: "News",
      tips: "Tips"
    }
  }
};

export default function Blog({ language }: BlogProps) {
  const t = translations[language as keyof typeof translations];

  const blogPosts = [
    {
      id: 1,
      title: "5 Recettes délicieuses avec le porc AKUNA",
      excerpt: "Découvrez nos recettes favorites pour sublimer la viande de porc de notre ferme. Des plats traditionnels camerounais aux créations modernes.",
      category: "recipes",
      author: "Chef Marie",
      date: "2024-01-15",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "L'importance de l'élevage durable au Cameroun",
      excerpt: "Comment AKUNA contribue à un élevage plus respectueux de l'environnement et du bien-être animal dans notre région.",
      category: "farming",
      author: "Équipe AKUNA",
      date: "2024-01-10",
      readTime: "8 min",
      featured: false
    },
    {
      id: 3,
      title: "Nouvelle ligne de produits transformés",
      excerpt: "Nous sommes fiers d'annoncer le lancement de notre gamme de charcuterie artisanale, préparée selon des recettes traditionnelles.",
      category: "news",
      author: "Direction AKUNA",
      date: "2024-01-08",
      readTime: "3 min",
      featured: false
    },
    {
      id: 4,
      title: "Conseils pour choisir et conserver la viande de porc",
      excerpt: "Nos experts partagent leurs meilleures astuces pour sélectionner et conserver la viande de porc afin de préserver sa qualité.",
      category: "tips",
      author: "Expert AKUNA",
      date: "2024-01-05",
      readTime: "6 min",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      recipes: "bg-red-100 text-red-600",
      farming: "bg-green-100 text-green-600",
      news: "bg-blue-100 text-blue-600",
      tips: "bg-yellow-100 text-yellow-600"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured Article */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-green-100 to-green-200">
                  <img 
                    src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {t.categories[featuredPost.category as keyof typeof t.categories]}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(featuredPost.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group">
                      {t.readMore}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Sidebar Articles */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {t.categories[post.category as keyof typeof t.categories]}
                  </span>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Restez informé</h3>
          <p className="text-xl mb-8 text-green-100">
            Recevez nos dernières actualités, recettes et conseils directement dans votre boîte mail
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-r-full font-semibold hover:bg-yellow-300 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}