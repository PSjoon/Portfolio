import { FaDownload } from "react-icons/fa"
import "./Career.css"
import CvFile from "/cvFile.pdf"

function Career() {
  return (
    <>
      <section className="curriculum-container">
        <div className="curriculum">
          <div className="image-CV" />
          <a href={CvFile} className="download-container" target="__blank">
            <div className="download">
              <p>Baixar Currículo</p>
              <FaDownload />
            </div>
          </a>
        </div>

        <div className="career">
          <div className="dash-container">
            <div className="container-text">
              <p>dez/23 - ETEC</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>Pedro</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>jan/24 - Bichinhos de TI</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>Pedro</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>Pedro</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>Pedro</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>Pedro</p>
              <div className="dash"></div>
            </div>
            <div className="container-text">
              <p>Pedro</p>
              <div className="dash"></div>
            </div>
          </div>

          <div className="divide"></div>

          <div className="dash-container-reverse">
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>2023 - TOTH</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash"></div>
              <p>Pedro</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Career
