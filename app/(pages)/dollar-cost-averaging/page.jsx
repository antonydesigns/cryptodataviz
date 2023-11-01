"use client";
import React, { useState } from "react";
import DataFetch from "./DataFetch";

export default function DCA() {
  return (
    <>
      <DataFetch csvFilePath="/BTC.csv" />
    </>
  );
}
