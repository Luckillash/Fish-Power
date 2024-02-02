import { View } from "react-native";

import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

interface IProps {

    index: number,

    // backgroundColor: string,

    length: number,

    animValue: Animated.SharedValue<number>,

    isRotate?: boolean

}

export default function Pagination ({ animValue, index, length, isRotate }: IProps) {
  
    const width = 10;

    const animStyle = useAnimatedStyle(() => {

        let inputRange = [index - 1, index, index + 1];

        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {

            inputRange = [length - 1, length, length + 1];

            outputRange = [-width, 0, width];

        }

        return {

            transform: [

                {

                    translateX: interpolate(

                        animValue?.value,

                        inputRange,

                        outputRange,

                        Extrapolate.CLAMP,

                    ),
                    
                },

            ],

        };

    }, [animValue, index, length]);

    return (

        <View

            style={{

                backgroundColor: "#e8e4e3",

                width,

                height: width,

                borderRadius: 50,

                overflow: "hidden",

                transform: [

                    {

                        rotateZ: isRotate ? "90deg" : "0deg",

                    },

                ],

            }}

        >

            <Animated.View

                style={
                    
                    [
                        
                        {

                            borderRadius: 50,

                            backgroundColor: "rgb(0, 95, 175)",

                            flex: 1,

                        },

                        animStyle,

                    ]

                }

            />

        </View>

    );

};