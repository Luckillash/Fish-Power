import Login from "./Login";

import Register from "./Register";

import ForgotPassword from "./ForgotPassword";

import { Dimensions, StyleSheet } from "react-native";

import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const screenWidth = Dimensions.get('screen').width

export default function Access () {

    const translationXForgotPassword = useSharedValue(-screenWidth);

    const translationXLogin = useSharedValue(0);

    const translationXRegister = useSharedValue(screenWidth);
  
    const animatedForgotPassword = useAnimatedStyle(() => {

        return {

            transform: [{ translateX: translationXForgotPassword.value }],

        };

    });
  
    const animatedLogin = useAnimatedStyle(() => {

        return {

            transform: [{ translateX: translationXLogin.value }],

        };

    });
  
    const animatedRegister = useAnimatedStyle(() => {

        return {

            transform: [{ translateX: translationXRegister.value }],

        };

    });
  
    function moveComponents (toRight: boolean) {

        translationXForgotPassword.value = withTiming(

            toRight ?
            
                translationXForgotPassword.value + screenWidth

                :

                translationXForgotPassword.value - screenWidth

            ,

            { duration: 1000 }

        );

        translationXLogin.value = withTiming(

            toRight ?
            
                translationXLogin.value + screenWidth

                :

                translationXLogin.value - screenWidth

            ,

            { duration: 1000 }

        );

        translationXRegister.value = withTiming(

            toRight ?
            
                translationXRegister.value + screenWidth

                :

                translationXRegister.value - screenWidth

            ,

            { duration: 1000 }

        );

    };
    
    return (

        <>

            <ForgotPassword 
            
                style={[styles.absolute, animatedForgotPassword]}

                moveComponents={moveComponents}
            
            />

            <Login 
            
                style={[styles.absolute, animatedLogin]} 

                moveComponents={moveComponents}
            
            />

            <Register 
            
                style={[styles.absolute, animatedRegister]}

                moveComponents={moveComponents}
            
            />
        
        </>

    )

}

const styles = StyleSheet.create({

    absolute: { 
                    
        position: "absolute", 
        
        top:0, 
        
        bottom:0, 
        
        width: "100%",

    },

});