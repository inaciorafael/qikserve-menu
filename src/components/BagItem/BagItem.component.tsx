import { useDispatch } from 'react-redux'
// TODO: Preço item
// TODO: acompanhamento - modifiers

import { useFormatCurrency } from "../../hooks";
import Button from "../Button";
import Icon from "../Icon";

import { BagItemProps } from "./BagItem.types";
import { AppDispatch } from "../../store";
import { updateItemQtd, removeItem } from '../../store/bag'

const BagItem = (props: BagItemProps) => {
  const dispatch: AppDispatch = useDispatch()
  const { formatCurrency } = useFormatCurrency();

  const handleAddQtd = () => {
    dispatch(updateItemQtd({ id: props.id, itemQtd: props.qtd + 1 }))
  };

  const handleRemoveQtd = () => {
    if (props.qtd > 1) {
      dispatch(updateItemQtd({ id: props.id, itemQtd: props.qtd - 1 }))
      return
    }

    dispatch(removeItem(props.id))
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="text-title truncate">{props.name}</p>
          <p className="text-subtitle truncate">Com 2 carnes(mock)</p>
        </div>
        <p className="font-semibold text-title">
          {formatCurrency(props.price * props.qtd)}
        </p>
      </div>

      <div className="flex flex-row gap-4 pl-3">
        <Button
          className="text-sm"
          onClick={handleRemoveQtd}
          variant="icon"
          icon={<Icon.Minus />}
        />
        <p className="font-semibold text-title">{props.qtd}</p>
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
