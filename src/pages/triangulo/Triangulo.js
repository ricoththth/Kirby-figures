import './Triangulo.css'
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../../components/boton/Boton';
//import { getValue } from '@testing-library/user-event/dist/utils';

const Triangulo = () => {

    const [data, setData] = useState({
        cateto1: '',
        cateto2: '',
        cateto3: ''
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
        const h = (Math.sqrt(3)*parseFloat(data.cateto1)/2)
        const area = (parseFloat(data.cateto1)*h)/2;
        alert('AREA DEL TRIANGULO : ' + area)

        
    }

    function fxperimetro(e) {
        e.preventDefault();
        console.log('boton perimetro');
        const perimetro = data.cateto1 + data.cateto2 + data.cateto3;
        alert('PERIMETRO DEL TRIANGULO : ' + perimetro)
    }


    const sendData = (event) => {
        console.log('radio : ' + data)
        alert('radio : ' + data)
        
    }


    return (
        <div className='container-procedure'>
            <h2>TRIANGULO</h2>
            <form className='form-area' onSubmit={sendData}>
                <input
                    type='text'
                    placeholder="Lado 1"
                    name='cateto1'
                    className="form-input"
                    value={data.cateto1}
                    onChange={handleInputChange}>

                </input>

                <input
                    type='text'
                    placeholder="Lado 2"
                    name='cateto2'
                    className="form-input"
                    value={data.cateto2}
                    onChange={handleInputChange}>

                </input>

                <input
                    type='text'
                    placeholder="Lado 3"
                    name='cateto3'
                    className="form-input "
                    value={data.cateto3}
                    onChange={handleInputChange}>

                </input>

               
            </form>

            <div className='btn-container'>
                <Boton type={true} texto={'Area'} fx={fxarea} />
                <Boton type={false} texto={'Perimetro'} fx={fxperimetro} />
            </div>

        </div>
    );
}


export default Triangulo;