

const products = [
    {
        id: 1,
        reference: "HNK-01",
        category:"SmartTV",
        price: 1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv1.webp"
    },
    {
        id: 2,
        reference: "NLX-01",
        category:"Smartphone",
        price:799 ,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone1.webp"
    },
    {
        id: 3,
        reference: "NLX-02",
        category:"Smartphone",
        price: 799,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone2.webp"
    },
    {
        id: 4,
        reference: "NLX-03",
        category:"Smartphone",
        price:799 ,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone3.webp"
    },
    {
        id: 5,
        reference: "NLX-04",
        category:"Smartphone",
        price: 799,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone4.webp"
    },
    {
        id: 6,
        reference: "NLX-05",
        category:"Smartphone",
        price: 799,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone5.webp"
    },
    {
        id: 7,
        reference: "NLX-06",
        category:"Smartphone",
        price:799 ,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone6.webp"
    },
    {
        id: 8,
        reference: "NLX-07",
        category:"Smartphone",
        price: 799,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone7.webp"
    },
    {
        id: 9,
        reference: "NLX-08",
        category:"Smartphone",
        price: 799,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone8.webp"
    },
    {
        id: 10,
        reference: "NLX-09",
        category:"Smartphone",
        price:799 ,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone9.webp"
    },
    {
        id: 11,
        reference: "NLX-10",
        category:"Smartphone",
        price: 799,
        img:"https://primera-entrega-tekni.vercel.app/img/smartphone10.webp"
    },
    {
        id: 12,
        reference: "XKX-01",
        category:"Laptop",
        price: 1099,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop1.webp"
    },
    {
        id: 13,
        reference: "HNK-02",
        category:"SmartTV",
        price: 1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv2.webp"
    },
    {
        id: 14,
        reference: "HNK-03",
        category:"SmartTV",
        price:1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv3.webp"
    },
    {
        id: 15,
        reference: "HNK-04",
        category:"SmartTV",
        price:1599 ,
        img:"https://primera-entrega-tekni.vercel.app/img/tv4.webp"
    },
    {
        id: 16,
        reference: "HNK-05",
        category:"SmartTV",
        price: 1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv5.webp"
    },
    {
        id: 17,
        reference: "HNK-06",
        category:"SmartTV",
        price:1599 ,
        img:"https://primera-entrega-tekni.vercel.app/img/tv6.webp"
    },
    {
        id: 18,
        reference: "HNK-07",
        category:"SmartTV",
        price:1599 ,
        img:"https://primera-entrega-tekni.vercel.app/img/tv7.webp"
    },
    {
        id: 19,
        reference: "HNK-08",
        category:"SmartTV",
        price: 1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv8.webp"
    },
    {
        id: 20,
        reference: "HNK-09",
        category:"SmartTV",
        price: 1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv9.webp"
    },
    {
        id: 21,
        reference: "HNK-10",
        category:"SmartTV",
        price: 1599,
        img:"https://primera-entrega-tekni.vercel.app/img/tv10.webp"
    },
    {
        id: 22,
        reference: "XKX-02",
        category:"Laptop",
        price: 1099,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop2.webp"
    },
    {
        id: 23,
        reference: "XKX-03",
        category:"Laptop",
        price: 1099,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop3.webp"
    },
    {
        id: 24,
        reference: "XKX-04",
        category:"Laptop",
        price:1099 ,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop4.webp"
    },
    {
        id: 25,
        reference: "XKX-05",
        category:"Laptop",
        price: 1099,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop5.webp"
    },
    {
        id: 26,
        reference: "XKX-06",
        category:"Laptop",
        price:1099 ,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop6.webp"
    },
    {
        id: 27,
        reference: "XKX-07",
        category:"Laptop",
        price: 1099,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop7.webp"
    },
    {
        id: 28,
        reference: "XKX-08",
        category:"Laptop",
        price:1099 ,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop8.webp"
    },
    {
        id: 29,
        reference: "XKX-09",
        category:"Laptop",
        price: 1099,
        img:"https://primera-entrega-tekni.vercel.app/img/laptop9.webp"
    },
    {
        id: 30,
        reference: "KJN-01",
        category:"Headset",
        price: 179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset3.webp"
    },
    {
        id: 31,
        reference: "KJN-02",
        category:"Headset",
        price:179 ,
        img:"https://primera-entrega-tekni.vercel.app/img/headset4.webp"
    },
    {
        id: 32,
        reference: "KJN-03",
        category:"Headset",
        price: 179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset5.webp"
    },
    {
        id: 33,
        reference: "KJN-04",
        category:"Headset",
        price:179 ,
        img:"https://primera-entrega-tekni.vercel.app/img/headset6.webp"
    },
    {
        id: 34,
        reference: "KJN-05",
        category:"Headset",
        price: 179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset7.webp"
    },
    {
        id: 35,
        reference: "KJN-06",
        category:"Headset",
        price:179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset8.webp"
    },
    {
        id: 36,
        reference: "KJN-07",
        category:"Headset",
        price: 179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset9.webp"
    },
    {
        id: 37,
        reference: "KJN-08",
        category:"Headset",
        price: 179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset2.webp"
    },
    {
        id: 38,
        reference: "KJN-09",
        category:"Headset",
        price: 179,
        img:"https://primera-entrega-tekni.vercel.app/img/headset10.webp"
    },
    {
        id: 39,
        reference: "KJN-10",
        category:"Headset",
        price:179 ,
        img:"https://primera-entrega-tekni.vercel.app/img/headset11.webp"
    }
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 2000)
    })
}
