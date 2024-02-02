import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { View, StyleSheet } from "react-native";

import { Button, Modal, Portal, useTheme } from "react-native-paper";

import { ISubproduct } from "../../../helper/Products";

import { useDispatch } from "react-redux";

import { addProduct } from "../../../redux/cartSlice";

import Subproducts from "./subproducts";

import Quantity from "./quantity";

import Total from "./total";

interface IProps {

    isVisible: boolean,

    setIsVisible: Dispatch<SetStateAction<boolean>>,

    subproducts: ISubproduct[],

    fatherProductId: number,

    fatherProductPrice: string | undefined

}

export default function ProductModal ({ isVisible, setIsVisible, subproducts, fatherProductId, fatherProductPrice }: IProps) {

    const theme = useTheme()
    const dispatch = useDispatch()

    const [_productId, setProductId] = useState<number | null>(fatherProductId)

    const [_subproductId, setSubproductId] = useState<number | null>(null)

    const [_quantity, setQuantity] = useState<number>(1)

    const [_price, setPrice] = useState<number | null>(null)

    const subproductsExist = subproducts.length > 0

    useEffect(() => {

        if (!subproductsExist && fatherProductPrice) {

            const priceFormatted = fatherProductPrice.slice(1).replace(".", "")

            const priceToNumber: number = parseInt(priceFormatted)

            setPrice(priceToNumber)

        }

    }, [subproductsExist])

    function selectSubproduct (productId: number, productPrice: string) {

        const priceFormatted = productPrice.slice(1).replace(".", "")

        const priceToNumber: number = parseInt(priceFormatted)

        setSubproductId(productId)

        setPrice(priceToNumber)

        setQuantity(1)

    }

    function addProductToCart () {

        let obj = {

            product: _productId,

            subproduct: subproductsExist ? _subproductId : undefined,

            productPrice: _price,

            productQuantity: _quantity
    
        }

        dispatch(addProduct(obj))

        dismissModal()

    }

    function dismissModal () {

        setIsVisible(false)

        setTimeout(() => {

            setProductId(null)

            setSubproductId(null)
    
            setQuantity(1)

        }, 1000)

    }

    return (

        <Portal>

            <Modal 
            
                visible={isVisible} 
                
                onDismiss={dismissModal} 
                
                contentContainerStyle={[styles.modal, { backgroundColor: theme.colors.surfaceVariant }]}
                
            >
                
                <View style={styles.container}>

                    { subproductsExist && 
                    
                        <Subproducts 
                        
                            subproducts={subproducts} 

                            _subproductId={_subproductId}

                            selectSubproduct={selectSubproduct}
                            
                        /> 
                        
                    }

                    { (!subproductsExist || _subproductId !== null)  && 
                    
                        <Quantity 
                        
                            _quantity={_quantity} 
                            
                            setQuantity={setQuantity}
                        
                        />

                    }

                    { _price !== null && 

                        <Total 
                        
                            _price={_price} 
                            
                            _quantity={_quantity} 
                            
                        />

                    }

                    { (!subproductsExist || _price !== null) && 
                    
                        <Button 
                        
                            onPress={addProductToCart} 
                            
                            mode="contained"
                            
                        >
                            
                            Agregar al carrito
                            
                        </Button>

                    }

                </View>
            
            </Modal>

        </Portal>

    )

}

const styles = StyleSheet.create({

    modal: { 
        
        alignSelf: "center" ,

        borderRadius: 10, 
    
    },

    container: { 
        
        padding: 10, 
        
        borderRadius: 10, 
        
        gap: 15 
    
    },

})
