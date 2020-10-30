import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
// import PrimeraClase from "./components/PrimeraClase/PrimeraClase";
import Deportes from "./components/Deportes/Deportes";
import reportWebVitals from "./reportWebVitals";
import Numeros from "./components/Numeros/Numeros";
import Comics from "./components/Comics/Comics";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <PrimeraClase titulo="Componenete 1" inicio="16"></PrimeraClase>
    <PrimeraClase titulo="Componenete 2" inicio="99"></PrimeraClase> */}
    {/* <Deportes></Deportes> */}
    {/* <Numeros></Numeros> */}
    {/* <Comics></Comics> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
