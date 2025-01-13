import React from 'react';
import styles from './styles.module.scss';

interface Iimage {
  src: string;
  alt: string;
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
  pickupText: string;
}

export const Transport: React.FC<TransportProps> = data => {
  return (
    <div className={styles.transportStyled}>
      <img src={data.images[0].src} alt={data.images[0].alt} loading="lazy" />
      <h2 className={styles.galleryTitle}>{data.header}</h2>
      <p className={styles.gallerySubTitle}>{data.text}</p>
      <div className={styles.details}>
        {data.details.map(Detail => {
          return (
            <p>
              {Detail.text} : {Detail.time}
            </p>
          );
        })}
      </div>
      <div className={styles.footer}>
        <p>{data.pickup}</p>
        <p>{data.pickupText}</p>
      </div>
    </div>
  );
};
