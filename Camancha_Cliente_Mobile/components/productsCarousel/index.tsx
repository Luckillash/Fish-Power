import * as React from "react";

import { View, Dimensions, StyleSheet, Image } from "react-native";

import Animated, {

  Extrapolate,

  interpolate,

  useAnimatedStyle,

  useSharedValue,

} from "react-native-reanimated";

import Carousel from "react-native-reanimated-carousel";

import { Chip, Text } from 'react-native-paper';

import ProductModal from "./modal";

import { useState } from "react";

import { IProduct } from "../../helper/Products";
import Card from "./card";
import ContainerPagination from "./containerPagination";

const { width } = Dimensions.get('screen');

const PAGE_WIDTH = width;

interface IProps {

    items: IProduct[]

}

export default function ProductsCarousel({ items }: IProps) {

    const [isVertical, setIsVertical] = React.useState(false);

    const [autoPlay, setAutoPlay] = React.useState(false);
    
    const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
    
    const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);

    const progressValue = useSharedValue<number>(0);

    const baseOptions = isVertical ? 
    
            ({

                vertical: true,

                width: PAGE_WIDTH * 0.86,

                height: PAGE_WIDTH * 0.6,

            })

        : 
        
            ({

                vertical: false,

                width: PAGE_WIDTH,

                height: PAGE_WIDTH * 0.6,

            });

    return (

        <>

            <Carousel

                {...baseOptions}

                loop

                pagingEnabled={pagingEnabled}

                snapEnabled={snapEnabled}

                autoPlay={autoPlay}

                autoPlayInterval={1500}

                onProgressChange={(_, absoluteProgress) =>

                    (progressValue.value = absoluteProgress)

                }

                mode="parallax"

                modeConfig={{

                    parallaxScrollingScale: 0.9,

                    parallaxScrollingOffset: 50,

                }}

                data={items}

                renderItem={({ item }) => <Card item={item} />}

            />

            { progressValue && <ContainerPagination isVertical={isVertical} items={items} progressValue={progressValue} /> }

        </>

    );

}

const styles = StyleSheet.create({

    containerProduct: {


    },

    containerVerticalProgress: {

        flexDirection: "column",

        justifyContent: "space-between",

        width: 10,

        alignSelf: "center",

        position: "absolute",

        right: 5,

        top: 40,

    },

    containerHorizontalProgress: {

        flexDirection: "row",

        justifyContent: "space-between",

        width: 100,

        alignSelf: "center",

    }

})
