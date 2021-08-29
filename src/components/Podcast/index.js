import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Podcast = () => {
  return (
    <>
      <Link to={`/podcasts/id`}>
        <div className="d-flex align-items-center">
          <h3 className="mb-0">Title</h3>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </Link>
      <p>Podcast podcast</p>
      <ul className="list-unstyled d-flex">
        <li>
          <button>PLAY</button>
        </li>
        <li>23min</li>
      </ul>
    </>
  )
}

export default Podcast
