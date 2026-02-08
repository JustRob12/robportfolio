import { Palette, Pen, Layout, Image, Type, Figma } from 'lucide-react';

const TechStack = () => {
  const designTools = [
    { name: 'Adobe Photoshop', icon: <Image size={32} />, category: 'Image Editing' },
    { name: 'Adobe Illustrator', icon: <Pen size={32} />, category: 'Vector Graphics' },
    { name: 'Adobe InDesign', icon: <Layout size={32} />, category: 'Layout Design' },
    { name: 'Figma', icon: <Figma size={32} />, category: 'UI/UX Design' },
    { name: 'CorelDRAW', icon: <Palette size={32} />, category: 'Vector Design' },
    { name: 'Canva', icon: <Type size={32} />, category: 'Quick Design' },
  ];

  const webTools = [
    { name: 'HTML/CSS', icon: <Layout size={32} />, category: 'Web Development' },
    { name: 'JavaScript', icon: <Layout size={32} />, category: 'Programming' },
    { name: 'React', icon: <Layout size={32} />, category: 'Framework' },
    { name: 'Tailwind CSS', icon: <Palette size={32} />, category: 'Styling' },
  ];

  const skills = [
    'Brand Identity Design',
    'Print Design',
    'Digital Illustration',
    'Typography',
    'Photo Editing & Retouching',
    'Social Media Graphics',
    'Marketing Materials',
    'Editorial Layout',
    'UI/UX Design',
    'Motion Graphics',
  ];

  return (
    <div className="tech-stack-page">
      <div className="page-header">
        <h1>Tech Stack & Skills</h1>
        <p>Tools and technologies I use to bring creative visions to life</p>
      </div>

      <section className="tools-section">
        <h2>Design Tools</h2>
        <div className="tools-grid">
          {designTools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tools-section">
        <h2>Web Development</h2>
        <div className="tools-grid">
          {webTools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
