import { useEffect, useState } from "react";

import { BarCodeScanner } from 'expo-barcode-scanner';

import { View } from "react-native";

import { Button, Text } from "react-native-paper";

export default function BarcodeScanner () {

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	
	const [scanned, setScanned] = useState(false);

	useEffect(() => {

		const getBarCodeScannerPermissions = async () => {

			const { status } = await BarCodeScanner.requestPermissionsAsync();

			setHasPermission(status === 'granted');

		};
	
		getBarCodeScannerPermissions();
		
	}, []);
	
	const handleBarCodeScanned = ({ type, data }: any) => {

		setScanned(true);

		alert(`Bar code with type ${type} and data ${data} has been scanned!`);

	};

	if (hasPermission === null) {

	    return <Text>Requesting for camera permission</Text>;

	}

	if (hasPermission === false) {

	    return <Text>No access to camera</Text>;
	
	}

    return (

        <View style={{ alignItems: "center", justifyContent: "center" }}>

            <BarCodeScanner

                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}

                // style={styles.absoluteFillObject}

            />
            
            {scanned && 
            
                <Button onPress={() => setScanned(false)} >

                    Tap to Scan Again

                </Button>
                    
            }

        </View>		
    )

}