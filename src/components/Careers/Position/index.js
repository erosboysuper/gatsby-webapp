import React from "react"
import PropTypes from "prop-types"
import Project from "../../Project"

const Position = ({ title, jobDetails, competitiveBenefits, postingStatement }) => {
    console.log({ title, jobDetails, competitiveBenefits, postingStatement })

    return (
        <article className="position">
            <div className="position-info">
                <h3>{title}</h3>
                <p className="project-desc">{jobDetails}</p>
                <p className="project-desc">{competitiveBenefits}</p>
                <p className="project-desc">{postingStatement}</p>
            </div>
        </article>
    )
}

Project.propTypes = {
    jobDetails: PropTypes.string.isRequired,
}

export default Position