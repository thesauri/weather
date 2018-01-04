import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

class CityList extends Component {
  render() {
    return (
      <div>
        <CityCard onCityUpdate={this.props.onCityUpdate} />
        <CityCard onCityUpdate={this.props.onCityUpdate} />
        <CityCard onCityUpdate={this.props.onCityUpdate} />
      </div>
    );
  }
}

CityList.propTypes = {
  onCityUpdate: PropTypes.func.isRequired
}

export default CityList;
  