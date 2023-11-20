"use client";

import Section from "@/components/custom/Section";
import React, { useRef, useEffect, useState } from "react";
import GuideContent from "./GuideContent";
import Box from "./Box";
import AnotherBox from "./Box2";

type ContentIndexType = {
  [key: string]: {
    heading?: string;
    body?: string[];
  };
};

export default function BlockchainExplainedPage() {
  const guideContent = new GuideContent();
  const infoBoxes = guideContent.getContent();
  const index: ContentIndexType = {};

  for (const info of infoBoxes) {
    index[info.name] = info;
  }

  return (
    <>
      <Section content={index["intro"]} />
      <div className="border border-black h-[500px] w-full relative">
        <AnotherBox />
      </div>
    </>
  );
}
