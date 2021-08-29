import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import styles from "../css/exploreServices.module.css"
import Offer from "../components/Offer"
import WebToLead from "../components/WebToLead"

export default function exploreServices({ data }) {
  return (
    <Layout>
      <SEO title="Salesforce Services" description="Our Salesforce consulting services." />
      {/* <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact /> */}
      <section className={styles.section}>
        <Image
          fluid={data.exploreServicesBcg.childImageSharp.fluid}
          className={styles.backgroundImage}
          style={{ position: "absolute" }}
        />
        <div className={styles.container}>
          <div className={styles.containerFirstColumn}>
            <Offer
              packages={true}
              title="Grow your bussiness with Salesforce."
              hourly="55"
              freeHours="10"
            />
          </div>
          <div>
            <WebToLead />
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
