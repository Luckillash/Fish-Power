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

}

const initialState = {

    sales: [] as ISale[],

} 

export const getSalesById = createAsyncThunk('sale/salesById', async (idUser: { id_user: number }): Promise<ISale[]> => {

    const options = {

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'

		},

		method: "POST",

		body: JSON.stringify(idUser)

	}

    const response = await fetch("http://127.0.0.1:8000/api/salesById", options)

    const data: ISale[] = await response.json()

    return data

})

export const productSlice = createSlice({

	name: 'product',

	initialState,
	
	reducers: {


	},

	extraReducers: builder => {

		builder

		//#region Data

		.addCase(getSalesById.pending, (state, action) => {

		})

		.addCase(getSalesById.fulfilled, (state, action) => {

            state.sales = action.payload

		})

		.addCase(getSalesById.rejected, (state, action) => {

		})

		//#endregion

	}

})

// Action creators are generated for each case reducer function
export const {  } = productSlice.actions

export default productSlice.reducer