import { View, ScrollView, StyleSheet } from "react-native";

import { Button, IconButton, Text } from "react-native-paper";

import CARDS from "../../helper/Cards";

import Card from "./Card"

import { useState } from "react";

import { ParamListBase, useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Payment () {

    const [selected, setSelected] = useState(undefined)

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    return (

        <View style={styles.container}>

            <View style={styles.containerMenu}>

                <IconButton size={30} icon={'close'} onPress={() => navigation.goBack()} />

                <Button icon={'plus'}>Agregar tarjeta</Button>

            </View>

            <Text style={styles.padding} variant="titleLarge">
                
                Pago
                
            </Text>

            <Text style={styles.padding}>
                
                Elija el método de pago que más se ajuste a su necesidad.
                
            </Text>

            <Text style={styles.padding} variant="titleLarge">
                
                MÉTODOS DE PAGO
                
            </Text>

            <ScrollView 
            
                style={styles.scrollview}
                
                contentContainerStyle={styles.scrollviewInside} 
            
            >

                { CARDS.map((card, index) => {

                    const { img } = card

                    const isSelected = index === selected

                    return <Card 
                    
                        key={index} 
                        
                        img={img} 
                        
                        isSelected={isSelected} 
                        
                        setSelected={setSelected} 
                        
                        index={index} 
                        
                    />

                })}

            </ScrollView>

            <Button 

                style={styles.button}

                onPress={() => navigation.navigate("Result")} 
                
                mode="contained" 
                
                disabled={selected === undefined}
                
            >

                Realizar pago

            </Button>

        </View>

    )

}

const styles = StyleSheet.create({

    container: { 
        
        flex: 1, 
        
        padding: 10, 
        
        gap: 10 
    
    },

    containerMenu: { 
        
        flexDirection: "row", 
        
        alignItems: "center", 
        
        justifyContent: "space-between"
    
    },

    padding: {

        paddingLeft: 15

    },

    scrollview: { 
        
        flex: 1, 
        
        paddingLeft: 15, 
        
        paddingRight: 15 
    
    },

    scrollviewInside: { 
        
        gap: 10 
    
    },

    button: {

        marginLeft: 15, 
        
        marginRight: 15 

    }

})