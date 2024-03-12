"use server";

import { cookies } from "next/headers";
import { API_HOST, create } from "./api";
import axios from "axios";

export let loginAction = async (currentState: unknown, formData: FormData) => {
  try {
    let isErr = false;
    let res = await axios
      .post(API_HOST + "auth/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .catch((err) => {
        isErr = true;
        return err;
      });

    if (isErr) {
      throw new Error(res.response.data.message);
    }
    cookies().set("access_token", res.data.access_token);
  } catch (error: any) {
    return error.message;
  }
};
