import React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
    query {
        site {
            siteMetadata {
                siteTitle: title
                siteDescription: description
                author
                siteUrl
                image 
                twitterUsername
            }
        }
    }
`

const SEO = ({ title, description }) => {
    // pull out all of the data from the grahpql query
    const {site} = useStaticQuery(getSiteData);

    const {
        siteDescription,
        siteTitle,
        siteUrl,
        image,
        twitterUsername,
    } = site.siteMetadata;

    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDescription} />
            <meta name="image" content={image} />
            {/* facebook card */}
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            {/* twitter card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
        </Helmet>
    )
}

export default SEO
