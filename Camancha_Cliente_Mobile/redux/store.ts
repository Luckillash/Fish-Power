import { configureStore  } from "@reduxjs/toolkit";

import loginSlice from "./loginSlice";

import { logger } from "redux-logger"

import cartSlice from "./cartSlice";

import productSlice from "./productSlice";

const store = configureStore({

    reducer: {

        login: loginSlice,

        cart: cartSlice,

        product: productSlice
        
    },

    middleware: (getDefaultMiddleware) =>
  
        getDefaultMiddleware().concat(logger),

})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch