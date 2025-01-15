/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

interface Iimages {
  src: string;
  alt: string;
}

interface Iurl {
  url: string;
  text: string;
}

interface Itypes {
  text: string;
}

interface DresscodeProps {
  title: string;
  img: Iimages[];
  typeText: Itypes[];
  link: Iurl;
  footer: string;
}

export const Dresscode: React.FC<DresscodeProps> = data => {
  return (
    <div className={styles.dresscodeStyled}>
      <h2 className={styles.title}>{data.title}</h2>
      <img src={data.img[0].src} alt={data.img[0].alt} />

      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
        <img src={data.img[1].src} alt={data.img[1].alt} />
        <div className={styles.divider}></div>
      </div>

      {data.typeText.map(type => {
        return <p key={type.text}>{type.text}</p>;
      })}
      <p>
        <img src={data.img[2].src} alt={data.img[2].alt} />
        <a href={data.link.url}>{data.link.text}</a>
      </p>

      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
        <img src={data.img[3].src} alt={data.img[3].alt} />
        <div className={styles.divider}></div>
      </div>

      <p>{data.footer}</p>
    </div>
  );
};
