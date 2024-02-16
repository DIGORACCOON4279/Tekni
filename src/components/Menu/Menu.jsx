import "./Menu.css";

const Menu = () => {
    return (
        <li>
            <label htmlFor="menu">
                <img className="menuIcon" src="/img/menu.svg" alt="Icon"/>
                <input id="menu" type="checkbox"/>
            </label>
        </li>
    )
}

export default Menu
