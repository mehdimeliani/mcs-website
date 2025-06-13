import React from 'react';
import { Target, Film, Brain, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Strategy-Driven Design',
      description: 'Every creative decision is backed by data and strategic thinking to ensure maximum impact.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Film,
      title: 'Cinematic Visuals',
      description: 'Hollywood-level production quality that makes your brand stand out in any crowd.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Creative Direction with Purpose',
      description: 'Innovative concepts that align with your business goals and resonate with your audience.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Scalable for Any Brand',
      description: 'From startups to enterprises, our solutions grow with your business needs.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose MCS?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just create pretty visuals – we craft strategic creative solutions 
            that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;