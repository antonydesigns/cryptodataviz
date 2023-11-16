"use client";
import { DCAStore } from "../DCAStore";

export default function InvestAmount() {
  const dollar = DCAStore((store) => store.dollarAmount);
  const setDollar = DCAStore((store) => store.setDollar);

  function handleChange(e) {
    let value = e.target.value; // 1.23
    const numericRegex = /^\d*\.?\d*$/;
    if (!numericRegex.test(value)) return; // return if input is not numeric
    setDollar(Number(value));
  }

  return (
    <div className="my-3">
      <label>Invest amount per week: </label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={dollar}
        onChange={handleChange}
        className="border border-black text-center bg-[#f7f7f8ec]"
      />
    </div>
  );
}
