import MusicPlayer from '../MusicPlayer';
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
  const names = title.replace(' & ', '.').split('.');

  return (
    <div className={styles.heroStyled}>
      <div className={styles.heroImage}>
        <img src={img.src} alt={img.alt} />
        <p>
          {names[0].slice(0, 1)} / {names[1].slice(0, 1)}
        </p>
      </div>
      <div className={styles.heroTitle}>{title}</div>
      <div className={styles.heroSubtitle}>{subTitle}</div>
      <div className={styles.musicPlayer}>
        <p>Listen to the music</p>
        <MusicPlayer />
      </div>
    </div>
  );
};
