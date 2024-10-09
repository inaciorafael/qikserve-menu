import {
  Header,
  MenuItem,
  MenuSection,
  SearchInput,
  Modal,
} from "./components";

const App = () => {
  return (
    <>
      <main className="flex gap-4 flex-col">
        <Header />
        <div className="grid grid-cols-12 items-center w-full justify-center">
          <div className="col-span-2"></div>
          <div className="col-span-8 flex flex-col gap-1">
            <SearchInput placeholder="Search menu items" />
            <div className="flex flex-row gap-8 px-10 py-5 bg-foreground">
              <div className="bg-white flex flex-col gap-10 p-5 w-2/3 shadow-lg">
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
              <div className="bg-white sticky shadow-lg top-0 w-1/3">
                <div className="bg-foreground p-5">
                  <p className="text-2xl font-semibold">Carrinho</p>
                </div>
                <div className="bg-white p-5">
                  <p className="text-md">Seu carrinho está vazio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </main>
      <Modal isOpen={true} onClose={() => {}} />
    </>
  );
};

export default App;
