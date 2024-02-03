import "./About.css"
import backgoundName from "/RectangleName.svg"
import profilePicture from "/profilePicture.png"

function About() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="background-name">
            <img src={backgoundName} alt="" />
            <div className="container-name">
              <p className="PS">PS</p>
              <p>Joonie</p>
            </div>
          </div>
          <p className="descript">
            Olá! Sou o Pedro programador Full-Stack e iniciando na
            desenvolvimento de Software. Possuo habilidades robustas tanto no
            desenvolvimento frontend quanto no backend, estou comprometido em
            criar soluções eficientes e elegantes para os desafios de
            desenvolvimento web. Estou constantemente buscando aprendizado e me
            adaptanto às últimas tendências e tecnologias, garantindo que meus
            projetos estejam sempre na vanguarda da inovação. Estou animado para
            contribuir com minha proficiência em qualquer equipe e ajudar a
            impulsionar o sucesso dos projetos de forma colaborativa e eficaz.
          </p>
        </section>
        <section className="picture">
          <img src={profilePicture} alt="" />
        </section>
      </main>

      <section className="animation-icons-container">
        <div className="animation-icons"></div>
      </section>
    </>
  )
}

export default About
