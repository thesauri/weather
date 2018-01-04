import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CityCard extends Component {
  render() {
    const tempText = this.props.temperature ? `${this.props.temperature}°C` : "—";
    const lowHighText = this.props.low ?
      `Today's high was ${this.props.high}°C and the low was ${this.props.low}°C` :
      "No data from the last 24 hours";
    return (
      <div className="card is-inline-block">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                  <h1 className="is-title">
                     { tempText }
                  </h1>
              </div>
              <div className="media-content">
                  <p className="title is-4">{this.props.name}</p>
              </div>
            </div>
            <div className="content">
              <p>{ lowHighText }</p>
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
  onCityUpdate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  temperature: PropTypes.string,
  low: PropTypes.string,
  high: PropTypes.string
}


export default CityCard;
