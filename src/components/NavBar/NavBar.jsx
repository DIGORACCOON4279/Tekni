import CategorySections from "../CategorySections/CategorySections";
import IconsMenu from "../IconsMenu/IconsMenu";
import "./NavBar.css"

const NavBar = () => {
    return (
        <header className="header">
                <img src="img/logo.webp" alt="" className="logoTekni"/>

            {/* <input id="menu" type="checkbox"/> */}
            <nav className="navBar">
                <ul>
                    <li><img src="./img/home.svg" alt=""/>Home</li>
                    <li><img src="./img/products.svg" alt=""/>Products</li>
                    <CategorySections/>
                    <li><img src="./img/services.svg" alt=""/>Services</li>
                    <li><img src="./img/contactUs.svg" alt=""/>Contact us</li>
                </ul>
            </nav>

            <nav className="iconsMenu">
                <IconsMenu/>
            </nav>

        </header>
    )
}

export default NavBar
