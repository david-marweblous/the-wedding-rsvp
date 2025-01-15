//import React from "react";
import styles from './styles.module.scss';

// Define the structure of the calendar
interface CalendarProps {
  year: number;
  month: number; // Month is 0-indexed (0 for January, 4 for May, etc.)
}

const generateCalendar = (year: number, month: number): (number | null)[][] => {
  const firstDayOfMonth = new Date(year, month, 1); // First day of the month
  const lastDayOfMonth = new Date(year, month + 1, 0); // Last day of the month

  const daysInMonth = lastDayOfMonth.getDate(); // Total number of days in the month
  const startingDay = firstDayOfMonth.getDay(); // Day of the week of the 1st of the month

  // Create a 2D array to represent the calendar grid
  const calendar: (number | null)[][] = [];
  let day = 1;

  // Fill in empty spaces for the first row (before the first day of the month)
  let row: (number | null)[] = new Array(7).fill(null);
  for (let i = startingDay; i < 7; i++) {
    row[i] = day++;
  }
  calendar.push(row);

  // Fill in the rest of the days
  while (day <= daysInMonth) {
    row = [];
    for (let i = 0; i < 7; i++) {
      if (day <= daysInMonth) {
        row.push(day++);
      } else {
        row.push(null);
      }
    }
    calendar.push(row);
  }

  return calendar;
};

export const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const calendar = generateCalendar(year, month);

  return (
    <div className={styles.calendarStyled}>
      <h2 className={styles.calendarHeader}>
        {monthNames[month]} {year}
      </h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, idx) => (
                <td key={idx}>
                  {day === 31 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#3A6BA7"
                      className={styles.calendarHighlight}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  )}
                  {day ? day : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
