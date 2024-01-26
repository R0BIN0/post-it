import { Provider } from "react-redux";
import store from "./redux/store.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App.tsx";
export const queryClient = new QueryClient();
import { createRoot } from "react-dom/client";
import Dialogs from "./components/Dialogs/Dialogs.tsx";

const container = document.getElementById("root") || document.createElement("div");
const root = createRoot(container!);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Dialogs />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  </QueryClientProvider>
);
