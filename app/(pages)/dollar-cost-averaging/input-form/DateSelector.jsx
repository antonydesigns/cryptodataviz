"use client";
import { DCAStore } from "@/app/(zustand)/store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector() {
  const setDate = DCAStore((state) => state.setDate);
  const date = DCAStore((state) => state.date);

  return (
    <>
      <div className="inline">
        <span>DCA investment start date: </span>
        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          monthsShown={2}
          showYearDropdown
          className="border border-black text-center bg-[#f7f7f8ec]"
        />
      </div>
    </>
  );
}
