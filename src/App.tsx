import {
  BagItem,
  Header,
  MenuItem,
  MenuSection,
  SearchInput,
  // Modal,
} from "./components";
import { useResponsiveQueries } from "./hooks";

const App = () => {
  const { isMobile } = useResponsiveQueries();

  return (
    <>
      <main className="flex gap-4 bg-white md:bg-background flex-col">
        <Header />
        <div className="grid grid-cols-12 bg-white md:bg-background items-center w-full justify-center">
          {!isMobile ? <div className="col-span-2"></div> : null}
          <div className="md:col-span-8 col-span-12 flex flex-col gap-1">
            <div className="md:px-0 px-3">
              <SearchInput placeholder="Search menu items" />
            </div>
            <div className="flex flex-row w-full gap-8 md:px-10 md:py-5 bg-foreground">
              <div className="bg-white flex flex-col gap-10 p-5 w-3/3 md:w-2/3 shadow-lg">
                <div className="flex flex-row items-center justify-start gap-5">
                  <MenuSection />
                  <MenuSection />
                  <MenuSection />
                </div>

                <div className="flex flex-col gap-8">
                  <h1 className="text-2xl font-semibold">Burgers</h1>
                  <MenuItem />
                  <MenuItem />
                </div>
              </div>
              {!isMobile ? (
                <div className="bg-white sticky h-full shadow-lg top-0 w-1/3">
                  <div className="bg-foreground p-5">
                    <p className="text-2xl font-semibold">Carrinho</p>
                  </div>
                  <div className="bg-white gap-5 flex flex-col p-5">
                    <p className="text-md">Seu carrinho está vazio</p>
                    <BagItem />
                    <BagItem />
                  </div>
                  <div className="bg-foreground md:px-0 px-5">
                    <div className="bg-foreground text-md md:px-5 border-b-[0.2rem] flex flex-row items-center py-5 justify-between">
                      <p>Sub Total</p>
                      <p className="font-semibold">$22.50</p>
                    </div>
                    <div className="bg-foreground text-xl md:px-5 flex flex-row items-center justify-between py-5">
                      <p>Total:</p>
                      <p className="font-semibold">R$48,00</p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {!isMobile ? <div className="col-span-2"></div> : null}
        </div>
      </main>
    </>
  );
};

export default App;
