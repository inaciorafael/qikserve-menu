import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { updateRestant } from "../../store/restaurant";
import { updateMenu } from "../../store/menu";
import { RootState, AppDispatch } from "../../store";
import { RestaurantServices } from "../../services";
import MenuServices from "../../services/Menu";

const useHomeModel = () => {
  const restaurant = useSelector((state: RootState) => state.restaurant);
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch: AppDispatch = useDispatch();

  const [isOpenBagModal, setIsOpenBagModal] = useState<boolean>(false)

  const { isLoading: isLoadingRestaurant, data: dataRestaurant } = useQuery({
    queryKey: ["restaurant"],
    queryFn: () => RestaurantServices().getRestaurant(),
  });

  const { isLoading: isLoadingMenu, data: dataMenu } = useQuery({
    queryKey: ["menu"],
    queryFn: () => MenuServices().getMenu(),
  });

  const handleOpenBagModal = () => setIsOpenBagModal(true)

  const handleCloseBagModal = () => setIsOpenBagModal(false)

  useEffect(() => {
    if (!isLoadingRestaurant) {
      dispatch(updateRestant(dataRestaurant?.data))
    }
  }, [isLoadingRestaurant])

  useEffect(() => {
    if (!isLoadingMenu) {
      dispatch(updateMenu(dataMenu?.data))
    }
  }, [isLoadingMenu])

  return {
    restaurant,
    menu,
    isOpenBagModal,
    handleOpenBagModal,
    handleCloseBagModal
  };
};

export default useHomeModel;
