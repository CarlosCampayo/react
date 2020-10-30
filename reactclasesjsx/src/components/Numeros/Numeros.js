import React, { Component } from "react";
import Numero from "./Numero";
class Numeros extends Component {
  state = {
    numeros: [1, 4, 8, 12, 16, 5, 7, 10],
    suma: 0,
  };
  sumarNumeros = (numero) => {
    this.setState({
      suma: this.state.suma + parseInt(numero),
    });
  };
  setNuevoNumero = () => {
    var ale = parseInt(Math.random() * 99 + 1);
    var numeros = this.state.numeros;
    numeros.push(ale);
    this.setState({
      numeros: numeros,
    });
  };
  render() {
    return (
      <div>
        <h2>Suma de numeros</h2>
        <h3 style={{ color: "green" }}>Suma: {this.state.suma}</h3>
        <button type="button" onClick={this.setNuevoNumero}>
          Nuevo Número
        </button>
        <div>
          {this.state.numeros.map((numero, index) => {
            return (
              <Numero
                numero={numero}
                key={index}
                sumarNumeros={this.sumarNumeros}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Numeros;
