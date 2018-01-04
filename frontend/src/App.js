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

  // Changed: true if a new temperature has been submitted
  closeModal(changed) {
    if (changed) {
      // This code is executed after the submission has been successful. However, sometimes it
      // would still fetch the old data. This gives a moment for the changes to persist properly.
      setTimeout(this.fetchCities, 500);
    }
    this.setState({
      modalOpen: false
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
                  <CityUpdate city={this.state.updateCity} onUpdate={() => this.closeModal(true)} />
                </Modal>
              }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
