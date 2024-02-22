import { IProduct } from "@/utils/types";

export function InfoProduct({ product }: { product: IProduct }) {
  return (
    <div className="product p-4 rounded-xl h-32 border-[#ddd] bg-red-500">
      <h3>{product.name}</h3>
    </div>
  );
}
