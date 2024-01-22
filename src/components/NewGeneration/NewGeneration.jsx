import "./NewGeneration.css";

const NewGeneration = () => {
    return (
        <section className="newGenerationSection">
            <article className="info">
                <h3 className="titleSection">New Generation</h3>
                <p className="description">Redefining Innovation, Inspiring the Future</p>
            </article>
            <article className="imgNewGeneration">
                <div className="newGenerationUno">
                    <img className="item" src="/img/newGenerationUno.webp" alt="" />
                    <p className="paragraph">Step Into Tomorrow with New Generation. Cutting-Edge Technology and Timeless Design Combine for a Superior Experience</p>
                </div>
                <div className="newGenerationDos">
                    <img className="item" src="/img/newGenerationDos.webp" alt="" />
                    <p className="paragraph">Explore the Future of Innovation – New Generation: Setting Trends, Defining Standards.</p>
                </div>
                <div className="newGenerationTres">
                    <img className="item" src="/img/newGenerationTres.webp" alt="" />
                    <p className="paragraph">Elevate Your Lifestyle with New Generation. Experience Next-Level Technology and Unmatched Performance.</p>
                </div>
            </article>
        </section>
    )
}

export default NewGeneration;
