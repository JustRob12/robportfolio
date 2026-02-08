import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'IDEAS Plugin CERTIFICATE OF PARTICIPATION',
      issuer: 'IDEAS Plugin',
      date: '2025',
      description: 'Certificate of participation in IDEAS Plugin program.',
      link: '#',
    },
    {
      id: 2,
      title: 'GTA Lab Mobile Certificate of Completion',
      issuer: 'GTA Lab',
      date: '2024',
      description: 'Certificate of completion for GTA Lab Mobile program.',
      link: '#',
    },
    {
      id: 3,
      title: 'IDEAS Plugin CERTIFICATE OF PARTICIPATION',
      issuer: 'IDEAS Plugin',
      date: '2024',
      description: 'Certificate of participation in IDEAS Plugin program.',
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
              {/* {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                  View Certificate <ExternalLink size={16}/ />
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
