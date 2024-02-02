import { View, StyleSheet } from 'react-native';

import { Icon, IconButton, ProgressBar, useTheme, Text } from 'react-native-paper';

import Sales from "../../components/salesView/index"

export default function Profile() {

	const theme = useTheme()

	return (

		<View style={styles.container}>

			<View style={[styles.containerProfile, { backgroundColor: theme.colors.primaryContainer }]}>

				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

					<Icon source="account" size={50} />

				</View>

				<View style={{ paddingHorizontal: 20, alignItems: "center", justifyContent: "center" }}>

					<ProgressBar animatedValue={0.5} />

					<Text>Te faltan 307 puntos para tu próximo cupón</Text>

				</View>

				<View style={{ 
					
					flexDirection: "row",         
					
					alignItems: "center", 
			
					justifyContent: "space-around",

					flex: 0.5
					
				}}>

					<IconButton

						selected={false}

						mode='contained'

						icon="chart-bar"

						onPress={() => console.log()}

					/>

					<IconButton

						selected={true}

						mode='contained'

						icon="sale"

						onPress={() => console.log()}

					/>

				</View>

			</View>

			<View style={styles.containerActivity}>

				<Sales />

			</View>

		</View>

	)

}

const styles = StyleSheet.create({

	container: {

		flex: 1,

		gap: 10

	},

	containerProfile: {

		flex: 1,

		gap: 10

	},

	containerActivity: {

		flex: 1.5

	}

})