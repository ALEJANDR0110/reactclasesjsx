import { Component } from "react";

export default class Comic extends Component {



    render() {
        return(
            <div>
                <h1>Hijo Comic</h1>
                <h2 style={{color: "blue"}}>
                    {this.props.comic.titulo}
                </h2>
                <p>{this.props.comic.descripcion}</p>

                <img src={this.props.comic.imagen} style={{width: "70px", height: "90px"}} />
                <button onClick={() => this.props.seleccionarComic(this.props.comic)}>
                    Seleccionar favorito
                </button>
                <button onClick={() => {
                    let index = parseInt(this.props.indice)
                    this.props.deleteComic(index)
                }}>
                    Eliminar
                </button>
            </div>
        )
    }
}