import React, { Component } from 'react';
import { reset } from './api';

export default (props) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          By <strong>Walter Berggren</strong>. Built for Reaktor's summer job challenge. Click
          <a onClick={reset}>
            <span> here </span>
          </a>
          to reset the application.
        </p>
      </div>
    </div>
  </footer>
);