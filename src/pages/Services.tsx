import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Video, Smartphone, Megaphone, Eye, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand systems that tell your story and connect with your audience',
      color: 'from-blue-500 to-cyan-500',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography Systems', 'Brand Strategy'],
      process: 'Discovery → Strategy → Design → Implementation'
    },
    {
      icon: Video,
      title: 'Motion Graphics',
      description: 'Cinematic animations and motion design that captivate and engage',
      color: 'from-purple-500 to-pink-500',
      features: ['2D/3D Animation', 'Explainer Videos', 'Logo Animation', 'Social Media Content', 'Commercial Spots'],
      process: 'Concept → Storyboard → Animation → Post-Production'
    },
    {
      icon: Megaphone,
      title: 'Social Content',
      description: 'Scroll-stopping content designed for maximum engagement across platforms',
      color: 'from-green-500 to-teal-500',
      features: ['Content Strategy', 'Visual Templates', 'Video Content', 'Story Design', 'Campaign Assets'],
      process: 'Strategy → Content Planning → Creation → Optimization'
    },
    {
      icon: Smartphone,
      title: 'UX/UI Design',
      description: 'User-centered digital experiences that convert visitors into customers',
      color: 'from-orange-500 to-red-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Interface Design', 'Usability Testing'],
      process: 'Research → Design → Prototype → Test → Iterate'
    },
    {
      icon: Eye,
      title: 'Creative Direction',
      description: 'Strategic creative vision that guides every aspect of your brand',
      color: 'from-indigo-500 to-purple-500',
      features: ['Creative Strategy', 'Art Direction', 'Campaign Concepts', 'Visual Storytelling', 'Brand Positioning'],
      process: 'Brief → Concept → Direction → Execution → Refinement'
    },
    {
      icon: Zap,
      title: 'Video Production',
      description: 'Full-service video production from concept to final delivery',
      color: 'from-yellow-500 to-orange-500',
      features: ['Pre-Production', 'Filming', 'Post-Production', 'Color Grading', 'Sound Design'],
      process: 'Pre-Production → Production → Post → Delivery'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we offer comprehensive creative services 
            that elevate your brand and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Our Process:</h4>
                      <p className="text-gray-600 text-sm">{service.process}</p>
                    </div>

                    <Link 
                      to="/projects"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors group-hover:translate-x-2 duration-300"
                    >
                      <span>View {service.title} Projects</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              to="/projects"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;