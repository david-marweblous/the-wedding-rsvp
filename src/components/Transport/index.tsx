/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

interface Iimage {
  src: string;
  alt: string;
}
interface Iurl {
  href: string;
  text: string;
}

interface Idetails {
  text: string;
  time: string;
}

interface TransportProps {
  images: Iimage[];
  header: string;
  text: string;
  details: Idetails[];
  pickup: string;
  url: Iurl;
}

export const Transport: React.FC<TransportProps> = data => {
  return (
    <div className={styles.transportStyled}>
      <img src={data.images[0].src} alt={data.images[0].alt} loading="lazy" />
      <h2 className={styles.galleryTitle}>{data.header}</h2>
      <p className={styles.gallerySubTitle}>{data.text}</p>
      <div className={styles.details}>
        {data.details.map(detail => {
          return (
            <p key={detail.text}>
              {detail.text} : {detail.time}
            </p>
          );
        })}
      </div>
      <div className={styles.footer}>
        <p>{data.pickup}</p>
        <p>
          <a href={data.url.href}>{data.url.text}</a>
        </p>
      </div>
    </div>
  );
};
