"use client";

import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/app/(utils)/types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RichText() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  async function onSubmit(data: TSignUpSchema) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[20vw] m-auto"
      >
        <input
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
          placeholder="Email"
          className="my-3"
        />
        {errors.email && (
          <p className="text-red-400">{`${errors.email.message}`}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="my-3"
        />
        {errors.password && (
          <p className="text-red-400">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
          className="my-3"
        />
        {errors.confirmPassword && (
          <p className="text-red-400">{`${errors.confirmPassword.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          className="border border-black rounded-md disabled:bg-gray-600 text-white bg-black py-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}
