import React, { Component } from "react";
import LogoBalonmano from "./../../assets/images/sabroso.jpg";
class Balonmano extends Component {
  render() {
    return (
      <div>
        <h1>Componente Balonmano</h1>
        <img src={LogoBalonmano}></img>
      </div>
    );
  }
}
export default Balonmano;
