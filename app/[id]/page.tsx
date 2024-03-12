"use client";

import { addProduct } from "@/utils/store/cart";
import { useAppDispatch } from "@/utils/store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { geter } from "@/utils/api";
import { IProduct } from "@/utils/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best laptops store in the town",
  description: "",
};

export default function Page({ params }: { params: { id: string } }) {
  let dispcatch = useAppDispatch();
  let [quantity, setQuatity] = useState(0);
  let { data } = useQuery<IProduct | undefined>({
    queryKey: ["getProduct"],
    queryFn: () => geter("products/" + params.id),
  });
  let r = useRouter();

  let addToCart = () =>
    data ? dispcatch(addProduct({ ...data, quantity })) : false;

  if (data) {
    return (
      <div className="min-h-screen w-full">
        <main className="w-full max-w-2xl flex mx-auto mt-24 gap-4 max-md:flex-col">
          <div className="images w-full md:max-w-[45rem]">
            <img
              src={data.image}
              alt={data.name}
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="w-full flex-col gap-4 flex">
            <button
              onClick={() => r.back()}
              className="btn bg-transparent border-purple-600 border-2 text-purple-600 font-semibold order-1"
            >
              Back to products
            </button>
            <h1 className="text-purple-700 text-2xl font-bold">{data.name} </h1>
            <div className="flex gap-4 items-start">
              <p className="font-semibold">Category</p>
              <p>{data.category.name}</p>
            </div>
            <div className="flex gap-4 items-start">
              <p className="font-semibold">Brand</p>
              <p>{data.brand.name}</p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <p className="font-semibold">Description</p>
              <p
                dangerouslySetInnerHTML={{ __html: data.description }}
                className="text-sm text-gray-600 description"
              ></p>
            </div>
            <div className="price font-bold text-purple-800  text-3xl mt-4">
              {data.price}Dh
            </div>
            <div className="cart flex flex-col gap-2">
              <div className="">
                <label htmlFor="">Quatity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuatity(Number(e.target.value))}
                  className="w-full px-3 border border-[#ddd] mt-2 py-2"
                />
              </div>
              <button onClick={addToCart} className="btn">
                Add to Cart
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              <a
                className="btn bg-green-500"
                href={`https://wa.me/212699101129?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20product%20ID:%20${data._id}.`}
              >
                contact us on whatsapp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  <path d="M8 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M16 12h.01" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  } else return "loading...";
}
