import React from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            We blend strategy, storytelling, and stunning visuals to craft 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}unforgettable creative experiences.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Every brand has a story worth telling. We help you tell yours with purpose, 
            precision, and visual impact that resonates with your audience and drives results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;