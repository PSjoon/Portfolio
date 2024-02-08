import "./header.css"
import { FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

import { IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        </div>
      </div>

      <header>
        <nav>
          <a href="#apresentacao">
            <p>Apresentação</p>
          </a>
          <a href="#projetos">
            <p>Meus Projetos</p>
          </a>
          <a href="#curriculo">
            <p>Meu Currículo</p>
          </a>

          <a href="#participacoes">
            <p>Participações</p>
          </a>
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
        </div>
      </header>

      <section className="section-border-header">
        <div className="border-header-radius"></div>
      </section>
    </>
  )
}

export default Header
