/**
 * <Image fluid={image.childImageSharp.fluid} />
 * <span className="project-number"></span>
 */
import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({descriptionShort, title, github, stack, url, image, index}) => {

  return (
    <article className="project">
        <div className="project-info">
            <h3>{ title }</h3>
            <p className="project-desc">{ descriptionShort }
            </p>
            <div className="project-stack">
                {stack.map(item => {
                    return <span key={item.id}>{item.title}</span>
                })}
            </div>
            <div className="project-links">
                <a href={github}>
                    <FaGithubSquare className="project-icon" />
                </a>
                <a href={url}>
                    <FaShareSquare className="project-icon" />
                </a>
            </div>
        </div>
    </article>)
}

Project.propTypes = {
    descriptionShort: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.object).isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired,
}

export default Project
