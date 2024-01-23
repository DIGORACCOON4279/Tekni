
import { Link, NavLink} from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";
import CategorySections from "../CategorySections/CategorySections";
import IconsMenu from "../IconsMenu/IconsMenu";
import "./NavBar.css"

const NavBar = () => {
    return (
        <header className="header">
            <Link to="/" >
                <img src="/img/logo.webp" alt="" className="logoTekni"/>
            </Link>
            <input id="menu" type="checkbox"/>
            <nav className="navBar">
                <label htmlFor="menu">
                </label>
                <ul>
                    <NavLink className="navLink" to="/" >
                        <li className="link">
                            <img src="/img/home.svg" alt=""/>Home
                        </li>
                    </NavLink>
                    <NavLink className="navLink" to="/itemListContainer" >
                        <li className="link">
                            <img src="/img/products.svg" alt=""/>Products
                        </li>
                    </NavLink>
                    <CategorySections/>
                    <Services/>
                    <ContactUs />
                </ul>
            </nav>
            <nav className="iconsMenu">
                <IconsMenu/>
            </nav>
        </header>
    )
}

export default NavBar
