import { IProduct } from "./types";

export class Faker {
  static products: IProduct[] = [
    {
      admin: "1100",
      _id: "DDDDD",
      brand: {
        _id: "123",
        createdAt: "a",
        image:
          "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
        name: "Dell",
        updatedAt: "8",
      },
      description: "",
      category: {
        _id: "1234",
        arabicName: "",
        image:
          "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
        name: "",
        createdAt: "",
        updatedAt: "",
      },
      image:
        "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
      images: [],
      createdAt: "",
      price: 999,
      name: "Product One",
      stock: 10,
      updatedAt: "",
    },
    {
      admin: "1100",
      brand: {
        _id: "123",
        createdAt: "a",
        image:
          "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
        name: "Dell",
        updatedAt: "8",
      },
      description: "",
      category: {
        _id: "1234",
        arabicName: "",
        image:
          "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
        name: "",
        createdAt: "",
        updatedAt: "",
      },
      image:
        "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
      images: [],
      createdAt: "",
      price: 999,
      name: "Product Two",
      stock: 10,
      updatedAt: "",
      _id: "DDKK",
    },
    {
      admin: "1100",
      brand: {
        _id: "123",
        createdAt: "a",
        image:
          "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
        name: "Dell",
        updatedAt: "8",
      },
      description: "",
      category: {
        _id: "1234",
        arabicName: "",
        image:
          "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
        name: "",
        createdAt: "",
        updatedAt: "",
      },
      image:
        "https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-295f01d2.jpg%3Fv%3D1617396766&w=1920&q=75",
      images: [],
      createdAt: "",
      price: 999,
      name: "Product There",
      stock: 10,
      updatedAt: "",
      _id: "OOOO",
    },
  ];
  static getRandomNumber(x = 10) {
    return Math.round(Math.random() * x);
  }
  static getRandomProduct() {
    if (this.products.length == 0) return this.products[0];
    return this.products[Math.round(Math.random() * this.products.length)];
  }
}
