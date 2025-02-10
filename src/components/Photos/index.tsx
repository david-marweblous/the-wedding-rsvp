import React from 'react';
import styles from './styles.module.scss';

interface Iurl {
  href: string;
  text: string;
}

interface PhotoProps {
  title: string;
  subtitle: string;
  paragraph: string;
  footer: string;
  url: Iurl;
}

export const Photos: React.FC<PhotoProps> = data => {
  return (
    <div className={styles.photosStyled}>
      <h1 className={styles.title}>{data.title}</h1>
      <p>{data.subtitle}</p>
      <p>{data.paragraph}</p>
      <p>{data.footer}</p>
      <button>
        <a href={data.url.href}>{data.url.text}</a>
      </button>
    </div>
  );
};
