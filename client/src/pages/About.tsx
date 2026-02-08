import { ArrowRight, Heart } from 'lucide-react';
import { SiFacebook } from 'react-icons/si';

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Roberto Prisoris</span>
            </h1>
            <h2 className="hero-subtitle">
              Graphics Designer & Layout Artist
            </h2>
            <p className="hero-description">
              I create visually stunning designs and layouts that bring ideas to life. 
              With a passion for creativity and attention to detail, I specialize in 
              graphic design, branding, and digital art.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get in Touch <ArrowRight size={18} />
              </a>
              <a href="/projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/picture/light.png" alt="Profile" className="profile-image light-mode-image" />
            <img src="/picture/dark.png" alt="Profile" className="profile-image dark-mode-image" />
          </div>
        </div>
      </div>

      <div className="about-details">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I'm a creative professional with years of experience in graphic design and layout artistry. 
            My work spans across various mediums including digital design, print media, branding, and 
            visual content creation.
          </p>
        </div>

        <div className="about-card">
          <h3>What I Do</h3>
          <p>
            I specialize in creating compelling visual narratives through design. From brand identity 
            and marketing materials to social media graphics and editorial layouts, I bring concepts 
            to life with creativity and precision.
          </p>
        </div>

        <div className="about-card">
          <h3>My Approach</h3>
          <p>
            I believe great design is a balance of aesthetics and functionality. Every project is an 
            opportunity to create something unique that resonates with the audience and achieves the 
            desired impact.
          </p>
        </div>
      </div>

      <div className="girlfriend-credit">
        <Heart className="heart-icon" size={24} />
        <h3>My Beautiful Girlfriend</h3>
        <p>Thank you for always supporting and inspiring me</p>
        <a 
          href="https://www.facebook.com/ledehbuuug" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-facebook"
        >
          <SiFacebook size={20} />
          <span>Lady</span>
        </a>
      </div>
    </div>
  );
};

export default About;
