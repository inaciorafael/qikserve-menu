import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";
import {
  Button,
  Cart,
  RestaurantMenu,
  Header,
  SearchInput,
  Modal,
  BagModal,
  Loading,
} from "../../components";
import { useResponsiveQueries, useModal } from "../../hooks";
import { RootState } from "../../store";

import useHomeModel from "./Home.model";

const Home = () => {
  const { items: bagItems } = useSelector(
    (state: RootState) => state.bag.state,
  );
  const { isMobile } = useResponsiveQueries();
  const {
    restaurant,
    isOpenBagModal,
    handleCloseBagModal,
    handleOpenBagModal,
    loading,
    isLoadingMenu,
    formControl,
    watchSearchTerm,
    restaurantError,
    menuError,
  } = useHomeModel();
  const { selectedMenuItem, closeModal } = useModal();

  if (loading && isLoadingMenu) {
    return (
      <div className="w-[100wh] h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {restaurantError ? (
        <div className="flex flex-col p-5 items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <h2 className="text-md font-semibold text-gray-600">
              Não foi possível obter os dados do restaurante
            </h2>
          </div>
        </div>
      ) : (
        <main className="flex relative pb-24 gap-4 bg-white md:bg-background flex-col">
          <div>
            <Header />
            {isMobile ? (
              <img
                src={
                  restaurant.state && restaurant.state.webSettings.bannerImage
                    ? restaurant.state.webSettings.bannerImage
                    : ""
                }
                className="object-cover h-32 bg-red-500"
              />
            ) : (
              <img
                src={
                  restaurant.state && restaurant.state.webSettings.bannerImage
                    ? restaurant.state.webSettings.bannerImage
                    : ""
                }
                className="w-full"
              />
            )}
          </div>
          <div className="grid grid-cols-12 bg-white md:bg-background items-center w-full justify-center">
            {!isMobile ? <div className="col-span-2"></div> : null}
            <div className="md:col-span-8 col-span-12 flex flex-col gap-1">
              <div className="md:px-0 px-3">
                <Controller
                  control={formControl}
                  name="searchTerm"
                  render={({ field: { value, onChange } }) => (
                    <SearchInput
                      onChange={onChange}
                      value={value}
                      placeholder="Search menu items"
                    />
                  )}
                />
              </div>
              {menuError ? (
                <div className="flex flex-col p-5 items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-md font-semibold text-gray-600">
                      Não foi possível obter os dados do menu
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row gap-8 md:px-10 md:py-5 bg-foreground">
                  <RestaurantMenu searchTerm={watchSearchTerm} />
                  {!isMobile ? <Cart /> : null}
                </div>
              )}
            </div>
            {!isMobile ? <div className="col-span-2"></div> : null}
          </div>

          {bagItems.length > 0 && isMobile ? (
            <div className="flex flex-col gap-3 fixed backdrop-blur-sm p-5 w-full bottom-0 items-center justify-center">
              <Button
                onClick={handleOpenBagModal}
                title={[
                  "Your basket",
                  bagItems.length === 1
                    ? `${bagItems.length} item`
                    : `${bagItems.length} items`,
                ]}
              />
            </div>
          ) : null}
        </main>
      )}
      <Modal isOpen={Boolean(selectedMenuItem)} onClose={closeModal} />
      <BagModal isOpen={isOpenBagModal} onClose={handleCloseBagModal} />
    </>
  );
};

export default Home;
