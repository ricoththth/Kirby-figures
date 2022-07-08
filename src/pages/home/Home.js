import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='main-container-Home'>
            <div className='btn-container-home'>
                <Link to="/Circulo"><button className='btn-figure circulo'>Circulo</button></Link> 
                <Link to="/Cuadrado"><button className='btn-figure cuadrado'>Cuadrado</button></Link> 
                <Link to="/Rectangulo"><button className='btn-figure rectangulo'>Rectangulo</button></Link> 
                <Link to="/Triangulo"><button className='btn-figure triangulo'>Triangulo</button></Link> 
            </div>
        </div>
    );
}

export default Home;