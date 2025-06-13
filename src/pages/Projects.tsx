import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding', 'Motion', 'UX/UI', 'Social', 'Video'];

  const projects = [
    {
      id: 1,
      title: 'DUNZ Brand Revolution',
      category: 'Branding',
      client: 'DUNZ',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand transformation for emerging tech company',
      year: '2024'
    },
    {
      id: 2,
      title: 'Sunset Campaign',
      category: 'Motion',
      client: 'Confidential',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cinematic promotional video for luxury resort',
      year: '2024'
    },
    {
      id: 3,
      title: 'App Interface Design',
      category: 'UX/UI',
      client: 'TechFlow',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intuitive mobile app interface design',
      year: '2024'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social',
      client: 'StyleCo',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive social media visual strategy',
      year: '2024'
    },
    {
      id: 5,
      title: 'Product Launch Video',
      category: 'Video',
      client: 'InnovateTech',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-impact product launch video campaign',
      year: '2024'
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      category: 'UX/UI',
      client: 'ShopSmart',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Conversion-focused e-commerce platform design',
      year: '2024'
    },
    {
      id: 7,
      title: 'Restaurant Rebrand',
      category: 'Branding',
      client: 'Bella Vista',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete restaurant brand identity redesign',
      year: '2023'
    },
    {
      id: 8,
      title: 'Motion Logo Series',
      category: 'Motion',
      client: 'Various Clients',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collection of animated logo designs',
      year: '2023'
    },
    {
      id: 9,
      title: 'Fitness App Design',
      category: 'UX/UI',
      client: 'FitLife',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Motivational fitness tracking app interface',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of creative solutions that have helped brands 
            tell their stories and achieve their goals.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:scale-105'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{project.year}</span>
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-2">{project.client}</p>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No projects found for the selected category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;