'use client';

import styles from './styles.module.scss';
import { useState, useRef, useEffect } from 'react';

interface CountdownProps {
  time: number;
}

const countdownLegend = ['days', 'hours', 'minutes', 'seconds'];

const convertTime = (time: number): number[] => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export const Countdown: React.FC<CountdownProps> = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState<number>(time);
  const [mounted, setMounted] = useState<boolean>(false); // Track if the component is mounted
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts

    if (mounted) {
      const initialTimeLeft = time - Date.now();
      setTimeLeft(initialTimeLeft);

      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prevTime - 1000; // Decrement by 1000 (one second)
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [mounted, time]); // Ensure effect runs after mounting

  if (!mounted) {
    return null; // Return nothing initially until the component is mounted
  }

  return (
    <div className={styles.countdownStyled}>
      <h1 className={styles.countdownHeader}>Cuanto falta para la boda</h1>
      <div className={styles.countdownTimer}>
        {convertTime(timeLeft).map((value, idx) => {
          return (
            <div className={styles.countdownBlock} key={idx}>
              <div className={styles.blockValue}>{value}</div>
              <div className={styles.blockLegend}>{countdownLegend[idx]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
