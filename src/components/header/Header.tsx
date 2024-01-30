import { Switch } from "@mui/material"
import "./header.css"
import { useState } from "react"

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
          <a href="/">
            <p> LinkedIn</p>
          </a>
          <a href="/">
            <p>Github</p>
          </a>
          <Switch onChange={tootleDarkTheme} checked={switchActivate} />
        </div>
      </header>
    </>
  )
}

export default Header
