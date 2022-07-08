import './Rectangulo.css'
import { Link } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
//import { getValue } from '@testing-library/user-event/dist/utils';
import Boton from '../../components/boton/Boton';

const Rectangulo = () => {

    const [data, setData] = useState({
        field1: '',
        field2: ''
    });

    const handleInputChange = event => {
        const { target } = event;
        const { name, value } = target;


        const arrayData = {
            ...data,
            [name]: value,
        };
        setData(arrayData);
        console.log(data);
    }





    function fxarea(e) {
        e.preventDefault();
        console.log('boton area');
        const area = data.field1*data.field2;
        
        alert('AREA DEL RECTANGULO : ' + area)


    }

    function fxperimetro(e) {
        const perimetro = (2*data.field1) + (2*data.field2);
        alert('PERIMETRO DEL RECTANGULO : ' + perimetro)
    }



    const sendData = (event) => {

        const area = parseFloat(data.base) * parseFloat(data.altura);
        console.log('El area del rectangulo es : ' + area);
        alert('El area del rectangulo es: ' + area);
        event.preventDefault()
    }


    return (
        <div className='main-container-Home'>
            <div className='container-procedure'>
                <h2> RECTANGULO</h2>
                <form className='form-area' onSubmit={sendData}>
                    <input
                        type='text'
                        placeholder="Base"
                        name='field1'
                        className="form-input"
                        value={data.field1}
                        onChange={handleInputChange}>

                    </input>

                    <input
                        type='text'
                        placeholder="Altura"
                        name='field2'
                        className="form-input"
                        value={data.field2}
                        onChange={handleInputChange}>

                    </input>

                    <div className='btn-container'>
                        <Boton type={true} texto={'Area'} fx={fxarea} />
                        <Boton type={false} texto={'Perimetro'} fx={fxperimetro} />
                    </div>

                </form>


            </div>


        </div>

    );
}

{/*
<div className='main-container-Home'>
<h1 className='title-home'>FIGURAS GEOMETRICAS</h1>
<div className='btn-container-home'>
    <Link to="/Circulo"><button className='btn-figure'>Circulo</button></Link>
    <Link to="/Cuadrado"><button className='btn-figure'>Cuadrado</button></Link>
    <Link to="/Rectangulo"><button className='btn-figure'>Rectangulo</button></Link>
    <Link to="/Triangulo"><button className='btn-figure'>Triangulo</button></Link>
</div>

<div className='container-procedure'>
     
    const var1 = <Formularios />
    const var2 = <Formularios />

    

    </div>*/}






export default Rectangulo;