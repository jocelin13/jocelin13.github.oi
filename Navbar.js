import React,{Component} from "react";
import {Menultems} from "./MenuItems"
import './Navbar.css'
import logo from '../logo1.png'
import Inicio from'../principal.png'

class Navbar extends Component{

    render(){
        return(
            <nav className="NavbarItems">
            <img  className="logo-imagen" src={logo} alt="logo1" /> 
             <div className="menu-icon">
             </div>
             <ul className="nav-menu">
                 {Menultems.map((item,index)=>{
                     return(
                         <li key={index}>
                             <a className={item.cName} href={item.url}>
                                 {item.title}
                             </a>
                         </li>
                     )
                 })}
             </ul>
             
             <img className="Inicio" src={Inicio} alt="principal"></img>
            </nav>
        )
    }
}
export default Navbar