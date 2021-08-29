import React, { Component } from "react"
import { Link } from "gatsby"
import Reaptcha from "reaptcha"
import styles from "./index.module.css"

class WebToLead extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      validated: false,
      org: "",
      wtlid: "",
    }
  }

  verifyCallback = recaptchaResponse => {
    this.setState({
      validated: true,
      org: "00D3i000000pb00",
      wtlid: "00N3i00000CKfRa",
    })
  }

  expireCallback = recaptchaResponse => {
    this.setState({
      validated: false,
      org: "",
      wtlid: "",
    })
  }

  render() {
    return (
      <div className={styles.formWrapper}>
        <h2 className={styles.formHeading}>Submit your project description and we will generate a proposal</h2>
        <form
          className={styles.form}
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
          method="POST"
          id="WTLForm"
        >
          <div>
            <input
              id={this.state.wtlid}
              name={this.state.wtlid}
              type="hidden"
              value="1"
            />
            <input type="hidden" name="oid" value={this.state.org} />
            <input
              type="hidden"
              name="retURL"
              value="https://anablock.com/thank-you"
            />
          </div>
          <div className={styles.nameField}>
            <div className={styles.required}>
              <label htmlFor="first_name" className={styles.inputLabel}>
                First Name
              </label>
              <input
                id="first_name"
                maxLength="40"
                name="first_name"
                type="text"
                className={styles.formControl}
                required="required"
              />
            </div>
            <div>
              <label htmlFor="last_name" className={styles.inputLabel}>
                Last Name
              </label>
              <input
                id="last_name"
                maxLength="40"
                name="last_name"
                type="text"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.nameField}>
            <div className={styles.required}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                id="email"
                maxLength="40"
                name="email"
                type="text"
                className={styles.formControl}
                required="required"
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.inputLabel}>
                Phone
              </label>
              <input
                id="phone"
                maxLength="20"
                name="phone"
                type="text"
                className={styles.formControl}
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className={styles.inputLabel}>
              Company
            </label>
            <input
              id="company"
              maxLength="40"
              name="company"
              type="text"
              className={styles.formControl}
            />
          </div>
          <div className={styles.required}>
            <label htmlFor="description" className={styles.inputLabel}>
              Project Description
            </label>
            <textarea
              id="description"
              maxLength="250"
              name="description"
              className={`${styles.formControl} ${styles.textarea}`}
              required="required"
            />
          </div>
          <div className={styles.recaptcha}>
            <Reaptcha
              sitekey="6LcRGcQZAAAAAB7F9ILuFgV9Ks9tzWTKbxM4QGYE"
              onVerify={this.verifyCallback}
              onExpire={this.expireCallback}
            />
          </div>
          <div className={styles.formFooter}>
            <div>
              <button
                className="btn-primary--red"
                disabled={!this.state.validated}
              >
                Submit
              </button>
            </div>
            <div className={styles.formFooterText}>
              Prefer to{" "}
              <Link to="/contact" className={styles.formFooterLink}>
                contact us
              </Link>{" "}
              other way?
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default WebToLead
