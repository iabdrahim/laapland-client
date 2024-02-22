import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

export const API_HOST = "http://localhost:5000/";
axios.defaults.withCredentials = true;

let showError = (message: string) => {
  toast.error(message);
  return new Error(message);
};

let showSucess = (message: string) => {
  toast.success(message);
};

export let update = async (slug: string, payload: any) => {
  toast.loading("loading", { id: "loading_update" });
  try {
    let isErr = false;
    let res = await axios.put(API_HOST + slug, payload).catch((err) => {
      isErr = true;
      return err;
    });

    if (isErr) {
      toast.remove("loading_update");
      return showError(res.response.data.message);
    }
    toast.remove("loading_update");

    //display success toast
    showSucess("updated successfully");
    return res.data;
  } catch (err) {
    toast.remove("loading_update");
    return showError("error loading data");
  }
};

export let create = async (slug: string, payload: any) => {
  toast.loading("loading", { id: "loading_create" });
  try {
    let isErr = false;
    let res = await axios.post(API_HOST + slug, payload).catch((err) => {
      isErr = true;
      return err;
    });

    if (isErr) {
      toast.remove("loading_create");
      return showError(res.response.data.message);
    }
    toast.remove("loading_create");

    //display success toast
    showSucess("created successfully");
    return res.data;
  } catch (err: any) {
    toast.remove("loading_create");
    console.log(err.message);
    return showError("error loading data");
  }
};

export let remove = async (slug: string) => {
  toast.loading("loading", { id: "loading_delete" });
  try {
    let isErr = false;
    let res = await axios.delete(API_HOST + slug).catch((err) => {
      isErr = true;
      return err;
    });

    if (isErr) {
      toast.remove("loading_delete");
      return showError(res.response.data.message);
    }
    toast.remove("loading_create");

    toast.remove("loading_delete");
    //display success toast
    showSucess("deleted successfully");
    return res.data;
  } catch (err) {
    toast.remove("loading_delete");
    return showError("error loading data");
  }
};

export let geter = (slug: string, config?: AxiosRequestConfig<any>) => {
  return axios.get(API_HOST + slug, config).then((res) => res.data);
};

// export let getProducts = (query = ""): Promise<IProduct> => {
//   return fetch(API_HOST + "/products" + query).then((res) => res.json());
// };
// export let getUsers = (query = ""): Promise<IUser> => {
//   return fetch(API_HOST + "/users" + query).then((res) => res.json());
// };
// export let getCategories = (query = ""): Promise<IUser> => {
//   return fetch(API_HOST + "/categories" + query).then((res) => res.json());
// };
// export let getBrands = (query = ""): Promise<IUser> => {
//   return fetch(API_HOST + "/brands" + query).then((res) => res.json());
// };

// export let getCurCustomer = (): Promise<IUser> => {
//   return fetch(API_HOST + "/customers/me").then((res) => res.json());
// };

// export let getOrders = (): Promise<IUser> => {
//   return fetch(API_HOST + "/orders").then((res) => res.json());
// };

// export let getUserOrders = (): Promise<IUser> => {
//   return fetch(API_HOST + "/orders/me").then((res) => res.json());
// };

// export let getCurUser = () => {
//   return fetch(API_HOST + "/auth/me").then((res) => res.json());
// };

// export let deleteCurUser = async () => {
//   let res = await fetch(API_HOST + "/auth/me", { method: "DELETE" });
//   if (!res.ok) {
//     //display error toast
//   }
//   //display success toast
//   return res.json();
// };

// export let updateCurUser = async (payload: any) => {
//   return update(API_HOST + "/auth/me", payload);
// };

// //products
// export let getProduct = async (id: string) => {
//   return fetch(API_HOST + "/products/" + id).then((res) => res.json());
// };

// export let deleteProduct = async (id: string) => {
//   let res = await fetch(API_HOST + "/products/" + id, { method: "DELETE" });
//   if (!res.ok) {
//     //display error toast
//   }
//   //display success toast
//   return res.json();
// };
// export let createProduct = async (payload: any) => {
//   let res = await fetch(API_HOST + "/products/", {
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//   });
//   if (!res.ok) {
//     //display error toast
//   }
//   //display success toast
//   return res.json();
// };

// export let getCategory = (id: string): Promise<IOneCategory> => {
//   return fetch(API_HOST + "/catagories/" + id).then((res) => res.json());
// };

// export let createCategory = async (payload: any) => {
//   let res = await fetch(API_HOST + "/categories", {
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//   });
//   if (!res.ok) {
//     //display error toast
//   }
//   //display success toast
//   return res.json();
// };
// export let updateCategory = async (id: string, payload: any) => {
//   return update(API_HOST + "/catagories" + id, payload);
// };
