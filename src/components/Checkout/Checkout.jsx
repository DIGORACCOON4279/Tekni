import "./Checkout.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2';

const checkout = () => {
    const { cart, emptyCart, total } = useContext(CartContext);


    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    // const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");


 //Funcion manejador del form:

const handleSubmit = (event) => {
    event.preventDefault();

    //Verificamos que todos los campos se completen:
    if (!name || !lastName || !phone || !email || !emailConfirmation) {
        setError("¡Por favor completa todos los campos o moriremos!");
        return;
    }

    //Validamos que el email coincida:
    if (email !== emailConfirmation) {
        setError("Los emails no coinciden, rata de dos patas!");
        return;
    }

    //Creamos un objeto con todos los datos de la orden:
    const order = {
        items: cart.map(product => ({
            img: product.item.img,
            id: product.item.id,
            category: product.item.category,
            quantity: product.quantity,


        })),
        total: total,
        date: new Date(),
        name,
        lastName,
        phone,
        email
    }




     ///Modificación para que descuente stock: lo que tenemos que hacer ahora es ejecutar varias promesas en paralelo. Por un lado puedo crear la orden de compra y el otro actualizar el stock:

    Promise.all(
        order.items.map( async (productOrder) => {
            //Por cada producto obtengo una referencia y a partir de esa referencia el doc.
            const productRef = doc(db, "products", productOrder.id);
            const productDoc = await getDoc(productRef);
            const stockCurrent = productDoc.data().stock;
            //Recordemos que data() me permite obtener los datos del documento

            await updateDoc(productRef, {stock: stockCurrent - productOrder.quantity});
            //Modifico el stock y subo la actualización.
        })
    )//Guardamos en la base de datos la orden de compra:
    .then(()=> {
        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                // setOrderId(docRef.id);
                emptyCart();


                //Acá pueden limpiar los input y usar el Sweet Alert 2 para mostrar el Order ID.
                // Función para manejar el clic en el enlace de continuar comprando
                Swal.fire({
                    text: `
                    <div class="popup">
                        <img src="/img/logo.webp" alt="Logo" />
                    </div>
                    `,
                    icon: 'success',
                    imageUrl: '/img/logo.webp',
                    imageWidth: 80,
                    html: `
                        <div class="message">
                            <p> "Your order has been successfully registered."</p>
                            <p>Thank you for your purchase! Your order number is: </p>
                            <p> ${docRef.id} </p>
                        </div>
                    `,
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                    customClass: {
                        popup: 'custom-popup-container',
                        confirmButton: 'btnOk',
                    },
                });

            })
            .catch(error => console.log("Error, making the order", error))
    })
    .catch(error => {
        console.log("Couldn't update the stock", error);
        setError("Error, updating the stock");
    })
}



    return (
        <section className="checkout">

                <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>

                <h3 className="endingPurchase">Ending Purchase</h3>

            <form onSubmit={handleSubmit}>
                <div className="checkoutProducts">
                    {
                        cart.map(product => (
                            <div key={product.item.id}>
                                <img src={product.item.img} alt="" />
                                <p> {product.item.reference} </p>
                                <p> {product.item.category} </p>
                                <p> ${product.item.price}  </p>
                                <p> Quantity: {product.quantity} </p>
                                <p> Price: ${product.item.price * product.quantity} </p>
                            </div>
                        ))
                    }

                    <p> Total... <span> ${total} </span> </p>
                </div>

                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName"> LastName </label>
                    <input type="text" value={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone"> Phone </label>
                    <input type="text" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="emailConfirmation"> Confirmation Email </label>
                    <input type="email" value={emailConfirmation} id="emailConfirmation" onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <div className="buttons">
                    <button className="myBtn checkout" disabled={cart.length === 0}> Ending order </button>
                    <button className="myBtn checkout" type="reset"> Reset </button>
                </div>
                {/* {
                    orderId && <strong>¡Thanks for you purchase! your order number is: {orderId} </strong>
                } */}
            </form>

        </section>
    )
}

export default checkout
