import React, { Component } from 'react';
import './App.css';
import CityList from './CityList';
import CityUpdate from './CityUpdate';
import Modal from './Modal';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      cities: []
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.fetchCities = this.fetchCities.bind(this);
    this.cityUpdated = this.cityUpdated.bind(this);
  }

  componentDidMount() {
    this.fetchCities();
  }

  fetchCities() {
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

  closeModal(changed) {
    this.setState({
      modalOpen: false
    });
  }

  // Called when a city has been updated, the new state for that city is passed
  cityUpdated(city) {
    this.closeModal();

    // Update the city state of the updated city
    // It would have been convenient to have the cities as a map pointing by id now... 
    const newCities = this.state.cities;

    for (let i = 0; i < newCities.length; i++) {
      if (newCities[i].id === city.id) {
        newCities[i] = city;
        break;
      }
    }

    this.setState({
      citites: newCities
    });
  }

  // The user wants to update a cities temperature status
  handleCityUpdate(city) {
    this.setState({
      modalOpen: true,
      updateCity: city
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container">
              <CityList onCityUpdate={this.handleCityUpdate} cities={this.state.cities} />
              { this.state.modalOpen &&
                <Modal
                  active={true}
                  title={`Update weather information for ${this.state.updateCity.attributes.name}`}
                  onClose={this.closeModal}>
                  <CityUpdate city={this.state.updateCity} onUpdate={(newCity) => this.cityUpdated(newCity)} />
                </Modal>
              }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
