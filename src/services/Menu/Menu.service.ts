import { AxiosResponse } from "axios";

import { api } from "../Api";
import { RestaurantMenu } from "./Menu.types";

const MenuServices = () => {
  const getMenu = async (): Promise<AxiosResponse<RestaurantMenu>> =>
    await api.get("/challenge/menu");

  return {
    getMenu,
  };
};

export default MenuServices;
