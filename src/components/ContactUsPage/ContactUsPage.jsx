import "./ContactUsPage.css";

const ContactUsPage = () => {
    return (
        <section className="sectionContactUs">
            <h2>⚡ Get 35%  off on all our devices this Black Friday!!! ⚡</h2>
            <div className="sideBySide">
                <section className="contactUs">
                    <div className="columnLocation">
                        <article className="titlesContactUs">
                            <h3 className="title">Location</h3>
                            <h3 className="title">Colombia</h3>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingUno.webp" alt="" />
                            <div className="info">
                                <h4>Av. 80 58-99</h4>
                                <p>Medellin</p>
                            </div>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingDos.webp" alt="" />
                            <div className="info">
                                <h4>Av. 74 85-40</h4>
                                <p>Bucaramanga</p>
                            </div>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingTres.webp" alt="" />
                            <div className="info">
                                <h4>Calle. 10 25-30</h4>
                                <p>Barranquilla</p>
                            </div>
                        </article>
                    </div>
                    <div className="columnLocation">
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingCuatro.webp" alt="" />
                            <div className="info">
                                <h4>Av. 58 38-92</h4>
                                <p>Bogota</p>
                            </div>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingCinco.webp" alt="" />
                            <div className="info">
                                <h4>Av. 97 22-09</h4>
                                <p>Ibague</p>
                            </div>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingSeis.webp" alt="" />
                            <div className="info">
                                <h4>Av. 12 15-65</h4>
                                <p>Armenia</p>
                            </div>
                        </article>
                    </div>
                    <div className="columnLocation">
                        <article className="titlesContactUs">
                            <h3 className="title">Location</h3>
                            <h3 className="title">Canada</h3>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingSiete.webp" alt="" />
                            <div className="info">
                                <h4>123 Main Street</h4>
                                <p>Montreal</p>
                            </div>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingOcho.webp" alt="" />
                            <div className="info">
                                <h4>456 Rue Maple</h4>
                                <p>Ville Quebec</p>
                            </div>
                        </article>
                        <article className="location">
                            <img className="buildingPic" src="/img/buildingNueve.webp" alt="" />
                            <div className="info">
                                <h4>548 Kelglen Crescent</h4>
                                <p>Manitoba</p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="mainAddress">
                    <div className="ContactNumber">
                        <article className="contactCountry">
                            <h4 className="title">Colombia</h4>
                            <p>Customer service<strong>300 547 8528</strong></p>
                            <p>Distribution<strong>310 259 5845</strong></p>
                            <p>Warranty<strong>302 254 8798</strong></p>
                            <p>Providers<strong>320 514 5982</strong></p>
                        </article>
                        <article  className="contactCountry">
                            <h4 className="title">Canada</h4>
                            <p>Customer service<strong>778 995 6523</strong></p>
                            <p>Distribution<strong>250 223 4559</strong></p>
                            <p>Warranty<strong>608 235 7779</strong></p>
                            <p>Providers<strong>250 654 9857</strong></p>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default ContactUsPage
