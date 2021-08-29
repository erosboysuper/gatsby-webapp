import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import FeaturedServices from '../components/Home/FeaturedServices'
import SEO from "../components/SEO"
import ClientsCarousel from "../components/ClientsCarousel"
import Title from "../components/Title"
// import Careers from "../components/Careers/Careers"

import styles from "../css/home.module.css"

export default ({ data }) => {
  const { allContentfulProject: { nodes: projects } } = data

  return (
    <Layout>
      <SEO title="Anablock" description="Anablock is a Salesforce implementation partner and business systems integrator." />
      <StyledHero home="true" img={data.mainBackground.childImageSharp.fluid}>
        <Banner
          title="We provide Salesforce Consulting and Implementation Services"
        >
        </Banner>
      </StyledHero>
      <About />

      <div className={`py-4 overflow-hidden ${styles.container}`}>
        <Title title="Trusted By" inverse="false" />
        <ClientsCarousel clientsLogos={data.clients.edges} />
      </div>

      <FeaturedServices />
    </Layout>
  )
}

export const query = graphql`
  {
    mainBackground: file(relativePath: {eq: "main-background.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allContentfulProject(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        contentful_id
        descriptionShort
        description {
          id
          description
        }
        title
        url
        image {
          children {
            ... on ImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
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

