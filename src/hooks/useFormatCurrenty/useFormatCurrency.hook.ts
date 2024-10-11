import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { RestaurantSettings } from "../../services/Restaurant/Restaurant.types";

const useFormatCurrency = () => {
  const { locale, ccy } = useSelector(
    (state: RootState) => state.restaurant.state as RestaurantSettings,
  );

  const formatCurrency = (value: number): string => {
    const formattedValue = new Intl.NumberFormat(locale || "pt-BR", {
      style: "currency",
      currency: ccy || "BRL",
    }).format(value);

    return formattedValue.replace(/\s/g, "");
  };

  return {
    formatCurrency,
  };
};

export default useFormatCurrency;
