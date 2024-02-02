import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { getData, getTypes, getSubtypes, getProducts, getSubproducts } from "./redux/productSlice";
import Login from "./Login";
import BottomNav from "./BottomNavigation";
import Register from "./Register";
import { NavigationContainer } from "@react-navigation/native";
import { getSales } from "./redux/saleSlice";

const Stack = createNativeStackNavigator();

export default function Navigator () {

    const dispatch = useAppDispatch()  

    useEffect(() => {
  
        dispatch(getData())
        
        dispatch(getTypes())
    
        dispatch(getSubtypes())
    
        dispatch(getProducts())
    
        dispatch(getSubproducts())

        dispatch(getSales())
  
    }, [])

    return (

        <NavigationContainer>

            <Stack.Navigator
            
            screenOptions={{

                headerShown: false

            }}

            >

                <Stack.Screen 
                
                name="Login" 
                
                component={Login} />

                <Stack.Screen name="Register" component={Register} />

                <Stack.Screen name="Home" component={BottomNav} />

            </Stack.Navigator>

        </NavigationContainer>

    )

}