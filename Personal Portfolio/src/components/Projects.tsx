import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MedicoMeet',
      subtitle: 'Doctor Appointment Booking System',
      description:
        'A comprehensive healthcare platform featuring admin panel, doctor-patient registration, and real-time booking system with responsive SPA design.',
      technologies: ['Spring Boot', 'ReactJS', 'MySQL'],
      features: [
        'Admin panel for management',
        'Doctor-patient registration',
        'Real-time booking system',
        'Responsive single-page application',
      ],
      liveDemo: 'https://685624772182a3228c7359f1--medicomeet.netlify.app/',
      icon: <Calendar className="h-8 w-8" />,
      imageUrl: '/images/Thumbnail.png',
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Showcase Platform',
      description:
        'A modern, responsive portfolio website showcasing professional profile, projects, and technical expertise with clean design and optimal user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Responsive design',
        'Project showcase',
        'GitHub integration',
        'Contact form',
      ],
      icon: <Users className="h-8 w-8" />,
      imageUrl: '/images/Project.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications demonstrating full-stack development expertise
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } gap-10 bg-white rounded-xl shadow-lg p-6`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 h-[300px] lg:h-[400px] w-full flex items-center justify-center bg-gray-100 border-[6px] border-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-primary-500">{project.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-primary-500 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-4">
                  {/* Conditionally render Live Demo only for MedicoMeet */}
                  {project.title === 'MedicoMeet' && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href="https://github.com/RaviRajanolla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
