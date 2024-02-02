import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    quantityTotal: 0
})

export const CartProvider = ({ children }) => {

    const [cart, setCart]= useState([]);
    const [total, setTotal] = useState(0);
    const [quantityTotal, setQuantityTotal] = useState(0);

    console.log(cart);
    console.log("Monto total de la compra: ", total);
    console.log("Cantidad de items: ", quantityTotal);

    const addToCart= (item, quantity) => {
        const productStock = cart.find(product => product.item.id === item.id);

        if(!productStock) {
            setCart(previous => [...previous, {item, quantity}]);
            setQuantityTotal(previous => previous + quantity);
            setTotal(previous => previous + (item.price * quantity));
        } else {
            const cartUpdate = cart.map(product => {
                if(product.item.id === item.id) {
                    return {...product, quantity: product.quantity + quantity};
                } else {
                    return product;
                }
            })
            setCart(cartUpdate);
            setQuantityTotal(previous => previous + quantity);
            setTotal(previous => previous + (item.price * quantity));
        }
    }



    // Funcion para eliminar producto del carrito

    const deleteProduct = (id) => {

        const productDeleted = cart.find(product => product.item.id === id);

        const cartUpdate = cart.filter(product => product.item.id !== id);

        setCart(cartUpdate);
        setQuantityTotal(previous => previous - productDeleted.quantity);
        setTotal(previous => previous - (productDeleted.item.price * productDeleted.quantity));
    }

    // Funcion vaciar shoppingCart

    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        setQuantityTotal(0);
    }

    //  Value para enviar caracteristicas del carrito: valor, total, cantidadtotal y funciones:

    return (
        <CartContext.Provider value ={{cart, total, quantityTotal, addToCart, deleteProduct, emptyCart}}> { children } </CartContext.Provider>
    )

    // Adicionar el children

}

