import { ScrollView, StyleSheet, View } from 'react-native';
import { Portal, TextInput, Modal, Button,Text } from 'react-native-paper';
import DropdownComponent from './Dropdown';
import { useAppSelector } from '../redux/hooks';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IOption, ISubproduct } from '../redux/productSlice';

interface IProps {

	modalOpen: boolean,

	setModalOpen: Dispatch<SetStateAction<boolean>>,

	product: string,

	type: string,

	subtype: string,

	price: number | null,

	subproducts: ISubproduct[]

}

export default function ProductsModal({ modalOpen, setModalOpen, product, type, subtype, price, subproducts }: IProps) {

	const TypeOptions = useAppSelector((state) => state.products.typesOptions)

	const SubtypeOptions = useAppSelector((state) => state.products.subtypesOptions)

	const [_product, setProduct] = useState(product);

	const [_type, setType] = useState(type);

	const [_subtype, setSubtype] = useState(subtype);

	const [_price, setPrice] = useState(price?.toString);

	const [filteredSubtypeOptions, setFilteredSubtypeOptions] = useState<IOption[]>([]);

	const [_subproducts, setSubproducts] = useState(subproducts);

	useEffect(() => {

		if(type !== '') {

			const FilteredSubtypeOptions = SubtypeOptions.filter((subtype) => subtype.father === type)
		
			setFilteredSubtypeOptions(FilteredSubtypeOptions)

		}
		
	}, [type])

	function dismissModal () {

		setModalOpen(false)

		setFilteredSubtypeOptions([])

	}


	return (

		<Portal>

			<Modal visible={modalOpen} onDismiss={dismissModal} contentContainerStyle={{ alignSelf: "center" }}>
			
				<View style={styles.container}>

					<Text variant="headlineSmall">Editar producto</Text>

					<TextInput

						label="Nombre"

						value={product}

						onChangeText={text => setProduct(text)}

					/>

					<DropdownComponent 
					
						options={TypeOptions} 
						
						option={type} 
						
						setOption={setType} 
						
					/>

					<DropdownComponent 
					
						options={filteredSubtypeOptions} 
						
						option={subtype} 
						
						setOption={setSubtype}
						
					/>

					<TextInput

						label="Precio"

						value={price?.toString()}

						onChangeText={text => setPrice(text)}

					/>

					<Text variant="headlineSmall">Subproductos</Text>

					<ScrollView horizontal={true} style={{ width: 230 }} contentContainerStyle={{ gap: 10 }}>

						{ subproducts.map((_subproduct) => {

							const { subproduct, price } = _subproduct

							return (

								<View style={{ gap: 10, borderWidth: 1 }}>

									<TextInput

									label="Nombre"

									value={subproduct}

									// onChangeText={text => setText(text)}

									/>

									<TextInput

									label="Precio"

									value={price.toString()}

									// onChangeText={text => setText(text)}

									/>


								</View>

							)

						})}

					</ScrollView>

					<Button icon="content-save" mode='contained'>

						Guardar producto

					</Button>

				</View>

			</Modal>

		</Portal>

  	);

}

const styles = StyleSheet.create({

	container: {

		width: 300,

		gap: 10,

		padding: 10,

		backgroundColor: '#fff',

		alignItems: 'center',

		justifyContent: 'center',

	},

	dropdown: {

		width: "100%",

		height: 50,

		borderColor: 'gray',

		borderWidth: 0.5,

		borderRadius: 8,

		paddingHorizontal: 8,

	},

	icon: {

		marginRight: 5,

	},

	label: {

		position: 'absolute',

		backgroundColor: 'white',

		left: 22,

		top: 8,

		zIndex: 999,

		paddingHorizontal: 8,

		fontSize: 14,

	},

	placeholderStyle: {

		fontSize: 16,

	},

	selectedTextStyle: {

		fontSize: 16,

	},

	iconStyle: {

		width: 20,

		height: 20,

	},

	inputSearchStyle: {

		height: 40,

		fontSize: 16,

	},
	
});
