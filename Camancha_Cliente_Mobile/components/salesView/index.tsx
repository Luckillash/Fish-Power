import { ActivityIndicator, ScrollView, View, StyleSheet } from "react-native";

import { useEffect, useState } from "react";

import { useAppSelector } from "../../redux/hooks";

import SaleCard from "./saleCard";

export default function Sales () {

	const sales = useAppSelector((state) => state.product.sales)

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

		<View style={{ flex: 1, padding: 10, paddingTop: 0 }}>

			<ScrollView contentContainerStyle={{ flex: 1, gap: 10 }}>

				{ sales.slice(from, to).map((sale, index) => {

					return <SaleCard key={index} sale={sale} />

				})}

			</ScrollView>

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

