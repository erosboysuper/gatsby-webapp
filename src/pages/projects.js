import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
    data: {
        allContentfulProject: { nodes: projects },
    },
}) => {
    return (
        <Layout>
            <SEO title="Projects" description="This is a list of our Salesforce projects." />
            <section className="projects-page">
                <Projects projects={projects} title="our projects" />
            </section>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulProject {
            nodes {
                github
                id
                contentful_id
                descriptionShort
                title
                url
                stack {
                    id
                    title
                }
            }
        }
    }
`
export default ProjectsPage