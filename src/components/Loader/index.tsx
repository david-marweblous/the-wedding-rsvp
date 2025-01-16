import styles from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderStyled}>
      <div className={styles.loader}></div>
    </div>
  );
};
