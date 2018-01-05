// Bulma Modal component
import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => (
  <div className={"modal " + (props.active ? "is-active" : "")}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{props.title}</p>
        <button className="delete" aria-label="close" onClick={props.onClose}></button>
      </header>
      <section className="modal-card-body">
        {props.children}
      </section>
      <footer className="modal-card-foot">
      </footer>
    </div>
  </div>
);

Modal.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.element
};

export default Modal;