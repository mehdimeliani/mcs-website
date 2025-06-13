import React, { useState } from 'react';
import { Eye, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Branding', 'Motion', 'UX/UI', 'Social', 'Video'];

  const projects = [
    {
      id: 1,
      title: 'DUNZ Brand Revolution',
      category: 'Branding',
      client: 'DUNZ',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      objective: 'Complete brand transformation for emerging tech company',
      solution: 'Developed comprehensive brand identity with modern logo, color palette, and visual system',
      tools: ['Adobe Illustrator', 'Figma', 'After Effects'],
      outcome: '300% increase in brand recognition',
      testimonial: 'MCS elevated our brand beyond expectations.'
    },
    {
      id: 2,
      title: 'Sunset Campaign',
      category: 'Motion',
      client: 'Confidential',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
      objective: 'Create cinematic promotional video for luxury resort',
      solution: 'Produced stunning motion graphics with aerial cinematography',
      tools: ['Cinema 4D', 'After Effects', 'Premiere Pro'],
      outcome: '2M+ views across platforms',
      testimonial: 'Breathtaking visuals that captured our essence perfectly.'
    },
    {
      id: 3,
      title: 'App Interface Design',
      category: 'UX/UI',
      client: 'TechFlow',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      objective: 'Design intuitive mobile app interface',
      solution: 'Created user-centered design with seamless navigation',
      tools: ['Figma', 'Sketch', 'Principle'],
      outcome: '40% increase in user engagement',
      testimonial: 'Clean, intuitive design that users love.'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social',
      client: 'StyleCo',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      objective: 'Boost social media presence and engagement',
      solution: 'Developed cohesive visual strategy across all platforms',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      outcome: '500% increase in social engagement',
      testimonial: 'Our social media has never looked better.'
    },
    {
      id: 5,
      title: 'Product Launch Video',
      category: 'Video',
      client: 'InnovateTech',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      objective: 'Create compelling product launch video',
      solution: 'Produced high-impact video with motion graphics',
      tools: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      outcome: '1.5M views in first week',
      testimonial: 'Exceeded all our expectations for the launch.'
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      category: 'UX/UI',
      client: 'ShopSmart',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      objective: 'Design conversion-focused e-commerce platform',
      solution: 'Created streamlined shopping experience with modern aesthetics',
      tools: ['Figma', 'Adobe XD', 'Webflow'],
      outcome: '60% increase in conversion rate',
      testimonial: 'Sales have never been stronger.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and see how we bring creative visions to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.client}</p>
                <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors flex items-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ExternalLink className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-800">Client:</p>
                        <p className="text-gray-600">{selectedProject.client}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Objective:</p>
                        <p className="text-gray-600">{selectedProject.objective}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Our Solution:</p>
                        <p className="text-gray-600">{selectedProject.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Results & Tools</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-800">Tools Used:</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.tools.map((tool: string) => (
                            <span key={tool} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Final Outcome:</p>
                        <p className="text-gray-600">{selectedProject.outcome}</p>
                      </div>
                      {selectedProject.testimonial && (
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                          <p className="text-gray-800 italic">"{selectedProject.testimonial}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Interested in something like this? Let's work together.
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;