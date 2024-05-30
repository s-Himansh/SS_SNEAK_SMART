import React from 'react'
import { useState } from 'react';

export default function Calendar() {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = [];
    const [currentDate, setCurrentDate] = useState(new Date());
 
    for (let i = 0; i < firstDayOfMonth; i++) {
       days.push(null);
    }
 
    for (let i = 1; i <= daysInMonth; i++) {
       days.push(i);
    }
 
 
  return (
    <div className="calendar">
         <div className="calendar-header">
            <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>&lt;</button>
            <h2>{new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
            <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>&gt;</button>
         </div>
         <div className="calendar-days">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
               <div key={index} className="day-header">
                  {day}
               </div>
            ))}
            {days.map((day, index) => (
               <div key={index} className={`calendar-day ${day ? '' : 'empty'}`}>
                  {day}
               </div>
            ))}
         </div>
      </div>
  )
}
