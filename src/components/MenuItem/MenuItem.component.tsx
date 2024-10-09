// TODO: Formatar currency
// TODO: Quantidade de items adicionados ao carrinho - Tratamento para mais de 1 digito 9+

const MenuItem = () => {
  return (
    <div className="flex w-full flex-row items-start">
      <div className="w-2/4 md:w-2/3">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-primary w-5 h-5 flex items-center justify-center rounded p-1">
            <p className="text-sm text-white">1</p>
          </div>
          <h1 className="text-md text-title font-semibold">[[name]]</h1>
        </div>
        <div>
          <p className="truncate line-clamp-2">
            180g angus beef burger, plus ribs, gruyere cheese akj asd dasd
            sdasssd
          </p>
        </div>
        <p className="font-semibold text-subtitle">R$33,00</p>
      </div>

      <div className="w-1/4 md:w-1/3 flex items-center justify-end">
        <img
          className="md:w-40 rounded-xl"
          src="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png"
        />
      </div>
    </div>
  );
};

export default MenuItem;
