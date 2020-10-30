import React, { Component } from "react";

class Comic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.comic.titulo}</h1>
        <img src={this.props.comic.imagen} alt={this.props.comic.titulo}></img>
        <p>{this.props.comic.descripcion}</p>
        <button
          type="button"
          onClick={() => {
            this.props.seleccionarComic(this.props.comic);
          }}
        >
          Seleccionar comic
        </button>
        <button
          id="btneliminar"
          type="button"
          onClick={() => {
            this.props.eliminarComic(this.props.indice);
          }}
        >
          Eliminar comic
        </button>
      </div>
    );
  }
}
export default Comic;
