import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 2,
      title: 'Editorial Layout',
      category: 'Layout',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 3,
      title: 'Social Media Graphics',
      category: 'Digital',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 4,
      title: 'Poster Design',
      category: 'Print',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 5,
      title: 'Logo Collection',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 6,
      title: 'Packaging Design',
      category: 'Product',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 7,
      title: 'Illustration Series',
      category: 'Illustration',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 8,
      title: 'Typography Artwork',
      category: 'Typography',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 9,
      title: 'Event Branding',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 10,
      title: 'Web Design Mockup',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 11,
      title: 'Magazine Spread',
      category: 'Layout',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: 12,
      title: 'Business Card Design',
      category: 'Print',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>A visual collection of my design work and creative projects</p>
      </div>

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(index)}
          >
            <img src={image.image} alt={image.title} />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <p>{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].image}
              alt={filteredImages[selectedImage].title}
            />
            <div className="lightbox-info">
              <h3>{filteredImages[selectedImage].title}</h3>
              <p>{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
