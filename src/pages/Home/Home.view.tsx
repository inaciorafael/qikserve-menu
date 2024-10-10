import { useSelector } from "react-redux";
import {
  Button,
  Cart,
  RestaurantMenu,
  Header,
  SearchInput,
  Modal,
  BagModal,
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
  } = useHomeModel();
  const { selectedMenuItem, closeModal } = useModal();

  return (
    <>
      <main className="flex relative pb-24 gap-4 bg-white md:bg-background flex-col">
        <div>
          <Header />
          {isMobile ? (
            <img
              src={restaurant.webSettings.bannerImage}
              className="object-cover h-32 bg-red-500"
            />
          ) : (
            <img src={restaurant.webSettings.bannerImage} className="w-full" />
          )}
        </div>
        <div className="grid grid-cols-12 bg-white md:bg-background items-center w-full justify-center">
          {!isMobile ? <div className="col-span-2"></div> : null}
          <div className="md:col-span-8 col-span-12 flex flex-col gap-1">
            {JSON.stringify(restaurant)}
            <div className="md:px-0 px-3">
              <SearchInput placeholder="Search menu items" />
            </div>
            <div className="flex flex-row gap-8 md:px-10 md:py-5 bg-foreground">
              <RestaurantMenu />
              {!isMobile ? <Cart /> : null}
            </div>
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
      <Modal isOpen={Boolean(selectedMenuItem)} onClose={closeModal} />
      <BagModal isOpen={isOpenBagModal} onClose={handleCloseBagModal} />
    </>
  );
};

export default Home;
