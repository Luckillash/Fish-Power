import { createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit'

interface ICredential {

	name?: string,

	email: string,

	password: string,

}

interface IUser {

	id: number,

	email: string,

	name: string,

	created_at: string,

	updated_at: string

}

interface IToken {

	name: string,

  	abilities: string[],

	expires_at: string,

	tokenable_id: number,

	tokenable_type: string,

	updated_at: string,

	created_at: string,

	id: number

}

const initialState = {

	message: "" as string | string[],

	error: "" as string | string[],

	access: false,

	user: { } as IUser,

	token: { } as IToken,

	darkMode: false as boolean

} 

export const register = createAsyncThunk('login/register', async (credentials: ICredential) => {
	
	const options = {

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'

		},

		method: "POST",

		body: JSON.stringify(credentials)

	}
	
	const response = await fetch("http://127.0.0.1:8000/api/register", options)

	return response

})

export const authenticate = createAsyncThunk('login/authenticate', async (credentials: ICredential) => {

	const options = {

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'

		},

		method: "POST",

		body: JSON.stringify(credentials)

	}

	const response = await fetch("http://127.0.0.1:8000/api/authenticate", options)

	return response

})

export const isAuthenticated = createAsyncThunk('login/isAuthenticated', async () => {

	const options = {

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'

		},

	}

	const response = await fetch("http://127.0.0.1:8000/api/isAuthenticated", options)

	return response

})

export const logout = createAsyncThunk('login/logout', async () => {

	const options = {

		headers: {

			'Accept': 'application/json',

			'Content-Type': 'application/json'

		},

	}

	const response = await fetch("http://127.0.0.1:8000/api/logout", options)

	return response

})

export const loginSlice = createSlice({

	name: 'login',

	initialState,
	
	reducers: {

		changeDarkMode: (state) => {

			state.darkMode = !state.darkMode
	
		},

	},

	extraReducers: builder => {

		builder

		//#region Register

		.addCase(register.pending, (state, action) => {

		})

		.addCase(register.fulfilled, (state, action) => {

			const status = action.payload.ok

			if(status) {

				state.message = "Se te envió un correo electrónico de validación"

			}

			else {

				state.message = "Ocurrió algún problema"

			}
			
		})

		.addCase(register.rejected, (state, action) => {

		})

		//#endregion

		//#region Authenticate

		.addCase(authenticate.pending, (state, action) => {

		})

		.addCase(authenticate.fulfilled, (state, action) => {

			const status = action.payload.ok

			if(status) {

				state.message = "El acceso fue un éxito"

				state.access = true

			}

			else {

				state.message = "Ocurrió algún problema"
				
			}

		})

		.addCase(authenticate.rejected, (state, action) => {

		})

		//#endregion

		//#region Is authenticated?

		.addCase(isAuthenticated.pending, (state, action) => {

		})

		.addCase(isAuthenticated.fulfilled, (state, action) => {

			const status = action.payload.ok

			if(status) {

				state.message = "El acceso fue un éxito"

				state.access = true

			}

			else {

				state.message = "Ocurrió algún problema"
				
			}

		})

		.addCase(isAuthenticated.rejected, (state, action) => {

		})

		//#endregion

		//#region Logout

		.addCase(logout.pending, (state, action) => {

		})

		.addCase(logout.fulfilled, (state, action) => {

			const status = action.payload.ok

			if(status) {

				state.message = "El acceso fue un éxito"

				state.access = false

			}

			else {

				state.message = "Ocurrió algún problema"
				
			}
		})

		.addCase(logout.rejected, (state, action) => {

		})

		//#endregion
	
	}

})

// Action creators are generated for each case reducer function
export const { changeDarkMode } = loginSlice.actions

export default loginSlice.reducer