import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon";
import Button from "../Button";
import Checkbox from "../Checkbox";

import { useModal, useFormatCurrency } from "../../hooks";
import { addItem, updateItemQtd } from "../../store/bag/bag.slice";
import { AppDispatch, RootState } from "../../store";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  const { items: bagItems } = useSelector((state: RootState) => state.bag.state)
  const dispatch: AppDispatch = useDispatch();

  const { selectedMenuItem, closeModal } = useModal();
  const { formatCurrency } = useFormatCurrency();

  const [checkedModifier, setCheckedModifier] = useState<number>(0);
  const [itemQtd, setItemQtd] = useState<number>(1);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleAddQtd = () => setItemQtd((prevState) => prevState + 1);

  const handleRemoveQtd = () => {
    if (itemQtd > 1) {
      setItemQtd((prevState) => prevState - 1);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const getItemPrice = () => {
    if (selectedMenuItem?.modifiers && selectedMenuItem.modifiers.length > 0) {
      return formatCurrency(
        selectedMenuItem.modifiers[0].items.filter(
          (modifier) => modifier.id === checkedModifier,
        )[0]?.price * itemQtd || 0,
      );
    }

    if (selectedMenuItem?.price) {
      return formatCurrency(selectedMenuItem.price * itemQtd);
    }

    return formatCurrency(0);
  };

  const handleAddItemToBag = () => {
    if (bagItems.some(item => item.id === selectedMenuItem?.id)) {
      dispatch(updateItemQtd({ id: selectedMenuItem?.id, itemQtd }))
      closeModal();
      return
    }

    dispatch(addItem({ ...selectedMenuItem, qtd: itemQtd }));
    closeModal();
  }

  useEffect(() => {
    if (Boolean(selectedMenuItem)) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Boolean(selectedMenuItem)]);

  return (
    <div className="fixed transition-all inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white transition-all relative shadow-lg md:h-[85%] md:max-w-[30%] w-full"
      >
        <div className="overflow-y-auto h-full pb-28 invisible-scrollbar">
          <div className="relative">
            <img
              className="object-contain"
              src={
                selectedMenuItem?.images && selectedMenuItem?.images[0].image
              }
            />
            <button
              onClick={props.onClose}
              className="bg-white absolute rounded-full top-5 right-5"
            >
              <Icon.Close className="text-3xl" />
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold text-title mb-1">
              {selectedMenuItem?.name}
            </h2>
            <p className="text-subtitle">{selectedMenuItem?.description}</p>
          </div>

          {selectedMenuItem?.modifiers &&
          selectedMenuItem?.modifiers?.length > 0 ? (
            <>
              <div className="bg-foreground py-3 px-6">
                <h3 className="font-semibold text-subtitle text-md">
                  Choose your size
                </h3>
                <p>Select {selectedMenuItem.modifiers[0].maxChoices} option</p>
              </div>

              <div className="flex bg-white flex-col gap-5 p-6">
                {selectedMenuItem.modifiers[0].items.map((modifier) => (
                  <Checkbox
                    onSelect={() => setCheckedModifier(modifier.id)}
                    isChecked={checkedModifier === modifier.id}
                    {...modifier}
                    key={modifier.id}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 absolute backdrop-blur-sm p-5 w-full bottom-0 items-center justify-center">
          <div className="flex flex-row gap-8 items-center">
            <Button
              onClick={handleRemoveQtd}
              disabled={itemQtd === 1}
              variant="icon"
              icon={<Icon.Minus />}
            />
            <p className="text-2xl font-semibold">{itemQtd}</p>
            <Button onClick={handleAddQtd} variant="icon" icon={<Icon.Plus />} />
          </div>
          <Button
            onClick={handleAddItemToBag}
            title={["Add to Order", getItemPrice()]}
            disabled={!Boolean(checkedModifier)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
