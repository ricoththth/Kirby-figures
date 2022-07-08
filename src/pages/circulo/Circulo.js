import './Circulo.css'
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../../components/boton/Boton';
//import { getValue } from '@testing-library/user-event/dist/utils';

const Circulo = () => {

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
        const pi = 3.1416
        const area = pi*(data*data);
        
        alert('AREA DEL CIRCULO : ' + area)

        
    }

    function fxperimetro(e) {
        e.preventDefault();
        const pi = 3.1416
        const perimetro = 2*pi*data;
        
        alert('PERIMETRO DEL CIRCULO: ' + perimetro)
    }


    const sendData = (event) => {
        console.log('radio : ' + data)

        event.preventDefault()
    }


    return (
        <div className='main-container-Home'>
        
        
        <div className='container-procedure'>
            <h2> CIRCULO</h2>
            <form className='form-area' onSubmit={sendData}>
                <input
                    type='text'
                    placeholder="Radio"
                    name='field1'
                    className="form-input"
                    onChange={handleInputChange}>

                </input>

               
            </form>

            <div className='btn-container'>
                <Boton type={true} texto={'Area'} fx={fxarea} />
                <Boton type={false} texto={'Perimetro'} fx={fxperimetro} />
            </div>

        </div>

        
    </div>
    );
}


export default Circulo;



/*
function Circulo () {
    const [data, setData] = useState({
        radio: 0.0
    })


    const handleInputChange = (event) => {
             
        setData(
            ...data,
            /*[event.target.name]: event.target.value
            [data]: setData,
            
        )
            
    }

    const sendData = (event) => {
        event.preventDefault()
        console.log('radio : ' + data.radio)
    }

    function showArea() {
        let area = 3.1416 * (data.radio * data.radio);
        alert('El radio del circulo es : ' + area);
    }




    return (
        <div className='main-container-Circulo' >
            <h1>AREA DEL CIRCULO</h1>
            <Fragment>
                <form className='circle-form' onSubmit={sendData}>
                    <input
                        type='text'
                        placeholder="Radio"
                        className="form-control"
                        onChange={handleInputChange}
                         />

                    <button type='submit' onClick={showArea} >Calcular</button>
                </form>
            </Fragment>
        </div>
    );
}


export default Circulo;*/