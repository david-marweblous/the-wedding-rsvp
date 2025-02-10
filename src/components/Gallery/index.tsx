/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

interface GalleryProps {
  title: string;
  text: string;
}

export const Gallery: React.FC<GalleryProps> = ({ title, text }) => {
  return (
    <div className={styles.galleryStyled}>
      <h2 className={styles.galleryTitle}>{title}</h2>
      <p className={styles.gallerySubTitle}>{text}</p>
    </div>
  );
};
