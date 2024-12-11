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
  text: string;
  details: IDetails[];
  img: Iimages[];
}

export const Hotel: React.FC<HotelProps> = data => {
  return (
    <div className={styles.hotelStyled}>
      <img src={data.img[0].src} alt={data.img[0].alt} />
      <p className={styles.subtitle}>{data.text}</p>
      <div className={styles.hotel}>
        {data.details.map((detail, idx) => {
          return (
            <>
              <h2 className={styles.hotelTitle}>{detail.title}</h2>
              {detail.hotel.map((hotelData, idx) => {
                return (
                  <>
                    <p>
                      <a href={hotelData.url}>{hotelData.text}</a>
                    </p>
                  </>
                );
              })}
            </>
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <img src={data.img[1].src} alt={data.img[1].alt} />
      </div>
    </div>
  );
};
