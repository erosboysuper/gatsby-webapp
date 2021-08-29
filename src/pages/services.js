import React, { Component } from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import Offer from "../components/Offer"
import WebToLead from "../components/WebToLead"
import styles from "../css/services.module.css"

export default class services extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Services" description="This is a list of our Salesforce services" />
        <Services />
        <section className={styles.section}>
          <Image
            fluid={this.props.data.exploreServicesBcg.childImageSharp.fluid}
            className={styles.backgroundImage}
            style={{ position: "absolute" }}
          />
          <div className={styles.container}>
            <div className={styles.containerFirstColumn}>
              <Offer
                packages={false}
                title="Our hourly rates start at"
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
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    exploreServicesBcg: file(relativePath: { eq: "background-explore.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
console.log(query)
