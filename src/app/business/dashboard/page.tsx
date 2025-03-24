"use client";

import React, { useState, useEffect } from "react";
import UserMetrics from "@/components/UserMetrics";
import { LuScissors } from "react-icons/lu";
import { TbBrush } from "react-icons/tb";
import { TbHammer } from "react-icons/tb";
import { TbLayoutGridAdd } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/styles/CalenderStyles.css";
import { IoMdMore, IoIosSearch } from "react-icons/io";
import Event from "@/components/Event";

interface BarSegment {
  color: string;
  size: number; // Percentage of the bar
  name?: string;
  value?: number;
}
interface ScheduledDate {
  date: Date;
  activity: {
    time: string;
    name: string;
    customer: string;
    location: string;
  }[];
}
const options = [
  {
    href: "/business/products",
    icon: <LuScissors />,
    label: "Haircuts",
  },
  {
    href: "/business/products",
    icon: <TbBrush />,
    label: "Coloring",
  },
  {
    href: "/business/products",
    icon: <TbHammer />,
    label: "Shampoo",
  },
  {
    href: "/business/products",
    icon: <TbLayoutGridAdd />,
    label: "More",
  },
];

const page = () => {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const data = {
    no_of_bookings: 30,
    no_of_product_orders: 64,
    cancelled_bookings: 50,
    cancelled_orders: 30,
  };
  const total =
    data.no_of_bookings +
    data.no_of_product_orders +
    data.cancelled_bookings +
    data.cancelled_orders;
  const barSegments: BarSegment[] = [
    {
      color: "#48AE6D",
      size: (data.no_of_bookings / total) * 100,
      name: "Bookings",
      value: data.no_of_bookings,
    },
    {
      color: "#3C70F5",
      size: (data.no_of_product_orders / total) * 100,
      name: "Product Orders",
      value: data.no_of_product_orders,
    },
    {
      color: "#FF7262",
      size: (data.cancelled_bookings / total) * 100,
      name: "Cancelled Bookings",
      value: data.cancelled_bookings,
    },
    {
      color: "#BDC0C4",
      size: (data.cancelled_orders / total) * 100,
      name: "Cancelled Orders",
      value: data.cancelled_orders,
    },
  ];

  const scheduledDates: ScheduledDate[] = [
    {
      date: new Date(2025, 2, 25),
      activity: [
        {
          time: "10:00 AM",
          name: "Undercut Haircut, Regular Shave with Beard Trim",
          customer: "Sylva Harris",
          location: "123 Main Street, Anytown, USA",
        },
        {
          time: "11:00 AM",
          name: "Undercut Haircut, Regular Shave with Beard Trim",
          customer: "Onwudiegwu Philip",
          location: "123 Main Street, Anytown, USA",
        },
        {
          time: "1:30 PM",
          name: "Undercut Haircut, Regular Shave with Beard Trim",
          customer: "Akuma Godspower",
          location: "123 Main Street, Anytown, USA",
        },
      ],
    }, // March 25, 2025
    {
      date: new Date(2025, 2, 28),
      activity: [
        {
          time: "10:00 AM",
          name: "Undercut Haircut, Regular Shave with Beard Trim",
          customer: "Sylva Harris",
          location: "123 Main Street, Anytown, USA",
        },
      ],
    }, // March 28, 2025
    {
      date: new Date(2025, 3, 5), // April 5, 2025
      activity: [
        {
          time: "1:30 PM",
          name: "Undercut Haircut, Regular Shave with Beard Trim",
          customer: "Akuma Godspower",
          location: "123 Main Street, Anytown, USA",
        },
      ],
    },
  ];

  const totalPages = Math.ceil(scheduledDates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = scheduledDates.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Highlight days that are scheduled on the calendar
  const isScheduled = (date: Date) => {
    return scheduledDates.some(
      (scheduledDate) =>
        date.getFullYear() === scheduledDate.date.getFullYear() &&
        date.getMonth() === scheduledDate.date.getMonth() &&
        date.getDate() === scheduledDate.date.getDate()
    );
  };
  const handleDateChange = (date: Date) => {
    setDate(date);
    setSelectedDate(date);
  };
  const filteredScheduledDates = selectedDate
    ? scheduledDates.filter(
        (scheduledDate) =>
          scheduledDate.date.getFullYear() === selectedDate.getFullYear() &&
          scheduledDate.date.getMonth() === selectedDate.getMonth() &&
          scheduledDate.date.getDate() === selectedDate.getDate()
      )
    : scheduledDates;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <div className="min-h-screen w-full pt-[100px] pb-10">
      <h4 className="text-[#707A8F] text-[14px] font-medium">
        Hello Captain Barbershop
      </h4>

      <div className="flex justify-between items-end">
        <h2 className="text-[28px] font-medium">Welcome Back</h2>
        <button className="btn btn-primary btn-outline bg-white text-primary rounded-[8px]">
          Book an Appointment
        </button>
      </div>
      <div className="mt-8">
        <UserMetrics metric_data={barSegments} total_value={total} />
      </div>
      <div className="mt-8 flex gap-[32px] ">
        <div className="md:w-5/12  w-full mx-auto">
          <div className="bg-white border-[1px] border-[#E8E8E9] rounded-[8px] p-[24px] flex justify-center gap-8">
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-3"
                >
                  <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full bg-[#FFF8E6]">
                    {React.cloneElement(option.icon, {
                      className: "text-[24px] text-primary",
                    })}
                  </div>

                  <h4 className="text-[16px] text-[#272835]">{option.label}</h4>
                </div>
              );
            })}
          </div>
          <div className="bg-white border-[1px] border-[#E8E8E9] rounded-[8px] p-[24px] mt-8">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">My Schedule</h4>
              <div
                onClick={() => setSelectedDate(null)}
                className="p-[18px] cursor-pointer bg-[#7152F31A] rounded-[10px] "
              >
                <LuCalendarDays className="text-[24px] text-primary" />
              </div>
            </div>
            <div className="mt-4 w-full">
              <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date, view }) =>
                  view === "month" && isScheduled(date) ? "highlight" : null
                }
              />
            </div>
            <div className="mt-8">
              {filteredScheduledDates.map((scheduledDate, index) => {
                return (
                  <div key={index} className="mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <p className=" text-base font-light">
                        {scheduledDate.date.toDateString()}
                      </p>
                      <IoMdMore className="text-2xl" />
                    </div>
                    {scheduledDate.activity.map((activity, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-3 items-center mb-6"
                        >
                          <div className="w-[100px]">
                            <h3 className="text-lg  font-semibold">
                              {activity.time}
                            </h3>
                          </div>

                          <div className="flex-1 border-l-[3px] border-primary px-6">
                            <p className="line-clamp-1 font-light text-sm mb-2">
                              {activity.name}
                            </p>
                            <h3 className="text-lg font-semibold">
                              {activity.customer}
                            </h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:w-7/12  w-full mx-auto">
          <div className="h-[300px] text-white w-full bg-primary rounded-[8px] p-[24px]">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-light text-lg mb-2">50% OFF</h3>
                <h2 className="font-semibold text-2xl">Today’s Special</h2>
              </div>

              <h2 className="font-semibold text-5xl">30%</h2>
            </div>
            <p className="mt-8 w-6/12">
              Get a discount for every service order! Only valid for today!
            </p>
          </div>
          <div className="bg-white border-[1px] border-[#E8E8E9] rounded-[8px] p-[24px] mt-8">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-xl font-medium">Upcoming Appointments</h4>
              <p className="text-primary font-semibold text-base">
                Upcoming Appointments
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="border-[1px] border-[#E8E8E9] py-[12px] px-[8px] bg-[#F5F5F5] rounded-[8px] flex items-center gap-3 text-[#707A8F] flex-1">
                <IoIosSearch className="text-xl" />
                <input
                  type="text"
                  className="w-full border-[0] m-0 p-0 outline-none bg-transparent"
                  placeholder="Search ..."
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm text-[#707A8F]">Show</p>
                <div className="border-[1px] border-[#A2A1A833] rounded-[10px] p-2 w-[66px] h-[36px]">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border-none bg-transparent p-0 m-0 outline-none w-full h-full"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </div>
            </div>
            {currentItems.map((scheduledDate, index) => {
              return (
                <div key={index}>
                  <Event schedule={scheduledDate} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
