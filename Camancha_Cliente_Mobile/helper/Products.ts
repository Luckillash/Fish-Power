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

        productImg: require("../assets/pescados/atlantico/porcion-con-piel.png"),

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

    },

    {

        productId: 1,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",

        productName: "Porción sin piel",

        productImg: require("../assets/pescados/atlantico/porcion-sin-piel.png"),

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

    },

    {

        productId: 2,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",
        
        productName: "Filete con piel",

        productImg: require("../assets/pescados/atlantico/filete-con-piel.png"),

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

    },

    {

        productId: 3,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",
        
        productName: "Filete sin piel",

        productImg: require("../assets/pescados/atlantico/filete-sin-piel.png"),

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

    },

    {

        productId: 4,

        productType: ProductType.SALMON,
        
        productSubtype: "Salmón atlántico",

        productName: "Entero",

        productImg: require("../assets/pescados/atlantico/entero-con-cabeza.png"),

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

    },

    {

        productId: 5,

        productType: ProductType.SALMON,

        productSubtype: "Salmón atlántico",
        
        productName: "Entero sin cabeza",

        productImg: require("../assets/pescados/atlantico/entero-sin-cabeza.png"),

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

    },

    {

        productId: 6,

        productType: ProductType.MOLUSCOS,
        
        productSubtype: "Langostinos",
        
        productName: "Carne",

        productImg: require("../assets/crustaceos/langostinos/cocidas.png"),

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

    },

    {

        productId: 7,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Mejillones",

        productName: "Enteros",

        productImg: require("../assets/moluscos/mejillones/entero.png"),

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

    },

    {

        productId: 8,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Mejillones",

        productName: "Carne",

        productImg: require("../assets/moluscos/mejillones/carne-natural.png"),

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

    },

    {

        productId: 9,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Abalones",

        productName: "Enteros",

        productImg: require("../assets/moluscos/abalones/entero.png"),

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

    },

    {

        productId: 10,

        productType: ProductType.MOLUSCOS,

        productSubtype: "Abalones",

        productName: "Carne",

        productImg: require("../assets/moluscos/abalones/carne.png"),

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

    },

    {

        productId: 11,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Natural",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/pescados/jurel/natural.png"),

    },

    {

        productId: 12,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Aceite",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/pescados/jurel/en-aceite.png"),

    },

    {

        productId: 13,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Sin sal",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/pescados/jurel/sin-sal.png"),

    },

    {

        productId: 14,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Tomate",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/pescados/jurel/en-tomate.png"),

    },

    {

        productId: 15,

        productType: ProductType.CONSERVAS,

        productSubtype: "Jurel",

        productName: "Tomate picante",

        productPrice: "$1.500",

        subproducts: [],

        productImg: require("../assets/pescados/jurel/en-tomate-picante.png"),

    },

]

export default PRODUCTS