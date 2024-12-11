import styles from './styles.module.scss';

interface IImages {
  src: string;
  alt: string;
}

interface Iurl {
  url: string;
  text: string;
}

interface DetailsProps {
  img: IImages[];
  title: string;
  subtitle: string;
  text: string;
  time: string;
  link: Iurl;
}

export const Details: React.FC<DetailsProps> = data => {
  return (
    <div className={styles.detailsStyled}>
      <div className={styles.detailsImages}>
        {data.img.map(img => {
          return <img src={img.src} alt={img.alt} />;
        })}
      </div>

      <h2 className={styles.title}>{data.title}</h2>

      <div>
        <h3 className={styles.subtitle}>{data.subtitle}</h3>
        <p>{data.text}</p>
        <p>{data.time}</p>
      </div>
      <a href={data.link.url}>{data.link.text}</a>
    </div>
  );
};
