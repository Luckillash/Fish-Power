import { View, StyleSheet } from "react-native";

import { Button, Divider, Text } from "react-native-paper";

import ProductsScrollView from "../../components/productsView";

import { useAppSelector } from "../../redux/hooks";

import { ParamListBase, useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BarcodeScanner from "../../components/barcodeScanner";

export default function Cart () {

	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	const CART_TOTAL = useAppSelector((state) => state.cart.total)

	const CART_PRODUCTS = useAppSelector((state) => state.cart.products)

	return(

		<View style={styles.container}>

		{ CART_PRODUCTS.length > 0 &&

			<>
			
				<ProductsScrollView />

				<View style={{ height: 90, gap: 15}}>

					<Divider />

					<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }} >

						<Text>Total</Text>

						<Text>{ "$" + CART_TOTAL.toLocaleString() }</Text>

					</View>

					<View>

						<Button icon="shopping" mode="contained" onPress={() => navigation.navigate("Payment")}>

							Realizar pedido

						</Button>

					</View>

				</View>

			</>

		}
		
		{ CART_PRODUCTS.length === 0 &&
		
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 20 }}>

				<Text>Agregar productos a tu carrito</Text>

				<Button icon="shopping" mode="contained" onPress={() => { }}>

					O escanea el código QR

				</Button>

				<BarcodeScanner />

			</View>		

		}

		</View>

	)

}

const styles = StyleSheet.create({

	container: {

		flex: 1,

		justifyContent: "space-between",

		padding: 20,

		gap: 10 

	},

})