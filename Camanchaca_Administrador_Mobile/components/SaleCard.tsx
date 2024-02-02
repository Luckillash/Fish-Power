import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { ISale } from "../redux/saleSlice";

interface IProps {

    venta: ISale

}

export default function SaleCard ({ venta }: IProps) {

    const { type, subtype, product, subproduct, quantity } = venta

    return (

        <View style={ styles.containerProduct }>

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

                        <Text></Text>

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
  
        backgroundColor: "#f3edf6", 
        
        flexDirection: "row", 
        
        alignItems: "stretch", 

        height: 130, 
    
        borderRadius: 10,
        
        padding: 10,

        gap: 5,
    
    }
  
})