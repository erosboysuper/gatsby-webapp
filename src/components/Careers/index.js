import React from "react"
// import Title from "../Title"
import Position from "./Position"
// import JobList from "./JobList"
// import { useStaticQuery, graphql } from 'gatsby';
// import { Link } from "gatsby"

// access the query
const Careers = ({ jobs, showLink }) => {
    console.log(jobs)
    //const data = useStaticQuery(jobs);

    return <section className="section careers">
        <div className="section-center careers-center">
            <Position />
            Careers
        </div>
    </section>
}

export default Careers