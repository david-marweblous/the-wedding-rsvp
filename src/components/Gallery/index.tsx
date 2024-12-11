import React from 'react';
import styles from './styles.module.scss';
import { cn } from '../utils/classname';

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
        {gallery.map((imageData, idx) => {
          let id = '';
          if (idx === 0) {
            id = styles.left;
          }
          if (idx === 1) {
            id = '';
          }
          if (idx === 2) {
            id = styles.right;
          }
          console.log(id);
          return (
            <img
              className={cn([styles.image, id])}
              src={imageData.src}
              alt={imageData.alt}
            />
          );
        })}
      </div>
    </div>
  );
};
