"use client";

import { remove } from "@/utils/api";
import { ICategory, IProduct } from "@/utils/types";
import { useState } from "react";
import { CreateBrandForm } from "../createbrands";
import { CreateCtgForm } from "../createctg";
import Link from "next/link";
import { CreateForm } from "../create";

export let Brand = ({ data }: { data: ICategory }) => {
  let [isUpdate, setUp] = useState(false);
  if (!data) return "";
  return (
    <div className="flex items-center justify-center border-b py-2 border-[#ddd]">
      {isUpdate && (
        <CreateBrandForm
          updateId={data._id}
          data={{
            name: data.name,
            image: data.image,
          }}
          setOpen={setUp}
        />
      )}
      <div className="w-96 uppercase">
        <img
          src={data.image}
          alt="product image"
          className="w-16 h-16 rounded-md"
        />
      </div>
      <div className="w-full">{data.name}</div>
      <div className="w-full flex gap-2">
        <button
          className="btn bg-transparent border-purple-600 border-2 text-purple-600 w-8 h-8 p-0"
          onClick={() => setUp(true)}
        >
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
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </button>
        <button
          onClick={() => remove("brands/" + data._id)}
          className="btn bg-transparent border-red-400 border-2 text-red-600 w-8 h-8 p-0"
        >
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export let Ctg = ({ data }: { data: ICategory }) => {
  let [isUpdate, setUp] = useState(false);
  if (!data) return "";
  return (
    <div className="flex items-center justify-center border-b py-2 border-[#ddd]">
      {isUpdate && (
        <CreateCtgForm
          updateId={data._id}
          data={{
            name: data.name,
            arabicName: data.arabicName,
            image: data.image,
          }}
          setOpen={setUp}
        />
      )}
      <div className="w-96 uppercase">
        <img
          src={data.image}
          alt="product image"
          className="w-16 h-16 rounded-md"
        />
      </div>
      <div className="w-full">{data.name}</div>
      <div className="w-full pr-4">{data.arabicName}</div>
      <div className="w-full flex gap-2">
        <button
          className="btn bg-transparent border-purple-600 border-2 text-purple-600 w-8 h-8 p-0"
          onClick={() => setUp(true)}
        >
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
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </button>
        <button
          onClick={() => remove("categories/" + data._id)}
          className="btn bg-transparent border-red-400 border-2 text-red-600 w-8 h-8 p-0"
        >
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export let Product = ({ data }: { data: IProduct }) => {
  let [isUpdate, setUp] = useState(false);
  if (!data) return "";
  return (
    <div className="flex items-center justify-center border-b py-2 border-[#ddd]">
      {isUpdate && (
        <CreateForm
          updateId={data._id}
          data={{
            brand: data?.brand?._id || "",
            category: data?.category?._id || "",
            name: data.name,
            description: data.description,
            image: data.image,
            price: data.price,
            stock: data.stock,
            images: data.images,
          }}
          setOpen={setUp}
        />
      )}
      <div className="w-96 uppercase">
        <img
          src={data.image}
          alt="product image"
          className="w-16 h-16 rounded-md"
        />
      </div>
      <Link href={"/" + data._id}>
        <div className="w-full">{data.name}</div>
      </Link>
      <div className="w-full text-center">{data.stock}</div>
      <div className="price w-full">{data.price}$</div>
      <div className="w-full flex gap-2">
        <button
          className="btn bg-transparent border-purple-600 border-2 text-purple-600 w-8 h-8 p-0"
          onClick={() => setUp(true)}
        >
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
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        </button>
        <button
          onClick={() => remove("products/" + data._id)}
          className="btn bg-transparent border-red-400 border-2 text-red-600 w-8 h-8 p-0"
        >
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </div>
  );
};
