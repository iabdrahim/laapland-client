import { IProduct } from "@/utils/types";
import { InfoProduct } from "./infoProduct";

export function InfoProducts({ data }: { data?: IProduct[] }) {
  return (
    <div className="products slider grid-cols-5 grid gap-4 my-4">
      {Array.isArray(data) &&
        data.map((product) => <InfoProduct product={product} />)}
    </div>
  );
}
