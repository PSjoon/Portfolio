import { useEffect, useRef, useState } from "react"
import "./Carousel.css"
import { motion } from "framer-motion"

const data = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1673716788931-894d9e9f3a38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1707147671059-94dd36708ca7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1673716788931-894d9e9f3a38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1707147671059-94dd36708ca7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

function Carousel() {
  const carrousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carrousel.current?.scrollWidth, carrousel.current?.offsetWidth)
    if (carrousel.current?.scrollWidth && carrousel.current?.offsetWidth) {
      setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    }
  }, [])

  return (
    <>
      <section className="projects">
        <div className="project-list-container">
          <div className="image-global">
            <motion.div
              ref={carrousel}
              className="carrousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: width }}
              >
                {data.map((image) => (
                  <motion.div className="images" key={image.id}>
                    <img src={image.image} alt="" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="project-list-container"></div>
      </section>
    </>
  )
}

export default Carousel
