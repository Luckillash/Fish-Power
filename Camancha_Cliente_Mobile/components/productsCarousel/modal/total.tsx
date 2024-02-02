import { View, StyleSheet } from "react-native";

import { Text } from "react-native-paper";

interface IProps {

    _price: number,

    _quantity: number

}

export default function Total ({ _price, _quantity }: IProps) {

    return (

        <View style={styles.containerTotal}>

            <Text>Total: </Text> 

            <Text variant="titleLarge">
                
                ${ ( _price * _quantity ).toLocaleString() }
                
            </Text> 

        </View>

    )

}

const styles = StyleSheet.create({

    containerTotal: { 
        
        alignSelf: "center", 
        
        flexDirection: "row", 
        
        alignItems: "center" 
    
    },

})