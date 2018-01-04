import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/cities")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          cities: result.data
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    const cityCards = this.state.cities.map((city) => (
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
  onCityUpdate: PropTypes.func.isRequired
}

export default CityList;
  