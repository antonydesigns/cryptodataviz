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
}: {
  content: ParsedHTMLStringType;
  id: number;
  original: string;
}) {
  const editMode = EditorStore((store) => store.editMode);
  const [editText, setEdit] = useState(false);
  const editTextGlob = EditorStore((store) => store.editText);

  const setModel = ContentModel((store) => store.setModel);
  const model = ContentModel((store) => store.model);
  const [fieldContent, setFieldContent] = useState(original);

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

  async function onSubmit(data: FieldValues) {
    const indexToUpdate = model.findIndex(
      (item: { order: number; content: string }) => item.order === id
    );

    if (indexToUpdate !== -1) {
      const updatedModel = [...model];
      updatedModel[indexToUpdate] = {
        order: id,
        content: getValues("htmlContent"),
      };
      setModel(updatedModel);
    }
    setEdit(false);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setFieldContent(e.currentTarget.value);
  }

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
