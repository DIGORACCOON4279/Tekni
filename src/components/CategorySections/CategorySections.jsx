import { NavLink} from "react-router-dom";
import "./CategorySections.css";

const CategorySections = () => {
    return (
        <li className="categorySection">
            <img src="/img/categories.svg" alt=""/>Categories
            <nav className="categoryItems">
                <ul>
                    <NavLink className="navLinkCategory" to="../category/laptop">
                        <li className="li" >
                            <img src="/img/laptop6.webp" alt="Laptop pic"/>Laptops
                        </li>
                    </NavLink>
                    <NavLink className="navLinkCategory" to="../category/smartphone">
                        <li className="li" >
                            <img src="/img/smartphone6.webp" alt="smartphone pic"/>Smartphones
                        </li>
                    </NavLink>
                    <NavLink className="navLinkCategory" to="../category/tv">
                        <li className="li" >
                            <img src="/img/tv8.webp" alt="Tv pic"/>SmartTVs
                        </li>
                    </NavLink>
                    <NavLink className="navLinkCategory" to="../category/headset">
                        <li className="li" >
                            <img src="/img/headset1.webp" alt="Headset pic"/>Headset
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </li>
    )
}

export default CategorySections





