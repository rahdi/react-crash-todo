import React, { Component } from "react";

import "./test.styles.scss";

export class TestComponent extends Component {
  render() {
    const width = window.innerWidth;
    return (
      <div className="test-grid">
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">Element 1</div>
        <div className="grid-item">{width}</div>
      </div>
    );
  }
}

export default TestComponent;
