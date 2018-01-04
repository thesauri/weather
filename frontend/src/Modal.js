// Bulma Modal component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    render() {
      return (
        <div className={"modal " + (this.props.active ? "is-active" : "")}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{this.props.title}</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              {this.props.children}
            </section>
            <footer className="modal-card-foot">
            </footer>
          </div>
        </div>
      );
    }
}

Modal.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element
};

export default Modal;