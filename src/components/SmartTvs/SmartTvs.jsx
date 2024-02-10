import "./SmartTvs.css";
import { Link } from "react-router-dom";

const SmartTvs = () => {
    return (
        <section className="smartTvsSection">
        <article className="info">
            <h3 className="titleSection">SmartTVs</h3>
            <p className="description">Transforming Entertainment with Intelligent Technology. Immerse Yourself in a World of Stunning Visuals and Intuitive Connectivity for an Unmatched Viewing Experience.</p>
        </article>
        <article className="imgSmartTvsSection">
            <div className="smartTvsSectionUno">
                <img className="item" src="/img/smartTvUno.webp" alt="" />
                <section className="btnInfo">
                    <p className="paragraph">Enhance your visual experience with SmartTV</p>
                    <Link to="../category/tv" className="cta"> See more...</Link>
                </section>
            </div>
            <div className="smartTvsSectionDos">
                <img className="item" src="/img/smartTvDos.webp" alt="" />
                <section className="btnInfo">
                    <p className="paragraph">Connect, enjoy, live with SmartTV.</p>
                    <Link to="../category/tv" className="cta"> See more...</Link>
                </section>
            </div>
            <div className="smartTvsSectionTres">
                <img className="item" src="/img/smartTvTres.webp" alt="" />
                <section className="btnInfo">
                    <p className="paragraph">More than a screen, your window to the world with SmartTV.</p>
                    <Link to="../category/tv" className="cta"> See more...</Link>
                </section>
            </div>
        </article>
    </section>
    )
}

export default SmartTvs
