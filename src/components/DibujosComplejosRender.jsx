import { Component } from "react";

class DibujosComplejosRender extends Component {
    state = {
        nombres: ["Alex", "Jose", "Juan", "Carlos",]
    }

    generarNombre = () => {
        //AÑADIMOS EL NUEVO NOMBRE A STATE
        this.state.nombres.push("NUEVO NOMBRE")

        //REFRESCAMOS STATE PARA QUE APAREZCA POR PANTALLA
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return (
            <div>
                <h1>Dibujos Complejos Render</h1>
                <button onClick={this.generarNombre}>
                    Incrementar valor
                </button>
                {
                    //ESTO ES CODIGO JSX DE REACT
                    this.state.nombres.map((nombre, index) => {
                        //ESTE CODIGO NECESITA UN RETURN PARA EL RENDER
                        return(
                            <h4 style={{color:"blue"}} key={index}>
                                {nombre}
                            </h4>
                        )
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosRender;