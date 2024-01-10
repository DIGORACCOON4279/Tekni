import "./CardProducts.css";

const CardProducts = () => {
    return (
            <article className="cardProduct">
                <img src="./img/smartphone4.webp" alt="Smartphone pic"/>
                <div className="description">
                    <h3>Smartphone</h3>
                    <p>NLX-04<span>...$799</span></p>
                </div>
                <button>Add to card</button>
            </article>

    )
}

export default CardProducts
