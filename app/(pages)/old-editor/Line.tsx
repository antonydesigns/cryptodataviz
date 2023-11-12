import { ParsedHTMLStringType } from "@/app/(utils)/types";
import { EditorStore } from "@/app/(zustand)/store";
import { ContentModel } from "@/app/(zustand)/store";
import { useState, useEffect, useRef, FormEvent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

type Inputs = {
  htmlContent: string;
};

export default function Line({
  content,
  id,
  original,
  locationID,
}: {
  content: ParsedHTMLStringType;
  id: string;
  original: string;
  locationID: number;
}) {
  const editMode = EditorStore((store) => store.editMode);
  const [editText, setEdit] = useState(false);
  const editTextGlob = EditorStore((store) => store.editText);
  const [fieldContent, setFieldContent] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setFocus,
  } = useForm<Inputs>({
    defaultValues: {
      htmlContent: fieldContent,
    },
    mode: "all",
  });

  async function onSubmit(data: FieldValues) {}

  function handleChange(e: React.FormEvent<HTMLInputElement>) {}

  console.log(content);

  return (
    <>
      <>{!editMode && (!editText || !editTextGlob) && content}</>
      <>
        {editMode && !editText && (
          <div onClick={() => setEdit(true)} className="hover:bg-green-200">
            {content}
          </div>
        )}
      </>
      <>
        {editMode && editText && (
          <div className="flex">
            <textarea
              className="w-[100%]"
              {...register("htmlContent", {
                onChange: (e) => handleChange(e),
              })}
              onBlur={handleSubmit(onSubmit)}
            />
            <button type="button" onClick={handleSubmit(onSubmit)}>
              Okay
            </button>
          </div>
        )}
      </>
    </>
  );
}
