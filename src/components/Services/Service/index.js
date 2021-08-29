import React from "react"
import Image from "gatsby-image"
import styles from "../../../css/services.module.css"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

const Service = ({ service }) => {
  const { name, slug, images, price, details } = service
  console.log(images)

  let mainImage = images[0].fluid

  return (
    <article className={styles.service}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} />
        <div className={styles.imgOverlay}></div>
      </div>
      <div className={styles.footer}>
        <h3>{name || "default name"}</h3>
        <div className={styles.info}>
          <div className={styles.details}>
            <h6>from ${price}</h6>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

Service.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Service
