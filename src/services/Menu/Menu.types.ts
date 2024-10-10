export interface RestaurantMenu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}

export interface Section {
  id: number;
  name: string;
  description?: any;
  position: number;
  visible?: number;
  images: Image[];
  items: Item2[];
}

export interface Item2 {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  images?: Image[];
  available: boolean;
  modifiers?: Modifier[];
}

export interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;
}

export interface Image {
  id: number;
  image: string;
}
