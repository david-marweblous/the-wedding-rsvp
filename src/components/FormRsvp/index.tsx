import styles from './styles.module.scss';
import React from 'react';

interface Names {
  name: string;
  surname: string;
}

interface FormRsvpProps {
  name: Names[]; // Expecting an array of Names
}

export const FormRsvp: React.FC<FormRsvpProps> = ({ name }) => {
  return (
    <div className={styles.FormStyled}>
      {name.map((names, index) => {
        return (
          <p key={index}>
            {names.name} {names.surname}
          </p>
        );
      })}
    </div>
  );
};
