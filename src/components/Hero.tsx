import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
          The sky is not
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            our limit.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          We are a visual storytelling studio crafting bold brands, cinematic campaigns, 
          and motion-rich content that moves people.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>See Our Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToSection('services')}
            className="group bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Explore Services</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;