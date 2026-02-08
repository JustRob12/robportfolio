import { SiGmail, SiBehance, SiInstagram, SiGithub, SiFacebook, SiTiktok } from 'react-icons/si';

const Social = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Email',
      icon: <SiGmail size={32} />,
      username: 'roberto.proris@gmail.com',
      link: 'mailto:roberto.proris@gmail.com',
      description: 'Get in touch for collaborations and inquiries',
    },
    {
      id: 3,
      name: 'Behance',
      icon: <SiBehance size={32} />,
      username: '@robertoprisori',
      link: 'https://behance.net/robertoprisori',
      description: 'View my design portfolio and projects',
    },
    {
      id: 5,
      name: 'Instagram',
      icon: <SiInstagram size={32} />,
      username: '@me_robbb',
      link: 'https://instagram.com/me_robbb',
      description: 'Follow my creative journey',
    },
    {
      id: 6,
      name: 'GitHub',
      icon: <SiGithub size={32} />,
      username: '@JustRob12',
      link: 'https://github.com/JustRob12',
      description: 'Explore my code and projects',
    },
    {
      id: 8,
      name: 'Facebook',
      icon: <SiFacebook size={32} />,
      username: 'Roberto Prisoris',
      link: 'https://facebook.com/robertoprisoris',
      description: 'Connect on Facebook',
    },
    {
      id: 9,
      name: 'TikTok',
      icon: <SiTiktok size={32} />,
      username: '@rj_works1208',
      link: 'https://tiktok.com/@rj_works1208',
      description: 'Stay updated with my latest work',
    }
  ];

  return (
    <div className="social-page">
      <div className="page-header">
        <h1>Let's Connect</h1>
        <p>Find me on these platforms and let's collaborate</p>
      </div>

      <div className="social-grid">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <div className="social-icon">{social.icon}</div>
            <div className="social-content">
              <h3>{social.name}</h3>
              <p className="social-username">{social.username}</p>
              <p className="social-description">{social.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="mailto:your.email@example.com" className="btn btn-primary">
          Send me an Email
        </a>
      </div>
    </div>
  );
};

export default Social;
