"use client";
import React, { useEffect, useState } from "react";
import ContentBoxModel from "../../../../components/custom/ContentBox/model";
import { ParsedPageContentType } from "@/app/(utils)/types";
import { ContentBoxStore } from "../../../../components/custom/ContentBox/store";
import ContentBoxEditor from "@/components/custom/ContentBox/editor";

export default function Editor() {
  const [pass, setPass] = useState("");
  const [access, setAccess] = useState(true); // return to false OK
  const content: ParsedPageContentType[] = ContentBoxStore(
    (store) => store.content
  );
  const setContent = ContentBoxStore((store) => store.setContent);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPass(e.target.value);
  }

  useEffect(() => {
    init(); // delete OK
    if (pass === process.env.NEXT_PUBLIC_EDITOR_PASSWORD) {
      setAccess(true);
      init();
    }
    async function init() {
      const model = new ContentBoxModel();
      await model.init();
      const pageContent: ParsedPageContentType[] = await model.getContent();
      setContent(pageContent);
    }
  }, [pass]);

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
