import { IProduct } from "@/utils/types";
import { Product } from "./prodcut";

export function Products({ data }: { data?: IProduct[] }) {
  return (
    <div className="products slider grid-cols-4 grid gap-4 my-6">
      {Array.isArray(data) &&
        data.map((product) => <Product product={product} />)}
    </div>
  );
}
