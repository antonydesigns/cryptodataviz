"use client";

import { ParsedPageContentType } from "@/app/(utils)/types";
import React, { useEffect } from "react";
import { ContentBoxStore } from "./store";

export default function ContentBoxView({
  contentProp,
}: {
  contentProp: ParsedPageContentType[];
}) {
  ///

  const content = ContentBoxStore((store) => store.content);
  const setContent = ContentBoxStore((store) => store.setContent);

  if (contentProp !== undefined) setContent(contentProp);

  useEffect(() => {
    console.log(content);
  }, [setContent]);

  ///

  return <></>;
}
