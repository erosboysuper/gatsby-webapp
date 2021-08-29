import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"

const Offer = ({ title, packages, hourly, freeHours }) => {
  return (
    <div>
      <div className={styles.offerWrapper}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <div className={styles.offerCards}>
          <div className={styles.offerCard}>
            <div className={styles.offerCard__toptext}>starts from</div>
            <div className={styles.offerCard__maintext}>${hourly}</div>
            <div className={styles.offerCard__bottomtext}>per hour</div>
          </div>
          <div className={styles.offerCard}>
            <div className={styles.offerCard__toptext}>get your</div>
            <div className={styles.offerCard__maintext}>{freeHours}</div>
            <div className={styles.offerCard__bottomtext}>free hours</div>
          </div>
        </div>
        {packages === true &&
          <div className={styles.subtitle}>
            Our service{" "}
            <Link to="/services" className={styles.subtitleLink}>
              packages.
                </Link>{" "}
          </div>
        }
      </div>
    </div>
  )
}

export default Offer
