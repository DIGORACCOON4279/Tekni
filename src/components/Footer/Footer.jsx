import "./Footer.css";


const Footer = () => {
    return (
        <section className="footerSection">
            <div className="sections">
                <article className="sectionContact">
                    <div className="socialMedia">
                        <h4 className="contactUs">Contact us</h4>
                        <section className="iconItems" >
                            <a href="https://www.facebook.com/" target="_black"><img src="./img/facebook.svg" alt="" className="icon" /></a>
                            <a href="https://twitter.com/" target="_black"><img src="./img/twitter.svg" alt="" className="icon" /></a>
                            <a href="https://www.instagram.com/" target="_black"><img src="./img/instagram.svg" alt="" className="icon" /></a>
                            <a href="https://www.youtube.com/" target="_black"><img src="./img/youtube.svg" alt="" className="icon" /></a>
                        </section>
                    </div>
                    <div className="distributors">
                        <h4 className="contactUs">Distributors</h4>
                        <section className="flags">
                            <div className="canadaFlag">
                                <img src="./img/canadaFlag.svg" alt="" className="icon" />
                                <p>Canada - 250 223 4559</p>
                            </div>
                            <div className="colombiaFlag">
                                <img src="./img/colombiaFlag.svg" alt="" className="icon" />
                                <p>Colombia - 310 259 5845</p>
                            </div>
                        </section>
                    </div>
                </article>
                <article className="categories">
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Categories</li>
                        <li>Services</li>
                        <li>Contact us</li>
                    </ul>
                </article>
                <article className="products">
                    <ul>
                        <li>Laptops</li>
                        <li>Smartphones</li>
                        <li>SmartTVs</li>
                        <li>Headset</li>
                    </ul>
                </article>
                <article className="options">
                    <ul>
                        <li>Tekni store</li>
                        <li>Customer service</li>
                        <li>Security policies</li>
                        <li>Help with my product</li>
                        <li>More about Tekni ...</li>
                    </ul>
                </article>
            </div>
            <div className="developerInfo">
                <p>Developer with 🧡 by Diego Marin | <img src="./img/logoRaccoon.svg" alt="" className="personalBrand" /> | Colombia - Canada | 2024</p>
            </div>
        </section>
    )
}

export default Footer











