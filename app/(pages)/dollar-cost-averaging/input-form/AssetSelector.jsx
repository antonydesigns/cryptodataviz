"use client";
import React, { useEffect } from "react";
import { DCAStore } from "../DCAStore";

export default function AssetSelector() {
  const assetSelected = DCAStore((store) => store.assetSelected);
  const setAssetSelected = DCAStore((store) => store.setAssetSelected);

  const csvPaths = DCAStore((store) => store.csvPaths);
  const setSinglePath = DCAStore((store) => store.setCsvPath);

  // Index match CSV Path with Asset Selected on update
  useEffect(() => {
    csvPaths.forEach((asset) => {
      if (asset.ticker === assetSelected) {
        setSinglePath(asset.path);
      }
    });
  }, [assetSelected]);

  return (
    <>
      <select
        onChange={(e) => setAssetSelected(e.target.value)}
        value={assetSelected}
      >
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="ETH">Ethereum (ETH)</option>
      </select>
    </>
  );
}
