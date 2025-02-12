import { Item, Item2 } from "../../services/Menu/Menu.types";

export type SelectedItem = Item & Item2;

export type ModalContextType = {
  openModal: (selectedItem: SelectedItem) => void;
  closeModal: () => void;
  selectedMenuItem: SelectedItem | null;
};
