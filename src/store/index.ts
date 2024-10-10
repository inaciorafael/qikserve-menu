import { configureStore } from "@reduxjs/toolkit";

import restaurantSlice from "./restaurant";
import menuSlice from "./menu";
import bagSlice from "./bag";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    menu: menuSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
