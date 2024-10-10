import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon";
import Button from "../Button";

import { clearBag } from "../../store/bag/bag.slice";
import { AppDispatch, RootState } from "../../store";

import { BagModalProps } from "./BagModal.types";
import Cart from "../Cart";
import { useEffect } from "react";

const BagModal = (props: BagModalProps) => {
  if (!props.isOpen) return null;

  const dispatch: AppDispatch = useDispatch();
  const { items: bagItems } = useSelector((state: RootState) => state.bag.state)

  const handleClearBag = () => {
    dispatch(clearBag());
    props.onClose();
  };

  useEffect(() => {
    if (bagItems.length === 0) {
      props.onClose()
    }
  }, [bagItems])

  return (
    <div className="fixed transition-all inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-foreground h-full overflow-y-auto transition-all relative shadow-lg md:h-[85%] md:max-w-[30%] w-full">
        <div className="flex sticky top-0 bg-white flex-row border-b-[0.2rem] items-center justify-between p-3">
          <Icon.Close className="text-4xl text-transparent" />
          <h1 className="text-title text-xl">Basket</h1>
          <button onClick={props.onClose}>
            <Icon.Close className="text-4xl text-title" />
          </button>
        </div>
        <Cart />
        <div className="flex fixed flex-col gap-3 backdrop-blur-sm p-5 w-full bottom-0 items-center justify-center">
          <Button onClick={handleClearBag} title={["Checkout now"]} />
        </div>
      </div>
    </div>
  );
};

export default BagModal;
