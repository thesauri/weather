import React, { Component } from 'react';
import './App.css';
import CityList from './CityList';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container is-fluid is-fullheight">
            <CityList />
        </div>
      </section>
    );
  }
}

export default App;
