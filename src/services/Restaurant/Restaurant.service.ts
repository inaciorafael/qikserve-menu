import { AxiosResponse } from "axios";

import { RestaurantSettings } from "./Restaurant.types";
import { api } from '../Api'

const RestaurantServices = () => {
  const getRestaurantInfo = async (): Promise<
    AxiosResponse<RestaurantSettings>
  > => await api.get("/challenge/venue/9");

  return {
    getRestaurant: getRestaurantInfo,
  };
};

export default RestaurantServices;
