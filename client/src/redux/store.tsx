import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./reducers/dialogReducer";
import bannerReducer from "./reducers/bannerReducer";

const rootReducer = {
  dialog: dialogReducer,
  banner: bannerReducer,
};

export const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

const store = initStore();

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export type IStore = ReturnType<typeof initStore>;

export default store;
