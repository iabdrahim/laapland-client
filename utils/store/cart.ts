import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/utils/types";

export interface ICart extends IProduct {
  quantity: number;
}
export interface ICartState {
  products: ICart[];
}

const initialState: ICartState = {
  products: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCarts: (state, action: PayloadAction<ICart[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<ICart>) => {
      if (!action.payload) return;
      let i = state.products.findIndex((e) => e._id == action.payload._id);
      if (i != -1) {
        state.products[i].quantity++;
        return;
      }
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((e) => e._id != action.payload);
    },

    updateProduct: (
      state,
      action: PayloadAction<{ id: string; newOne: ICart }>
    ) => {
      let i = state.products.findIndex((e) => e._id == action.payload.id);
      state.products[i] = action.payload.newOne;
    },
  },
});

export const { setCarts, addProduct, updateProduct, deleteProduct } =
  cartsSlice.actions;
export const cartsReducer = cartsSlice.reducer;
