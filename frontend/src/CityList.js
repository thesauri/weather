import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

class CityList extends Component {
  render() {
    const cityCards = this.props.cities.map((city) => (
      <CityCard
        key={city.id}
        onCityUpdate={() => this.props.onCityUpdate(city.id)}
        name={city.attributes.name}
        temperature={city.attributes.temperature && city.attributes.temperature.temperature}
        low={city.attributes.low && city.attributes.low.temperature}
        high={city.attributes.high && city.attributes.high.temperature}
        updatedAt={city.attributes.temperature && city.attributes.temperature.updated_at} />
    ));
    return (
      <div>
        {cityCards}
      </div>
    );
  }
}

CityList.propTypes = {
  onCityUpdate: PropTypes.func.isRequired,
  cities: PropTypes.array // Prop type checking of the array itself could be added here
}

export default CityList;
  