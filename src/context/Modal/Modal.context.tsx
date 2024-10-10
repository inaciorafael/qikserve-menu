import { createContext, useState, ReactNode } from "react";

import { ModalContextType, SelectedItem } from "./Modal.types";

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<SelectedItem | null>(null);

  const openModal = (selectedItem: SelectedItem) => {
    setSelectedMenuItem(selectedItem)
  };

  const closeModal = () => {
    setSelectedMenuItem(null)
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, selectedMenuItem }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
