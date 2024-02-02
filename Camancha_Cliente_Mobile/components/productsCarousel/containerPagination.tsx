import { View, StyleSheet } from "react-native";

import Pagination from "./pagination";

import { SharedValue } from "react-native-reanimated";

interface IProps {

    isVertical: boolean, 

    items: unknown[],

    progressValue: SharedValue<number>,

}

const colors = [

    "#a282f5",

    "#a282f5",

    "#a282f5",

    "#a282f5",

    "#a282f5",

    "#a282f5",

//   "#26292E",

//   "#899F9C",

//   "#B3C680",

//   "#5C6265",

//   "#F5D399",

//   "#8998f0",

];

export default function ContainerPagination ({ isVertical, items, progressValue }: IProps) {

    return (

        <View style={ isVertical ? styles.vertical : styles.horizontal }>

            { items.map((item, index) => {

                return (

                    <Pagination

                        // backgroundColor={backgroundColor}
                        
                        animValue={progressValue}
                        
                        index={index}
                        
                        key={index}
                        
                        isRotate={isVertical}
                        
                        length={colors.length} // TODO: Debería ser items.lenght, testear en IOS.

                    />

                );

            })}

        </View>

    )

}

const styles = StyleSheet.create({

    vertical: {

        flexDirection: "column",

        justifyContent: "space-between",

        width: 10,

        alignSelf: "center",

        position: "absolute",

        right: 5,

        top: 40,

    },
    
    
    horizontal: {

        flexDirection: "row",

        justifyContent: "space-between",

        width: 100,

        alignSelf: "center",

    }

})
