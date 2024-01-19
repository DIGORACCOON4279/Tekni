import "./Services.css"

const Services = () => {
    return (
        <li className="servicesSection">
            <img src="../img/services.svg" alt=""/>Services
            <section className="servicesContainer">
                <div className="servicesColumn">
                    <article className="infoServices">
                        <img src="../img/installation.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Installation and Setup:</h4>
                            <p className="paragraph">Offer installation and setup services for products that may be challenging for customers to configure.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                    <img src="../img/advice.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Personalized Advice:</h4>
                            <p className="paragraph">Provide personalized advice or consultations to help customers make informed decisions about products or services.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                    <img src="../img/product.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Product Customization:</h4>
                            <p className="paragraph">Offer customization services for products, such as engraving, screen printing, or customization based on customer preferences.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                    <img src="../img/training.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Training and Tutorials:</h4>
                            <p className="paragraph">Provide online tutorials or training sessions to help customers make the most of their products.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                    <img src="../img/postSale.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Post-Sale Services:</h4>
                            <p className="paragraph">Offer post-sale services, such as technical support, maintenance, or extended warranties.</p>
                        </div>
                    </article>
                </div>
                <div className="servicesColumn">
                    <article className="infoServices">
                    <img src="../img/gift.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Gift Wrapping:</h4>
                            <p className="paragraph">Provide gift wrapping services for purchased products, especially useful during gift-giving seasons.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                        <img src="../img/loyalty.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Loyalty Program:</h4>
                            <p className="paragraph">Implement a loyalty program that offers additional benefits to frequent customers, such as exclusive discounts or early access to new collections.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                        <img src="../img/pickUp.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">In-Store Pickup:</h4>
                            <p className="paragraph">Allow customers to shop online and pick up their products at a physical store if you have a physical presence.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                        <img src="../img/events.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Special Events:</h4>
                            <p className="paragraph">Organize online events, webinars, or workshops related to your products to build a community around your brand.</p>
                        </div>
                    </article>
                    <article className="infoServices">
                        <img src="../img/warranty.svg" alt="" className="iconServices" />
                        <div className="info">
                            <h4 className="title">Extended Warranties:</h4>
                            <p className="paragraph">Offer extended warranties or additional warranty services to provide customers with added peace of mind when making purchases.</p>
                        </div>
                    </article>
                </div>
            </section>
        </li>
    )
}

export default Services
