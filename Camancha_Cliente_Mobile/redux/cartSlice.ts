import { createSlice } from '@reduxjs/toolkit'

export interface ICartProduct {

    productId: number,

    subproductId: number | undefined,

    quantity: number,

    price: number,

}

interface ICartState {

    products: ICartProduct[],

    total: number

}

const initialState: ICartState = {

    products: [],

    total: 0

} 

export const cartSlice = createSlice({

    name: 'cart',

    initialState,
    
    reducers: {

        addProduct: (state, action) => {

            const { product, subproduct, productQuantity, productPrice } = action.payload

            const products = state.products

            const productIndex = products.findIndex(({ productId, subproductId }) => product === productId && subproduct === subproductId )

            if (productIndex === -1) {

                const obj = {
        
                    productId: product,
        
                    subproductId: subproduct,
        
                    quantity: productQuantity,

                    price: productPrice
        
                }

                state.products.push(obj)

            }

            else {

                state.products[productIndex].quantity += productQuantity

            }

            state.total += productPrice * productQuantity

        },

        deleteProduct: (state, action) => {

            const { _productId, _subproductId } = action.payload

            const products = state.products

            const productIndex = products.findIndex(({ productId, subproductId }) => _productId === productId && _subproductId === subproductId )
            
            products.splice(productIndex, 1)

        },

        incrementQuantity: (state, action) => {

            const { _productId, _subproductId } = action.payload

            const products = state.products

            const productIndex = products.findIndex(({ productId, subproductId }) => _productId === productId && _subproductId === subproductId )
            
            state.total += products[productIndex].price

            products[productIndex].quantity++

        },

        decrementQuantity: (state, action) => {

            const { _productId, _subproductId } = action.payload

            const products = state.products

            const productIndex = products.findIndex(({ productId, subproductId }) => _productId === productId && _subproductId === subproductId )

            const productQuantity = products[productIndex].quantity

            state.total -= products[productIndex].price

            if (productQuantity === 1)  {

                cartSlice.caseReducers.deleteProduct(state, action)

            }

            else {

                products[productIndex].quantity--

            }

        }

    },

})

// Action creators are generated for each case reducer function
export const { addProduct, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer