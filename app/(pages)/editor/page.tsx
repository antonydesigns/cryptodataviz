"use client";

import React, { useEffect, useState } from "react";
import ContentBoxModel from "./ContentBox/model";
import { ContentBoxStore } from "./ContentBox/store";
import type { ParsedPageContentType } from "@/app/(utils)/types";

export default function EditorPage() {
  // Global Getters
  const content: ParsedPageContentType[] = ContentBoxStore(
    (store) => store.content
  );
  const dataAvailable: boolean = ContentBoxStore(
    (store) => store.dataAvailable
  );
  const model = new ContentBoxModel();

  model.init();

  return (
    <>
      {dataAvailable &&
        content.map((line) => <div key={line.id}>{line.content}</div>)}
      {!dataAvailable && <div>Loading...</div>}
    </>
  );
}
