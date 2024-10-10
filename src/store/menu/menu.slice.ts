import { createSlice } from "@reduxjs/toolkit";
import { InitialStore } from "./menu.types";

const initialState: InitialStore = { state: null };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateMenu: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { updateMenu } = menuSlice.actions;

export default menuSlice;
