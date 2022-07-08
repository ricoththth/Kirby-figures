import './Boton.css'

function Boton({ type, texto, fx }) {

    return (
      
            <button type='submit' form='formulario' className={type ? "btn-area" : "btn-perimetro"} onClick={fx}>
                {texto}
            </button>

    );
}

export default Boton;

