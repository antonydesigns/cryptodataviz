"use client";

import React from "react";
import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
});

type TUser = z.infer<typeof UserSchema>;

export default function ZodComponent() {
  console.log(UserSchema);
  return (
    <>
      <div className="">Zod</div>
    </>
  );
}
