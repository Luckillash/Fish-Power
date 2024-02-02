import { useEffect, useState } from "react";

import { StyleSheet, View, Image } from "react-native";

import { Button, TextInput } from "react-native-paper";

import { horizontalScale, verticalScale } from "../../helper/Metrics";

import Animated from "react-native-reanimated";

import { ParamListBase, useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Logo } from "../../helper/Logos";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authenticate } from "../../redux/loginSlice";

interface IProps {

    style: any

    moveComponents: (toRight: boolean) => void

}

export default function Login({ style, moveComponents }: IProps) {

    const ACCESS = useAppSelector((state) => state.login.access)

    const dispatch = useAppDispatch()

    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const [email, setEmail] = useState<string>("")

    const [password, setPassword] = useState<string>("")

    useEffect(() => {

        if(ACCESS) navigate("Home")

    }, [ACCESS])

    function _authenticate () {

        dispatch(authenticate({ email, password }))

    }

    return (

        <Animated.View style={[...style, styles.container]}>

            <View style={styles.tophalf}>

                <Image

                    style={styles.img}

                    source={Logo}
                
                />

            </View>

            <View style={styles.bottomhalf}>

                <TextInput

                    style={styles.width}

                    label="Correo"

                    value={email}

                    onChangeText={(text: string) => setEmail(text)}

                />

                <TextInput

                    style={styles.width}

                    label="Contraseña"

                    value={password}

                    onChangeText={(text: string) => setPassword(text)}

                    secureTextEntry

                />

                <Button 
                
                    style={styles.width}

                    mode="contained" 
                    
                    onPress={_authenticate}
                
                >
                    
                    Accede
                    
                </Button>


                <Button 
                
                    style={styles.width}

                    mode="text" 
                    
                    onPress={() => moveComponents(false)}
                
                >
                    
                    Regístrate
                    
                </Button>

                <Button 
                    
                    style={styles.width}

                    mode="text" 
                    
                    onPress={() => moveComponents(true)}
                
                >
                
                    Olvidé mi contraseña
                
                </Button>

            </View>

        </Animated.View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: 'center',

        justifyContent: 'center',

    },

    tophalf: {

        flex: .5,

    },

    img: {

        flex: 1,

        width: horizontalScale(250),

        resizeMode: 'contain'

    },

    bottomhalf: {

        flex: .5,

        gap: verticalScale(15)

    },

    width: {

        width: horizontalScale(270)

    },

});