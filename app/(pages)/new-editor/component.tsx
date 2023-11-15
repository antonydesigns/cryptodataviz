"use client";
import { PageContentType } from "@/app/(utils)/types";
import React, { useEffect, useState } from "react";
import { ContentBoxStore } from "./store";

export default function NewEditorComponent({
  pageContent,
}: {
  pageContent: PageContentType[];
}) {
  const content = ContentBoxStore((store) => store.content);
  const setContent = ContentBoxStore((store) => store.setContent);

  useEffect(() => {
    setContent(pageContent);
    console.log(content);
  }, []);

  return <></>;
}
