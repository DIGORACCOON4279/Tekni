import "./Checkout.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

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
        setError("*Please complete all fields");
        return;
    }

    //Validamos que el email coincida:
    if (email !== emailConfirmation) {
        setError("*Emails do not match");
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

                <h3 className="endingPurchaseTitle">Order summary</h3>

            <form className="formUpdate" onSubmit={handleSubmit}>

                <div className="checkoutProducts">
                    <div className="titleItem">
                        <h4>Product</h4>
                        <h4>Description</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                    </div>

                    {
                        cart.map(product => (
                            <div className="resumeProduct" key={product.item.id}>
                                <div className="description">
                                    <img src={product.item.img} alt="" />
                                    <div className="info">
                                        <div className="text">
                                            <p className="category" > {product.item.category} </p>
                                            <p> {product.item.reference} </p>
                                        </div>
                                        <img className="rating" src="/img/rating.svg" alt="Rating" />
                                    </div>
                                </div>
                                <p> ${product.item.price}  </p>
                                <p> {product.quantity} </p>
                                <p> ${product.item.price * product.quantity} </p>
                            </div>
                        ))
                    }

                    <p className="totalCheckout"> Total... <span> ${total} </span> </p>
                    <Link to="../ItemListContainer" className="emptyCartLink"> View products 🚀</Link>
                </div>

                <div className="informationClient">
                    <div className="legend">
                        <p className="advise"> *The items are reserved for 60 minutes* </p>
                    </div>
                    <div className="background">
                        <div className="formBox">
                            <label htmlFor="name">  </label>
                            <input type="text" placeholder="Name" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="formBox">
                            <label htmlFor="lastName">  </label>
                            <input type="text" placeholder="Last name" value={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div className="formBox">
                            <label htmlFor="phone">  </label>
                            <input type="text" placeholder="Phone" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className="formBox">
                            <label htmlFor="email">  </label>
                            <input type="email" placeholder="Email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="formBox">
                            <label htmlFor="emailConfirmation">  </label>
                            <input type="email" placeholder="Confirmation Email" value={emailConfirmation} id="emailConfirmation" onChange={(e) => setEmailConfirmation(e.target.value)} />
                        </div>

                        {
                            error && <p style={{ color: "red" }}> {error} </p>
                        }

                        <div className="buttons">
                            <button className="myBtn checkout" disabled={cart.length === 0}> Checkout </button>
                            <button type="reset" className="myBtn reset" > Reset </button>
                        </div>
                    </div>
                </div>
                {/* {
                    orderId && <strong>¡Thanks for you purchase! your order number is: {orderId} </strong>
                } */}
            </form>
            <section className="advantages">
                <div className="advantagesIcons">
                    <img src="./img/shippingWhite.svg" alt="Shipping" />
                    <p>Your fast product</p>
                </div>
                <div className="advantagesIcons">
                    <img src="./img/paymentWhite.svg" alt="Payment" />
                    <p>Easy Shopping</p>
                </div>
                <div className="advantagesIcons">
                    <img src="./img/freeShippingWhite.svg" alt="Free shipping" />
                    <p>FREE Shipping*</p>
                </div>
                <div className="advantagesIcons">
                    <img src="./img/directWarrantyWhite.svg" alt="Warranty" />
                    <p>Direct Warranty</p>
                </div>
                <div className="advantagesIcons">
                    <img src="./img/easyReturnWhite.svg" alt="Returns" />
                    <p>Easy returns</p>
                </div>
                <div className="advantagesIcons">
                    <img src="./img/secureWhite.svg" alt="secure" />
                    <p>100% certified secure purchase</p>
                </div>
            </section>
        </section>
    )
}

export default checkout
