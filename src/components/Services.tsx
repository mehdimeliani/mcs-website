import React from 'react';
import { Palette, Video, Smartphone, Megaphone, Eye, Zap } from 'lucide-react';

const Services = () => {
  const scrollToProjects = (category: string) => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Here you could also trigger a filter change in the Projects component
    }
  };

  const services = [
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity systems that tell your story',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Motion Design',
      description: 'Cinematic animations that captivate and engage',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Megaphone,
      title: 'Social Content',
      description: 'Scroll-stopping content for all social platforms',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'UX/UI Design',
      description: 'User-centered designs that convert and delight',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Eye,
      title: 'Creative Direction',
      description: 'Strategic vision that guides every creative decision',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Campaign Strategy',
      description: 'Data-driven campaigns that deliver real results',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From strategy to execution, we offer comprehensive creative services 
            that elevate your brand and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in-up border border-gray-100 hover:border-gray-200"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => scrollToProjects(service.title)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore {service.title} Projects</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;