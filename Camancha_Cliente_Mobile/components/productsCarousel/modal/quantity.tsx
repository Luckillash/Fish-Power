import { Dispatch, SetStateAction } from "react";
import { View, StyleSheet } from "react-native";

import { FAB, IconButton, Text } from "react-native-paper";

interface IProps {

    _quantity: number,

    setQuantity: Dispatch<SetStateAction<number>>

}

export default function Quantity ({ _quantity, setQuantity }: IProps) {

    return (

        <>
                        
            <Text style={styles.header} variant="bodyLarge">
                
                Selecciona la cantidad
                
            </Text>
        
            <View style={styles.containerQuantity}>

                <IconButton 
                
                    onPress={() => _quantity !== 1 && setQuantity(_quantity - 1)} 
                    
                    icon="minus" 

                />

                <Text>{ _quantity }</Text>

                <IconButton 
                
                    onPress={() => setQuantity(_quantity + 1)}
                    
                    icon="plus" 
                    
                />

            </View>

        </>

    )

}

const styles = StyleSheet.create({

    header: {

        alignSelf: "center"

    },

    containerQuantity: { 
        
        flexDirection: "row", 
        
        alignItems: "center", 
        
        justifyContent: "space-evenly"
    
    },

})