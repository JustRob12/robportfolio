import { Github, Linkedin, Mail, Instagram, Twitter, Facebook, Dribbble, Globe } from 'lucide-react';

const Social = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Email',
      icon: <Mail size={32} />,
      username: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      description: 'Get in touch for collaborations and inquiries',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      username: '@yourusername',
      link: 'https://linkedin.com/in/yourusername',
      description: 'Connect with me professionally',
    },
    {
      id: 3,
      name: 'Behance',
      icon: <Globe size={32} />,
      username: '@yourusername',
      link: 'https://behance.net/yourusername',
      description: 'View my design portfolio and projects',
    },
    {
      id: 4,
      name: 'Dribbble',
      icon: <Dribbble size={32} />,
      username: '@yourusername',
      link: 'https://dribbble.com/yourusername',
      description: 'Check out my design shots and work',
    },
    {
      id: 5,
      name: 'Instagram',
      icon: <Instagram size={32} />,
      username: '@yourusername',
      link: 'https://instagram.com/yourusername',
      description: 'Follow my creative journey',
    },
    {
      id: 6,
      name: 'GitHub',
      icon: <Github size={32} />,
      username: '@yourusername',
      link: 'https://github.com/yourusername',
      description: 'Explore my code and projects',
    },
    {
      id: 7,
      name: 'Twitter',
      icon: <Twitter size={32} />,
      username: '@yourusername',
      link: 'https://twitter.com/yourusername',
      description: 'Stay updated with my latest work',
    },
    {
      id: 8,
      name: 'Facebook',
      icon: <Facebook size={32} />,
      username: 'Your Name',
      link: 'https://facebook.com/yourusername',
      description: 'Connect on Facebook',
    },
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
