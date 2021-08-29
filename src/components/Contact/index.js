import React, { Component } from "react"
import Reaptcha from "reaptcha"
// import Title from "../Title"
import styles from "./index.module.css"

class Contact extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      validated: false,
    }
  }

  verifyCallback = recaptchaResponse => {
    this.setState({ validated: true })
  }

  expireCallback = recaptchaResponse => {
    this.setState({ validated: false })
  }

  render() {
    return (
      <section className={styles.contact}>
        {/* <Title title="contact" subtitle="us" /> */}
        <div className={styles.container}>
          <form
            className={styles.form}
            action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
            method="POST"
          >
            <div>
              {/* <input type='hidden' name='captcha_settings' value='{"keyname":"AWA","fallback":"true","orgId":"00D3i000000pb00","ts":""}' /> */}
              <input type='hidden' name="orgid" value="00D3i000000pb00" />
              <input
                type="hidden"
                name="retURL"
                value="https://www.anablock.com/thank-you"
              />
            </div>
            <div className={styles.nameField}>
              <div className={styles.required}>
                <label htmlFor="name" className={styles.inputLabel}>
                  Contact Name
                </label>
                <input
                  id="name"
                  maxLength="80"
                  name="name"
                  type="text"
                  size={20}
                  className={styles.formControl}
                  required="required"
                />
              </div>
            </div>

            <div className={styles.required}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                id="email"
                maxLength="80"
                name="email"
                type="text"
                size={20}
                className={styles.formControl}
                required="required"
              />
            </div>
            <div>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone
              </label>
              <input
                id="phone"
                maxLength="40"
                name="phone"
                type="text"
                size={20}
                className={styles.formControl}
              />
            </div>
            <div>
              <label htmlFor="subject" className={styles.inputLabel}>
                Subject
              </label>
              <input
                id="subject"
                maxLength="40"
                name="subject"
                type="text"
                size={20}
                className={styles.formControl}
              />
            </div>
            <div className={styles.required}>
              <label htmlFor="description" className={styles.inputLabel}>
                Description
              </label>
              <textarea
                id="description"
                maxLength="250"
                name="description"
                className={`${styles.formControl} ${styles.textarea}`}
                required="required"
              />
            </div>

            <div className='form-group'>
              <label htmlFor="status">Status</label>
              <select id="status" name="status" className="form-control-sm ml-2">
                <option value="">--None--</option>
                <option value="Problem">Problem</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Question">Question</option>
                {/* <option value="On Hold">On Hold</option>
                <option value="Escalated">Escalated</option>
                <option value="Closed">Closed</option>
                <option value="New">New</option> */}
              </select>
            </div>

            {/* <div className='form-group'>
              <label htmlFor="recordType">Case Record Type</label>
              <select id="recordType" name="recordType" className="form-control-sm ml-2">
                <option value="">--None--</option>
                <option value="0123i000000h0Uu">Support Case</option>
                <option value="0123i000000h32J">Candidate</option>
                <option value="0123i000000h32O">Company</option>
              </select>
            </div> */}

            <input type="hidden" id="external" name="external" value="1" />

            {/* <div className={styles.recaptcha}>
              <Reaptcha
                sitekey="6LcRGcQZAAAAAB7F9ILuFgV9Ks9tzWTKbxM4QGYE"
                onVerify={this.verifyCallback}
                onExpire={this.expireCallback}
              />
            </div> */}
            <div>
              <input
                type="submit"
                name="Submit"
                className="btn-primary"
              // disabled={!this.state.validated}
              />
            </div>
          </form>
          <div className={styles.contactOther}>
            <h2>Prefer a call or your email client?</h2>
            <p>
              For getting in touch with us and for all other inquiries you can
              use mobile phone and email below.
            </p>
            <div className={styles.contactOther__number}>
              <h3>+1 (415) 635-9877</h3>
              <h3>developers@anablock.com</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
