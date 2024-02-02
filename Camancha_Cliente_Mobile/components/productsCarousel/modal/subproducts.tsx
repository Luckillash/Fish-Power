import { Chip, Text } from "react-native-paper";

import { View, StyleSheet } from "react-native";

import { ISubproduct } from "../../../helper/Products";

interface IProps {

    subproducts: ISubproduct[],

    _subproductId: number | null,

    selectSubproduct: (subproductId: number, subproductPrice: string) => void

}

export default function Subproducts ({ subproducts, _subproductId, selectSubproduct }: IProps) {

    return (

        <>
                        
            <Text style={styles.header} variant="bodyLarge">
                
                Selecciona el peso
                
            </Text> 

            <View style={styles.containerSubproducts}>

                { subproducts.map((subproduct: ISubproduct, index: number) => {

                    const { subproductName, subproductId, subproductPrice } = subproduct

                    return (

                        <Chip 
                        
                            key={index} 
                            
                            onPress={() => selectSubproduct(subproductId, subproductPrice)} 
                            
                            selected={_subproductId === subproductId}
                            
                        >
                            
                            {subproductName}
                            
                        </Chip>
                        
                    )

                })}

            </View>

        </>
    )

}

const styles = StyleSheet.create({

    header: {

        alignSelf: "center"

    },

    containerSubproducts: { 
        
        flexDirection: "row", 
        
        flexWrap: 'wrap', 
        
        gap: 6, 
        
        justifyContent: "center" 
    
    },

})