import React, { Component } from "react";
import LogoFutbol from "./../../assets/images/cr7.jpg";
class Futbol extends Component {
  render() {
    return (
      <div>
        <h1>Componente Futbol</h1>
        <img src={LogoFutbol}></img>
      </div>
    );
  }
}
export default Futbol;
