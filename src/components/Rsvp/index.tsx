import React from 'react';
import styles from './styles.module.scss';

interface Iimages {
  src: string;
  alt?: string;
}

interface Iurl {
  url: string;
  text: string;
}

interface RsvpProps {
  img: Iimages;
  title: string;
  text: string;
  text2: string;
  text3: string;
  link: Iurl;
}

export const Rsvp: React.FC<RsvpProps> = data => {
  return (
    <div className={styles.rsvpStyled}>
      <img src={data.img.src} alt={data.img.alt} />
      <h2 className={styles.title}>{data.title}</h2>
      <p>{data.text}</p>
      <p>{data.text2}</p>
      <p>{data.text3}</p>
      <button>
        <a href={data.link.url}>{data.link.text}</a>
      </button>
    </div>
  );
};
