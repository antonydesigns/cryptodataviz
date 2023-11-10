"use client";

import { Switch } from "@/components/ui/switch";

import parse from "html-react-parser";
import type { ParsedHTMLStringType } from "@/app/(utils)/types";
import Line from "./Line";
import { EditorStore } from "@/app/(zustand)/store";
import { ContentModel } from "@/app/(zustand)/store";

import { db } from "@/app/(config)/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

type PageContent = {
  id: string;
  content: string;
  locationID: number;
};

type ParsedPageContent = {
  id: string;
  content: ParsedHTMLStringType;
  original: string;
  locationID: number;
};

export default function Editor() {
  const setEditMode = EditorStore((store) => store.setEditMode);
  const editMode = EditorStore((store) => store.editMode);
  const model = ContentModel((store) => store.model);

  function constructHTML(
    content: {
      id: string;
      content: string;
      locationID: number;
    }[]
  ) {
    let result: {
      id: string;
      content: ParsedHTMLStringType;
      original: string;
      locationID: number;
    }[] = [];
    content.forEach((line) => {
      let id = line.id;
      let contentString = line.content;
      let content = parse(contentString);
      let original = contentString;
      let locationID = line.locationID;
      result.push({
        id: id,
        content: content,
        original: original,
        locationID: locationID,
      });
    });
    return result;
  }

  const [content, setContent] = useState<PageContent[]>();

  useEffect(() => {
    (async function getContent() {
      try {
        const data = await getDocs(collection(db, "pageContent"));
        const contentArray: PageContent[] = [];
        data.forEach((doc) => {
          let content = doc.data() as PageContent;
          let id = doc.id;
          contentArray.push({ ...content, id: id });
        });
        setContent(contentArray);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let parsed: ParsedPageContent[] = [];

  useEffect(() => {
    //parsed = content ? constructHTML(content) : [];
  }, [content]);

  return (
    <>
      <div className="my-2 font-bold flex gap-4">
        <p>Edit</p>{" "}
        <Switch
          onCheckedChange={() => {
            setEditMode(!editMode);
          }}
        />
      </div>
      {content &&
        parsed.map((line) => (
          <Line
            key={line.id}
            content={line.content}
            id={line.id}
            original={line.original}
            locationID={line.locationID}
          />
        ))}
    </>
  );
}
