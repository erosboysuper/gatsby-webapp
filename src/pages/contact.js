import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from '../components/Contact'
import SEO from '../components/SEO'
import Banner from "../components/Banner"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" description="Contact us about our Salesforce consulting services." />
      <StyledHero img={data.contactBcg.childImageSharp.fluid}>
        <Banner
          title="Hello!"
        />
      </StyledHero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "hero-contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
