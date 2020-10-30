import React, { Component } from "react";
import { BrowserRoute, Route, Switch } from "react-router-dom";
import Balonmano from "./Rutas/Balonmano";
import Futbol from "./Rutas/Futbol";
import Musica from "./Rutas/Musica";
import Tenis from "./Rutas/Tenis";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Balonmano} />
            <Route path="/Tenis" component={Tenis} />
            <Route path="/Futbol" component={Futbol} />
            <Route path="/Musica" component={Musica} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
