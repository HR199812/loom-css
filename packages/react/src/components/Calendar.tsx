import React, { useState } from "react";

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const prevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  return (
    <div className="w-80 p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>←</button>
        <h3 className="font-semibold">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        <button onClick={nextMonth}>→</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div key={i} className="p-2 rounded hover:bg-brand/10 cursor-pointer">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
