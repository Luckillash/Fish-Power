import { useState } from "react";

import { StyleSheet, View } from "react-native";

import { Button, Icon, Text, TextInput } from "react-native-paper";

import Animated from "react-native-reanimated";

import { horizontalScale, verticalScale } from "../../helper/Metrics";

import { useAppDispatch } from "../../redux/hooks";

import { register } from "../../redux/loginSlice";

interface IProps {

    style: any,

    moveComponents: (toRight: boolean) => void

}

enum Error {

    Email = "El email no es válido",

    PasswordLength = "Mínimo 8 carácteres",

    PasswordCase = "Mínimo un mayúscula/minúscula",

    PasswordNumber = "Mínimo un número",

    PasswordSpecial = "Mínimo un carácter especial @#$%",

    ConfirmationPassword = "Las contraseñas no son iguales",

}

export default function Register({ style, moveComponents }: IProps) {

    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>("")

    const [email, setEmail] = useState<string>("")

    const [password, setPassword] = useState<string>("")

    const [confirmationPassword, setConfirmationPassword] = useState<string>("")

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const validEmail = emailRegex.test(email)

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const validPassword = passwordRegex.test(password)

    async function _register () {

        dispatch(register({ name, email, password }))

    }

    return (

        <Animated.View style={[...style, styles.container]}>

            <View style={[styles.width, styles.gap]}>

                <Text variant="bodySmall">

                    <Icon

                        source={ password.length >= 8 ? "check-circle-outline" : "close-circle-outline"}

                        color={ password.length >= 8 ? "#1cc487" : "#e93445"}

                        size={13}

                    />

                    { Error.PasswordLength }

                </Text>

                <Text variant="bodySmall">

                    
                    <Icon

                        source={ /(?=.*[a-z])(?=.*[A-Z])/.test(password) ? "check-circle-outline" : "close-circle-outline"}

                        color={ /(?=.*[a-z])(?=.*[A-Z])/.test(password) ? "#1cc487" : "#e93445"}

                        size={13}
                        
                    />

                    { Error.PasswordCase }

                </Text>

                <Text variant="bodySmall">

                    <Icon

                        source={ /\d/.test(password) ? "check-circle-outline" : "close-circle-outline"}

                        color={ /\d/.test(password) ? "#1cc487" : "#e93445"}

                        size={13}
                        
                    />

                    { Error.PasswordNumber }

                </Text>

                <Text variant="bodySmall">

                    <Icon

                        source={ /(?=.*\W)/.test(password) ? "check-circle-outline" : "close-circle-outline"}

                        color={ /(?=.*\W)/.test(password) ? "#1cc487" : "#e93445"}

                        size={13}
                        
                    />

                    { Error.PasswordSpecial }

                </Text>

                <Text variant="bodySmall">

                    <Icon

                        source={ validPassword && (password === confirmationPassword) ? "check-circle-outline" : "close-circle-outline"}

                        color={ validPassword && (password === confirmationPassword) ? "#1cc487" : "#e93445"}

                        size={13}
                        
                    />

                    { Error.ConfirmationPassword }

                </Text>

            </View>

            <TextInput

                style={styles.width}

                label="Nombre"

                value={name}

                onChangeText={(text: string) => setName(text)}

            />

            <TextInput

                disabled={name.length < 3}

                style={styles.width}

                label="Correo"

                value={email}

                onChangeText={(text: string) => setEmail(text)}

            />

            <TextInput

                disabled={!validEmail || name.length < 3}

                style={styles.width}

                label="Contraseña"

                value={password}

                onChangeText={(text: string) => setPassword(text)}

                secureTextEntry

            />

            <TextInput

                disabled={!validEmail || !validPassword || name.length < 3}

                style={styles.width}

                label="Confirmar contraseña"

                value={confirmationPassword}

                onChangeText={(text: string) => setConfirmationPassword(text)}

                secureTextEntry

            />

            <Button 

                disabled={!validEmail || !validPassword || password !== confirmationPassword || name.length < 3}
                    
                style={styles.width}

                mode="contained" 
                
                onPress={_register}
                
            >
                
                Registrar
                
            </Button>

            <Button 
                    
                style={styles.width}

                onPress={() => moveComponents(true)}
                
            >
                    
                Volver atras
                    
            </Button>

        </Animated.View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: 'center',

        justifyContent: 'center',

        gap: verticalScale(15)

    },

    width: {

        width: horizontalScale(270)

    },

    gap: {

        gap: 10

    },



});