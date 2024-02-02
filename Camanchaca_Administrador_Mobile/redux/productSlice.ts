import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IData extends IType, ISubtype, IProduct {

    subproducts: ISubproduct[]

}

interface IType {

    id: number,

    type: string,

}

interface ISubtype {

    id: number,

    id_type: number,

    subtype: string,
    
}

interface IProduct {

    id: number,

    id_type: number,

    id_subtype: number,

    product: string,

    img: string | null
    
    price: number | null

}

export interface ISubproduct {

    id: number,

    id_product: number,

    subproduct: string,

    price: number,

    img: string | null

}

export interface IOption {

	label: string,

	value: string,

	father?: string

}

const initialState = {

    data: [] as IData[],

    types: [] as IType[],

	typesOptions: [] as IOption[],

    subtypes: [] as ISubtype[],

	subtypesOptions: [] as IOption[],

    products: [] as IProduct[],

    subproducts: [] as ISubproduct[],

}

export const getData = createAsyncThunk('product/getData', async (): Promise<IData[]> => {

  const response = await fetch("http://127.0.0.1:8000/api/data")

  const data: IData[] = await response.json()

  return data

})

export const getTypes = createAsyncThunk('product/getTypes', async (): Promise<IType[]> => {

    const response = await fetch("http://127.0.0.1:8000/api/types")

    const types: IType[] = await response.json()

    return types

})

export const getSubtypes = createAsyncThunk('product/getSubtypes', async (): Promise<ISubtype[]> => {

    const response = await fetch("http://127.0.0.1:8000/api/subtypes")

    const subtypes: ISubtype[] = await response.json()

    return subtypes

})

export const getProducts = createAsyncThunk('product/getProducts', async (): Promise<IProduct[]> => {

    const response = await fetch("http://127.0.0.1:8000/api/products")

    const products: IProduct[] = await response.json()

    return products
    
})

export const getSubproducts = createAsyncThunk('product/getSubproducts', async (): Promise<ISubproduct[]> => {

    const response = await fetch("http://127.0.0.1:8000/api/subproducts")

    const subproducts: ISubproduct[] = await response.json()

    return subproducts

})

export const productSlice = createSlice({

	name: 'product',

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

		.addCase(getData.pending, (state, action) => {

		})

		.addCase(getData.fulfilled, (state, action) => {

			state.data = action.payload

		})

		.addCase(getData.rejected, (state, action) => {

		})

		//#endregion

		//#region Types

		.addCase(getTypes.pending, (state, action) => {

		})

		.addCase(getTypes.fulfilled, (state, action) => {

			state.types = action.payload

			state.typesOptions = action.payload.map((type) => {

				return {

					label: type.type,

					value: type.id.toString(),

				}

			})

		})

		.addCase(getTypes.rejected, (state, action) => {

		})

		//#endregion

		//#region Subtypes

		.addCase(getSubtypes.pending, (state, action) => {

		})

		.addCase(getSubtypes.fulfilled, (state, action) => {

			state.subtypes = action.payload

			state.subtypesOptions = action.payload.map((type) => {

				return {

					label: type.subtype,

					value: type.id.toString(),

					father: type.id_type.toString()

				}

			})

		})

		.addCase(getSubtypes.rejected, (state, action) => {

		})

		//#endregion

		//#region Products

		.addCase(getProducts.pending, (state, action) => {

		})

		.addCase(getProducts.fulfilled, (state, action) => {

			state.products = action.payload

		})

		.addCase(getProducts.rejected, (state, action) => {

		})

		//#endregion

		//#region Subproducts

		.addCase(getSubproducts.pending, (state, action) => {

		})

		.addCase(getSubproducts.fulfilled, (state, action) => {

			state.subproducts = action.payload

		})

		.addCase(getSubproducts.rejected, (state, action) => {

		})

		//#endregion

  	}

})

export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer