import React from "react"
import { Boton } from "../componente/Boton"
import './Hero.css'
import '../App.css'

function Hero(){
    return(
        
        <div className='hero-container'>
            <video src= 'videos/video3.mp4' autoPlay loop muted/>
            <h1> BIENVENIDOS A KOTA PET </h1>
            <p>Somos la mejor tienda de mascotas.</p>
            <div className='hero-btns'>
            </div>
        </div>
    )
}
export default Hero