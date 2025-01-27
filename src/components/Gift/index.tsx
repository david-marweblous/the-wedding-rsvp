/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

interface Iimages {
  src: string;
  alt?: string;
}

interface GiftProps {
  img: Iimages[];
  title: string;
  subtitle: string;
  bank: string;
  number: string;
}
export const Gift: React.FC<GiftProps> = data => {
  return (
    <div className={styles.giftStyled}>
      <img src={data.img[0].src} alt={data.img[0].src} />
      <h2 className={styles.title}>{data.title}</h2>
      <p>{data.subtitle}</p>
      <p>{data.bank}</p>
      <img src={data.img[1].src} alt={data.img[1].src} />
      <p>{data.number}</p>
      <img src={data.img[2].src} alt={data.img[2].src} />
    </div>
  );
};
