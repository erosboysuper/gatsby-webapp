import React from "react"
import { graphql, Link } from "gatsby"
import marked from "marked"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"
import { Button, FormGroup, Container, Row, Col } from "reactstrap"
import toastr from "toastr"

import axios from "axios"

import Layout from "../../components/Layout"

import styles from "./index.module.css"

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const ComponentName = ({
  data: {
    job: {
      id,
      title,
      jobDetails: { jobDetails },
      postingStatement: { postingStatement },
    },
  },
}) => {
  const [verified, setVerified] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [file, setFile] = React.useState({})

  const getYesNo = data => (data ? "Yes" : "No")

  const onApply = async (event, errors, values) => {
    setLoading(true)
    if (!errors.length) {
      console.log(values)
      // const cv =
      // const cv = await axios.get(`file:///E:/zProfile/bk.png`).then(res => {
      //   console.log(res)
      //   return res
      // })
      const token = await axios
        .post(
          `https://anablock.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=${process.env.SALESFORCE_CLIENT_ID}&client_secret=${process.env.SALESFORCE_CLIENT_SECRET}&username=${process.env.SALESFORCE_USERNAME}&password=${process.env.SALESFORCE_PW}`
        )
        .then(response => {
          if (response.status === 200) {
            const {
              data: { access_token },
            } = response
            return access_token
          } else {
            return ""
          }
        })
      if (token) {
        axios
          .post(
            `https://anablock.my.salesforce.com/services/data/v51.0/sobjects/Candidate__c`,
            {
              JobId__c: id,
              Title__c: title,
              Name: `${values.firstname} ${values.lastname}`,
              Email__c: values.email,
              Legally_authorized_to_work_in_US__c: getYesNo(values.authorize),
              Sponsorship_Required__c: getYesNo(values.sponsorship),
              X18_years_of_age__c: getYesNo(values.least18),
              LinkedIn__c: values.linkedinprofile,
              Github_Repo__c: values.githubprofile,
              Portfolio__c: values.portfoliourl,
              Other_Profile_URL__c: values.profileurl,
              How_did_you_hear_about_this_job__c: values.heared,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then(res => {
            console.log(res)
            setLoading(false)
            toastr.info("Job Apply Success!")
            const name = file.name.split(".")
            const title = name.slice(0, name.length - 1)
            console.log(title[0])
            if (res.data.success) {
              axios
                .post(
                  "https://anablock.my.salesforce.com/services/data/v51.0/sobjects/ContentVersion",
                  {
                    ContentLocation: "S",
                    PathOnClient: `${file.name}`,
                    Title: title[0],
                    VersionData: file.content,
                    FirstPublishLocationId: res.data.id,
                    // FileType: file.type,
                  },
                  { headers: { Authorization: `Bearer ${token}` } }
                )
                .then(result => {
                  console.log(result)
                  console.log({
                    ContentLocation: "S",
                    PathOnClient: `${file.name}`,
                    Title: file.name,
                    VersionData: btoa(file.content),
                    FirstPublishLocationId: res.data.id,
                    // FileType: file.type,
                  })
                })
            } else {
              setLoading(false)
              toastr.warning("Job Apply Failed!")
            }
          })
      } else {
        setLoading(false)
        toastr.warning("Unauthorized Access!")
      }
      console.log(token)
    } else {
      setLoading(false)
      toastr.warning("Job Apply Failed!")
    }
  }
  return (
    <Layout>
      <Container>
        <div className={styles.title}>
          <h1>{title}</h1>
          <Link to="/careers" className={styles.back}>
            Back to All Jobs
          </Link>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={8}>
            <div className={`${styles.description}`}>
              <div dangerouslySetInnerHTML={{ __html: marked(jobDetails) }} />
              <div
                dangerouslySetInnerHTML={{ __html: marked(postingStatement) }}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.subDescription}>
              <h3>Apply For This Job.</h3>
              <p className="text-danger">* = required field</p>
              <AvForm onSubmit={onApply}>
                <AvField
                  name="firstname"
                  label="First Name *"
                  placeholder="John"
                  type="text"
                  errorMessage="First Name is Required"
                  validate={{
                    required: { value: true },
                  }}
                />
                <AvField
                  name="lastname"
                  label="Last Name *"
                  placeholder="Doe"
                  type="text"
                  errorMessage="Last Name is Required"
                  validate={{
                    required: { value: true },
                  }}
                />
                <AvField
                  name="email"
                  label="Email Address *"
                  placeholder="johndoe@mail.com"
                  type="email"
                  errorMessage="Email is Required"
                  validate={{
                    required: { value: true },
                    email: { value: true },
                  }}
                />
                <AvField
                  name="phone"
                  label="Phone"
                  placeholder="1234567890"
                  type="phone"
                />
                {/* <AvField
                  label="cv"
                  name="cv"
                  type="file"
                  validate={{
                    required: { value: true },
                  }}
                /> */}
                <AvField
                  type="file"
                  name="cv"
                  accept="application/pdf,application/vnd.ms-excel"
                  validate={{
                    required: { value: true },
                  }}
                  onChange={e => {
                    if (e.target.files.length < 1) return
                    console.log(e.target.files[0])
                    const fileTypeTemp = e.target.files[0].type
                    const name = e.target.files[0].name
                    const fileType = fileTypeTemp.includes("/pdf")
                      ? "PDF"
                      : "EXCEL"
                    /* const reader = new FileReader()
                    reader.onload = function (evt) {
                      if (evt.target.readyState != 2) return
                      if (evt.target.error) {
                        alert("Error while reading file")
                        return
                      }
                      setFile({
                        type: fileType,
                        name,
                        content: evt.target.result,
                      })
                    }
                    reader.readAsText(e.target.files[0]) */
                    getBase64(e.target.files[0]).then(res => {
                      console.log(typeof res)
                      setFile({
                        type: fileType,
                        name,
                        content: res,
                      })
                    })
                  }}
                />
                <AvRadioGroup
                  name="authorize"
                  label="Are you legally authorized to work in US? *"
                  required
                  errorMessage="Required"
                >
                  <AvRadio label="Yes" value={true} />
                  <AvRadio label="No" value={false} />
                </AvRadioGroup>
                <AvRadioGroup
                  name="sponsorship"
                  label="Will you know or in the future require sponsorship?"
                >
                  <AvRadio label="Yes" value={true} />
                  <AvRadio label="No" value={false} />
                </AvRadioGroup>
                <AvRadioGroup
                  name="least18"
                  label="Are you at least 18 years of age? *"
                  required
                  errorMessage="Required"
                >
                  <AvRadio label="Yes" value={true} />
                  <AvRadio label="No" value={false} />
                </AvRadioGroup>
                <AvField
                  name="linkedinprofile"
                  label="Linkedin Profile *"
                  placeholder="https://linkedin.com/in/johndoe"
                  type="text"
                  errorMessage="Invalid Linkedin Link"
                  pattern="^https:\/\/[a-z]{2,3}\.linkedin\.com\/in/.*$"
                  validate={{
                    required: { value: true },
                  }}
                />
                <AvField
                  name="githubprofile"
                  label="Github Profile"
                  placeholder="https://github.com/johndoe"
                  type="text"
                  errorMessage="Invalid Github Link"
                  pattern="^https:\/\/[a-z]{2,3}\.github\.com\/.*$"
                />
                <AvField
                  name="portfoliourl"
                  label="Portfolio URL"
                  placeholder="https://johndoe.com"
                  type="text"
                  errorMessage="Invalid Portfolio URL"
                  pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)"
                />
                <AvField
                  name="profileurl"
                  label="Other Profile URL"
                  placeholder="https://johndoe.com"
                  type="text"
                  errorMessage="Other Profile URL"
                  pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)"
                />
                <AvField
                  type="select"
                  name="heared"
                  label="How did you hear about this job?"
                  defaultValue="Anablock"
                >
                  <option>Anablock</option>
                  <option>Email</option>
                  <option>Facebook</option>
                  <option>Friend</option>
                  <option>LinkedIn</option>
                  <option>Podcast</option>
                  <option>Recruiter</option>
                </AvField>
                <FormGroup>
                  <Button color="success" disabled={loading && false}>
                    {loading ? "Applying" : "Apply"}
                  </Button>
                </FormGroup>
              </AvForm>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleJob($slug: String) {
    job: contentfulJobOpenings(slug: { eq: $slug }) {
      id
      title
      jobDetails {
        jobDetails
      }
      postingStatement {
        postingStatement
      }
    }
  }
`

export default ComponentName
