import React, { Component } from 'react';

class CityUpdate extends Component {
  render() {
    return (
      <div>
        <label className="label">Current temperature</label>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Text input" autoFocus />
          </div>
          <div className="control">
            <a className="button is-static">°C</a>
          </div>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    );
  }
}
  
  export default CityUpdate;
  