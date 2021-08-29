import React, { Component } from 'react'
import styles from '../../../css/services.module.css'
import Service from '../Service'
import Title from '../../Title'

export default class ServiceList extends Component {
    state = {
        services: [],
        sortedServices: [],
    }

    componentDidMount() {
        this.setState({
            services: this.props.services.edges,
            sortedServices: this.props.services.edges,
        })
    }

    render() {
        return (
            <section className={styles.services}>
                <Title title="our" subtitle="services" inverse="false" />
                <div className={styles.center}>
                    {this.state.sortedServices.map(({ node }) => {
                        return <Service key={node.contentful_id} service={node} />
                    })}
                </div>
            </section>
        )
    }
}
