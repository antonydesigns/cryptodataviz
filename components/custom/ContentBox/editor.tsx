import { db } from "@/app/(config)/firebase";
import { ParsedPageContentType } from "@/app/(utils)/types";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { ContentBoxStore } from "./store";

export default function ContentBoxEditor({
  line,
}: {
  line: ParsedPageContentType;
}) {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(line.original);
  const setUpdateSignal = ContentBoxStore((store) => store.setUpdateSignal);

  function handleUpdate() {
    setEdit(false);
    const docRef = doc(db, "pageContent", line.id);
    update();

    async function update() {
      await updateDoc(docRef, {
        content: content,
      });
      setUpdateSignal(true);
    }
  }

  return (
    <>
      {!edit && (
        <div className="hover:bg-green-100" onClick={() => setEdit(true)}>
          {line.content}
        </div>
      )}
      {edit && (
        <form>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-black p-1"
          />
          <div className="buttons flex justify-between ">
            <div>
              <button
                className="bg-yellow-100 py-1 px-2 my-2 border border-yellow-200 rounded-md"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-gray-200 ml-3 py-1 px-2 my-2 border border-gray-300 rounded-md"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
            </div>
            <button
              className="bg-red-400 ml-3 py-1 px-2 my-2 border border-red-600 rounded-md"
              onClick={() => setEdit(false)}
            >
              Delete
            </button>
          </div>
        </form>
      )}
    </>
  );
}
