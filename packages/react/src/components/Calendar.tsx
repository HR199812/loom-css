import React, { useState, useContext } from "react";
import styles from "./Calendar.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  titleSize?: number;
  titleWeight?: number | string;
  customColor?: string;
  customBorder?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  titleSize = 18,
  titleWeight = 600,
  customColor,
  customBorder,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = endOfMonth.getDate();
  const startDayOfWeek = startOfMonth.getDay();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day);
    onDateSelect?.(clickedDate);
  };

  const isToday = (day: number) => {
    const date = new Date(year, month, day);
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    const date = new Date(year, month, day);
    return date.toDateString() === selectedDate.toDateString();
  };

  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDay = isToday(day);
      const isSelectedDay = isSelected(day);
      
      days.push(
        <div
          key={day}
          className={`${styles.day} ${isCurrentDay ? styles.today : ''} ${isSelectedDay ? styles.selected : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className={`${styles.calendar} ${customBorder || ''}`} style={{ fontFamily: effectiveFontFamily }}>
      <div className={styles.header}>
        <button className={styles.navButton} onClick={prevMonth}>←</button>
        <h3 
          className={styles.title}
          style={{ fontSize: titleSize, fontWeight: titleWeight, color: customColor }}
        >
          {monthNames[month]} {year}
        </h3>
        <button className={styles.navButton} onClick={nextMonth}>→</button>
      </div>
      
      <div className={styles.weekdays}>
        {weekdays.map((day) => (
          <div key={day} className={styles.weekday}>
            {day}
          </div>
        ))}
      </div>
      
      <div className={styles.days}>
        {renderDays()}
      </div>
    </div>
  );
};
