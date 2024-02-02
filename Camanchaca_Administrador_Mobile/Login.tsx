import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { horizontalScale } from './helper/Metrics';

export default function Login({ navigation }: any) {

    const [user, setUser] = useState<string | undefined>(undefined);

    const [password, setPassword] = useState<string | undefined>(undefined);

    return (

        <View style={styles.container}>

            <View style={styles.tophalf}>

                <Image

                    style={styles.img}

                    source={require('./assets/camanchaca/camanchaca.png')}
                
                />

            </View>

            <View style={styles.bottomhalf}>

                <TextInput

                    style={styles.input}

                    label="Correo"

                    value={user}

                    onChangeText={(text: string) => setUser(text)}

                />

                <TextInput

                    style={styles.input}

                    label="Contraseña"

                    value={password}

                    onChangeText={(text: string) => setPassword(text)}

                    secureTextEntry
                />

                <Button 
                
                    style={styles.button}

                    mode="contained" 
                    
                    onPress={() => navigation.navigate("Home")}
                
                >
                    
                    Accede
                    
                </Button>


                <Button 
                
                    style={styles.button}

                    mode="text" 
                    
                    onPress={() => console.log('Pressed')}
                
                >
                    
                    Regístrate
                    
                </Button>

                <Button 
                    
                    style={styles.button}

                    mode="text" 
                    
                    onPress={() => console.log('Pressed')}
                
                >
                
                    Recuperar contrasena
                
                </Button>

            </View>

        </View>

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

        width: 200,

        resizeMode: 'contain'

    },

    bottomhalf: {

        flex: .5,

        gap: 15

    },

    input: {

        width: horizontalScale(270)

    },

    button: {

        width: horizontalScale(270)

    }

});