import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './redux/store'
import Navigator from './Navigator';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  
  	...DefaultTheme,

}

export default function App() {

	return (

		<Provider store={store}>

			<PaperProvider theme={theme}>

				<Navigator />

			</PaperProvider>

		</Provider>

	);

}