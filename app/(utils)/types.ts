import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type ParsedHTMLStringType = string | JSX.Element | JSX.Element[];

export type ParsedPageContentType = {
  id: string;
  content: ParsedHTMLStringType;
  original: string;
  locationID: number;
};

export type PageContentType = {
  id: string;
  content: string;
  locationID: number;
};
