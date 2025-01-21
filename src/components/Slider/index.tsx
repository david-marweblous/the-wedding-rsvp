import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

interface PhotoSliderProps {
  images: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoSliding, images.length]);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    setIsAutoSliding(false); // Pause auto sliding when user interacts
    resetAutoSlide();
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    setIsAutoSliding(false); // Pause auto sliding when user interacts
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    setTimeout(() => {
      setIsAutoSliding(true); // Resume auto sliding after 3 seconds
    }, 3000); // Reset auto-slide after 3 seconds
  };

  return (
    <div className={styles.photoSlider}>
      <button className={styles.prev} onClick={goToPrev}>
        &lt;
      </button>
      <div className={styles.imageWrapper}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? styles.visible : ''}
          />
        ))}
      </div>
      <button className={styles.next} onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default PhotoSlider;
