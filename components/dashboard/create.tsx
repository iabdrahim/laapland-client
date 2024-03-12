"use client";

import { create, geter, update } from "@/utils/api";
import { IBrand, ICategory } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export function CreateForm({
  setOpen,
  updateId,
  data,
}: {
  setOpen: (b: boolean) => void;
  updateId?: string;
  data?: {
    name: string;
    price: number;
    description: string;
    stock: number;
    image: File | string;
    images: string[];
    category: string;
    brand: string;
  };
}) {
  let { data: categories } = useQuery<ICategory[]>({
    queryKey: ["getCategories"],
    queryFn: () => geter("categories"),
  });
  let { data: brands } = useQuery<ICategory[]>({
    queryKey: ["getBrands"],
    queryFn: () => geter("brands"),
  });

  let [formData, setForm] = useState(
    data || {
      name: "",
      price: 0,
      description: "",
      stock: 0,
      image: "",
      images: [],
      category: "",
      brand: "",
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
    // @ts-ignore
    console.log(temp[input]);
    setForm({ ...temp });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  useEffect(() => {
    if (typeof formData.image != "string") {
      var selectedFile = formData.image;
      var reader = new FileReader();

      var imgtag = document.getElementById("preview") as HTMLImageElement;

      reader.onload = function (event) {
        imgtag.src = event.target?.result as any;
      };

      reader.readAsDataURL(selectedFile);
    }
  }, [formData]);

  let createProdcut = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.image || !formData.price) return null;
    formData.price = Number(formData.price);
    formData.stock = Number(formData.stock);
    if (!formData.category)
      formData.category = categories ? categories[0]._id : "";
    if (!formData.brand) formData.brand = brands ? brands[0]._id : "";

    //upload image
    if (typeof formData.image != "string") {
      const form = new FormData();
      form.append("file", formData.image);
      form.append("upload_preset", "ilmamcdn");
      let config: RequestInit = {
        method: "POST",
        body: form,
      };
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dgvxswr30/image/upload",
        config
      );
      const file = await res.json();
      formData.image = file.secure_url;
    }
    let req;
    if (updateId) {
      req = await update("products/" + updateId, formData);
    } else {
      req = await create("products", formData);
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
        className="flex gap-4 rounded-r-md z-50 overflow-auto relative h-screen justify-start flex-col bg-white border-xl p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 w-fit border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      >
        {errors && (
          <span className="w-full p-2 bg-red-100 text-red-700 font-semibold border-l-2 border-red-600">
            {errors}
          </span>
        )}
        <div className="flex flex-col items-start">
          {formData.image && (
            <img
              id="preview"
              src={typeof formData.image == "string" ? formData.image : ""}
              alt=""
              className="w-24 h-24"
            />
          )}
          <label className="text-lg font-medium leading-none">
            Product Image
          </label>

          <input
            type="text"
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple7600"
            name="image"
            value={typeof formData.image == "string" ? formData.image : ""}
            onChange={(e) => updateFormValue("image", e)}
            placeholder="Mac 16"
            required
          />
          <div>
            <div className="flex items-center gap-4 mb-4" />
            <button
              className="relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 bg-purple-100 "
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
              <input
                type="file"
                onChange={(e) =>
                  setForm({
                    ...formData,
                    image: e.target.files ? e.target.files[0] : "",
                  })
                }
                className="w-full h-full absolute opacity-0 left-0 top-0 cursor-pointer"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full items-start">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            name
          </label>
          <input
            type="text"
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple7600"
            name="productName"
            value={formData.name}
            onChange={(e) => updateFormValue("name", e)}
            placeholder="Mac 16"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full items-start">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            price
          </label>
          <input
            name="price"
            min={1}
            type="number"
            value={formData.price}
            onChange={(e) => updateFormValue("price", e)}
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple-600"
            placeholder="Mac 16"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full items-start mb-4">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            Description
          </label>
          {document && (
            <ReactQuill
              value={formData.description}
              onChange={(e) => updateFormValue("description", e)}
              className="w-full max-w-xl"
              style={{ borderRadius: "0.5rem" }}
              placeholder="description"
              formats={formats}
              modules={modules}
            />
          )}
        </div>
        <div className="flex flex-col gap-2 mt-6 w-full items-start">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            stock
          </label>
          <input
            type="number"
            value={formData.stock}
            min={1}
            onChange={(e) => updateFormValue("stock", e)}
            name="stock"
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple-600"
            placeholder="Mac 16"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full items-start">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            category
          </label>
          <select
            name="category"
            id=""
            value={formData.category}
            onChange={(e) => updateFormValue("category", e)}
            required
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple-600"
          >
            {Array.isArray(categories) &&
              categories.map((ctg) => (
                <option
                  value={ctg._id}
                  id=""
                  selected={data?.category == ctg.name}
                >
                  {ctg.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full items-start">
          <label htmlFor="" className="capitalize text-[#444] text-lg">
            brand
          </label>
          <select
            name="brand"
            id=""
            value={formData.brand}
            onChange={(e) => updateFormValue("brand", e)}
            className="max-w-sm w-full py-2 px-2 border border-[#ddd] outline-purple-600"
            required
          >
            {Array.isArray(brands) &&
              brands.map((brand) => (
                <option
                  value={brand._id}
                  id=""
                  selected={data?.brand == brand.name}
                >
                  {brand.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full items-start">
          <label
            htmlFor=""
            className="capitalize text-[#444] text-lg font-semibold"
          >
            More Images
          </label>
          <div className="images flex gap-2 items-center justify-start">
            <div className="add w-48 h-48 rounded-lg bg-purple-100 text-purple-700 text-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
            {/* <img src="" alt="" className="bg-red-500 w-52 h-52 rounded-lg" /> */}
          </div>
        </div>
        <button type="submit" className="btn bg-primary capitalize">
          {updateId ? "Update Product" : "createProdcut "}
        </button>
      </form>
    </div>
  );
}
