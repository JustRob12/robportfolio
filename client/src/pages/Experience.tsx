import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 2,
      title: 'Layout Artist',
      company: 'PSYDO',
      location: 'Davao Oriental, Philippines',
      period: '2025',
      description: [
        'Creating visual layouts for various organizational publications and events',
        'Ensuring brand consistency across all digital and print materials',
      ],
    },
    {
      id: 3,
      title: 'PIO',
      company: 'ACES',
      location: 'Davao Oriental, Philippines',
      period: '2024 - 2025',
      description: [
        'Managing public information and communication strategies for the organization',
        'Handling official announcements and community engagement',
      ],
    },
    {
      id: 1,
      title: 'Web Development Head',
      company: 'ACES',
      location: 'Davao Oriental, Philippines',
      period: '2023 - PRESENT',
      description: [
        'Leading the web development team in designing and implementing student-centered platforms',
        'Managing project timelines and ensuring high-quality code delivery',
        'Collaborating with other departments to integrate digital solutions',
      ],
    },
    {
      id: 4,
      title: 'Government Internship Program',
      company: 'Government',
      location: 'Davao Oriental, Philippines',
      period: '2023 - 2024',
      description: [
        'Assisting in administrative and technical tasks within the government office',
        'Gaining experience in public service and governmental workflows',
      ],
    },
    {
      id: 5,
      title: 'Layout Artist',
      company: 'PESO DavOr',
      location: 'Davao Oriental, Philippines',
      period: '2022 - 2024',
      description: [
        'Designed promotional materials and layouts for employment programs',
        'Developed visual content for social media and community outreach',
      ],
    },
    {
      id: 6,
      title: 'Media Head',
      company: 'ACES',
      location: 'Davao Oriental, Philippines',
      period: '2022 - 2024',
      description: [
        'Overseeing all media production and visual content for ACES',
        'Coordinating with photographers and designers for event coverage',
      ],
    },
    {
      id: 7,
      title: 'Web Dev. Member',
      company: 'CODEBYTERS',
      location: 'Davao Oriental, Philippines',
      period: '2022 - 2024',
      description: [
        'Contributing to web development projects and collaborative coding sessions',
        'Participating in tech workshops and community building',
      ],
    },
    {
      id: 10,
      title: 'Media Head',
      company: 'CODEBYTERS',
      location: 'Davao Oriental, Philippines',
      period: '2022 - 2023',
      description: [
        'Directing visual storytelling and media presence for the tech community',
      ],
    },
    {
      id: 9,
      title: 'Media',
      company: 'USC',
      location: 'Davao Oriental, Philippines',
      period: '2022 - 2023',
      description: [
        'Assisting in media coverage and content creation for university events',
      ],
    },
    {
      id: 8,
      title: 'Photographer',
      company: 'PESO DavOr',
      location: 'Davao Oriental, Philippines',
      period: '2022 - 2023',
      description: [
        'Capturing official events and program activities for documentation',
        'Editing and archiving visual assets for the department',
      ],
    },
  ];

  return (
    <div className="experience-page">
      <div className="page-header">
        <h1>Experience</h1>
        <p>My professional journey in Davao Oriental, Philippines</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
                <div className="timeline-period">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="location">{exp.location}</p>
              <ul className="description-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
