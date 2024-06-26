import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import CalendarBody from "./components/CalendarBody";
import CalendarHead from "./components/CalendarHead";
import MonthPanel from "./components/MonthPanel";

function App() {
  const today = new Date();
  const [presentDate, setPresentDate] = useState(today);
  const presentYear = presentDate.getFullYear();
  const presentMonth = presentDate.getMonth();
  const monthsInEnglish = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  
  return (
    <div className="container mx-auto min-w-[280px] max-w-2xl">
      <h1 className="p-2 text-3xl font-bold sm:text-4xl">Alena's Calendar</h1>
      <div className="grid grid-cols-1 grid-rows-2 items-center gap-y-2 sm:grid-cols-2 sm:grid-rows-1 sm:justify-between sm:my-4">
        <div
          className="text-xl font-semibold col-span-4 sm:col-span-1 sm:text-left sm:text-2xl"
          aria-label="Current year and month"
        >
          {presentYear} {monthsInEnglish[presentMonth]}
        </div>
        <MonthPanel
          presentDate={presentDate}
          onMonthChange={setPresentDate}
        />
      </div>
      {/* Calendar Table */}
      <div className="my-4">
        <CalendarHead />
        <CalendarBody
          year={presentYear}
          month={presentMonth}
        />
      </div>
    </div>
  );
}

export default App;
