import * as React from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';

import Navigator from './Navigator';

export default function App() {

	return (

		// Redux 
		<Provider store={store}> 

			<Navigator />

		</Provider>

	);

}