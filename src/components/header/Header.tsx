import "./header.css"
import { Switch } from "@mui/material"
import { FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

function Header() {
  const [switchActivate, setSwitchActivate] = useState(false)

  const tootleDarkTheme = () => {
    setSwitchActivate(!switchActivate)
  }

  return (
    <>
      <header>
        <nav>
          <p>Apresentação</p>
          <p>Meus Projetos</p>
          <p>Meu Currículo</p>
          <p>Participações</p>
        </nav>

        <div className="redes">
          <a
            href="https://www.linkedin.com/in/pedrosantosjoon/"
            target="__blank"
          >
            <p> LinkedIn</p>
            <FaLinkedin className="icone-redes" />
          </a>

          <a href="https://github.com/PSjoon" target="__blank">
            <p>GitHub</p>
            <FaGithub className="icone-redes" />
          </a>

          <Switch onChange={tootleDarkTheme} checked={switchActivate} />
        </div>
      </header>

      <section className="section-border-header">
        <div className="border-header"></div>
        <div className="border-header-radius"></div>
      </section>
    </>
  )
}

export default Header
