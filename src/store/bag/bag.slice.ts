import { createSlice } from "@reduxjs/toolkit";
import { InitialStore } from "./bag.types";

const initialState: InitialStore = { state: { items: [] } };

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.state = { items: [...state.state.items, action.payload] };
    },
    removeItem: (state, action) => {
      state.state = {
        items: state.state.items.filter((item) => action.payload !== item.id),
      };
    },
    clearBag: (state) => {
      state.state.items = []
    },
    updateItem: (state, action) => {
      state.state = {
        items: state.state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.itemQtd,
            };
          }

          return item;
        }),
      };
    },
  },
});

export const { addItem, removeItem, updateItem, clearBag } = bagSlice.actions;

export default bagSlice;
