import { IProduct } from "@/utils/types";
import Link from "next/link";

export function Product({ product }: { product: IProduct | null }) {
  return (
    <div className="product w-72 flex-col flex h-fit rounded-md bg-white">
      <div className="image h-72 w-full">
        <img src={product?.image} alt="product image" />
      </div>
      <Link href={"/" + product?._id}>
        <div className="px-3 py-2 mt-2 flex flex-col gap-2 items-end">
          <h3 className="font-semibold text-xl w-full">{product?.name}</h3>
          <button className="px-3 py-2 bg-purple-100 text-purple-700">
            Buy Now !!
          </button>
        </div>
      </Link>
    </div>
  );
}
