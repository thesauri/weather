import React from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

const CityList = (props) => {
  const cityCards = props.cities.map((city) => (
    <CityCard
      key={city.id}
      onCityUpdate={() => props.onCityUpdate(city)}
      name={city.attributes.name}
      temperature={city.attributes.temperature && city.attributes.temperature.temperature}
      low={city.attributes.low && city.attributes.low.temperature}
      high={city.attributes.high && city.attributes.high.temperature}
      updatedAt={city.attributes.temperature && city.attributes.temperature.updated_at}
      latitude={city.attributes.latitude}
      longitude={city.attributes.longitude} />
  ));
  return (
    <div className="has-text-centered">
      {cityCards}
    </div>
  );
}

CityList.propTypes = {
  onCityUpdate: PropTypes.func.isRequired,
  cities: PropTypes.array // Prop type checking of the array itself could be added here
}

export default CityList;
  