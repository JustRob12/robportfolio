import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Adobe Certified Professional in Graphic Design',
      issuer: 'Adobe',
      date: 'January 2024',
      description: 'Professional certification in graphic design and visual communication using Adobe Creative Cloud.',
      link: '#',
    },
    {
      id: 2,
      title: 'UX/UI Design Specialization',
      issuer: 'Coursera',
      date: 'November 2023',
      description: 'Comprehensive course covering user experience research, wireframing, prototyping, and interface design.',
      link: '#',
    },
    {
      id: 3,
      title: 'Advanced Typography Certificate',
      issuer: 'Type Directors Club',
      date: 'August 2023',
      description: 'Advanced study in typography, type design, and typographic principles for print and digital media.',
      link: '#',
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      issuer: 'Skillshare',
      date: 'June 2023',
      description: 'Specialized training in creating cohesive brand identities and visual systems.',
      link: '#',
    },
    {
      id: 5,
      title: 'Digital Marketing Design',
      issuer: 'Google Digital Garage',
      date: 'March 2023',
      description: 'Certificate in creating effective digital marketing materials and social media content.',
      link: '#',
    },
    {
      id: 6,
      title: 'Print Production & Prepress',
      issuer: 'Printing Industries of America',
      date: 'December 2022',
      description: 'Technical training in print production, color management, and prepress preparation.',
      link: '#',
    },
  ];

  return (
    <div className="certificates-page">
      <div className="page-header">
        <h1>Certificates & Achievements</h1>
        <p>Professional certifications and continuous learning milestones</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-icon">
              <Award size={32} />
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>
              <div className="certificate-date">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
              <p>{cert.description}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                  View Certificate <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
