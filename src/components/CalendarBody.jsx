import React, { useState, useEffect } from "react";
import isToday from "../helpers/isToday";

const CalendarBody = ({ year, month }) => {
  const [dates, setDates] = useState([]);

  // Function to calculate dates for the current month
  const renderDates = () => {
    let firstDateOfMonth = new Date(year, month, 1);
    let lastDateOfMonth = new Date(year, month + 1, 0);

    let dayOfTheFirstDate = firstDateOfMonth.getDay();
    let dayOfTheLastDate = lastDateOfMonth.getDay();

    let startNum = 1 - dayOfTheFirstDate;
    let endNum = lastDateOfMonth.getDate() + 6 - dayOfTheLastDate;

    let datesArray = [];
    for (let i = startNum; i <= endNum; i++) {
      const currDate = new Date(year, month, i);
      datesArray.push({
        date: currDate,
        isToday: isToday(currDate),
      });
    }

    setDates(datesArray);
  };

  useEffect(() => {
    renderDates();
  }, [year, month]);

  return (
    <div className="grid grid-cols-7 border-l border-slate-950">
      {dates.map((dateObj, index) => (
        <div
          key={index}
          className="aspect-square p-2 border-b border-e border-slate-950 hover:bg-red-200 focus:outline-none focus:ring-4 focus:ring-red-300  duration-300"
        >
          <span
            className={
              dateObj.isToday
                ? "inline-flex w-[1.6rem] h-[1.6rem] sm:w-[2rem] sm:h-[2rem] justify-center items-center font-semibold text-gray-200  bg-red-600 rounded-full"
                : ""
            }
          >
            {dateObj.date.getDate()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
