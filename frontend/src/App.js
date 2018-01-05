import React, { Component } from 'react';
import './App.css';
import { fetchCities } from './api';
import CityList from './CityList';
import CityUpdate from './CityUpdate';
import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      cities: [],
      fetchingCities: true
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.cityUpdated = this.cityUpdated.bind(this);
  }

  componentDidMount() {
    fetchCities((result) => this.setState({ cities: result.data, fetchingCities: false }));
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
      <div className="app">
        <Navbar />
        <main className="section">
          <div className="container">
            { this.state.fetchingCities ? (
              <div className="container has-text-centered">
                <a className="button is-loading">Loading</a>
              </div>
            ) : (
              <CityList onCityUpdate={this.handleCityUpdate} cities={this.state.cities} />
            )}
            { this.state.modalOpen &&
              <Modal
                active={true}
                title={`Weather update: ${this.state.updateCity.attributes.name}`}
                onClose={this.closeModal}>
                <CityUpdate city={this.state.updateCity} onUpdate={(newCity) => this.cityUpdated(newCity)} />
              </Modal>
            }
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
