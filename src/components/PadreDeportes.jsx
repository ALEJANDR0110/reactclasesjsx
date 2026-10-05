import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeportes extends Component {
    listaDeportes = ["football", "basketball", "tenis", "padel"]

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render() {
        return(
            <div>
                <h1>Padre deportes</h1>
                <h3 style={{backgroundColor: "lightgreen"}}>
                    Su deporte favorito es: {this.state.favorito}
                </h3>
                {
                    this.listaDeportes.map((deporte, index) => {
                        return(
                            <HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>
                        )
                    })
                }
            </div>
        )
    }
}