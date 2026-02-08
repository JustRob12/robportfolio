import { useState, useEffect } from 'react';
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiFacebook } from 'react-icons/si';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { id: 1, image: '/picture/Gallery/1.jpg', alt: 'Personal photo 1' },
    { id: 2, image: '/picture/Gallery/2.jpg', alt: 'Personal photo 2' },
    { id: 3, image: '/picture/Gallery/3.jpg', alt: 'Personal photo 3' },
    { id: 4, image: '/picture/Gallery/4.jpg', alt: 'Personal photo 4' },
    { id: 5, image: '/picture/Gallery/5.jpg', alt: 'Personal photo 5' },
    { id: 6, image: '/picture/Gallery/6.jpeg', alt: 'Personal photo 6' },
  ];

  const nextSlide = () => {
    // Only allow sliding if there are images beyond the visible 5
    setCurrentSlide((prev) => (prev >= galleryImages.length - 5 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 5 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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
              <a href="/social" className="btn btn-primary">
                Connect With Me <ArrowRight size={18} />
              </a>
              
              <a href="/projects" className="btn btn-secondary">
                View My Work
              </a>
              <a href="https://www.facebook.com/ledehbuuug" target="_blank" rel="noopener noreferrer" className="btn btn-heart">
                My Pretty GF <Heart size={18} />
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

      {/* <div className="girlfriend-section">
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
      </div> */}

      <div className="about-gallery-section">
        <div className="gallery-header">
          <h3>Gallery</h3>
        </div>
        <div className="gallery-slider-wrapper">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <div className="gallery-viewport">
            <div 
              className="gallery-track" 
             
            >
              {galleryImages.map((image) => (
                <div key={image.id} className="gallery-slide-item">
                  <img src={image.image} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
