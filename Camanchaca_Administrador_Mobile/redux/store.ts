import { configureStore } from '@reduxjs/toolkit'
import { logger } from "redux-logger"
import productSlice from './productSlice'
import saleSlice from './saleSlice'

const store = configureStore({

  reducer: {

    products: productSlice,

    sales: saleSlice

  },

  middleware: (getDefaultMiddleware) =>
  
    getDefaultMiddleware().concat(logger),

})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch