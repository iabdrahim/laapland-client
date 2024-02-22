export interface IUser {
  role: string;
  _id: string;
  email: string;
  customer: string;
  password: string;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  _id: string;
  stock: number;
  image: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  brand: IBrand;
  admin: string | IUser;
}

export interface ICategory {
  _id: string;
  name: string;
  arabicName: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IOneCategory extends ICategory {
  products: IProduct[];
}
export interface IBrand {
  name: string;
  _id: string;

  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  products: IProduct[];

  customer: ICustomer;

  message: string;
}

export interface ICustomer {
  name: string;
  lastName: string;
  phone: string;
  avatar: string;
  user: IUser;

  // Address Information
  address: {
    type: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };

  // Wishlist
  wishlist: IProduct[];
}
