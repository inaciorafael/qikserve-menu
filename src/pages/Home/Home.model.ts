import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { updateRestaurant } from "../../store/restaurant";
import { updateMenu } from "../../store/menu";
import { RootState, AppDispatch } from "../../store";
import { RestaurantServices } from "../../services";
import MenuServices from "../../services/Menu";
import { IForm } from './Home.types'

const useHomeModel = () => {
  const restaurant = useSelector((state: RootState) => state.restaurant);
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch: AppDispatch = useDispatch();

  const { control: formControl, watch } = useForm<IForm>({
    defaultValues: {
      searchTerm: ''
    }
  })

  const watchSearchTerm = watch('searchTerm')

  const [isOpenBagModal, setIsOpenBagModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true)

  const { isLoading: isLoadingRestaurant, data: dataRestaurant } = useQuery({
    queryKey: ["restaurant"],
    queryFn: () => RestaurantServices().getRestaurant().then(response => {
      document.documentElement.style.setProperty('--primary-color', response.data.webSettings.primaryColour);
      document.documentElement.style.setProperty('--nav-background', response.data.webSettings.navBackgroundColour);

      return response
    }),
  });

  const { isLoading: isLoadingMenu, data: dataMenu } = useQuery({
    queryKey: ["menu"],
    queryFn: () => MenuServices().getMenu(),
  });

  const handleOpenBagModal = () => setIsOpenBagModal(true);

  const handleCloseBagModal = () => setIsOpenBagModal(false);

  useEffect(() => {
    if (!isLoadingRestaurant) {
      dispatch(updateRestaurant(dataRestaurant?.data));
    }
  }, [isLoadingRestaurant]);

  useEffect(() => {
    if (!isLoadingMenu) {
      dispatch(updateMenu(dataMenu?.data));
    }
  }, [isLoadingMenu]);

  useEffect(() => {
    if (restaurant.state && restaurant.state.id) {
      setLoading(false)
    }
  }, [restaurant])

  return {
    loading,
    restaurant,
    menu,
    isOpenBagModal,
    handleOpenBagModal,
    handleCloseBagModal,
    isLoadingMenu,
    formControl,
    watchSearchTerm
  };
};

export default useHomeModel;
