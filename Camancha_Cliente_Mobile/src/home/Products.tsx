import { View, Image, StyleSheet } from 'react-native';

import { IconButton, useTheme } from 'react-native-paper';

import { useState } from 'react';

import ProductsCarousel from '../../components/productsCarousel';

import PRODUCTS, { IProduct, ProductType } from '../../helper/Products';

import { Fish, Shrimp, TunaCan } from '../../helper/Icons';

import { Hero } from '../../helper/Logos';

import { horizontalScale } from '../../helper/Metrics';

export default function Products() {

    const theme = useTheme();

    const [category, setCategory] = useState<ProductType>(ProductType.SALMON)

    const [products, setProducts] = useState<IProduct[]>(PRODUCTS.filter(({ productType }) => productType === ProductType.SALMON))

    function setData (category: number, products: IProduct[] ) {

        setCategory(category)

        setProducts(products)

    }

    return (

        <View style={styles.container}>

            <View style={[styles.containerHero, { backgroundColor: theme.colors.primaryContainer }]}>

                <Image source={Hero} style={styles.img} />

            </View>

            <View style={styles.fabs}>

                <IconButton

                    selected={ category === ProductType.SALMON }

                    mode='contained'

                    icon={Fish}

                    onPress={() => setData(ProductType.SALMON, PRODUCTS.filter(({ productType }) => productType === ProductType.SALMON))}

                />
            
                <IconButton

                    selected={ category === ProductType.MOLUSCOS }

                    mode='contained'

                    icon={Shrimp}

                    onPress={() => setData(ProductType.MOLUSCOS, PRODUCTS.filter(({ productType }) => productType === ProductType.MOLUSCOS))}

                />
            
                <IconButton

                    selected={ category === ProductType.CONSERVAS }

                    mode='contained'

                    icon={TunaCan}

                    onPress={() => setData(ProductType.CONSERVAS, PRODUCTS.filter(({ productType }) => productType === ProductType.CONSERVAS))}

                />
                
            </View>

            <View style={styles.containerCarousel}>

                <ProductsCarousel items={products} />

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: "space-around"

    },

    containerHero: { 
                
        flex: 2.5, 

        // transform : [ { scaleX : 2 } ],

        borderBottomStartRadius: horizontalScale(170),

        borderBottomEndRadius: horizontalScale(170),
        
    },

    img: {

        flex: 1,

        alignSelf: 'center',

        width: horizontalScale(300),

        resizeMode: 'contain',

    },

    fabs: { 
        
        flex: 1, 
        
        flexDirection: "row", 
        
        alignItems: "center", 
        
        justifyContent: "space-around"
    
    },

    containerCarousel: { 
        
        flex: 3, 
        
        alignItems: "center" 
    
    }

})