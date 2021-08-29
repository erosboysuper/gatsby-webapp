import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title"
import TeamMembers from "../components/TeamMembers/TeamMembers"

import styles from "../css/company.module.css";

export default class About extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About" description="Anablock team members." />
        <Title title="Our" subtitle="Team" inverse="false" />
        <section>
          <div className={styles.container}>
            <TeamMembers />
          </div>
        </section>
      </Layout>
    )
  }
}
