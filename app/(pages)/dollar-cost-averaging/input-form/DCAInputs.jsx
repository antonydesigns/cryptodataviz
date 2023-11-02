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
      <form onSubmit={handleSubmit} className="my-3 mx-3">
        <AssetSelector />
        <DateSelector />
        <InvestAmount />
      </form>
    </>
  );
}
