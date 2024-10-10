import MenuSection from "../MenuSection";
import MenuItem from "../MenuItem";
import ListMenuItemsTitle from "../ListMenuItemsTitle";
import { useSelector } from "react-redux";

import { RootState } from "../../store";
import React from "react";
import { Item, Item2 } from "../../services/Menu/Menu.types";

// TODO: logica section ativa

const RestaurantMenu = () => {
  const menu = useSelector((state: RootState) => state.menu);

  return (
    <div className="bg-white flex flex-col gap-10 p-5 w-3/3 md:w-2/3 shadow-lg">
      <div className="flex flex-row items-center md:justify-start justify-between gap-5">
        {menu.state?.sections.map((section, index) => (
          <MenuSection {...section} isActive={index === 0} key={section.id} />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {menu.state?.sections.map((section) => (
          <React.Fragment key={section.id}>
            <ListMenuItemsTitle title={section.name} />
            {section.items.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
