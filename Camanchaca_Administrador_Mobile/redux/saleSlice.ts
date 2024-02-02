import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ISale {

    product: string,

    subproduct: string,

    type: string,

    subtype: string,

    id: number,

    id_product: number,

    id_subproduct: number,

    id_user: number,

    quantity: number,

    method: "MOBILE" | "WEB" | "LOCAL",

    status: number,

    date: string

}

const initialState = {

    sales: [] as ISale[],

}

export const getSales = createAsyncThunk('sale/getSales', async (): Promise<ISale[]> => {

    const response = await fetch("http://127.0.0.1:8000/api/sales")

    const data: ISale[] = await response.json()

    return data

})

export const saleSlice = createSlice({

	name: 'sale',

	initialState,

	reducers: {

		increment: (state) => {

		},

		decrement: (state) => {

		},

		incrementByAmount: (state, action) => {

		},

	},

	extraReducers: builder => {

		builder

		//#region Data

		.addCase(getSales.pending, (state, action) => {

		})

		.addCase(getSales.fulfilled, (state, action) => {

			state.sales = action.payload

		})

		.addCase(getSales.rejected, (state, action) => {

		})

		//#endregion

  	}

})

export const { increment, decrement, incrementByAmount } = saleSlice.actions

export default saleSlice.reducer