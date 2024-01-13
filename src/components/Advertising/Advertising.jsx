import "./Advertising.css";

const Advertising = () => {
    return (
    <section className="advertisingSection">
        <section className="advertising smart">
            <div className="infoDiscount">
                <h3 className="subtitle">25% off <span>🚀</span></h3>
                <p className="category">On SmartTVs</p>
                <p className="startingFrom">Starting from $100</p>
                <button className="btnDiscount">Get offer!</button>
            </div>
            <img className="imgProduct" src="../img/tv6.webp" alt="" />
        </section>
        <section className="advertising smartphone">
            <div className="infoDiscount">
                <h3 className="subtitle">35% off <span>🚀</span></h3>
                <p className="category">On Smartphones</p>
                <p className="startingFrom">Starting from $100</p>
                <button className="btnDiscount">Get offer!</button>
            </div>
            <img className="imgProduct" src="../img/smartphone9.webp" alt="" />
        </section>
        <section className="advertising laptopOne">
            <div className="infoDiscount">
                <h3 className="subtitle">50% off <span>🚀</span></h3>
                <p className="category">On Laptops</p>
                <p className="startingFrom">Starting from $100</p>
                <button className="btnDiscount">Get offer!</button>
            </div>
            <img className="imgProduct" src="../img/laptop7.webp" alt="" />
        </section>
        <section className="advertising headset">
            <div className="infoDiscount">
                <h3 className="subtitle">45% off <span>🚀</span></h3>
                <p className="category">On Headset</p>
                <p className="startingFrom">Starting from $100</p>
                <button className="btnDiscount">Get offer!</button>
            </div>
            <img className="imgProduct" src="../img/headset8.webp" alt="" />
        </section>
        <section className="advertising laptopTwo">
            <div className="infoDiscount">
                <h3 className="subtitle">30% off <span>🚀</span></h3>
                <p className="category">On Laptops</p>
                <p className="startingFrom">Starting from $100</p>
                <button className="btnDiscount">Get offer!</button>
            </div>
            <img className="imgProduct" src="../img/laptop2.webp" alt="" />
        </section>
    </section>
    )
}

export default Advertising

