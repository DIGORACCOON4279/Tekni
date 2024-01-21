import "./Error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <section className="errorSection">
            <div className="image">
                <img className="astronaut" src="../img/astronaut.webp" alt="Astronaut" />
            </div>
            <div className="info">
                <h1>
                    <span className="fourZeroFour">4</span>
                    <span className="fourZeroFour">0</span>
                    <span className="fourZeroFour">4</span>
                </h1>
                <h4 className="construction">Page not found</h4>
                <Link className="backToHome" to="/">
                    Back to home
                </Link>
            </div>
        </section>
    )
}

export default Error404
