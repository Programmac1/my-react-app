import React from "react";
import './styles/header.css';
import plumbingLogo from './images/plumbing-logo.jpg'
import homeIcon from './images/home-icon.png'
import spannerIcon from './images/spanner-icon.png'
import personIcon from './images/person-icon.png'
import facebookIcon from './images/fb-logo.svg'

const Header = () => {
    
    return (
        <nav className="navbar-wrap">

            <ul className="navbar">
                <div><img className="logo" src={plumbingLogo}/></div>
                
                <li className="menu-link-wrap"><div>Home</div><div><img className="menu-link"src={homeIcon}></img></div></li>
                <li className="menu-link-wrap"><div>Services</div><div><img className="menu-link"src={spannerIcon}></img></div></li>
                <li className="menu-link-wrap"><div>About Me</div><div><img className="menu-link"src={personIcon}></img></div></li>
                <li className="menu-link-wrap"><div>Socials</div><div><img className="menu-link"src={facebookIcon}></img></div></li>

            </ul>
            
        </nav>
    )
}

export default Header;