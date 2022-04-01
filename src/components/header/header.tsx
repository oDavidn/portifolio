import React from "react";
import HeaderStyled from "./header.styled";
import NavMenu from "./navMenu/navMenu";
import logo from "./../../assets/images/logodavid.svg"

const Header = () =>
{

    return <div className="columns level header">
        <div className="column level-item">
            <a href="/">
                <div className="logo-container">
                    <img src={logo} alt=""/>
                </div>
            </a>
        </div>
        <div className="column level-item header-bts">
            <div className="nav-container">
                <a href="/contact" className="button is-rounded is-outlined is-pulled-right contact-bt">Entre em contato!</a>
            </div>
        </div>
    </div>
    // return <div className="navbar is-transparent ">
    //     <div className="navbar-brand">
    //         <div className="navbar-item logo-container"><img src={logo} alt=""/></div>
    //     </div>
    //     <div className="navbar-menu">
    //         <div className="navbar-end"><div className="navbar-item">TEST</div></div>
    //     </div>
    // </div>

}

export default Header