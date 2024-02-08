import { FaGithub } from "react-icons/fa"
import "./Carousel.css"
import { RiNotionFill } from "react-icons/ri"

function Carousel() {
  return (
    <>
      <h1 id="projetos">Projetos</h1>
      <section className="projects">
        <div className="project-list">
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
        </div>
        <div className="project-list">
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
          <div className="project-list-container">
            <div className="image"></div>
            <div className="language">
              <FaGithub size={30} className="icons-project" />
              <RiNotionFill size={30} className="icons-project" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carousel
