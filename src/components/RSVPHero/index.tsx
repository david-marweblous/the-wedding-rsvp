/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

interface RSVPHeroProps {
  names: string[];
}

export const RSVPHero: React.FC<RSVPHeroProps> = ({ names }) => {
  return (
    <div className={styles.rsvpHeroStyled}>
      <img src="/media/background.jpg" alt="" />
      <div className={styles.rsvpOverlay}>
        <h1>Welcome</h1>
        <p>{names}</p>
      </div>
    </div>
  );
};
