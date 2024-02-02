import { useState } from "react"

import { IProduct } from "../../helper/Products"

import { View, Image } from "react-native"

import { Button, Chip, Text, useTheme } from "react-native-paper"

import ProductModal from "./modal"

interface IProps {

    item: IProduct
    
}

export default function Card ({ item }: IProps) {

    const theme = useTheme();

    const [isVisible, setIsVisible] = useState(false)

    const { productId, productName, productSubtype, productPrice, productImg, subproducts } = item

    return (

        <View

            style={{

                backgroundColor: theme.colors.secondaryContainer,

                flex: 1,

                borderRadius: 10,

                flexDirection: "row"


            }}

        >

            <ProductModal 

                key={new Date().getTime()}
            
                isVisible={isVisible} 
                
                setIsVisible={setIsVisible} 
                
                subproducts={subproducts} 
                
                fatherProductId={productId} 
                
                fatherProductPrice={productPrice} 
                
            />

            <View style={{ flex: 1 }}>

                <Image 

                    style={{

                        flex: 1,
                
                        width: 175,
                
                        resizeMode: 'contain'
                
                    }}
                    
                    source={productImg}

                    key={productId}
                
                />

            </View>

            <View style={{ flex: 1, justifyContent: "space-around", paddingRight: 10 }}>

                <View style={{ gap: 10 }}>

                    <Text variant="titleLarge">{ productName }</Text>

                    <Text variant="bodyMedium">{ productSubtype }</Text>

                    <Text variant="displaySmall">{ productPrice }</Text>
                
                    <Button 

                        onPress={() => setIsVisible(true)}
                    
                        icon="cart-plus"
                        
                        mode="contained" 
                        
                    >

                        Agregar al carrito

                    </Button>

                </View>



            </View>

        </View>

    )
    
}