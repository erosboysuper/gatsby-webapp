import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./index.module.css"

const ClientsCarousel = ({ clientsLogos }) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
    slidesToShow: 8,
    slidesToScroll: 1,
  }
  return (
    <Slider className={styles.clientsCarousel} {...settings}>
      {clientsLogos.map(({ node }, index) => {
        console.log(node)
        return (
          <div
            className={styles.clientsCarousel__item}
            key={node.name}
            name={node.name}
          >
            <img src={node.logo.file.url} alt={node.name} draggable="false" />
          </div>
        )
      })}
    </Slider>
  )
}

export default ClientsCarousel
