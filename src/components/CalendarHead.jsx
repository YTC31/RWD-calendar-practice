const daysInEnglish = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const Day = ({day}) => {
  return (
    <div className="border border-e-0  border-slate-950 sm:py-2" aria-label={day}>
      <span className="sm:hidden" aria-label={day}>
        {day[0]}
      </span>
      <span className="hidden sm:block">{day}</span>
    </div>
  );
};

const CalendarHead = () => {

  return (
    <div className="grid grid-cols-7 border-e  border-slate-950 bg-gray-300">
      {daysInEnglish.map((day,index)=>(<Day key={index} day={day}/>))}
    </div>
  );
};

export default CalendarHead;
