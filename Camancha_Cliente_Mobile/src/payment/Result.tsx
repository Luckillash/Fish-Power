import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Dimensions, View, StyleSheet } from "react-native"
import { ActivityIndicator, Icon, Text } from "react-native-paper"
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

export default function Result () {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const translationX = useSharedValue(Dimensions.get('screen').width);

    const animatedStyles = useAnimatedStyle(() => {

        return {

            transform: [{ translateX: translationX.value }],

        };

    });

    const isAprobbed = Math.random() < 0.5

    useEffect(() => {

        setTimeout(() => {

            translationX.value = withTiming(0, { duration: 1000 })

            setTimeout(() => {

                navigation.navigate("Home")

            }, 1500)

        }, 2000)

    }, [])

    return (

        <View style={styles.container}>

            <ActivityIndicator size={"large"} animating={true} />

            <Animated.View style={[styles.containerResult, animatedStyles]}>

                <View style={[styles.result, isAprobbed ? styles.aprobbed : styles.rejected]}>

                    <Icon 
                    
                        source={isAprobbed ? "check-circle-outline" : "close-circle-outline"} 
                        
                        size={100} 
                        
                        color="white"
                        
                    />

                    <Text 
                    
                        style={styles.text} 
                        
                        variant="titleLarge"
                        
                    >
                        
                        { isAprobbed ? "Pago exitoso! 😀" : "Pago rechazado 😥"}
                        
                    </Text>

                </View>

            </Animated.View>

        </View>


        
    )

}   

const styles = StyleSheet.create({

    container: { 
        
        flex: 1, 
        
        alignItems: "center", 
        
        justifyContent: "center"
    
    },

    containerResult: { 
                    
        position: 
        
        "absolute", 
        
        top:0, 
        
        bottom:0, 
        
        width: "100%",

        transform: [{ translateX: Dimensions.get('screen').width }]

    },

    result: { 
        
        flex: 1, 
        
        alignItems: "center", 
        
        justifyContent: "center", 
        
        gap: 20 
    
    },

    aprobbed: {

        backgroundColor: "#1cc487"

    },

    rejected: {

        backgroundColor: "#e93445"

    },

    text: {

        color: "white" 

    }

});