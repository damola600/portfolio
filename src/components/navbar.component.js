import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import "../index.css";
//import "./scss/navbar.scss";
export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">My Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/workexperience" className="nav-link">Work Experiences</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/myskills" className="nav-link">My Skills</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="projectexperience" className="nav-link">Project Experiences</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}