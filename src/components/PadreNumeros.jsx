import { Component } from "react";
import HijoNumero from "./HijoNumero";

export default class PadreNumeros extends Component {
    state = {
        numero: 0,
        listaNumeros: []
    }

    sumarNumero = (sumando) => {
        let suma = this.state.numero + sumando
        this.setState({
            numero: suma
        })
    }
    
    generarNumero = () => {
        this.state.listaNumeros.push(parseInt(Math.random() * 100))

        this.setState({
            listaNumeros: this.state.listaNumeros
        })
    }

    variable = 0

    render() {
        return(
            <div>
                {
                    this.variable == 0 ?
                    <h1>La variable es CERO</h1>:
                    this.variable >= 0 ?
                    <h1>La variable es mayor a cero</h1>:
                    <h1>La variable es negativa</h1>
                }
                <h1>Padre Numeros</h1>
                <h3 style={{backgroundColor: "yellow"}}>La suma es {this.state.numero}</h3>
                <button onClick={this.generarNumero}>Generar Numero</button>
                {
                    this.state.listaNumeros.map((numero, index) => {
                        return(
                            <HijoNumero key={index} numero={numero} sumarNumero={this.sumarNumero}/>
                        )
                    })
                }
            </div>
        )
    }
}