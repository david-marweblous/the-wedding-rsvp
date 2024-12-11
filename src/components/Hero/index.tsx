import styles from './styles.module.scss';

interface IImage {
  src: string;
  alt?: string;
}

interface HeroProps {
  img: IImage;
  title: string;
  subTitle: string;
}

export const Hero: React.FC<HeroProps> = ({ img, subTitle, title }) => {
  return (
    <div className={styles.heroStyled}>
      <img src={img.src} alt={img.alt} />
      <div className={styles.heroOverlay}>
        <p className={styles.heroTitle}>{title}</p>
        <p className={styles.heroSubtitle}>{subTitle}</p>
      </div>
    </div>
  );
};
