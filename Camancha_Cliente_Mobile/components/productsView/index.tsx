import { StyleSheet, ScrollView } from "react-native";

import { useAppSelector } from "../../redux/hooks";

import Card from "./card";

export default function Index () {

    const CART_PRODUCTS = useAppSelector((state) => state.cart.products)

    return (

        <ScrollView contentContainerStyle={ styles.containerProducts } >

            { CART_PRODUCTS.map((product, index, array) => {

                return (

                    <Card key={index} product={product} />

                )

            })}

        </ScrollView>

    )

}

const styles = StyleSheet.create({
  
    containerProducts: { 
  
        gap: 10

    },

})
