import { useSelector } from "react-redux";

import { useFormatCurrency, useResponsiveQueries } from "../../hooks";
import BagItem from "../BagItem";

import { RootState } from "../../store";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.bag.state);
  const { formatCurrency } = useFormatCurrency();
  const { isMobile } = useResponsiveQueries();

  const getSubTotal = (): number => {
    return items.reduce((acc, item) => acc + item.price * item.qtd, 0);
  };

  const getTotal = (): number => {
    return items.reduce((acc, item) => acc + item.price * item.qtd, 0);
  };

  return (
    <>
      <div className="md:bg-white md:sticky h-full shadow-lg top-10 md:w-1/3">
        {!isMobile ? (
          <div className="bg-white md:bg-foreground p-5">
            <p className="text-2xl font-semibold">Carrinho</p>
          </div>
        ) : null}

        <div className="bg-white gap-5 flex flex-col py-5 md:p-5">
          {items.length > 0 ? (
            <>
              {items.map((item, index) => (
                <>
                  <div className={isMobile ? 'px-5' : ''}>
                    <BagItem {...item} key={item.id} />
                  </div>
                  {isMobile && index !== items.length - 1 ? (
                    <div className="w-full h-[0.1rem] bg-gray-200"></div>
                  ) : null}
                </>
              ))}
            </>
          ) : (
            <p className="text-md">Seu carrinho está vazio</p>
          )}
        </div>

        {items.length > 0 ? (
          <div className="bg-foreground pb-20 md:pb-0 md:px-0 px-5">
            <div className="bg-foreground text-md md:px-5 border-b-[0.2rem] flex flex-row items-center py-5 justify-between">
              <p>Sub Total</p>
              <p className="font-semibold">{formatCurrency(getSubTotal())}</p>
            </div>
            <div className="bg-foreground text-xl md:px-5 flex flex-row items-center justify-between py-5">
              <p>Total:</p>
              <p className="font-semibold">{formatCurrency(getTotal())}</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
