export enum ProductType {

    SALMON,

    MOLUSCOS,

    CONSERVAS

}

export interface IProduct {

    productId: number,

    productType: ProductType,

    productSubtype: string,

    productName: string,

    productPrice?: string,

    productImg: any,

    subproducts: ISubproduct[]


}

export interface ISubproduct {

    subproductId: number,

    subproductName: string,

    subproductPrice: string
    
}

const PRODUCTS: IProduct[] = [

    {

        productId: 0,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",

        productName: "Porción con piel",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/fishproducts/porcion-con-piel.png")

    },

    {

        productId: 1,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",

        productName: "Porción sin piel",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/fishproducts/porcion-sin-piel.png")

    },

    {

        productId: 2,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",
        
        productName: "Filete con piel",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/fishproducts/filete-con-piel.png")

    },

    {

        productId: 3,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",
        
        productName: "Filete sin piel",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/fishproducts/filete-sin-piel.png")

    },

    {

        productId: 4,

        productType: ProductType.SALMON,
        
        productSubtype: "Salmón atlántico",

        productName: "Entero",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/fishproducts/entero-con-cabeza.png")

    },

    {

        productId: 5,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",
        
        productName: "Entero sin cabeza",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/fishproducts/entero-sin-cabeza.png")

    },

    {

        productId: 6,

        productType: ProductType.MOLUSCOS,
        
        productSubtype: "Langostinos",
        
        productName: "Carne",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/molluskproducts/langostinos.png")

    },

    {

        productId: 7,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Mejillones",

        productName: "Enteros",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/molluskproducts/mejillones-enteros.png")

    },

    {

        productId: 8,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Mejillones",

        productName: "Carne",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/molluskproducts/mejillones-carne.png")

    },

    {

        productId: 9,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Abalones",

        productName: "Enteros",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/molluskproducts/abalon-entero.png")

    },

    {

        productId: 10,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Abalones",

        productName: "Carne",

        subproducts: [

            {

                subproductId: 0,

                subproductPrice: "$10.990",

                subproductName: "10kg"

            },

            {

                subproductId: 1,

                subproductPrice: "$15.990",

                subproductName: "15kg"

            },

            {

                subproductId: 2,

                subproductPrice: "$25.990",

                subproductName: "25kg"

            }

        ],

        productImg: require("../assets/molluskproducts/abalon-carne.png")

    },

    {

        productId: 0,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Natural",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/preservesproducts/unico-natural-grande.png")

    },

    {

        productId: 1,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Aceite",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/preservesproducts/unico-aceite-grande.png")

    },

    {

        productId: 2,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Sin sal",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/preservesproducts/unico-sinsal-grande.png")

    },

    {

        productId: 3,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Tomate",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/preservesproducts/unico-tomate-grande.png")

    },

    {

        productId: 4,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Tomate picante",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/preservesproducts/unico-picante-grande.png")

    },

]

export { PRODUCTS }