import React, { Component } from "react";

import "./test.styles.scss";

export class TestComponent extends Component {
  render() {
    const width = window.innerWidth;
    return (
      <div>
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
        <div className="rectangle">This is 320px</div>
        <div className="test-item hvr">Hover to change color</div>
        <div className="test-item clc">Click to change color</div>
        <div className="test-item h-c">Hover and click</div>
      </div>
    );
  }
}

export default TestComponent;
