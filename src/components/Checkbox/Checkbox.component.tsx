import { useFormatCurrency } from "../../hooks/index.ts";
import { CheckboxProps } from "./Checkbox.types.ts";

const Checkbox = (props: CheckboxProps) => {
  const { formatCurrency } = useFormatCurrency();

  return (
    <button
      onClick={props.onSelect}
      className="w-full flex flex-row items-center justify-between"
    >
      <div className="flex flex-col items-start">
        <p className="text-title font-semibold">{props.name}</p>
        <p className="text-subtitle">{formatCurrency(props.price)}</p>
      </div>

      <div className="inline-flex items-center">
        <label className="relative flex items-center cursor-pointer">
          <input
            name="color"
            type="radio"
            className="h-5 w-5 cursor-pointer appearance-none rounded-full border-[0.2rem] border-gray-500 checked:border-gray-500 transition-all"
          />
          {props.isChecked ? (
            <span className="absolute bg-gray-500 w-3 h-3 rounded-full transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          ) : null}
        </label>
      </div>
    </button>
  );
};

export default Checkbox;
