"use client";
import { create, geter } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Page() {
  const [errors, setErrors] = useState("");
  let { data: user } = useQuery({
    queryKey: ["get_profile"],
    queryFn: () => geter("auth/me"),
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    if (email && password) {
      setErrors("");
      let error = await create("auth/login", { email, password });
      if (error instanceof Error) {
        // if (error.includes("password")) {

        // }
        setErrors(error.message);
        return;
      }
      // else r.push("/")
    }
  };
  return (
    <div className="w-full flex justify-center px-2 items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl items-center max-w-sm -mt-24 w-full flex flex-col gap-4 h-full"
      >
        {errors && (
          <span className="w-full p-2 bg-red-100 text-red-700 font-semibold border-l-2 border-red-600">
            {errors}
          </span>
        )}
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            id=""
            className="py-2 px-2 border border-[#ddd] outline-purple-600"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            required
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple-600"
          />
        </div>
        <button className="btn w-full max-w-sm">Login In</button>
      </form>
    </div>
  );
}
