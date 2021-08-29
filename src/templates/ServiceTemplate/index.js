import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import StyledHero from '../../components/StyledHero'
import styles from './index.module.css'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap, FaMoneyBill } from 'react-icons/fa'
import SingleService from '../../components/SingleService'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const serviceTemplate = ({ data }) => {
    const {
        name,
        price,
        details,
        description: { description },
        images
    } = data.service

    const [mainImage, ...serviceImages] = images

    return (
        <Layout>
            <StyledHero />
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {serviceImages.map((item, index) => {
                            return <Img key={index} fluid={item.fluid} alt="single service"
                                className={styles.image} />
                        })}
                    </div>
                    <h2>{name}</h2>
                    <p>
                        <FaMoneyBill className={styles.icon} />
                        starting form ${price}
                    </p>
                    <p className={styles.description} >
                        {description}
                    </p>
                    <AniLink fade to="/services" className="btn-primary">
                        back to services
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}
/* 
* In ($slug:String), slug name is used because of 
* slug: node.slug in gatsby-node.js    
*/
export const query = graphql`
    query ($slug:String!){
        service: contentfulServices(slug:{ eq: $slug }) {
            name
            price
            details
            description{
                description
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

export default serviceTemplate
