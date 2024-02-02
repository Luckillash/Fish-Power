import { useState } from 'react';
import { BottomNavigation, IconButton, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './Home';
import ProductsTable from './components/Products';
import ProductPagination from './components/Sales';
import Drawer from './Drawer';

export default function BottomNav () {

	const [drawerOpen, setDrawerOpen] = useState(false)

	const [index, setIndex] = useState(0);
	
	const routes = [
	
		{ key: 'products', focusedIcon: 'chart-box', unfocusedIcon: 'chart-box-outline' },
		
		{ key: 'scale', focusedIcon: 'basket', unfocusedIcon: 'basket-outline' },
		
		{ key: 'table', focusedIcon: 'database', unfocusedIcon: 'database-outline' },
	
	]

	const [mountedTabs, setMountedTabs] = useState({

		products: true,

		scale: false,

		table: false,

	});
	
	const renderScene = BottomNavigation.SceneMap({

		products: ProductPagination,

		scale: () => {

			return mountedTabs.scale ? <Home /> : null;

		},

		table: ProductsTable,

	})

	const handleIndexChange = (newIndex: number) => {

		setMountedTabs((prevState) => {

		  // Desmontar el componente anteriormente montado

			const updatedMountedTabs = { ...prevState };

			Object.keys(updatedMountedTabs).forEach((key) => {

				updatedMountedTabs[key as keyof typeof updatedMountedTabs] = key === routes[newIndex].key;

			});

			return updatedMountedTabs;

		});
	
		setIndex(newIndex);

	};

  	return (

		<SafeAreaView style={{ flex: 1 }}>
			
			<BottomNavigation
			
			navigationState={{ index, routes }}

			labeled={false}

			onIndexChange={handleIndexChange}
			
			renderScene={renderScene}
			
			/>

			{/* <Drawer /> */}

			{/* <IconButton

			style={{ position: 'absolute', top: 10, left: 10}}

			icon={drawerOpen ? "menu-open" : "menu"}

			size={40}

			selected={drawerOpen}

			onPress={() => setDrawerOpen(true)}

			/> */}

		</SafeAreaView>
  
    );

};