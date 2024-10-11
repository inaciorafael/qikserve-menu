import { Item } from "../../services/Menu/Menu.types";

export type BagItem = {
  id: number;
  name: number;
  price: number;
  quantity: number;
  modifierId: number;
  modifiers: Item[];
};

export type InitialStore = {
  state: {
    items: BagItem[];
  };
};
