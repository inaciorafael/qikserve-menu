// TODO: Preço item

import Button from "../Button";
import Icon from "../Icon";

const BagItem = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="text-title truncate">Caipirinha</p>
          <p className="text-subtitle truncate">Com 2 carnes</p>
        </div>
        <p className="font-semibold text-title">R$13,00</p>
      </div>

      <div className="flex flex-row gap-4 pl-3">
        <Button className="text-sm" disabled onClick={() => {}} variant="icon" icon={<Icon.Minus />} />
        <p className="font-semibold text-title">1</p>
        <Button className="text-sm" onClick={() => {}} variant="icon" icon={<Icon.Plus />} />
      </div>
    </div>
  );
};

export default BagItem;
