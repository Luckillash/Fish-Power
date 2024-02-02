import { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import AnimateNumber from 'react-native-animate-number'

export default function Home () {
	
	const [value, setValue] = useState(Math.random() * (20000 - 5000) + 5000);

	useEffect(() => {

		console.log("run")

	}, [])

	useEffect(() => () => console.log("unmount"), [])

    return (

        <View style={styles.container}>

			<View style={{ gap: 10 }}>

				<AnimateNumber value={value}

					countBy={value/27}

					timing="easeOut"

					formatter={(val: string) => {

						return <Text variant='headlineLarge'>{'$ ' + parseInt(val).toLocaleString('en-US')}</Text>

					}}

				/>

				<Button mode="contained-tonal"> Fijar precio </Button>

			</View>

        </View>

    )
    
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	text: {
	  fontSize: 48,
	  fontWeight: 'bold',
	},
  });