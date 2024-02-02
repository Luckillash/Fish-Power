import { useState } from "react";

import { StyleSheet } from "react-native";

import { Button, TextInput } from "react-native-paper";

import { horizontalScale } from "../../helper/Metrics";

import Animated from "react-native-reanimated";

interface IProps {

    style: any

    moveComponents: (toRight: boolean) => void

}

export default function ForgotPassword ({ style, moveComponents }: IProps) {

    const [email, setEmail] = useState<string>("")

    const regExpLiteral = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const validEmail = regExpLiteral.test(email)

    return (

        <Animated.View style={[...style, styles.container]}>

            <TextInput

                style={styles.input}

                label="Correo"

                value={email}

                onChangeText={(text: string) => setEmail(text)}

            />

            <Button 
            
                disabled={!validEmail} 
                
                mode="contained" 
                
                style={styles.button}
                
            >
                    
                Recuperar contraseña
                
            </Button>

            <Button 
            
                onPress={() => moveComponents(false)}
                
            >
                
                Volver atras
                
            </Button>

        </Animated.View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: "center",

        justifyContent: "center",

        gap: horizontalScale(15)

    },

    input: {

        width: horizontalScale(270)

    },

    button: {

        width: horizontalScale(270)

    }

});