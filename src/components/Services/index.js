import React from 'react'
import ServiceList from './ServiceList'
import { useStaticQuery, graphql } from 'gatsby'

const getServices = graphql`
query {
    services: allContentfulServices {
      edges {
        node {
          name
          slug
          price
          details
          description {
            description
          }
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Services = () => {
  // hook
  const { services } = useStaticQuery(getServices);

  return (
    <ServiceList services={services} />
  )
}

export default Services
