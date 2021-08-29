import React from "react"
// import Title from "../../../Title"
import styles from "./index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <div className={styles.aboutCenter}>
        <div className={styles.aboutLeftContent}>
          <h2>
            Anablock's technical team helps organizations to implement, customize, and optimize their Salesforce apps. <br />
          </h2>
        </div>
        <div className={styles.aboutRightContent}>
          <AniLink fade to="/company" className={`${styles.btnLeft} btn-primary--red`}>
            portfolio
          </AniLink>
          <AniLink fade to="/contact" className={`${styles.btnRight} btn-primary`}>
            contact us
          </AniLink>
        </div>
      </div>
    </section>
  )
}

export default About
