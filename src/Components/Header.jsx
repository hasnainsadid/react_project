import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: "9"}}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <NavLink to="/" className="navbar-brand">
                    <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                </NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                        <NavLink to="/package" className="nav-item nav-link">Tour Packages</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}
