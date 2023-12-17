import React, { useState } from "react";
import { Cart } from "../Cart/Cart.jsx";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleNavbarToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg header-links header-container">
                <Link to="/" ><img className="logo" src="/images/Logo.png" /></Link>
                <div className={`container-fluid ${!isCollapsed ? "nav-margin-top" : ""}`}>
                    <button className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavbarToggle}>
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Contacto">Contacto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link" to="/Nosotros">Sobre Nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link link " to="/Tienda" >Tienda</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="cart-container">
                        <Cart />
                    </div>


            </nav>


        </header>
    )
}