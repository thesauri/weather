import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityCard extends Component {
  render() {
    return (
      <div className="card is-inline-block">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                  <h1 className="is-title">-10°C</h1>
              </div>
              <div className="media-content">
                  <p className="title is-4">Helsinki</p>
              </div>
            </div>
            <div className="content">
              <p>Today's high was -5°C and the low was -15°C</p>
              <p>Last update: 5 minutes ago</p>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="card-footer-item" onClick={this.props.onCityUpdate}>Update</a>
          </div>
      </div>
    );
  }
}

CityCard.propTypes = {
  onCityUpdate: PropTypes.func.isRequired
}


export default CityCard;
