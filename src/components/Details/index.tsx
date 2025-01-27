/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

interface Iurl {
  url: string;
  text: string;
}

interface Iimages {
  src: string;
  alt?: string;
}

interface DetailsProps {
  groomName: string;
  brideName: string;
  img: Iimages[];
  title: string;
  subtitle: string;
  text: string;
  time: string;
  link: Iurl;
}

export const Details: React.FC<DetailsProps> = data => {
  return (
    <div className={styles.detailsStyled}>
      <img className={styles.detailsImage} src={data.img[0].src} alt={data.img[0].alt} />

      <div className={styles.detailsNames}>
        <p>{data.groomName}</p>
        <p className={styles.rock}>&</p>
        <p>{data.brideName}</p>
      </div>

      <h2 className={styles.detailsTitle}>{data.title}</h2>

      <div className={styles.detailsAddress}>
        <p className={styles.time}>{data.time}</p>
        <p className={styles.location}>{data.subtitle}</p>
        <p className={styles.address}>{data.text}</p>
        <a href={data.link.url}>{data.link.text}</a>
      </div>
      <img className={styles.detailsImage2} src={data.img[1].src} alt={data.img[1].alt} />
    </div>
  );
};
