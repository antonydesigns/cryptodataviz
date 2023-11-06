"use client";
import { Switch } from "@/components/ui/switch";

import parse from "html-react-parser";
import type { ParsedHTMLStringType } from "@/app/(utils)/types";
import Line from "./Line";
import { EditorStore } from "@/app/(zustand)/store";
import { ContentModel } from "@/app/(zustand)/store";

export default function Editor() {
  const setEditMode = EditorStore((store) => store.setEditMode);
  const editMode = EditorStore((store) => store.editMode);
  const model = ContentModel((store) => store.model);

  function constructHTML(
    content: {
      order: number;
      content: string;
    }[]
  ) {
    let result: {
      order: number;
      content: ParsedHTMLStringType;
      original: string;
    }[] = [];
    content.forEach((line) => {
      let order = line.order;
      let contentString = line.content;
      let content = parse(contentString);
      let original = contentString;
      result.push({
        order: order,
        content: content,
        original: original,
      });
    });
    return result;
  }

  const parsed = constructHTML(model);

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
      {parsed.map((line) => (
        <Line
          key={line.order}
          content={line.content}
          id={line.order}
          original={line.original}
        />
      ))}
    </>
  );
}
