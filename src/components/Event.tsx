import React, { useState } from "react";

interface ScheduledDate {
  date: Date;
  activity: {
    time: string;
    name: string;
    customer: string;
    location: string;
  }[];
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const Event = ({ schedule }: { schedule: ScheduledDate }) => {
  const [remindMe, setRemindMe] = useState<boolean[]>(
    schedule.activity.map(() => false)
  );

  const handleToggle = (index: number) => {
    setRemindMe((prev) => {
      const newRemindMe = [...prev];
      newRemindMe[index] = !newRemindMe[index];
      return newRemindMe;
    });
  };

  return (
    <div>
      {schedule.activity.map((activity, index) => {
        return (
          <div
            key={index}
            className="mt-4 border-[1px] border-[#ECEFF3] p-[15px] rounded-[16px]"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-sm">
                {formatDate(schedule.date)}({activity.time})
              </h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-[#A4ACB9]">Remind me</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={remindMe[index]}
                    onChange={() => handleToggle(index)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex items-center gap-4">
              <div className="w-[140px] h-[148px] rounded-[8px] bg-gray-300"></div>
              <div>
                <h4 className="font-semibold mb-1">{activity.customer}</h4>
                <p className="text-sm text-[#666D80] mb-4">
                  {activity.location}
                </p>
                <p className="text-sm text-[#666D80]">
                  <span className="font-semibold">Services:</span> <br />
                  {activity.name}
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="btn btn-warning btn-outline flex-1 rounded-[8px]">
                Cancel Booking
              </button>
              <button className="btn btn-primary text-white  flex-1 rounded-[8px]">
                E-Receipt
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
