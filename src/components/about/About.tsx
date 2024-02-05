import {
  SiAxios,
  SiExpress,
  SiFastify,
  SiGooglecolab,
  SiInsomnia,
  SiJupyter,
  SiPostman,
  SiVercel,
} from "react-icons/si"
import "./About.css"
import backgoundName from "/RectangleName.svg"
import profilePicture from "/profilePicture.png"
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoPhp,
  BiLogoPython,
  BiLogoJava,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoGithub,
  BiLogoDocker,
} from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import { DiMysql, DiSqllite } from "react-icons/di"
import { FaLinux } from "react-icons/fa"

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
        <div className="container-animation">
          <div className="animation-icons">
            <BiLogoHtml5 className="icons" />
            <BiLogoCss3 className="icons" />
            <BiLogoJavascript className="icons" />
            <BiLogoTypescript className="icons" />
            <BiLogoReact className="icons" />
            <TbBrandNextjs className="icons" />
            <SiExpress className="icons" />
            <SiFastify className="icons" />
            <BiLogoNodejs className="icons" />
            <BiLogoPhp className="icons" />
            <BiLogoPython className="icons" />
            <BiLogoJava className="icons" />
            <BiLogoMongodb className="icons" />
            <DiMysql className="icons" />
            <DiSqllite className="icons" />
            <SiAxios className="icons" />
            <SiGooglecolab className="icons" />
            <SiJupyter className="icons" />
            <BiLogoGit className="icons" />
            <BiLogoGithub className="icons" />
            <SiPostman className="icons" />
            <SiInsomnia className="icons" />
            <FaLinux className="icons" />
            <SiVercel className="icons" />
            <BiLogoDocker className="icons" />
          </div>

          <div className="animation-icons">
            <BiLogoHtml5 className="icons" />
            <BiLogoCss3 className="icons" />
            <BiLogoJavascript className="icons" />
            <BiLogoTypescript className="icons" />
            <BiLogoReact className="icons" />
            <TbBrandNextjs className="icons" />
            <SiExpress className="icons" />
            <SiFastify className="icons" />
            <BiLogoNodejs className="icons" />
            <BiLogoPhp className="icons" />
            <BiLogoPython className="icons" />
            <BiLogoJava className="icons" />
            <BiLogoMongodb className="icons" />
            <DiMysql className="icons" />
            <DiSqllite className="icons" />
            <SiAxios className="icons" />
            <SiGooglecolab className="icons" />
            <SiJupyter className="icons" />
            <BiLogoGit className="icons" />
            <BiLogoGithub className="icons" />
            <SiPostman className="icons" />
            <SiInsomnia className="icons" />
            <FaLinux className="icons" />
            <SiVercel className="icons" />
            <BiLogoDocker className="icons" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
