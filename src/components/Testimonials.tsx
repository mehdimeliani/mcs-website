import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "MCS elevated our brand beyond expectations. Their strategic approach and stunning visuals transformed how our customers see us.",
      author: "Sarah Johnson",
      company: "DUNZ",
      role: "Marketing Director"
    },
    {
      quote: "Working with Master Connect Studio was a game-changer. They didn't just deliver a project – they delivered a vision that exceeded our wildest dreams.",
      author: "Michael Chen",
      company: "TechFlow",
      role: "CEO"
    },
    {
      quote: "The team at MCS has an incredible ability to translate complex ideas into beautiful, compelling visuals that actually drive results.",
      author: "Emma Rodriguez",
      company: "StyleCo",
      role: "Brand Manager"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it – hear from the brands we've helped transform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="text-blue-100">
                <p className="text-xl font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-lg">{testimonials[currentIndex].role}</p>
                <p className="text-lg font-medium">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;