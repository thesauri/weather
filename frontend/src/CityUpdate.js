import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

class CityUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      valid: true,
      submitting: false,
      errors: [] // Errors returned from the server
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Assumes that all valid integers are valid temperatures
  // Range checking could be implemented here too
  isValidTemp(temperature) {
    const parsedTemp = parseInt(temperature, 10);
    return !isNaN(parsedTemp) && parsedTemp < 100 && parsedTemp > -100;
  }

  handleChange(event) {
    const newTemp = event.target.value;
    // Updates the text even if it's invalid. This allows users to paste strings that contain the
    // numeric value and then strip the string in the field. The user is notified though that
    // the value is invalid
    // Note: parseInt seems to parse "123xyz" as 123. It will thus show up as valid.
    this.setState({
      temperature: newTemp,
      valid: this.isValidTemp(newTemp)
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    // The state will be valid when the page loads to avoid showing error messages when the
    // user opens the page. Double check validity to ensure that the temperature input is valid
    if (!this.isValidTemp(this.state.temperature)) {
      this.setState({
        valid: false
      });
      return;
    }

    this.setState({
      submitting: true
    });

    const body = {
      city_id: this.props.city.id,
      temperature: this.state.temperature
    }

    const params = {
      method: "post",
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    };
  
    fetch("http://localhost:4000/measurements", params)
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          const errors = result.errors.map((error) => error.detail);
          this.setState({ errors, valid: false, submitting: false });
        } else {
          this.props.onUpdate();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { (this.state.errors.length > 0 ) &&
          <ErrorMessage text={this.state.errors.join(", ")} />
        }
        <label className="label">Current temperature</label>
        { !this.state.valid && <p className="help is-danger">Invalid temperature</p> }
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={this.state.temperature}
              onChange={this.handleChange}
              autoFocus />
          </div>
          <div className="control">
            <a className="button is-static">°C</a>
          </div>
        </div>
        <div className="control">
          <button
            className={"button " + (this.state.valid ? "is-info " : "is-static ") + (this.state.submitting && "is-loading") }>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

CityUpdate.propTypes = {
  city: PropTypes.object, // Could be specified further
  onUpdate: PropTypes.func
};

export default CityUpdate;