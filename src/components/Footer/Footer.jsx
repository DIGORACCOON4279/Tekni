import "./Footer.css";
import { NavLink, useLocation} from "react-router-dom";

const Footer = () => {
 // Obtén la ubicación actual
    const location = useLocation();

    // Verifica si estás en la página de error 404
    const is404Page = location.pathname === '/Error';

    return !is404Page &&(
        <section className="footerSection" id="footerSection">
            <div className="sections">
                <article className="sectionContact">
                    <div className="socialMedia">
                        <h4 className="contactUs">Contact us</h4>
                        <section className="iconItems" >
                            <a href="https://www.facebook.com/" target="_black"><img src="/img/facebook.svg" alt="" className="icon" /></a>
                            <a href="https://twitter.com/" target="_black"><img src="/img/twitter.svg" alt="" className="icon" /></a>
                            <a href="https://www.instagram.com/" target="_black"><img src="/img/instagram.svg" alt="" className="icon" /></a>
                            <a href="https://www.youtube.com/" target="_black"><img src="/img/youtube.svg" alt="" className="icon" /></a>
                        </section>
                    </div>
                    <div className="distributors">
                        <h4 className="contactUs">Distributors</h4>
                        <section className="flags">
                            <div className="canadaFlag">
                                <img src="/img/canadaFlag.svg" alt="" className="icon" />
                                <p>Canada - 250 223 4559</p>
                            </div>
                            <div className="colombiaFlag">
                                <img src="/img/colombiaFlag.svg" alt="" className="icon" />
                                <p>Colombia - 310 259 5845</p>
                            </div>
                        </section>
                    </div>
                </article>
                <article className="categories">
                    <ul>
                        <li>
                            <NavLink className="NavLink" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="../itemListContainer">
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="../servicesPage">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="../ContactUsPage">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </article>
                <article className="products">
                    <ul>
                        <li>
                            <NavLink className="NavLink" to="../category/laptop">
                                Laptops
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="../category/smartphone">
                                Smartphones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="../category/tv">
                                SmartTVs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="../category/headset">
                                Headset
                            </NavLink>
                        </li>
                    </ul>
                </article>
                <article className="options">
                    <ul>
                        <li>
                            <NavLink className="NavLink" to="/Error">
                                Tekni Store
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/Error">
                                Customer Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/Error">
                                Security Policies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/Error">
                                Help with my product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink" to="/Error">
                                More about Tekni
                            </NavLink>
                        </li>
                    </ul>
                </article>
            </div>
            <div className="developerInfo">
                <p>Developer with 🧡 by Diego Marin | <img src="/img/logoRaccoon.svg" alt="" className="personalBrand" /> | Colombia - Canada | 2024</p>
            </div>
        </section>
    )
}

export default Footer










