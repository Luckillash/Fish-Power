import * as React from 'react';
import { ActivityIndicator, DataTable, Switch } from 'react-native-paper';
import { getTypes, getSubtypes, getProducts, getSubproducts, getData } from '../redux/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Product from './ProductCard';

export default function ProductsTable () {

	const data = useAppSelector((state) => state.products.data)

	const [page, setPage] = useState<number>(0);

	const [numberOfItemsPerPageList] = useState([10, 3, 4]);

	const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

	const [tableMode, setTableMode] = useState<boolean>(false);
	
	const from = page * itemsPerPage;
	
	const to = Math.min((page + 1) * itemsPerPage, data.length);

	React.useEffect(() => {

		setPage(0);

	}, [itemsPerPage]);

	if (data.length === 0) return (

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

						<DataTable.Title>Id's subproductos</DataTable.Title>

						<DataTable.Title>Imagen</DataTable.Title>

						<DataTable.Title numeric>Precio</DataTable.Title>

					</DataTable.Header>

					<ScrollView contentContainerStyle={{ flex: 1 }}>

						{data.slice(from, to).map((producto, index) => {

							const { type, subtype, product, subproducts, img, price } = producto

							return (

								<DataTable.Row key={index}>

									<DataTable.Cell>{type}</DataTable.Cell>

									<DataTable.Cell>{subtype}</DataTable.Cell>

									<DataTable.Cell>{product}</DataTable.Cell>

									<DataTable.Cell>
										
										{ subproducts.length > 0 && subproducts.map((subproduct, index, array) => {

											if (array.length - 1 === index) return subproduct.id
											
											else return subproduct.id + ", "

										})}
									
									</DataTable.Cell>

									<DataTable.Cell>{img}</DataTable.Cell>

									<DataTable.Cell numeric>{ price ? price : "No definido"}</DataTable.Cell>

								</DataTable.Row>

							)

						})}
						
					</ScrollView>

				</>

				:

				<ScrollView contentContainerStyle={{ flex: 1, gap: 10, padding: 10 }}>

					{ data.slice(from, to).map((producto, index) => {

						return <Product key={index} producto={producto} />

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

					numberOfPages={Math.ceil(data.length / itemsPerPage)}

					onPageChange={(page) => setPage(page)}

					label={`${from + 1}-${to} de ${data.length}`}

					numberOfItemsPerPageList={numberOfItemsPerPageList}

					numberOfItemsPerPage={itemsPerPage}

					onItemsPerPageChange={onItemsPerPageChange}

					showFastPaginationControls

					selectPageDropdownLabel={'Filas por página'}
					
				/>

			</DataTable>

		</View>

  	);
	
};

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
