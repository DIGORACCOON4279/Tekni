import "./Headset.css";
import { Link } from "react-router-dom";

const Headset = () => {
    return (
        <section className="headsetSection">
            <section className="info">
                <h3 className="titleSection">Headset</h3>
                <p className="description">Dive into Superior Sound Quality and Comfort. Elevate Your Audio Experience with our Precision-Engineered Headsets, Where Every Note and Beat Resonate for a Truly Immersive Journey.</p>
            </section>
            <section className="imgHeadsetSection">
                <div className="headsetSectionOne">
                    <img className="item" src="/img/headsetUno.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Immerse yourself in sound with our headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionTwo">
                    <img className="item" src="/img/headsetDos.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Your music, your world – experience it with our headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionThree">
                    <img className="item" src="/img/headsetTres.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Unleash the power of crystal-clear audio with our headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionFour">
                    <img className="item" src="/img/headsetCuatro.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Elevate your listening experience with premium headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionFive">
                    <img className="item" src="/img/headsetCinco.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Your sound, your style – discover it with our headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionSix">
                    <img className="item" src="/img/headsetSeis.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Escape into a world of sound with our high-quality headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionSeven">
                    <img className="item" src="/img/headsetSiete.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Headphones that redefine comfort and audio excellence.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
                <div className="headsetSectionEight">
                    <img className="item" src="/img/headsetOcho.webp" alt="Product" />
                    <section className="btnInfo">
                        <p className="paragraph">Feel the beat, hear the details – choose our headphones.</p>
                        <Link to="../category/headset" className="cta"> See more...</Link>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Headset
