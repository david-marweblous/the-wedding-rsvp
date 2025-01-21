/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

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
    <div id="itinerary" className={styles.timelineStyled}>
      <h2>Itinerary</h2>
      {timeline.map((event, idx) => (
        <div className={styles.timelineWrapper} key={idx}>
          <div className={styles.timelineComponent}>
            <img src={event.img} alt="" />
            <p className={styles.time}>{event.time} h.</p>
            <p className={styles.text}>{event.text}</p>
          </div>

          {idx !== timeline.length - 1 && (
            <img
              className={styles.squiggle}
              src="/media/squiggle.png"
              alt="Separator Line"
            />
          )}
        </div>
      ))}
    </div>
  );
};
