import { Component } from "react";

export default class HijoNumero extends Component {
    sumar = () => {
        this.props.sumarNumero(this.props.numero)
    }

    render() {
        return(
            <div>
                <h2 style={{color: "red"}}>Numero: {this.props.numero}</h2>
                <button onClick={this.sumar}>sumar {this.props.numero}</button>
            </div>
        )
    }
}