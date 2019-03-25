import React, { Component } from "react";
import './breadcrumb.scss';

class BreadCrumb extends Component {
  constructor() {
    super();
    this.state = {
      elements: ['Tecnologîa','Accesorios','telefonos', 'ipod', '32gb']
    };
  }

  render() {

    return(
      <div className="container">
        <div className="wrapper">
          <ul className="breadcrum-container">
          {this.state.elements.map((value, index) => {
            return <li className={index}>{value}</li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BreadCrumb;