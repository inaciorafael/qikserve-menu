import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./pages/Home";
import { ModalProvider } from "./context";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ModalProvider>
          <Home />
        </ModalProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
