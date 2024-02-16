import "./Smartphone.css";
import { Link } from "react-router-dom";

const Smartphone = () => {
    return (
        <section className="smartphoneSection">
            <article className="imgSmartphoneSection">
                <div className="smartphoneSectionUno">
                    <img className="item" src="/img/smartphoneUno.webp" alt="Product pic" />
                    <section className="btnInfo">
                        <p className="paragraph">Capture life's moments with precision using our smartphones</p>
                        <Link to="../category/smartphone" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="info">
                    <h3 className="titleSection">Smartphones</h3>
                    <p className="description">Redefining Connectivity, Simplifying Life</p>
                </div>
                <div className="smartphoneSectionDos">
                    <img className="item" src="/img/smartphoneDos.webp" alt="Product pic" />
                    <section className="btnInfo">
                        <p className="paragraph">Unleash the power of connectivity with our smartphones.</p>
                        <Link to="../category/smartphone" className="cta"> See more...</Link>
                    </section>
                </div>
            </article>
        </section>
    )
}

export default Smartphone
