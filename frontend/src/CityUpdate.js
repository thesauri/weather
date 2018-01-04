import React, { Component } from 'react';

class CityUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempText: "",
      valid: true,
      submitting: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Assumes that all valid integers are valid temperatures
  // Range checking could be implemented here too
  isValidTemp(tempText) {
    return !isNaN(parseInt(tempText, 10));
  }

  handleChange(event) {
    const newTemp = event.target.value;
    // Updates the text even if it's invalid. This allows users to paste strings that contain the
    // numeric value and then strip the string in the field. The user is notified though that
    // the value is invalid
    // Note: parseInt seems to parse "123xyz" as 123. It will thus show up as valid.
    this.setState({
      tempText: newTemp,
      valid: this.isValidTemp(newTemp)
    })
  }

  handleSubmit() {
    // The state will be valid when the page loads to avoid showing error messages when the
    // user opens the page. Double check validity to ensure that the temperature input is valid
    if (!this.isValidTemp(this.state.tempText)) {
      this.setState({
        valid: false
      });
      return;
    }

    this.setState({
      submitting: true
    });
  }

  render() {
    return (
      <div>
        <label className="label">Current temperature</label>
        { !this.state.valid && <p className="help is-danger">Invalid temperature</p> }
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={this.state.tempText}
              onChange={this.handleChange}
              autoFocus />
          </div>
          <div className="control">
            <a className="button is-static">°C</a>
          </div>
        </div>
        <div className="control">
          <button
            className={"button " + (this.state.valid ? "is-primary " : "is-static ") + (this.state.submitting && "is-loading") }
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
  
  export default CityUpdate;
  