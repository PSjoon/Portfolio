import { FaDownload } from "react-icons/fa"
import "./Career.css"
import CvFile from "/cvFile.pdf"

function Career() {
  return (
    <>
      <div className="topic">
        <h1 id="curriculo" className="h1-project">
          Currículo
        </h1>

        <h1 id="carreira" className="h1-carer">
          Carreira
        </h1>
      </div>
      <section className="curriculum-container">
        <a href={CvFile} className="curriculum" target="__blank">
          <div className="image-CV" />
          <div className="download-container">
            <div className="download">
              <p>Baixar Currículo</p>
              <FaDownload />
            </div>
          </div>
        </a>

        <div className="career">
          <div className="dash-container">
            <div className="container-text">
              <p>set/21 - Linux</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>jun/22 - PHP</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>fev/23 - Javascript</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>set/23 - Typescript</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>jan/24 - Java</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>***</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>***</p>
              <div className="dash" />
            </div>
            <div className="container-text">
              <p>***</p>
              <div className="dash" />
            </div>
          </div>

          <div className="divide"></div>

          <div className="dash-container-reverse">
            <div className="container-text-reverse">
              <div className="dash" />
              <p>abr/21 - Lógica</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>abr/22 - HTML5 - CSS3</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>nov/22 - Python</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>jun/23 - ReactJs</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>dez/23 - TCC TOTH</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>jan/24 - Bichinhos de TI</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>***</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>***</p>
            </div>
            <div className="container-text-reverse">
              <div className="dash" />
              <p>***</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Career
