import React, { Dispatch, SetStateAction, useEffect } from 'react'

import { Button, Drawer as RNPDrawer, Title, TouchableRipple, Switch, useTheme, Text } from 'react-native-paper';

import { View, StyleSheet } from 'react-native';

import { Drawer } from 'react-native-drawer-layout';

import { ParamListBase, useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { changeDarkMode, logout } from '../../redux/loginSlice';

interface IProps {

    children: JSX.Element,

    open: boolean,

    setOpen: Dispatch<SetStateAction<boolean>>

}

export default function CustomDrawer({ children, open, setOpen }: IProps) {

	const theme = useTheme()

    const DARK_MODE = useAppSelector((state) => state.login.darkMode)

    const ACCESS = useAppSelector((state) => state.login.access)

    const dispatch = useAppDispatch()

    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	useEffect(() => {

        if(!ACCESS) navigate("Login")

    }, [ACCESS])

    function _logout () {

        dispatch(logout())

    }

	return (

		<Drawer

			open={open}

			onOpen={() => setOpen(true)}

			onClose={() => setOpen(false)}

			drawerStyle={{ backgroundColor: theme.colors.surfaceVariant }}

			renderDrawerContent={() => {

				return (

					<>

						<Title style={styles.padding}>Lucas Salazar</Title>

						<Text style={styles.preference}>Tomé</Text>

						<RNPDrawer.Section title="Preferencias">

							<TouchableRipple onPress={() => dispatch(changeDarkMode())}>

								<View style={styles.preference}>

									<Text>Modo oscuro</Text>

									<View pointerEvents="none">

										<Switch value={DARK_MODE} />

									</View>

								</View>

							</TouchableRipple>

						</RNPDrawer.Section>

						<Button 
						
							style={styles.margin} 
							
							mode='contained'

							onPress={_logout}
							
						>
							
							Cerrar sesión
							
						</Button>
					
					</>
				

				)

			}}

	  	>

            { children }

	    </Drawer>

	)

}

const styles = StyleSheet.create({

	preference: {

		flexDirection: 'row',

		justifyContent: 'space-between',

		paddingVertical: 12,

		paddingHorizontal: 28,

	},

	padding: {

		paddingHorizontal: 28,

        marginTop: 60,

	},

	margin: {

		marginVertical: 14,

		marginHorizontal: 14

	},

})