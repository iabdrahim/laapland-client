"use client";

import { Products } from "@/components/flatProducts";
import { geter } from "@/utils/api";
import { IOneCategory } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: { params: any }) {
  let { data } = useQuery<IOneCategory>({
    queryKey: ["category"],
    queryFn: () => geter("categories/" + params.name),
  });
  return (
    <div className="w-full mt-6">
      <ul className="pagination flex gap-2">
        <li>الرئيسية</li>
        <li>{">"}</li>
        <li>ديكورات</li>
      </ul>
      <header className="flex justify-center items-center mt-6 gap-4">
        <h2 className="text-2xl font-medium">{data?.name}</h2>
        <hr className="w-full bg-goodgrey" />
        <button className="rounded-full py-1 px-6 flex items-center bg-primary">
          ترتيب
        </button>
      </header>
      <Products data={data?.products} />
    </div>
  );
}
