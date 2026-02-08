import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      image: '/picture/Gallery/1.jpg',
      alt: 'Personal photo 1',
    },
    {
      id: 2,
      image: '/picture/Gallery/2.jpg',
      alt: 'Personal photo 2',
    },
    {
      id: 3,
      image: '/picture/Gallery/3.jpg',
      alt: 'Personal photo 3',
    },
    {
      id: 4,
      image: '/picture/Gallery/4.jpg',
      alt: 'Personal photo 4',
    },
    {
      id: 5,
      image: '/picture/Gallery/5.jpg',
      alt: 'Personal photo 5',
    },
    {
      id: 6,
      image: '/picture/Gallery/6.jpeg',
      alt: 'Personal photo 6',
    },
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Personal moments and memories captured through the lens</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(index)}
          >
            <img src={image.image} alt={image.alt} />
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
              src={galleryImages[selectedImage].image}
              alt={galleryImages[selectedImage].alt}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
