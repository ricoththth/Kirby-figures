import { useState } from 'react';
import './Formularios.css'
import Boton from '../Boton';

function Formularios(){

    const [data , setData]= useState(0);

    function cambiarInput(e){
        console.log('cambio'+ e.target.value);
        setData(e.target.value);
    }

    function send_form(e){
        
        e.preventDefault();

        const input = data;
        console.log('input 1 : ' + input)
    }

    function fxarea(e) {
        e.preventDefault();
        console.log('boton area');

        
    }

    function fxperimetro(e) {
        e.preventDefault();
        console.log('boton perimetro');
    }


    return(

        <form id='formulario' className='form-area' onSubmit={send_form}>

            <input
                type='text'
                placeholder='Ingrese numero'
                name="num1"
                className='form-input'
                onChange={cambiarInput}>
            </input>

            {/*<button type='submit' className='form-btn'>CALCULAR</button>*/}
             
        </form>

    )
}

export default Formularios;