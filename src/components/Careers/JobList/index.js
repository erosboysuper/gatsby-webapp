import React, { Component } from "react"
import Position from "../Position"

export default class JobList extends Component {

    state = {
        jobList: [],
    }

    componentDidMount() {
        this.setState({
            jobList: this.props.jobList.edges,
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.jobList.map(({ node }) => {
                        return <Position key={node.contentful_id} jobList={node} />
                    })
                }
            </div>
        )
    }
}