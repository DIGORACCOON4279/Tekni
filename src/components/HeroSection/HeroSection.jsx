import "./HeroSection.css"

const HeroSection = () => {
    return (
        <section className="heroSection">
            <img className="imgUno" src="/img/heroSectionUno.webp" alt="HeroSection img" />
            <img className="imgDos" src="/img/heroSectionDos.webp" alt="HeroSection img" />
            <img className="imgTres"  src="/img/heroSectionTres.webp" alt="HeroSection img" />
            <img className="imgCuatro"  src="/img/heroSectionCuatro.webp" alt="HeroSection img" />
            <article className="articleHeroSection">
                <h1 className="mainTitle">"Trust in us today; we create tomorrow."</h1>
                <h3 className="mainSubtitle">Always thinking about your well-being and the environment.</h3>
            </article>
            <img className="imgCinco" src="/img/heroSectionCinco.webp" alt="HeroSection img" />
            <img className="imgSeis" src="/img/heroSectionSeis.webp" alt="HeroSection img" />
            <img className="imgSiete" src="/img/heroSectionSiete.webp" alt="HeroSection img" />
        </section>
    )
}

export default HeroSection

