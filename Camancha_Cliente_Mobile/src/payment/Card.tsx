import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { Icon, Text } from "react-native-paper";

export default function cardCard ({ img, isSelected, setSelected, index }: any) {

    return (

        <TouchableOpacity 
        
            onPress={() => setSelected(index)} 
            
            style={[
                
                styles.container, 
                
                isSelected ? styles.selected : styles.notSelected,
            
            ]}
            
        >

            <Image style={styles.img} source={img} />

            <View style={styles.containerText}>

                <Text 
                
                    style={isSelected ? styles.selectedText : styles.notSelectedText} 
                    
                    variant="titleMedium"
                    
                >
                    
                    **** **** **** 5967
                    
                </Text>

                <Text
                
                    style={isSelected ? styles.selectedText : styles.notSelectedText} 

                    variant="bodySmall"
                    
                >
                        
                    Expira 09/25
                    
                </Text>

            </View>

            { isSelected && <Icon size={40} source="check" color="white" /> }

        </TouchableOpacity>

    )
    
}

const styles = StyleSheet.create({

    container: { 
        
        flexDirection: "row", 
        
        alignItems: "center", 
        
        height: 80, 
        
        gap: 10, 
        
        padding: 10, 
        
        borderRadius: 10 
    
    },

    selected: {

        backgroundColor: "#6750a4",

    },

    notSelected: {

        backgroundColor: "#e8def8"

    },

    img: { 
        
        resizeMode: "contain", 
        
        width: 60, 
        
        height: 60 
    
    },

    containerText: { 
        
        flex: 1, 
        
        height: 60, 
        
        justifyContent: "center"  
    
    },

    selectedText: {

        color: "white"

    },

    notSelectedText: {

        color: "black"

    }

})

