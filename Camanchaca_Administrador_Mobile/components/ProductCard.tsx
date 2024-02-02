import { useState, useEffect } from "react";
import * as FileSystem from 'expo-file-system';
import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import ProductsModal from "./ProductsModal";
import { IData } from "../redux/productSlice";

interface IProps {

    producto: IData

}

export default function ProductCard ({ producto }: IProps) {

    const { type, id_type, subtype, id_subtype, product, subproducts, img, price } = producto

    const [imageSource, setImageSource] = useState<any>(null);

	const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {

        const getImage = async () => {

            const imagePath = `${FileSystem.documentDirectory} + ${img?.slice(2)}`;
      
            try {

                const base64Image = await FileSystem.readAsStringAsync(imagePath, {

                    encoding: FileSystem.EncodingType.Base64,

                });
        
                setImageSource({ uri: `data:image/jpeg;base64,${base64Image}` });

            } catch (error) {

                console.error('Error al leer la imagen:', error);

            }

        };
      
        getImage();

    }, []);

    return (

        <View style={ styles.containerProduct }>

            <ProductsModal 
            
                modalOpen={modalOpen} 
                
                setModalOpen={setModalOpen} 
                
                product={product}

                type={type}

                subtype={subtype}

                price={price}

                subproducts={subproducts} 
                
            />

            <View style={{ width: 100, height: 100, borderWidth: 0.5, alignSelf: "center"}} >

                { imageSource && <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={imageSource}/> }

            </View>

            <View style={{ flex: 1, height: 100, alignSelf: "center", justifyContent: "space-evenly" }}>

                <View style={{ flexDirection: "row", flexWrap: "wrap", height: 70, alignItems: "center" }}>

                    <Text style={{ width: "50%" }}>{type}</Text>

                    <Text style={{ width: "50%" }}>{subtype}</Text>

                    <Text style={{ width: "50%" }}>{product}</Text>

                    <Text style={{ width: "50%" }}>{price ? price : "N/A"}</Text>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>

                    <View style={{ width: "50%" }}>

                        <Text></Text>

                    </View>

                    <Button compact={true} icon="playlist-edit" onPress={() => setModalOpen(true)}>
                    
                        Editar
                    
                    </Button>

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