"use client";

import { CreateForm } from "@/components/dashboard/create";
import { CreateBrandForm } from "@/components/dashboard/createbrands";
import { CreateCtgForm } from "@/components/dashboard/createctg";
import { Brand, Ctg, Product } from "@/components/dashboard/table/brand";
import { geter } from "@/utils/api";
import { ICategory, IProduct } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Page() {
  let [open, setOpen] = useState(false);
  let [openBrand, setOpenBrand] = useState(false);
  let [openCtg, setOpenCtg] = useState(false);

  let { data, refetch } = useQuery<{ products: IProduct[] }>({
    queryKey: ["getProducts"],
    queryFn: () => geter("products"),
  });
  let { data: categories, refetch: refetchCtg } = useQuery<ICategory[]>({
    queryKey: ["getCategories"],
    queryFn: () => geter("categories"),
  });
  let { data: brands } = useQuery<ICategory[]>({
    queryKey: ["getBrands"],
    queryFn: () => geter("brands"),
  });

  useEffect(() => {
    console.log("create: ", open);
    console.log("ctg: ", openCtg);
    if (!open) refetch();
    if (!openCtg) refetchCtg();
  }, [open, openCtg]);
  return (
    <div>
      <div className="mt-14">
        <h3 className="font-bold mb-8 text-3xl">Dashboard</h3>
        <div className="stats flex gap-4 items-center">
          <div className="products flex flex-col gap-2 w-full max-w-sm py-3 px-4 border border-[#ddd]">
            products <span className="font-bold text-2xl">$788</span>
          </div>
          <div className="products flex flex-col gap-2 w-full max-w-sm py-3 px-4 border border-[#ddd]">
            orders <span className="font-bold text-2xl">$20</span>
          </div>
          <div className="products flex flex-col gap-2 w-full max-w-sm py-3 px-4 border border-[#ddd]">
            customers <span className="font-bold text-2xl">$1000</span>
          </div>
        </div>
        <div className="latest mt-8 border border-[#ddd] p-3 w-full max-w-md">
          <h4 className="font-semibold text-xl mb-2">Latest Orders</h4>
          <ul>
            <li className="flex justify-between items-center">
              <img
                src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yY0RRU2xTTFZVUVNpZmlXaTU2VkxhbkZkUEQifQ?width=80"
                className="w-10 h-10 rounded-full"
                alt="user image"
              />
              User one
              <div className="btn w-16 text-sm">Show</div>
            </li>
          </ul>
        </div>

        {open && <CreateForm setOpen={setOpen} />}
        <section className="mt-6">
          <h3 className="text-lg mb-4">Products</h3>
          <div className="btn mt-6" onClick={() => setOpen(true)}>
            Create Product
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
          <div className="flex mt-4 items-center text-purple-900 py-2 border-b border-[#ddd] justify-center">
            <div className="w-96 ">Image</div>
            <div className="w-full">Name</div>
            <div className="w-full">Stock</div>
            <div className="price w-full">Price</div>
            <div className="w-full">Action</div>
          </div>
          <div className="flex-flex-col ">
            {Array.isArray(data?.products) &&
              data.products.map((product) => <Product data={product} />)}
          </div>
        </section>
        {openCtg && <CreateCtgForm setOpen={setOpenCtg} />}
        <section className="mt-6">
          <h3 className="text-lg mb-4">Categories</h3>
          <div className="btn mt-6" onClick={() => setOpenCtg(true)}>
            Create Category
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
          <div className="flex mt-4 items-center text-purple-900 py-2 border-b border-[#ddd] justify-center">
            <div className="w-96 ">Image</div>
            <div className="w-full">Name</div>
            <div className="w-full">ArabicName</div>
            <div className="w-full">Action</div>
          </div>
          <div className="flex-flex-col">
            {Array.isArray(categories) &&
              categories.map((ctg) => <Ctg data={ctg} />)}
          </div>
        </section>
        {openBrand && <CreateBrandForm setOpen={setOpenBrand} />}
        <section className="mt-6">
          <h3 className="text-md mb-4">Brands</h3>
          <div className="btn mt-6" onClick={() => setOpenBrand(true)}>
            Create Brand
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
          <div className="flex mt-4 items-center text-purple-900 py-2 border-b border-[#ddd] justify-center">
            <div className="w-96 ">Image</div>
            <div className="w-full">Name</div>
            <div className="w-full">Action</div>
          </div>
          <div className="flex-flex-col">
            {Array.isArray(brands) &&
              brands.map((brand) => <Brand data={brand} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
