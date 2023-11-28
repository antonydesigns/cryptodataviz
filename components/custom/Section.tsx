import React from "react";

type ContentType = {
  heading: string;
  body: string[];
};

export default function Section({ content }: { content: ContentType }) {
  return (
    <>
      <div className="section ">
        {content.heading && (
          <h1 className="text-3xl font-bold py-2">{content.heading}</h1>
        )}
        {content.body &&
          content.body.map((par, i) => (
            <p
              className="py-2 text-[18px]"
              key={i}
              dangerouslySetInnerHTML={{ __html: par }}
            />
          ))}
      </div>
    </>
  );
}
