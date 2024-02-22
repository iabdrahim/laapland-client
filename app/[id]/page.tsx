"use client";

import { addProduct } from "@/utils/store/cart";
import { useAppDispatch } from "@/utils/store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { geter } from "@/utils/api";
import { IProduct } from "@/utils/types";

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

  if (!data) {
    return "loading...";
  } else
    return (
      <div className="min-h-screen w-full">
        <main className="w-full max-w-2xl flex mx-auto mt-24 gap-4 max-md:flex-col">
          <div className="images w-full">
            <img src={data.image} alt={data.name} className="min-h-80 w-full" />
          </div>
          <div className="w-full flex-col gap-4 flex">
            <button
              onClick={() => r.back()}
              className="btn bg-transparent border-purple-600 border-2 text-purple-600 font-semibold order-1"
            >
              Back to products
            </button>
            <h1 className="text-purple-700 text-2xl font-bold">{data.name} </h1>
            <p
              dangerouslySetInnerHTML={{ __html: data.description }}
              className="text-sm text-gray-600 description"
            ></p>
            <div className="price font-bold text-purple-800  text-3xl mt-4">
              {data.price}$
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
            </div>
          </div>
        </main>
      </div>
    );
}
