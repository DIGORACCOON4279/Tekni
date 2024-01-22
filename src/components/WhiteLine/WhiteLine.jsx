import "./WhiteLine.css";

const WhiteLine = () => {
    return (
        <section className="whiteLineSection">
            <article className="info">
                <h3 className="titleSection">White Line</h3>
                <p className="description">Elevating Every Experience, Every Time</p>
            </article>
            <article className="imgWhiteLine">
                <div className="imgContainerUno">
                    <img className="item itemUno" src="/img/whiteLineUno.webp" alt="" />
                    <p className="paragraph">Elevate Your Connectivity with Our Cutting-Edge Smartphones</p>
                </div>
                <div className="imgContainerDos">
                    <img className="item itemDos" src="/img/whiteLineDos.webp" alt="" />
                    <p className="paragraph">Redefining Communication with State-of-the-Art Smartphones</p>
                </div>
            </article>
        </section>
    )
}

export default WhiteLine
