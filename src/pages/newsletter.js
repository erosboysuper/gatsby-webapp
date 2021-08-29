import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Newsletter = () => {
    return <Layout>
        <SEO title="Newsletter" description="Get the latest about Salesforce" />
        <section className="newsletter-page">
            <div className="page-center">
                <h2>Get all the latest stories to your inbox</h2>
                <form
                    className="contact-form"
                    name="newsletter-contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    action="/newsletter-success"
                >
                    <input
                        type="hidden"
                        name="bot-field"
                    />
                    <input
                        type="hidden"
                        name="form-name"
                        value="newsletter-contact"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="custom-form-control"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Your email"
                        className="custom-form-control"
                    />
                    <button
                        type="submit"
                        className="btn custom-form-control"
                    >
                        Subscribe
                        </button>
                </form>
            </div>
        </section>
    </Layout>
}

export default Newsletter
