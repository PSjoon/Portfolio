import { FaArrowAltCircleUp } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer>
        <div className="redes-footer">
          <h4>Redes:</h4>
          <a
            href="https://www.linkedin.com/in/pedrosantosjoon/"
            target="__blank"
          >
            <p> LinkedIn</p>
          </a>

          <a href="https://github.com/PSjoon" target="__blank">
            <p>GitHub</p>
          </a>
        </div>
      </footer>
      <FaArrowAltCircleUp className="arrow-up" onClick={scrollToTop} />
    </>
  )
}

export default Footer
