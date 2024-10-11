import { createSlice } from "@reduxjs/toolkit";
import { InitialStore } from "./restaurant.types";

const initialState: InitialStore = { state: null };

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    updateRestaurant: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { updateRestaurant } = restaurantSlice.actions;

export default restaurantSlice;
