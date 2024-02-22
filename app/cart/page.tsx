"use client";

import { useAppDispatch, useAppSelector } from "@/utils/store";
import { deleteProduct, updateProduct } from "@/utils/store/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  let dispatch = useAppDispatch();
  let products = useAppSelector((state) => state.products);
  let r = useRouter();
  return (
    <div className="w-full mt-6 flex flex-col">
      <header className="flex justify-center items-center mt-6 gap-2 w-full max-w-2xl mx-auto">
        <div className="steps w-full justify-between flex items-center gap-4">
          <div className="flex w-fit flex-col items-center gap-2">
            <div className="bg-purple-300 w-8 h-8 rounded-full"></div>
            Cart
          </div>
          <hr className="w-full" />
          <div className="flex w-fit flex-col items-center gap-2">
            <div className="bg-purple-700 w-8 h-8 rounded-full"></div>
            Checkout
          </div>
        </div>
      </header>
      <main className="w-full flex flex-col rounded-xl mt-4 gap-4 max-w-3xl mx-auto tabl items-center justify-center">
        <section className="min-h-[20rem] w-full h-full flex flex-col">
          <div className="flex items-center text-purple-900 py-2 border-b border-[#ddd] justify-center">
            <div className="w-96 uppercase"></div>
            <div className="w-full uppercase">Name</div>
            <div className="w-full uppercase">Quantity</div>
            <div className="price w-full uppercase">Price</div>
            <div className="w-full"></div>
          </div>
          {products &&
            products.map((product) => (
              <div className="flex items-center justify-center border-b py-2 border-[#ddd]">
                <div className="w-96 uppercase">
                  <img
                    src={product.image}
                    alt="product image"
                    className="w-16 h-16 rounded-md"
                  />
                </div>
                <div className="w-full">{product.name}</div>
                <div className="w-full pr-4">
                  <input
                    type="number"
                    defaultValue={product.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateProduct({
                          id: product._id,
                          newOne: {
                            ...product,
                            quantity: Number(e.target.value),
                          },
                        })
                      )
                    }
                    className="w-full px-3 border border-[#ddd] py-2"
                  />
                </div>
                <div className="price w-full">{product.price}$</div>
                <div className="w-full">
                  <button
                    onClick={() => dispatch(deleteProduct(product._id))}
                    className="btn bg-transparent border-purple-600 border-2 text-purple-600 w-8 h-8 p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          <div className="flex items-center justify-end pr-12 gap-4 pt-4 text-gray-500">
            SUBTOTAL
            <span className="font-bold text-xl text-purple-600">
              {products?.length != 0
                ? eval(
                    //dangrouse fucntion its excutes js code be carefull from XSS Attack
                    products
                      .map((e) =>
                        isNaN(e.price) || isNaN(e.quantity)
                          ? 0
                          : e.price * e.quantity
                      )
                      .join("+")
                  )
                : "0.00"}
              $
            </span>
          </div>
        </section>
        <div className="flex gap-4 flex-col w-fit">
          <Link href="#">
            <div className="btn font-semibold px-10">
              Go to checkout
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
          <div
            onClick={() => r.back()}
            className="btn text-purple-600 bg-transparent border-2 border-purple-600 font-semibold px-10"
          >
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Go Back
          </div>
        </div>
      </main>
    </div>
  );
}
