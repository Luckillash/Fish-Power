import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IProduct } from "../helper/Products";
import { IData, IOption } from "../redux/productSlice";

interface IOptions {

    options: IOption[],

    option: string,

    setOption: Dispatch<SetStateAction<string>>

}

const data = [

    { label: 'Item 1', value: '1' },
  
    { label: 'Item 2', value: '2' },
  
    { label: 'Item 3', value: '3' },
  
    { label: 'Item 4', value: '4' },
  
    { label: 'Item 5', value: '5' },
  
    { label: 'Item 6', value: '6' },
  
    { label: 'Item 7', value: '7' },
  
    { label: 'Item 8', value: '8' },
  
];

export default function DropdownComponent ({ options, option, setOption }: IOptions) {

    const [value, setValue] = useState<string | null>(null);

	const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {

		if (option || isFocus) {

			return (

				<Text style={[styles.label, isFocus && { color: 'blue' }]}>

					Dropdown label

				</Text>

			);

		}

		return null;

  	};

    return (

        <>

            <Dropdown

            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}

            placeholderStyle={styles.placeholderStyle}

            selectedTextStyle={styles.selectedTextStyle}

            inputSearchStyle={styles.inputSearchStyle}

            iconStyle={styles.iconStyle}

            data={options}

            search

            maxHeight={300}

            labelField="label"

            valueField="value"

            placeholder={!isFocus ? 'Select item' : '...'}

            searchPlaceholder="Search..."

            value={value}

            onFocus={() => setIsFocus(true)}

            onBlur={() => setIsFocus(false)}

            disable={options.length === 0}

            onChange={value => {

                setValue(value.value);

                setOption(value.value)

                setIsFocus(false);

            }}

            // renderLeftIcon={() => (

            //   <AntDesign

            //     style={styles.icon}

            //     color={isFocus ? 'blue' : 'black'}

            //     name="Safety"

            //     size={20}

            //   />

            // )}

            />
        </>

    )

}

const styles = StyleSheet.create({

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