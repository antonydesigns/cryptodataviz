import React from "react";

type SectionPropsType = {
  heading?: string;
  body?: string[];
};

export default function Section({
  content,
  className,
}: {
  content: SectionPropsType;
  className?: string;
}) {
  return (
    <>
      <div className={`section ${className}`}>
        {content.heading && (
          <h1 className="text-3xl font-bold py-2">{content.heading}</h1>
        )}
        {content.body &&
          content.body?.map((par, i) => (
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
