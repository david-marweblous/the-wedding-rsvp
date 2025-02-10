/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

interface Iimages {
  src: string;
  alt: string;
}

interface IDetails {
  title: string;
  hotel: Ihotel[];
}

interface Ihotel {
  text: string;
  url: string;
}

interface HotelProps {
  title: string;
  text: string;
  details: IDetails[];
  img: Iimages[];
}

export const Hotel: React.FC<HotelProps> = data => {
  return (
    <div className={styles.hotelStyled}>
      <img src={data.img[0].src} alt={data.img[0].alt} />

      <p className={styles.title}>{data.title}</p>
      <p className={styles.subtitle}>{data.text}</p>

      {data.details.map((detail, idx) => {
        return (
          <div className={styles.hotel} key={idx}>
            <h2 className={styles.hotelTitle} key={idx}>
              {detail.title}
            </h2>
            <div className={styles.hotelList}>
              {detail.hotel.map((hotelData, idy) => {
                return (
                  <a key={idy} href={hotelData.url}>
                    {hotelData.text}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
