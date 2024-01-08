import "./Advantages.css"

const Advantages = () => {
    return (
        <section className="advantageSection">
            <article className="cards">
                <img src="./img/shipping.svg" alt="" className="icon" />
                <h4 className="titleCard">Your fast product</h4>
                <p className="infoCard">The delivery time will depend on the city you are in.</p>
            </article>
            <article className="cards">
            <img src="./img/payment.svg" alt="" className="icon" />
                <h4 className="titleCard">Easy Shopping</h4>
                <p className="infoCard"> Choose your product, select the payment method, provide the delivery address, and you're done.</p>
            </article>
            <article className="cards">
                <img src="./img/freeShipping.svg" alt="" className="icon" />
                <h4 className="titleCard">FREE Shipping*</h4>
                <p className="infoCard">On purchases over $10.000.</p>
            </article>
            <article className="cards">
                <img src="./img/directWarranty.svg" alt="" className="icon" />
                <h4 className="titleCard">Direct Warranty</h4>
                <p className="infoCard">All your purchases come with the direct support of Tekni</p>
            </article>
            <article className="cards">
                <img src="./img/easyReturns.svg" alt="" className="icon" />
                <h4 className="titleCard">Easy returns</h4>
                <p className="infoCard"> Your Satisfaction Guaranteed</p>
            </article>
            <article className="cards">
                <img src="./img/secure.svg" alt="" className="icon" />
                <h4 className="titleCard">100% certified secure purchase</h4>
                <p className="infoCard">Your safety is our priority</p>
            </article>
        </section>
    )
}

export default Advantages
