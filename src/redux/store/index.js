import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import localStorage from "redux-persist/lib/storage";
  import { persistReducer, persistStore } from "redux-persist";
  import { encryptTransform } from "redux-persist-transform-encrypt";
import getMe from "../reducers/getMeReducer";
import registerUser from "../reducers/registerUser";
  const secretKey=process.env.REDUX_SECRET_KEY
const persistConfig = {
    key: "root",
    storage: localStorage,
    transforms: [
      encryptTransform({
        secretKey: "secretKey",
      }),
    ],
  };
  const bigReducer = combineReducers({
    getMe:getMe,
    registerUser:registerUser,

  })
const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);