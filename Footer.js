import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import facebook from '../facebookicon.png'
import intragram from '../instagramicon.png'
import twitter from '../twittericon.png'
import youtube from '../youtubeicon.png'
import gato from '../gato.png'
import tortuga from '../tortuga.png'

function Footer(){
    return(
        <div className='footer-container'>
        <div className='footer-subscription'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Unete y se parte de esta familia
                </p>
                <p className='footer-subscription-text'>
                    ~Las mascotas no sontodo en la vida, pero ellas lo compementan~
                </p>
                <div className='input-areas'>
                <form>   
                        </form>        
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                    <h2> ¿Qué hacemos?</h2>
                    <p>Contribuir a crear un mundo mejor, ayudando a amar y proteger a sus mascotas.
                    </p>
                    </div>
                <div className='footer-link-items'>
                    <h2>Veterinaria</h2>
                    <p>Días de atención: Martes a Jueves</p>
                    <p>Horario:</p>
                    <p>10:00a.m a 20:00p.m</p>
                   <p>Telefóno: </p>
                   <p> 55 2129 0413</p>

                </div>
            </div>
            <div className='footer-link-wapper'>
                <div className='footer-link-items'>
                    <h2>Ubicación</h2>
                    <p>local 3,Boulevard Nuevo Leon Ponte 114,Milpa Alta,12000,CDMX</p>
                    
                </div>
            </div>
        </div> 
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    </Link>
                </div>
                <small className='website-rights'>Empresa 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                        <img src={facebook} alt="FacebookLogo"/>
                    </Link>
                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'>
                        <img src={intragram} alt="InstagramLogo"/>
                    </Link>
                    <Link className='social-icon-link twitter'
                    to='/' 
                    target='_blank'
                    aria-label='Twitter'>
                        <img src={twitter} alt="TwitterLogo"/>
                    </Link>
                    <Link className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='YouTube'>
                        <img src={youtube} alt="YoutubeLogo"/>
                    </Link>
                </div>
                <img className="gato" src={gato} alt="gato"/>
                <img className="tor" src={tortuga} alt="tortuga"/>
            </div>
            
            </section> 
    </div>
    </div>
    )

}
export default Footer