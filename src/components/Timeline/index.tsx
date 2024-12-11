import React from 'react';
import styles from './styles.module.scss';

import { cn } from '../utils/classname';

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
      <div className={styles.timeline}>
        <div className={styles.timelineEmpty}>&nbsp;</div>
        <div className={styles.timelineMiddle}></div>
        <div className={styles.timelineEmpty}></div>
        {/*first*/}
        <div className={styles.timelineEmpty}>
          <img className={styles.right} src={timeline[0].img} alt={timeline[0].alt} />
        </div>

        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
        <div className={cn([styles.timelineComponent, styles.timelineContent])}>
          <h3>{timeline[0].text}</h3>
          <p>{timeline[0].time}</p>
        </div>

        {/*second*/}

        <div className={cn([styles.timelineComponent, styles.timelineContent])}>
          <h3>{timeline[1].text}</h3>
          <p>{timeline[1].time}</p>
        </div>
        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
        <div className={styles.timelineEmpty}>
          <img src={timeline[1].img} alt={timeline[1].alt} />
        </div>

        {/*thrid*/}

        <div className={styles.timelineEmpty}>
          <img src={timeline[2].img} alt={timeline[2].alt} />
        </div>
        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
        <div className={cn([styles.timelineComponent, styles.timelineContent])}>
          <h3>{timeline[2].text}</h3>
          <p>{timeline[2].time}</p>
        </div>

        {/*forth*/}
        <div className={cn([styles.timelineComponent, styles.timelineContent])}>
          <h3>{timeline[3].text}</h3>
          <p>{timeline[3].time}</p>
        </div>
        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
        <div className={styles.timelineEmpty}>
          <img src={timeline[3].img} alt={timeline[3].alt} />
        </div>

        {/*fifth*/}

        <div className={styles.timelineEmpty}>
          <img src={timeline[4].img} alt={timeline[4].alt} />
        </div>
        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
        <div className={cn([styles.timelineComponent, styles.timelineContent])}>
          <h3>{timeline[4].text}</h3>
          <p>{timeline[4].time}</p>
        </div>
      </div>
    </div>
  );
};
