import React, { Component } from "react";
import './breadcrumb.scss';

class BreadCrumb extends Component {

  render() {

    return(
      <div className="container">
        <div className="wrapper">
          <ul className="breadcrum-container">
          {this.props.elements.map((value, index) => {
            return <li className={index} key={index}>{value}</li>
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BreadCrumb;