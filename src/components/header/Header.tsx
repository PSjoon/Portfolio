import "./header.css"
import { Switch } from "@mui/material"
import { FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

import { IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

function Header() {
  const [switchActivate, setSwitchActivate] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  const tootleDarkTheme = () => {
    setSwitchActivate(!switchActivate)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="app">
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <IoClose size={40} /> : <RxHamburgerMenu size={40} />}
        </button>

        <div className={`menu-container ${menuOpen ? "open" : ""}`}>
          <p>Apresentação</p>
          <p>Meus Projetos</p>
          <p>Meu Currículo</p>
          <p>Participações</p>
        </div>

        <div className="redes-mobile">
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
      </div>

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
