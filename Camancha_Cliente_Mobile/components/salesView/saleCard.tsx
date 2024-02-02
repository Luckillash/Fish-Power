import { View, StyleSheet } from "react-native";

import { ISale } from "../../redux/productSlice";

import { useTheme, Text } from "react-native-paper";

interface IProps {

    sale: ISale

}

export default function SaleCard ({ sale }: IProps) {

    const theme = useTheme()

    const { type, subtype, product, subproduct, quantity } = sale

    return (

        <View style={[styles.containerProduct, { backgroundColor: theme.colors.secondaryContainer }]}>

            <View style={{ width: 100, height: 100, borderWidth: 0.5, alignSelf: "center"}} >

            {/* { imageSource && <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={imageSource}/> } */}

            </View>

            <View style={{ flex: 1, height: 100, alignSelf: "center", justifyContent: "space-evenly" }}>

                <View style={{ flexDirection: "row", flexWrap: "wrap", height: 70, alignItems: "center" }}>

                    <Text style={{ width: "50%" }}>{type}</Text>

                    <Text style={{ width: "50%" }}>{subtype}</Text>

                    <Text style={{ width: "50%" }}>{product}</Text>

                    <Text style={{ width: "50%" }}>{subproduct}</Text>

                    <Text style={{ width: "50%" }}>{quantity}</Text>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>

                    <View style={{ width: "50%" }}>

                        {/* <Text></Text> */}

                    </View>

                    {/* <Button compact={true} icon="playlist-edit" 
                    
                    onPress={() => setModalOpen(true)}>
                    
                        Editar
                    
                    </Button> */}

                </View>

            </View>

        </View>

    )
    
}

const styles = StyleSheet.create({
  
    containerProducts: { 
  
        gap: 10

    },
  
    containerProduct: {
  
        flexDirection: "row", 
        
        alignItems: "stretch", 

        height: 130, 
    
        borderRadius: 10,
        
        padding: 10,

        gap: 5,
    
    }
  
})