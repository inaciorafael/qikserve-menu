import { useDispatch } from "react-redux";

import { useFormatCurrency, useResponsiveQueries } from "../../hooks";
import Button from "../Button";
import Icon from "../Icon";

import { BagItemProps } from "./BagItem.types";
import { AppDispatch } from "../../store";
import { updateItem, removeItem } from "../../store/bag";

const BagItem = (props: BagItemProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { formatCurrency } = useFormatCurrency();
  const { isMobile } = useResponsiveQueries()

  const handleAddQtd = () => {
    dispatch(updateItem({ id: props.id, itemQtd: props.quantity + 1 }));
  };

  const handleRemoveQtd = () => {
    if (props.quantity > 1) {
      dispatch(updateItem({ id: props.id, itemQtd: props.quantity - 1 }));
      return;
    }

    dispatch(removeItem(props.id));
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="text-title truncate">{props.name}</p>
          {props.modifiers.length > 0 ? props.modifiers.map(modifier => (
            <p key={modifier.id} className="text-subtitle truncate">{modifier.name}{isMobile ? `(+${formatCurrency(modifier.price)})` : ''}</p>
          )) : null}
        </div>
        <p className="font-semibold text-title">
          {formatCurrency(props.modifiers.length > 0 ? props.modifiers.reduce((acc, item) => acc + item.price * props.quantity, 0) : props.price * props.quantity)}
        </p>
      </div>

      <div className="flex flex-row gap-4 pl-3">
        <Button
          className="text-sm"
          onClick={handleRemoveQtd}
          variant="icon"
          icon={<Icon.Minus />}
        />
        <p className="font-semibold text-title">{props.quantity}</p>
        <Button
          className="text-sm"
          onClick={handleAddQtd}
          variant="icon"
          icon={<Icon.Plus />}
        />
      </div>
    </div>
  );
};

export default BagItem;
