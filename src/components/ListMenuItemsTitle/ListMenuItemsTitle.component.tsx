import Icon from "../Icon";

import { ListMenuItemsTitleProps } from './ListMenuItemsTitle.types'

const ListMenuItemsTitle = (props: ListMenuItemsTitleProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-2xl text-title font-semibold">{props.title}</h1>
      <Icon.ChevronUp className="text-3xl text-primary" />
    </div>
  );
};

export default ListMenuItemsTitle;
