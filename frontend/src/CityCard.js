import React from 'react';
import PropTypes from 'prop-types';
import timeago from 'timeago.js';
import styles from './CityCard.css';

const CityCard = (props) => {
  const tempText = props.temperature ? `${props.temperature}°C` : "—";
  const high = props.high ? `${props.high}°C` : "—";
  const low = props.low ? `${props.low}°C` : "—";
  const updateText = props.updatedAt ? timeago().format(new Date(props.updatedAt)) : "No data";
  const mapUrl = `https://www.google.com/maps/?q=${props.latitude},${props.longitude}`;
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
                <p className="title is-4 has-text-weight-light">{props.name}</p>
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
          <a className="card-footer-item" onClick={props.onCityUpdate}>
            <span className="icon"><i className="fa fa-pencil"></i></span> Update
          </a>
          <a href={mapUrl} className="card-footer-item" target="_blank">
            <span className="icon"><i className="fa fa-external-link"></i></span> Map
          </a>
        </div>
    </div>
  );
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
};

export default CityCard;
