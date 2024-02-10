import "./Laptops.css";
import { Link } from "react-router-dom";

const Laptops = () => {
    return (
        <section className="laptopsSection">
            <article className="info">
                <h3 className="titleSection">Laptops</h3>
                <p className="description">Where Cutting-Edge Technology Meets Exceptional Performance. Embrace a New Era of Innovation and Seamless Computing with Our Thoughtfully Crafted Devices.</p>
            </article>
            <article className="imgLaptopsSection">
                <div className="laptopsSectionUno">
                    <img className="item" src="/img/laptopUno.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Portability</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionDos">
                    <img className="item" src="/img/laptopDos.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Versatility</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionTres">
                    <img className="item" src="/img/laptopTres.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Performance</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionCuatro">
                    <img className="item" src="/img/laptopCuatro.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Connectivity</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionCinco">
                    <img className="item" src="/img/laptopCinco.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Battery Life</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionSeis">
                    <img className="item" src="/img/laptopSeis.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Display</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionSiete">
                    <img className="item" src="/img/laptopSiete.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Storage</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="laptopsSectionOcho">
                    <img className="item" src="/img/laptopOcho.webp" alt="" />
                    <section className="btnInfo">
                        <p className="paragraph">Ergonomic Design</p>
                        <Link to="../category/laptop" className="cta"> See more...</Link>
                    </section>
                </div>
            </article>
        </section>
    )
}

export default Laptops
