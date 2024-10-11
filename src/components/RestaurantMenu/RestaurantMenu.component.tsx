import React, { useState } from "react";
import { useSelector } from "react-redux";

import MenuSection from "../MenuSection";
import MenuItem from "../MenuItem";
import ListMenuItemsTitle from "../ListMenuItemsTitle";

import { RootState } from "../../store";
import { RestaurantMenuProps } from "./RestaurantMenu.types";

const RestaurantMenu = (props: RestaurantMenuProps) => {
  const menu = useSelector((state: RootState) => state.menu);

  const [sectionFilter, setSectionFilter] = useState<number>(0);

  const handleSelectMenuFilter = (sectionId: number) => {
    if (sectionId === sectionFilter) {
      setSectionFilter(0);
      return;
    }

    setSectionFilter(sectionId);
  };

  const filteredMenuItems = () => {
    if (sectionFilter === 0) {
      return (
        menu.state?.sections
          .map((section) => ({
            ...section,
            items: section.items.filter((item) =>
              item.name.toLowerCase().includes(props.searchTerm.toLowerCase()),
            ),
          }))
          .filter((section) => section.items.length > 0) || []
      );
    }

    return (
      menu.state?.sections
        .filter((section) => section.id === sectionFilter)
        .map((section) => ({
          ...section,
          items: section.items.filter((item) =>
            item.name.toLowerCase().includes(props.searchTerm.toLowerCase()),
          ),
        }))
        .filter((section) => section.items.length > 0) || []
    );
  };

  return (
    <div className="bg-white w-full flex flex-col gap-10 p-5 md:w-2/3 shadow-lg">
      <div className="flex flex-row items-center md:justify-start justify-between gap-5">
        {menu.state?.sections.map((section) => (
          <MenuSection
            {...section}
            onClick={() => handleSelectMenuFilter(section.id)}
            isActive={sectionFilter === section.id}
            key={section.id}
          />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {filteredMenuItems().map((section) => (
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
