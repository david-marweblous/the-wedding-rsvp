/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

interface IImageData {
  src: string;
  alt: string;
}

interface GalleryProps {
  gallery: IImageData[];
}

export const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  return (
    <div className={styles.galleryStyled}>
      <h2 className={styles.galleryTitle}>Photo gallery</h2>
      <p className={styles.gallerySubTitle}>
        When you realize that you want to spend the rest of your life with one person, you
        want the rest of your life start as soon as possible
      </p>
      <div className={styles.imageContainer}>
        {gallery.map(imageData => {
          return (
            <img
              className={styles.image}
              src={imageData.src}
              alt={imageData.alt}
              key={imageData.alt}
            />
          );
        })}
      </div>
    </div>
  );
};
