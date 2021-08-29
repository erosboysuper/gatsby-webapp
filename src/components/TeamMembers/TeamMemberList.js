import React, { Component } from "react"
import styles from "./index.module.css"
import TeamMember from "../TeamMembers"

export default class TeamMembers extends Component {

  state = {
    teamMembers: [],
  }

  componentDidMount() {
    this.setState({
      teamMembers: this.props.teamMembers.edges,
    })
  }

  render() {
    return (
      <div className={styles.containerTeamMembers}>
        {this.state.teamMembers.map(({ node }) => {
          return <TeamMember key={node.contentful_id} teamMembers={node} />
        })}
      </div>
    )
  }
}
