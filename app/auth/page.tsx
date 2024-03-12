"use client";
import { geter } from "@/utils/api";
import { loginAction } from "@/utils/loginAction";
import { useQuery } from "@tanstack/react-query";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  let { data: user } = useQuery({
    queryKey: ["get_profile"],
    queryFn: () => geter("auth/me"),
  });

  const [errorMessage, dispatch] = useFormState(loginAction, undefined);

  return (
    <div className="w-full flex justify-center px-2 items-center min-h-screen">
      <form
        action={dispatch}
        className="rounded-xl items-center max-w-sm -mt-24 w-full flex flex-col gap-4 h-full"
      >
        {user && (
          <span className="w-full p-2 bg-green-100 text-green-900 font-semibold border-l-2 border-green-600">
            You are sign in as {user.email}
          </span>
        )}
        {errorMessage && (
          <span className="w-full p-2 bg-red-100 text-red-700 font-semibold border-l-2 border-red-600">
            {errorMessage}
          </span>
        )}
        <PendingMessage />
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

let PendingMessage = () => {
  let { pending } = useFormStatus();

  return (
    pending && (
      <span className="w-full p-2 bg-red-100 text-yellow-700 font-semibold border-l-2 border-yellow-600">
        loading...
      </span>
    )
  );
};
