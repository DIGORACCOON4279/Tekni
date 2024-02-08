import "./HeroSection.css"

const HeroSection = () => {
    return (
        <section className="heroSection">
            <img className="imgUno" src="/img/heroSectionUno.webp" alt="" />
            <img className="imgDos" src="/img/heroSectionDos.webp" alt="" />
            <img className="imgTres"  src="/img/heroSectionTres.webp" alt="" />
            <img className="imgCuatro"  src="/img/heroSectionCuatro.webp" alt="" />
            <article className="articleHeroSection">
                <h1 className="mainTitle">"Trust in us today; we create tomorrow."</h1>
                <h3 className="mainSubtitle">Always thinking about your well-being and the environment.</h3>
            </article>
            <img className="imgCinco" src="/img/heroSectionCinco.webp" alt="" />
            <img className="imgSeis" src="/img/heroSectionSeis.webp" alt="" />
            <img className="imgSiete" src="/img/heroSectionSiete.webp" alt="" />
        </section>
    )
}

export default HeroSection

