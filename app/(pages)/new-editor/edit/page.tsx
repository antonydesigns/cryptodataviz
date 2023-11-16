"use client";
import React, { useEffect, useState } from "react";
import { ParsedPageContentType } from "@/app/(utils)/types";
import ContentBoxModel from "@/components/custom/ContentBox/model";
import { ContentBoxStore } from "@/components/custom/ContentBox/store";
import ContentBoxEditor from "@/components/custom/ContentBox/editor";

export default function Editor() {
  const locationID = 10;
  const [pass, setPass] = useState("");
  const [access, setAccess] = useState(false); // return to false OK
  const [content, setContent] = useState<ParsedPageContentType[]>([]);
  const updateSignal = ContentBoxStore((store) => store.updateSignal);
  const setUpdateSignal = ContentBoxStore((store) => store.setUpdateSignal);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPass(e.target.value);
  }

  useEffect(() => {
    //init(); // delete OK
    if (pass === process.env.NEXT_PUBLIC_EDITOR_PASSWORD) {
      setAccess(true);
      init();
    }
  }, [pass]);

  useEffect(() => {
    init();
    return () => {
      setUpdateSignal(false);
    };
  }, [updateSignal]);

  // Get content for this page
  // Set the content in Store
  async function init() {
    const model = new ContentBoxModel(locationID);
    await model.init();
    const pageContent: ParsedPageContentType[] = await model.getContent();
    setContent(pageContent);
  }

  return (
    <>
      {!access && (
        <form>
          <input
            className="border border-black"
            type="text"
            value={pass}
            onChange={(e) => handleChange(e)}
          />
        </form>
      )}
      {access &&
        content &&
        content?.map((line) => <ContentBoxEditor line={line} key={line.id} />)}
    </>
  );
}
