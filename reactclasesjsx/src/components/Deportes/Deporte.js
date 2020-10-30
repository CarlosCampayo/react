import React, { Component } from "react";

class Deporte extends Component {
  state = {
    seleccionado: "",
  };
  seleccionarDeporte = () => {
    //console.log(this.props.deporte);
    this.props.seleccionarFavorito(this.props.deporte);
    // this.setState({
    //   seleccionado: this.props.deporte,
    // });
  };
  render() {
    return (
      <React.Fragment>
        <li style={{ color: "blue" }}>
          {this.props.deporte}
          <button type="button" onClick={this.seleccionarDeporte}>
            Seleccionar Deporte
          </button>
          <span style={{ color: "red" }}>{this.state.seleccionado}</span>
        </li>
      </React.Fragment>
    );
  }
}

export default Deporte;
