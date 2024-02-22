"use client";

import { geter } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Products } from "@/components/flatProducts";
import { Faker } from "@/utils/faker";

export default function Home() {
  let { data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => geter("products"),
  });

  return (
    <div className="mt-6">
      <header className="w-full h-fit rounded-lg flex gap-4 my-12 flex-col items-center">
        <h1 className="text-4xl text-purple-600 font-bold">
          New Laptop Prices in Morocco and Technical Spesifications
        </h1>
        <p className="text-gray-500 text-sm">
          Shop Laptop from around the world. Exclusive products & global brands
          with the lowest shipping rates to Norway.
        </p>
      </header>
      <section>
        <Products data={data?.products} />
      </section>
    </div>
  );
}
