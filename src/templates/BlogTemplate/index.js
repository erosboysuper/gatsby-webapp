import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styles from './index.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Blog = ({ data }) => {
    const {
        title,
        published,
    } = data.post

    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                return <h1>the image is gone</h1>
            },
        },
    }

    return (
        <Layout>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>published on {published}</h4>
                    <article className={styles.post}>
                    </article>
                    <AniLink fade to="/blog" className="btn-primary">
                        all posts
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query getPost($slug:String){
        post:contentfulPost(slug:{eq:$slug}) {
            title
            published(formatString:"MMMM Do, YYYY")
        }
    }
`

export default Blog