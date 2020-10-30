import React, { Component } from "react";
import LogoMusica from "./../../assets/images/arenal.jpg";
class Musica extends Component {
  render() {
    return (
      <div>
        <h1>Componente Musica</h1>
        <img src={LogoMusica}></img>
      </div>
    );
  }
}
export default Musica;
