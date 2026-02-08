import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity for Tech Startup',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Branding', 'Logo Design', 'Identity'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Magazine Layout Design',
      description: 'Editorial layout design for a monthly lifestyle magazine with emphasis on typography and visual hierarchy.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Editorial', 'Layout', 'Typography'],
      link: '#',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'Visual content series for a 3-month social media campaign across multiple platforms.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Social Media', 'Digital Marketing', 'Graphics'],
      link: '#',
    },
    {
      id: 4,
      title: 'Product Packaging Design',
      description: 'Packaging design for an organic food product line with eco-friendly aesthetic.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Packaging', 'Product Design', 'Print'],
      link: '#',
    },
    {
      id: 5,
      title: 'Event Poster Series',
      description: 'Series of promotional posters for annual music festival with bold and vibrant designs.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Poster Design', 'Event Marketing', 'Print'],
      link: '#',
    },
    {
      id: 6,
      title: 'Website UI Design',
      description: 'Modern and clean UI design for a portfolio website with focus on user experience.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['UI Design', 'Web Design', 'UX'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>Recent Projects</h1>
        <p>A showcase of my latest design work and creative projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
