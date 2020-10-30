import React, { Component } from "react";
import LogoTenis from "./../../assets/images/nadal.jpg";
class Tenis extends Component {
  render() {
    return (
      <div>
        <h1>Componente Tenis</h1>
        <img src={LogoTenis}></img>
      </div>
    );
  }
}
export default Tenis;
