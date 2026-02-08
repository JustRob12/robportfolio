import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Graphics Designer',
      company: 'Creative Agency Inc.',
      location: 'Metro Manila, Philippines',
      period: '2022 - Present',
      description: [
        'Lead designer for major brand campaigns and marketing materials',
        'Created visual identities for 20+ clients across various industries',
        'Mentored junior designers and established design guidelines',
        'Collaborated with marketing teams to develop cohesive brand strategies',
      ],
    },
    {
      id: 2,
      title: 'Layout Artist',
      company: 'Publishing House Co.',
      location: 'Quezon City, Philippines',
      period: '2020 - 2022',
      description: [
        'Designed layouts for magazines, books, and digital publications',
        'Worked closely with editors and writers to enhance visual storytelling',
        'Managed multiple projects simultaneously with tight deadlines',
        'Improved workflow efficiency by implementing new design processes',
      ],
    },
    {
      id: 3,
      title: 'Junior Graphic Designer',
      company: 'Digital Media Studio',
      location: 'Makati, Philippines',
      period: '2018 - 2020',
      description: [
        'Created social media graphics and digital marketing materials',
        'Assisted in brand development and visual content creation',
        'Collaborated with cross-functional teams on various projects',
        'Developed skills in Adobe Creative Suite and design principles',
      ],
    },
    {
      id: 4,
      title: 'Freelance Designer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2016 - 2018',
      description: [
        'Provided design services to small businesses and startups',
        'Created logos, business cards, and marketing materials',
        'Built a portfolio and established client relationships',
        'Learned to manage projects and communicate with clients effectively',
      ],
    },
  ];

  return (
    <div className="experience-page">
      <div className="page-header">
        <h1>Experience</h1>
        <p>My professional journey in design and creativity</p>
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
