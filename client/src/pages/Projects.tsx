import { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { websiteProjects, graphicsProjects, tshirtProjects } from '../data';
import type { Project } from '../types';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('T-shirt Design');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projects: Project[] = [
    ...websiteProjects,
    ...[...graphicsProjects].reverse(),
    ...[...tshirtProjects].reverse(),
  ];

  const categories = [ 'Graphics', 'T-shirt Design', 'Website'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleProjectClick = (project: Project) => {
    // If it's a website project with a link, open it directly
    if (project.category === 'Website' && project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      // For graphics and t-shirt projects, show lightbox
      setSelectedProject(project);
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>Projects</h1>
        <p>A showcase of my latest work across web development, graphics, and apparel design</p>
      </div>

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {currentItems.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
            <div className="project-image">
              <img src={project.image} alt={project.title || 'Project'} />
              {(project.link || project.github) && (
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            {(project.title || project.description) && (
              <div className="project-content">
                {project.title && <h3>{project.title}</h3>}
                {project.description && <p>{project.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            <ChevronLeft size={20} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Lightbox for Project Images */}
      {selectedProject && (
        <div className="lightbox" onClick={() => setSelectedProject(null)}>
          <button className="lightbox-close" onClick={() => setSelectedProject(null)}>
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title || 'Project'} />
            {selectedProject.title && (
              <div className="lightbox-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="lightbox-links">
                   {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Visit Website <ExternalLink size={18} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      View Code <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
