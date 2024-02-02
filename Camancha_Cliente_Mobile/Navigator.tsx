import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Access from './src/access/index';

import Home from './src/home/index';

import Payment from './src/payment/Payment';

import Result from './src/payment/Result';

import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './redux/hooks';

import { getSalesById } from './redux/productSlice';

import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme, PaperProvider } from 'react-native-paper';
import { CUSTOM_DARK, CUSTOM_LIGHT } from './helper/Theme';

// Configuración de temas: https://callstack.github.io/react-native-paper/docs/guides/theming
const theme = {
  
    ...DefaultTheme,
  
}

export default function Navigator () {

    const DARK_MODE = useAppSelector((state) => state.login.darkMode)

    // Stack de navegación
    const Stack = createNativeStackNavigator();

    const dispatch = useAppDispatch()

	useEffect(() => {

		dispatch(getSalesById({ id_user: 1 }))

	}, [])

    return (

        <NavigationContainer>

			<PaperProvider theme={DARK_MODE ? CUSTOM_DARK : CUSTOM_LIGHT}>

                <Stack.Navigator
                
                    screenOptions={{

                        headerShown: false,

                        gestureEnabled: false,

                    }}

                >

                    <Stack.Screen name="Login" component={Access} />

                    <Stack.Screen name="Home" component={Home} />

                    <Stack.Screen name="Payment" component={Payment} />

                    <Stack.Screen name="Result" component={Result} />

                </Stack.Navigator>

			</PaperProvider>

        </NavigationContainer>

    )

}