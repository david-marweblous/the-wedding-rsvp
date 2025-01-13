import styles from './styles.module.scss';

interface Iurl {
  url: string;
  text: string;
}

interface DetailsProps {
  groomName: string;
  brideName: string;
  img: {
    src: string;
    alt?: string;
  };
  title: string;
  subtitle: string;
  text: string;
  time: string;
  link: Iurl;
}

export const Details: React.FC<DetailsProps> = data => {
  return (
    <div className={styles.detailsStyled}>
      <img className={styles.detailsImage} src={data.img.src} alt={data.img.alt} />

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
    </div>
  );
};
