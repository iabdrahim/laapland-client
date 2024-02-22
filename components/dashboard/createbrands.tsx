"use client";

import { create, update } from "@/utils/api";
import React, { ChangeEvent, FormEvent, useState } from "react";

export function CreateBrandForm({
  setOpen,
  updateId,
  data,
}: {
  setOpen: (b: boolean) => void;
  updateId?: string;
  data?: {
    name: string;
    image: string;
  };
}) {
  let [formData, setForm] = useState(
    data || {
      name: "",
      image: "",
    }
  );
  const [errors, setErrors] = useState("");

  let updateFormValue = (input: string, e: ChangeEvent | string) => {
    let value = e;
    if (typeof e != "string") {
      value = (e.target as HTMLInputElement).value;
    }
    let temp = formData;
    Object.entries(temp).forEach(([k, v]) =>
      k == input ? (v = value as string) : false
    );
    // @ts-ignore
    temp[input] = value;
    setForm({ ...temp });
  };

  let createProdcut = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name) return null;
    formData.image =
      "https://assets.kogan.com/files/product/2023/KAL14N385PA/KAL14N385PA_hero.v3.jpg";

    let req;
    if (updateId) {
      req = await update("brands/" + updateId, formData);
    } else {
      req = await create("brands", formData);
    }
    if (req instanceof Error) {
      setErrors(req.message);
      return;
    }
    setOpen(false);
  };
  return (
    <div className="fixed w-screen min-h-screen z-5 right-0 top-0 flex justify-end">
      <div
        onClick={() => setOpen(false)}
        className="bg w-full h-full absolute left-0 top-0 bg-black opacity-20 backdrop-blur-sm"
      ></div>
      <form
        onSubmit={createProdcut}
        className="flex gap-4 rounded-r-md z-50 overflow-auto w-fit relative h-screen justify-start flex-col bg-white border-xl p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      >
        {errors && (
          <span className="w-full p-2 bg-red-100 text-red-700 font-semibold border-l-2 border-red-600">
            {errors}
          </span>
        )}
        <div className="">
          <label className="text-lg font-medium leading-none">
            Brand Image
          </label>
          <div>
            <div className="flex items-center gap-4 mb-4" />
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 bg-purple-100"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                <line x1={16} x2={22} y1={5} y2={5} />
                <line x1={19} x2={19} y1={2} y2={8} />
                <circle cx={9} cy={9} r={2} />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              Upload an Image
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full items-start">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            name
          </label>
          <input
            type="text"
            className="max-w-md w-full py-2 px-2 border border-[#ddd] outline-purple7600"
            name="name"
            value={formData.name}
            onChange={(e) => updateFormValue("name", e)}
            placeholder="Stickers"
            required
          />
        </div>

        <button type="submit" className="btn bg-primary">
          {updateId ? "Update Category" : "create Category"}
        </button>
      </form>
    </div>
  );
}
