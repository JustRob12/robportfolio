import { Github, Facebook, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/JustRob12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.facebook.com/roberto.prisoris/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com/me_robbb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          {/* <a href="https://twitter.com/youruse/rname" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a> */}
          <a href="mailto:roberto.prisoris12@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {currentYear} Roberto Jr M Prisoris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
