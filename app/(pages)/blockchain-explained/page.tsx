"use client";

import Section from "@/components/custom/Section";
import React from "react";
import GuideContent from "./GuideContent";

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
      <>
        <div className="figure you">
          <div className="">You</div>
        </div>
      </>
    </>
  );
}
