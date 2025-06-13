import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Target, Lightbulb, Award } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    '1': {
      title: 'DUNZ Brand Revolution',
      category: 'Branding',
      client: 'DUNZ',
      year: '2024',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
      objective: 'Complete brand transformation for an emerging tech company looking to establish market presence and credibility in the competitive fintech space.',
      challenge: 'DUNZ needed to differentiate themselves from established competitors while building trust with both consumers and enterprise clients. Their existing brand lacked cohesion and failed to communicate their innovative approach.',
      solution: 'We developed a comprehensive brand identity system featuring a modern, geometric logo that represents connectivity and growth. The color palette combines trustworthy blues with energetic accent colors, while the typography system balances professionalism with approachability.',
      tools: ['Adobe Illustrator', 'Figma', 'After Effects', 'Photoshop'],
      outcome: '300% increase in brand recognition within 6 months, 150% improvement in website conversion rates, and successful Series A funding round.',
      testimonial: 'MCS elevated our brand beyond expectations. Their strategic approach and stunning visuals transformed how our customers see us.',
      images: [
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    '2': {
      title: 'Sunset Campaign',
      category: 'Motion Graphics',
      client: 'Confidential Resort Chain',
      year: '2024',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200',
      objective: 'Create a cinematic promotional campaign that captures the luxury and tranquility of a premium resort destination.',
      challenge: 'The resort needed to stand out in a saturated luxury travel market while conveying both relaxation and adventure to attract diverse demographics.',
      solution: 'We produced a series of cinematic videos featuring stunning aerial cinematography, seamless transitions, and motion graphics that highlight the resort\'s unique features. The campaign includes hero videos, social media content, and interactive elements.',
      tools: ['Cinema 4D', 'After Effects', 'Premiere Pro', 'DaVinci Resolve'],
      outcome: '2M+ views across all platforms, 45% increase in booking inquiries, and recognition at the Travel Marketing Awards.',
      testimonial: 'Breathtaking visuals that captured our essence perfectly. The campaign exceeded all our expectations.',
      images: [
        'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    '3': {
      title: 'TechFlow App Interface',
      category: 'UX/UI Design',
      client: 'TechFlow',
      year: '2024',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      objective: 'Design an intuitive mobile app interface that simplifies complex workflow management for remote teams.',
      challenge: 'Users were struggling with existing project management tools that were either too complex or lacked essential features for remote collaboration.',
      solution: 'We created a clean, user-centered design with intuitive navigation, smart notifications, and collaborative features. The interface prioritizes clarity and efficiency while maintaining visual appeal.',
      tools: ['Figma', 'Sketch', 'Principle', 'Adobe XD'],
      outcome: '40% increase in user engagement, 60% reduction in support tickets, and 4.8/5 app store rating.',
      testimonial: 'Clean, intuitive design that our users absolutely love. Productivity has never been higher.',
      images: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-purple-600 transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl opacity-90">{project.client} • {project.year}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link 
              to="/projects"
              className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Overview */}
              <div className="animate-fade-in-up">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Project Objective</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{project.objective}</p>
              </div>

              {/* Challenge */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <ExternalLink className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Results & Impact</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.outcome}</p>
                
                {project.testimonial && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                    <blockquote className="text-lg text-gray-800 italic mb-4">
                      "{project.testimonial}"
                    </blockquote>
                    <cite className="text-gray-600 font-medium">— {project.client}</cite>
                  </div>
                )}
              </div>

              {/* Additional Images */}
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Client</p>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Year</p>
                      <p className="text-gray-600">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools Used */}
              <div className="bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                <p className="mb-6 opacity-90">Let's discuss how we can help elevate your brand with creative solutions.</p>
                <Link 
                  to="/contact"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;