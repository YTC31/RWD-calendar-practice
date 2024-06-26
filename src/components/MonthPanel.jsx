const Button = ({ className, text, onClick }) => {
  return (
    <button
      type="button"
      className={`border border-zinc-950 ${className} hover:bg-red-300 focus:outline-none focus:ring-4  focus:ring-red-300 duration-300`}
      onClick={(e) => {
        onClick();
        e.target.blur();
      }}
    >
      {text}
    </button>
  );
};

const MonthPanel = ({ presentDate, onMonthChange }) => {
  function showPrevOrNextMonth(offset) {
    const newDate = new Date(presentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    onMonthChange(newDate);
  }

  function showToday() {
    const today = new Date();
    onMonthChange(today);
  }

  return (
    <div className="grid grid-cols-3 items-center">
      <Button
        className="border-e-0 rounded-s-md"
        text="Last Month"
        onClick={() => showPrevOrNextMonth(-1)}
      />
      <Button
        className="border-e-0"
        text="Go To Today"
        onClick={() => showToday()}
      />
      <Button
        className="rounded-e-md"
        text="Next Month"
        onClick={() => showPrevOrNextMonth(1)}
      />
    </div>
  );
};

export default MonthPanel;
