"use client";
import DateSelector from "./DateSelector";
import InvestAmount from "./InvestAmount";
import AssetSelector from "./AssetSelector";

export default function DCAInputs() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="my-2 text-[18px] font-semibold">1. Pick a crypto asset</p>
        <AssetSelector />
        <p className="my-2 text-[18px] font-semibold">
          2. Choose a starting date of investment{" "}
        </p>
        <DateSelector />
        <p className="my-2 text-[18px] font-semibold">
          3. Decide on a weekly investment amount
        </p>

        <InvestAmount />
      </form>
    </>
  );
}
