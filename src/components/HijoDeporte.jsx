import { Component } from "react";

export default class HijoDeporte extends Component {
    seleccionarFavorito = () => {
        //CUANDO DESEEMOS, LLAMAMOS AL PADRE MEDIANTE
        //SU METODO EN PROPS
        this.props.mostrarFavorito(this.props.nombre)
    }

    render() {
        return(
            <div style={{color: "blue"}}>
                <h3>Hijo deporte: {this.props.nombre}</h3>
                <button onClick={this.seleccionarFavorito}>
                    Favorito
                </button>
            </div>
        )
    }
}