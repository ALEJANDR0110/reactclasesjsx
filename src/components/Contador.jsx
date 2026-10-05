const { Component } = require("react");

class Contador extends Component {
    //LA DECLARACION DE VARIABLES CAMBIA YA NO USA JS
    //ES DECIR, const, var, let
    numero = 1;
    //CON LOS METODOS SUCEDE LO MISMO
    incrementarNumero = () => {
        //PARA ACCEDER A CUALQUIER ELEMENTO DE LA CLASE
        // SE USA LA PALABRA RESERVADA THIS
        this.numero += 1;
        console.log("Numero: " + this.numero)
    }

    //LA SINTAXISD E LA LLAMADA A LOS METODOS HA CAMBIADO EN RENDER
    //PUEDO LLAMAR DIRECTAMENTE AL METODO EN ONCLICK (SIN LAMBDA) Y
    /// SIN PARENTESIS
    render() {
        return (
            <div>
                <h1>Contador JSX</h1>
                <button onClick={this.incrementarNumero}>
                    Incrementar numero
                </button>
                <button onClick={() => {this.incrementarNumero()}}>
                    Incrementar numero con lambda
                </button>
            </div>
        )
    }
}

export default Contador;