import React, { Component } from "react";
import Deporte from "./Deporte";
class Deportes extends Component {
  seleccionarFavorito = (favorito) => {
    console.log("Favorito: " + favorito);
    this.setState({ seleccionado: favorito });
  };

  state = {
    deportes: ["Padel", "Curling", "Balonmano", "Futbol", "Basket"],
    nombre: "Carlos React",
    seleccionado: "Ninguno",
  };
  contador = 1;
  nuevoDeporte = () => {
    var deportes = this.state.deportes;
    deportes.push("Deporte" + this.contador);
    this.contador++;
    this.setState({
      deportes: deportes,
    });
  };
  render() {
    return (
      <div>
        <h2>Deportes de {this.state.nombre}</h2>
        <h3 style={{ color: "green" }}>
          Seleccionado: {this.state.seleccionado}
        </h3>
        <button type="button" onClick={this.nuevoDeporte}>
          Crear nuevo deporte
        </button>
        <ul>
          {this.state.deportes.map((deporte, index) => {
            return (
              <Deporte
                deporte={deporte}
                key={index}
                seleccionarFavorito={this.seleccionarFavorito}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Deportes;
