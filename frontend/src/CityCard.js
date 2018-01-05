import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timeago from 'timeago.js';
import styles from './CityCard.css';

class CityCard extends Component {
  render() {
    const tempText = this.props.temperature ? `${this.props.temperature}°C` : "—";
    const high = this.props.high ? `${this.props.high}°C` : "—";
    const low = this.props.low ? `${this.props.low}°C` : "—";
    const updateText = this.props.updatedAt ? timeago().format(new Date(this.props.updatedAt)) : "No data";
    const mapUrl = `https://www.google.com/maps/?q=${this.props.latitude},${this.props.longitude}`;
    return (
      <div className={"card is-inline-block has-text-left " + styles.card}>
          <div className="card-content">
            <div className="level">
              <div className="level-item media-left">
                  <h1 className="is-title is-size-2 has-text-weight-bold">
                     { tempText }
                  </h1>
              </div>
              <div className="level-item">
                  <p className="title is-4 has-text-weight-light">{this.props.name}</p>
              </div>
            </div>
            <div className="content">
              <p className="is-marginless has-text-weight-light is-uppercase media-left">
                <span className="media-left">High</span> <strong>{high}</strong>
              </p>
              <p className="is-marginless has-text-weight-light is-uppercase  media-left">
                <span className="media-left">Low</span> <strong>{low}</strong>
              </p>
              <p className="is-marginless has-text-weight-light is-uppercase is-italic">
                {updateText}
              </p>
            </div>
          </div>
          <div className="card-footer">
            <a className="card-footer-item" onClick={this.props.onCityUpdate}>
              <span className="icon"><i className="fa fa-pencil"></i></span> Update
            </a>
            <a href={mapUrl} className="card-footer-item" target="_blank">
              <span className="icon"><i className="fa fa-external-link"></i></span> Map
            </a>
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
  high: PropTypes.string,
  updatedAt: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string
}


export default CityCard;
