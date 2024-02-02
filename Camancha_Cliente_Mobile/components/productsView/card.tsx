import { View, Image } from "react-native";

import { FAB, IconButton, Text, useTheme } from "react-native-paper";

import { ICartProduct, decrementQuantity, incrementQuantity } from "../../redux/cartSlice";

import { useAppDispatch } from "../../redux/hooks";

import PRODUCTS, { IProduct } from "../../helper/Products";

import { StyleSheet } from "react-native";

interface IProps {

    product: ICartProduct

}

export default function Card ({ product }: IProps) {

    const dispatch = useAppDispatch()

    const theme = useTheme()

    const { productId, subproductId, quantity } = product

    let fatherProduct: IProduct | undefined = PRODUCTS.find((prod) => prod.productId === productId)

    let childProduct

    if (subproductId !== undefined) {

        childProduct = fatherProduct?.subproducts.find((subprod) => subprod.subproductId === subproductId)

    }

    return (

        <View style={[styles.containerProduct, { backgroundColor: theme.colors.primaryContainer }]}>

            <View style={{ flex: 1 }}>

                <Image style={{ resizeMode: "contain", width: 80, height: 80, borderRadius: 5 }} source={fatherProduct?.productImg} />

            </View>

            <View style={{ flex: 2, gap: 5 }}>

                <Text variant="titleLarge"> { fatherProduct?.productSubtype } </Text>

                <Text variant="bodyMedium"> { `${fatherProduct?.productName + (childProduct?.subproductName ? " | " + childProduct?.subproductName : "") }`  }</Text>

                { fatherProduct?.productPrice && <Text variant="displaySmall">{ fatherProduct.productPrice }</Text> }

                { childProduct?.subproductPrice && <Text variant="displaySmall">{ childProduct.subproductPrice }</Text> }

            </View>

            <View style={{ alignItems: "center"}}>

                <IconButton 
                
                    icon="plus" 

                    onPress={() => dispatch(incrementQuantity({ _productId: productId, _subproductId: subproductId }))}
                
                />

                <Text>{quantity}</Text>

                <IconButton 
                
                    icon="minus" 

                    onPress={() => dispatch(decrementQuantity({ _productId: productId, _subproductId: subproductId }))}
                    
                />

            </View>

        </View>

    )

}

const styles = StyleSheet.create({
  
    containerProduct: {
  
        flexDirection: "row", 
        
        height: 130, 
        
        alignItems: "center", 
    
        borderRadius: 10,
        
        padding: 10
  
    }
  
})