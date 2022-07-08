import './Cuadrado.css'
import Boton from '../../components/boton/Boton'
import Formularios from '../../components/boton/formularios/Formularios';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Cuadrado() {
    const [data, setData] = useState(0);

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        
        setData (event.target.value);
        console.log(setData );
    }

    function fxarea(e) {
        e.preventDefault();
        console.log('boton area');
        const area = data*data;
        
        alert('AREA DEL CUADRADO : ' + area)
    }

    function fxperimetro(e) {
        e.preventDefault();
        console.log('boton perimetro');
        const perimetro = 4*data;
        alert('PERIMETRO DEL CUADRADO : ' + perimetro)
    }

    const sendData = (event) => {
        event.preventDefault()
        alert('El radio del circulo es : ' + data);
        
    }

    return (

        <div className='main-container-Home'>
            
            
            <div className='container-procedure'>
                <h2> CUADRADO</h2>
                <form className='form-area' onSubmit={sendData}>
                    <input
                        type='text'
                        placeholder="Lado"
                        name='field1'
                        className="form-input"
                        value={data.field1}
                        onChange={handleInputChange}>

                    </input>

                </form>

                <div className='btn-container'>
                    <Boton type={true} texto={'Area'} fx={fxarea} />
                    <Boton type={false} texto={'Perimetro'} fx={fxperimetro} />
                </div>

            </div>

            
        </div>

    )
}

export default Cuadrado;