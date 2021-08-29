import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"
import styles from "../css/company.module.css"
import ClientsCarousel from "../components/ClientsCarousel"

export default class Company extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Company" description="List of our Salesforce developers and architects." />
        <StyledHero img={this.props.data.blogBcg.childImageSharp.fluid}>
          <h1>Anastasia Technology LLC</h1>
        </StyledHero>
        <section>
          <div className={styles.container}>
            <div className={styles.containerContent2Column}>
              <div>
                <h2>
                  A modern consulting firm focused on implementation of Salesforce technology.
                </h2>
              </div>
              <div>
                <p className={styles.paragraph}>
                  Anablock Salesforce implementation team brings the best of Anablock to every client, every day creating meaningful and impactful experiences to help transform their business and achieve higher value from Salesforce.
                <br /> <br />
                Our deep industry knowledge and market-leading solutions and capabilities will drive your company’s existing and future transformation challenges.
                <br /> <br />
                Working across industries, technologies and geographies, we design and scale Salesforce solutions rapidly—helping to accelerate your journey to new value and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.clientsCarousel__section}>
          <ClientsCarousel clientsLogos={this.props.data.clients.edges} />
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "background-company.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    clients: allContentfulClientsLogos(sort: {fields: [order], order: [ASC]}) {
      edges {
        node {
          name
          logo {
            file {
              url
            }
          }
          order
        }
      }
    }
  }
`
