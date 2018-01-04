import React, { Component } from 'react';
import './App.css';
import CityList from './CityList';
import CityUpdate from './CityUpdate';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  // The user wants to update a cities temperature status
  handleCityUpdate(cityId) {
    this.setState({
      modalOpen: true,
      updateCityId: cityId
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container is-fluid is-fullheight">
            <CityList onCityUpdate={this.handleCityUpdate} />
            { this.state.modalOpen &&
              <Modal
                active={true}
                title="Update weather information"
                onClose={this.closeModal}>
                <CityUpdate />
              </Modal>
            }
        </div>
      </section>
    );
  }
}

export default App;
