"use client";
import { Products } from "@/components/flatProducts";
import { geter } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  let { data } = useQuery({
    queryKey: ["searchProducts"],
    queryFn: () => geter("products?q=" + searchParams.q),
  });
  return (
    <div className="w-full mt-6">
      <header className="flex justify-center items-center mt-6 gap-5">
        <h2 className="text-2xl font-medium min-w-fit">
          Resulte for: {searchParams.q}
        </h2>
        <hr className="w-full bg-goodgrey" />
        <button className="rounded-full py-1 px-6 flex items-center bg-primary">
          sort
        </button>
      </header>
      <Products data={data?.products} />
    </div>
  );
}
