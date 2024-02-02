import { useState } from 'react';

import { BottomNavigation, IconButton, useTheme } from 'react-native-paper';

import { useAppSelector } from '../../redux/hooks';

import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './Products';

import Cart from './Cart';

import Profile from './Profile';

import Drawer from '../../components/drawer';

import { View } from 'react-native';

export default function Navigation () {

    const theme = useTheme();

    const CART_PRODUCTS = useAppSelector((state) => state.cart.products)

    const [index, setIndex] = useState(0);

	const [open, setOpen] = useState(false)
    
    const routes = [
    
		{ key: 'music', focusedIcon: 'account', unfocusedIcon: 'account-outline', },
		
		{ key: 'recents', focusedIcon: 'cart', unfocusedIcon: 'cart-outline', badge: CART_PRODUCTS.length },
		
		{ key: 'notifications', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
		
    ]

	const renderScene = BottomNavigation.SceneMap({
	
		music: Home,
	
		recents: Cart,
	
		notifications: Profile,
	
	});

  	return (

		<SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>

			<View 							
			
				style={{ 
						
					position: "absolute", 
						
					left: 10, 
						
					top: 20, 
						
					zIndex: 1
					
				}}
				
			>

				<IconButton
				
					size={30} 

					iconColor={theme.colors.primary}
					
					icon={open ? "menu-open" :"menu" } 

					animated={true}

					onPress={() => setOpen(!open)}
					
				/>

			</View>

			<Drawer open={open} setOpen={setOpen}>

				<BottomNavigation
				
				navigationState={{ index, routes }}

				labeled={false}

				onIndexChange={setIndex}
				
				renderScene={renderScene}
				
				/>

			</Drawer>

		</SafeAreaView>
  
    );

};

