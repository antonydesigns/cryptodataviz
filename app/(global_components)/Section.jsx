import React from "react";

export default function Section({ content }) {
  return (
    <>
      <div className="section mt-5">
        <h1 className="text-3xl font-bold py-2">{content.heading}</h1>
        {content.body.map((par, i) => (
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
