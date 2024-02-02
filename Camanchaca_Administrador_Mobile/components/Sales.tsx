import { ActivityIndicator, ScrollView, View, StyleSheet } from "react-native";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { DataTable, Text, Switch } from "react-native-paper";
import SaleCard from "./SaleCard";

export default function Sales () {

	const sales = useAppSelector((state) => state.sales.sales)

	const [page, setPage] = useState<number>(0);

	const [numberOfItemsPerPageList] = useState([10, 3, 4]);

	const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

	const [tableMode, setTableMode] = useState<boolean>(false);
	
	const from = page * itemsPerPage;
	
	const to = Math.min((page + 1) * itemsPerPage, sales.length);

	useEffect(() => {

		setPage(0);

	}, [itemsPerPage]);

	if (sales.length === 0) return (

		<View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>

			<ActivityIndicator animating={true} size='large' />

		</View>

	)

  	return (

		<View style={{ flex: 1 }}>

			<DataTable style={{ flex: 1, gap: 10, padding: 10 }}>

			{

				tableMode ?

				<>
				
					<DataTable.Header>

						<DataTable.Title>Tipo</DataTable.Title>

						<DataTable.Title>Subtipo</DataTable.Title>

						<DataTable.Title>Producto</DataTable.Title>

						<DataTable.Title>Subproducto</DataTable.Title>

						<DataTable.Title numeric>Cantidad</DataTable.Title>

					</DataTable.Header>

					<ScrollView contentContainerStyle={{ flex: 1 }}>

						{sales.slice(from, to).map((sale, index) => {

							const { type, subtype, product, subproduct, quantity } = sale

							return (

								<DataTable.Row key={index}>

									<DataTable.Cell>{type}</DataTable.Cell>

									<DataTable.Cell>{subtype}</DataTable.Cell>

									<DataTable.Cell>{product}</DataTable.Cell>

									<DataTable.Cell>{subproduct}</DataTable.Cell>

									<DataTable.Cell numeric>{quantity}</DataTable.Cell>

								</DataTable.Row>

							)

						})}
						
					</ScrollView>

				</>

				:

				<ScrollView contentContainerStyle={{ flex: 1, gap: 10, padding: 10 }}>

					{ sales.slice(from, to).map((sale, index) => {

						return <SaleCard key={index} venta={sale} />

					})}

				</ScrollView>

			}

				<View style={styles.switchContainer}>

					<Text style={{	  
						
						fontSize: 12,

	  					color: "rgba(28, 27, 31, 0.6)",

						letterSpacing: 0,

						fontWeight: '400',

	  					fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
						
					}}>
						
						Modo tabla
						
					</Text>

					<Switch

						style={styles.switch}

						value={tableMode}

						onValueChange={() => setTableMode(!tableMode)}

					/>

				</View>

				<DataTable.Pagination

					page={page}

					numberOfPages={Math.ceil(sales.length / itemsPerPage)}

					onPageChange={(page) => setPage(page)}

					label={`${from + 1}-${to} de ${sales.length}`}

					numberOfItemsPerPageList={numberOfItemsPerPageList}

					numberOfItemsPerPage={itemsPerPage}

					onItemsPerPageChange={onItemsPerPageChange}

					showFastPaginationControls

					selectPageDropdownLabel={'Filas por página'}
					
				/>

			</DataTable>

		</View>

  	);
    
}

const styles = StyleSheet.create({

	switchContainer: {

		flexDirection: "row",

		gap: 10,

		alignItems: "center",

		marginRight: 10,

		justifyContent: "flex-end"

	},

	switch: {

	}

})

