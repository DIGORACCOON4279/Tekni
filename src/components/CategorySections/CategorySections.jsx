import "./CategorySections.css";

const CategorySections = () => {
    return (
        <li className="categorySection">
            <img src="./img/categories.svg" alt=""/>Categories
            <nav className="categoryItems">
                <ul>
                    <li className="li" ><img src="./img/laptop6.webp" alt="Laptop pic"/>Laptops</li>
                    <li className="li" ><img src="./img/smartphone6.webp" alt="smartphone pic"/>Smartphones</li>
                    <li className="li" ><img src="./img/tv8.webp" alt="Tv pic"/>SmartTVs</li>
                    <li className="li" ><img src="./img/headset1.webp" alt="Headset pic"/>Headset</li>
                </ul>
            </nav>
        </li>
    )
}

export default CategorySections
