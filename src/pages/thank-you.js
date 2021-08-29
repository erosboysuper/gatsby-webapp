import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import styles from "../css/exploreServices.module.css"

export default function exploreServices({ data }) {
  return (
    <Layout>
      <SEO title="Thank you!" description="Thank you for inquiring about our Salesforce consulting services."/>
      <section className={styles.section}>
        <Image
          fluid={data.exploreServicesBcg.childImageSharp.fluid}
          className={styles.backgroundImage}
          style={{ position: "absolute" }}
        />
        <div className={styles.container}>
          <div className={styles.offerWrapper}>
            <h1 className={styles.title}>
              Thank you for your interest in Anablock. We will be contacting you
              shortly.
            </h1>
            <div className={styles.subtitle}>
              In the meanwhile, check out{" "}
              <Link to="/services" className={styles.subtitleLink}>
                our services
              </Link>{" "}
              and learn more{" "}
              <Link to="/about-us" className={styles.subtitleLink}>
                about us.
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    exploreServicesBcg: file(relativePath: { eq: "background-explore.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
