import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  ,Route  , Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import Cuadrado from './pages/cuadrado/Cuadrado';
import Circulo from './pages/circulo/Circulo';
import Rectangulo from './pages/rectangulo/Rectangulo';
import Triangulo from './pages/triangulo/Triangulo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home />}></Route>
        <Route path='/Cuadrado' element ={<Cuadrado />}></Route>
        <Route path='/Circulo' element ={<Circulo />}></Route>
        <Route path='/Rectangulo' element ={<Rectangulo />}></Route>
        <Route path='/Triangulo' element ={<Triangulo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

