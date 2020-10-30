import React, { Component } from "react";
import "./PrimeraClase.css";

function miFuncion() {
  console.log("Mi funcion");
}
class PrimeraClase extends Component {
  contador = 1;
  metodoAccion = () => {
    console.log("Contador " + this.contador);
    this.contador++;
  };
  //Hay que declarar las variables de estado para poder utilizarlas
  state = {
    valor: parseInt(this.props.inicio),
    v1: 1,
  };
  incrementarEstado = () => {
    this.setState({
      valor: this.state.valor + 1,
    });
  };
  render() {
    var num = 1;
    const hacerAlgo = () => {
      console.log("Haciendo algo" + num);
      num++;
    };
    return (
      <React.Fragment>
        <h1 className="rojo">{this.props.titulo}</h1>
        <h2>Estado {this.state.valor}</h2>
        <button type="button" onClick={this.metodoAccion}>
          Metodo Accion
        </button>
        <button
          type="button"
          onClick={() => {
            miFuncion();
          }}
        >
          Funcion mi Funcion
        </button>
        <button
          type="button"
          onClick={() => {
            hacerAlgo();
          }}
        >
          hacerAlgo
        </button>
        <button
          type="button"
          onClick={() => {
            this.incrementarEstado();
          }}
        >
          incrementarEstado
        </button>
      </React.Fragment>
    );
  }
}
export default PrimeraClase;
