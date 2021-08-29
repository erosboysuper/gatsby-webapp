import React from "react"
import Service from "../../Services/Service"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../../../css/services.module.css"
import Title from "../../Title"
// import Services from "../../../../pages/services"

const getFeaturedServices = graphql`
  query {
    featuredServices: allContentfulServices(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          slug
          price
          details
          contentful_id
          description {
            description
          }
          images {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedServices = () => {
  const response = useStaticQuery(getFeaturedServices)
  const services = response.featuredServices.edges

  return (
    <section className={styles.services}>
      <Title title="Featured" subtitle="Services" inverse="false" />
      <div className={styles.center}>
        {services.map(({ node }) => {
          return <Service key={node.contentful_id} service={node} />
        })}
      </div>
      <div className="btn-container--center">
        <AniLink fade to="/services" className="btn-primary">
          all services
        </AniLink>
      </div>
    </section>
  )
}

export default FeaturedServices