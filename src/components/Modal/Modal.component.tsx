import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon";
import Button from "../Button";
import Checkbox from "../Checkbox";

import { useModal, useFormatCurrency } from "../../hooks";
import { addItem, updateItem } from "../../store/bag/bag.slice";
import { AppDispatch, RootState } from "../../store";
import { BagItem } from "../../store/bag/bag.types";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  const { items: bagItems } = useSelector(
    (state: RootState) => state.bag.state,
  );
  const dispatch: AppDispatch = useDispatch();

  const { selectedMenuItem, closeModal } = useModal();
  const { formatCurrency } = useFormatCurrency();

  const [itemQtd, setItemQtd] = useState<number>(1);
  const [modifiers, setModifiers] = useState<BagItem[]>([]);

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
    if (
      selectedMenuItem?.modifiers &&
      selectedMenuItem.modifiers.length > 0 &&
      modifiers.length > 0
    ) {
      return formatCurrency(
        modifiers.reduce((acc, item) => acc + item.price * itemQtd, 0),
      );
    }

    if (selectedMenuItem?.price) {
      return formatCurrency(selectedMenuItem.price * itemQtd);
    }

    return formatCurrency(0);
  };

  const handleAddItemToBag = () => {
    dispatch(
      addItem({
        id: selectedMenuItem?.id,
        name: selectedMenuItem?.name,
        price: selectedMenuItem?.price,
        quantity: itemQtd,
        modifiers: modifiers,
      }),
    );
    closeModal();
  };

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

  const disabledAddItemBagConditions = (): boolean => {
    if (selectedMenuItem?.modifiers && modifiers.length === 0) {
      return true;
    }

    return false;
  };

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
              {selectedMenuItem.modifiers.map((modifier) => (
                <>
                  <div className="bg-foreground py-3 px-6">
                    <h3 className="font-semibold text-subtitle text-md">
                      {modifier.name}
                    </h3>
                    <p>Select {modifier.maxChoices} option</p>
                  </div>

                  <div className="flex bg-white flex-col gap-5 p-6">
                    {modifier.items.map((item) => (
                      <Checkbox
                        onSelect={() => {
                          if (
                            modifiers.some(
                              (item) => item.modifierId === modifier.id,
                            )
                          ) {
                            setModifiers((prevState) =>
                              prevState.filter(
                                (item) => item.modifierId !== modifier.id,
                              ),
                            );
                          }

                          // @ts-ignore
                          setModifiers((prevState) => [
                            ...prevState,
                            { modifierId: modifier.id, ...item },
                          ]);
                        }}
                        isChecked={Boolean(
                          modifiers.some((a) => a.id === item.id),
                        )}
                        {...item}
                        key={item.id}
                      />
                    ))}
                  </div>
                </>
              ))}
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
            <Button
              onClick={handleAddQtd}
              variant="icon"
              icon={<Icon.Plus />}
            />
          </div>
          <Button
            onClick={handleAddItemToBag}
            title={["Add to Order", getItemPrice()]}
            disabled={disabledAddItemBagConditions()}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
