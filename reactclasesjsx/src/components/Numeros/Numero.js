import React, { Component } from "react";
class Numero extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={() => {
          this.props.sumarNumeros(this.props.numero);
        }}
      >
        {this.props.numero}
      </button>
    );
  }
}
export default Numero;
