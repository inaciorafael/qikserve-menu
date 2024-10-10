import { Item, Item2 } from "../../services/Menu/Menu.types"

export type BagItem = Item & Item2 & { qtd: number }

export type InitialStore = {
  state: {
    items: BagItem[]
  }
}
