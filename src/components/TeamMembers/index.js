import React from "react"
import styles from "./index.module.css"

const TeamMember = ({ teamMembers }) => {
  const { fullName, infoText, profileImage, tags } = teamMembers

  let profileImageUrl = profileImage === null ? "" : profileImage.fluid.src

  return (
    <div className={styles.teamMember}>
      <div className={styles.teamMember__content}>
        <div className={styles.teamMember__image}>
          <img src={profileImageUrl} alt="Member Image" />
        </div>
        <div className={styles.teamMember__info}>
          <h2 className={styles.teamMember__name}>{fullName}</h2>
          <p className={styles.teamMember__text}>{infoText}</p>
        </div>
      </div>
      <div className={styles.teamMember__tags}>
        <ul>
          {tags.map(el => {
            return <li>{el}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TeamMember
