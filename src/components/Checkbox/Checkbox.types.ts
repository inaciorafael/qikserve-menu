import { Item } from "../../services/Menu/Menu.types";

export type CheckboxProps = Item & {
  onSelect: () => void
  isChecked: boolean
}
