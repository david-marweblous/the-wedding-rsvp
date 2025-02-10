/* eslint-disable @next/next/no-img-element */
import MusicPlayer from '../MusicPlayer';
import styles from './styles.module.scss';

interface IImage {
  src: string;
  alt?: string;
}

interface HeroProps {
  img: IImage[];
  title: string;
  subTitle: string;
  text: string;
}

export const Hero: React.FC<HeroProps> = ({ img, subTitle, title, text }) => {
  const names = title.replace(' & ', '.').split('.');

  return (
    <div className={styles.heroStyled}>
      <div className={styles.heroImage}>
        <img src={img[0].src} alt={img[0].alt} />
        <div className={styles.heroInitials}>
          <span>{names[0].slice(0, 1)}</span>
          <span>/</span>
          <span>{names[1].slice(0, 1)}</span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={img[1].src} alt={img[1].alt} />
      </div>
      <div className={styles.heroTitle}>{title}</div>
      <div className={styles.heroSubtitle}>{subTitle}</div>
      <div className={styles.musicPlayer}>
        <p>{text}</p>
        <MusicPlayer />
      </div>
    </div>
  );
};
