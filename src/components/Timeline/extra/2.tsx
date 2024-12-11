import React from 'react';
import styles from './styles.module.scss';

//import { cn } from '../utils/classname';
import { cn } from '../../utils/classname';
interface ITimelineData {
  img: string;
  alt: string;
  time: string;
  text: string;
}

interface TimelineProps {
  timeline: ITimelineData[];
}

export const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  return (
    <div className={styles.timelineStyled}>
      {/* First row*/}

      {
        /*timeline.map((data, idx) => {
        const isOdd = idx % 2 === 0;
        const oddClass = isOdd ? styles.odd : '';
        return (*/
        //<div className={cn([styles.timelineRow, oddClass])}>
        /*
          <div className={styles.timelineRow}>
            <div className={styles.timelineComponent}>
              <div className={cn([styles.timelineTime, styles.timelineTimeRight])}>
                <p>{data.time}</p>
                <p>{data.text}</p>
              </div>
            </div>

            <div className={styles.timelineMiddle}>
              <div className={styles.timelinePoint} />
            </div>

            <div className={cn([styles.timelineComponent, styles.timelineComponentImg])}>
              <img src={data.img} alt={data.alt} />
            </div>
          </div>
        );
      })*/
      }

      <div className={styles.timelineRow}>
        <div className={styles.timelineComponent}>
          <div className={cn([styles.timelineTime, styles.timelineTimeRight])}>
            <p>{timeline[0].time}</p>
            <p>{timeline[0].text}</p>
          </div>
        </div>

        <div className={styles.timelineMiddle}>
          <div className={styles.timelinePoint} />
        </div>

        <div className={cn([styles.timelineComponent, styles.timelineComponentImg])}>
          <img src={timeline[0].img} alt={timeline[0].alt} />
        </div>
      </div>

      <div className={styles.timelineRow}>
        <div className={cn([styles.timelineComponent, styles.timelineComponentImg])}>
          <img src={timeline[0].img} alt={timeline[0].alt} />
        </div>
      </div>
      <div className={styles.timelineMiddle}>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineComponent}>
        <div className={styles.timelineTime}>
          <p>{timeline[0].time}</p>
          <p>{timeline[0].text}</p>
        </div>
      </div>
    </div>
  );
};
