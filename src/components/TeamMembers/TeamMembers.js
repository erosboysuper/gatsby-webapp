import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TeamMemberList from "./TeamMemberList"

const query = graphql`
  query {
    teamMembers: allContentfulTeamMembers(sort: {fields: [order]}) {
      edges {
        node {
          fullName
          infoText
          profileImage {
            description
            fluid {
              src
            }
          }
          tags
          order
        }
      }
    }
  }
`
const TeamMembers = () => {
  const { teamMembers } = useStaticQuery(query)

  return <TeamMemberList teamMembers={teamMembers} />
}

export default TeamMembers
