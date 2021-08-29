import React, { Component } from "react"
import styles from "./index.module.css"

class ApplyToForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      base64String: "",
      fileName: "",
    }
  }

  render() {
    return (
      <div>
        <form onChange={e => this.onFormChange(e)}>
          <input type="file" name="document" id="file" accept=".pdf" />
          <input
            type="button"
            value="Submit"
            onClick={e => this.onFormSubmit()}
          />
        </form>
      </div>
    )
  }

  componentDidMount() {
    this.handleAuthorization();
  }

  handleReaderLoaded = readerEvent => {
    let binaryString = readerEvent.target.result
    this.setState({
      base64String: btoa(binaryString),
    })
  }

  onFormChange = e => {
    console.log("file to upload", e.target.files[0])
    let file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = this.handleReaderLoaded.bind(this)
      reader.readAsBinaryString(file)

      this.setState({
        fileName: file.name,
        fileSize: `${file.size / 1024 / 1024}`,
      })
    }
  }

  onFormSubmit = e => {
    let payload = {
      attachments: [
        {
          Body: this.state.base64String,
          ContentType: "pdf",
          Name: this.state.fileName,
          Size: this.state.fileSize,
        },
      ],
    }
    console.log(payload)
  }

  handleAuthorization() {
    fetch(
      `https://anablock.my.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9vtcvGoeH2bhDqzLghrE_SRwaWSoIkaFSEr.W3J8nXNfqqUS5BbqsIMTasxHb5ToewW9VaXVY.Va2JPDh&client_secret=C0AA2D8A9475519AAC8455B3F5D3A1E91FD4E0FF2B3085DB7ED29530B2864047&username=${process.env.SALESFORCE_USERNAME}&password=${process.env.SALESFORCE_PW}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
}

export default ApplyToForm
