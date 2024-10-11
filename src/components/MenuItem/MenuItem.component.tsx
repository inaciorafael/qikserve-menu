import { useSelector } from "react-redux";

import { useFormatCurrency } from "../../hooks";
import { MenuItemProps } from "./MenuItem.types";

import { useModal } from "../../hooks";
import { RootState } from "../../store";

const MenuItem = (props: MenuItemProps) => {
  const { formatCurrency } = useFormatCurrency();
  const { openModal } = useModal();
  const { items: bagItems } = useSelector(
    (state: RootState) => state.bag.state,
  );

  const getQuantityFromBag = (): number => {
    const currentItem = bagItems.find((item) => item.id === props.id);

    return currentItem?.quantity || 0;
  };

  return (
    <div
      onClick={() => openModal(props)}
      className="flex cursor-pointer flex-row items-center justify-between md:items-start md:gap-20 gap-5"
    >
      <div>
        <div className="flex flex-row items-center gap-2">
          {getQuantityFromBag() ? (
            <div className="bg-primary font-semibold text-[0.8rem] flex items-center p-1 justify-center h-5 w-5 text-white rounded-md">
              <p>{getQuantityFromBag()}</p>
            </div>
          ) : null}
          <h1 className="font-semibold text-title">{props.name}</h1>
        </div>
        <div>
          <p className="text-subtitle md:line-clamp-1 line-clamp-2">
            {props.description}
          </p>
        </div>
        <p className="text-title font-semibold">
          {formatCurrency(props.price)}
        </p>
      </div>

      {props.images && props.images?.length > 0 ? (
        <img
          className="w-36 md:w-40 h-full rounded-md"
          src={props.images[0].image}
        />
      ) : null}
    </div>
  );
};

export default MenuItem;
