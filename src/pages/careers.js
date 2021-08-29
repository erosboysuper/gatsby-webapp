import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Careers from "../components/Careers"
import SEO from "../components/SEO"
import Position from "../components/Careers/Position"

import styles from "../css/career.module.css"

export default ({ data }) => {
  // desctructure from data object the nodes property
  const {
    allContentfulJobOpenings: { nodes: careers },
  } = data

  return (
    <Layout>
      <SEO title="Jobs" description="List of Salesforce jobs." />
      <Container>
        <Row>
          <Col md={4}>
            <div className={styles.filter}>
              <label>Filter by Office</label>
              <select>
                <option selected value="all">
                  All Locations
                </option>
              </select>
            </div>
          </Col>
          <Col md={8}>
            <div className={styles.list}>
              {careers.map(job => {
                return (
                  <>
                    <Link
                      to={`/jobs/${job.slug}`}
                      key={job.id}
                      className={styles.jobItem}
                    >
                      <h3>{job.title}</h3>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <hr />
                  </>
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <Careers careers={careers} title="careers" showLink />
      <Position />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulJobOpenings {
      nodes {
        id
        title
        slug
        jobDetails {
          jobDetails
        }
        postingStatement {
          postingStatement
        }
      }
    }
  }
`
/**
export const query = graphql`
    {
        allContentfulJobOpenings {
            nodes {
                title
                jobDetails {
                    jobDetails
                }
                competitiveBenefits {
                    competitiveBenefits
                }
                postingStatement {
                    postingStatement
                }
            }
        }
    }
`
*/
