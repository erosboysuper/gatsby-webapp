import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Podcast from "../components/Podcast"

export default () => {
  return (
    <Layout>
      <SEO title="Podcasts" description="List of Podcasts." />
      <Container>
        <Row>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h2>Leaders in Lending</h2>
                <p>
                  Tune in to the podcast each week to hear consumer lending
                  executives discuss the future of lending, digital
                  transformation and more.
                </p>
                <p>Hosted by Jeff Keltner, SVP</p>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <h2>Follow the show</h2>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <Row>
                  <img
                    src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts114/v4/f2/16/11/f216110b-9ccb-9f61-9342-8637c493867b/mza_15216646263412488188.jpg/313x0w.webp"
                    className="w-100"
                  />
                  <p>8 episodes</p>
                </Row>
                <Row>
                  <p>
                    Hello and welcome everyone. I am Vuk Dukic and this is
                    Anablock podcast. This show is exploration of enterprise
                    software, technology, ideas, business, science and strategy.
                    This podcast is for anyone that likes to learn new things
                    about business and technology. This podcast is brought to
                    you by Anablock. Anablock is a system integrator and
                    Salesforce partner. Anablock's technical team helps
                    organizations to implement, customize, and optimize their
                    Salesforce applications.
                  </p>
                </Row>
              </Col>
              <Col xs={12} md={8}>
                <Podcast />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <h2>Featured Episode</h2>
        </Row>
      </Container>
    </Layout>
  )
}
