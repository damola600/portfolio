import React, { Component } from 'react';
//import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './scss/aboutme.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import  aboutme from './textfiles/aboutme.json';
import cloud_eng_cert from "../images/google_cloud_cert.jpg";

export default class AboutMe extends Component{
    
    render(){
        const { text } = aboutme
        return(
            
            <div className="container">
                <h1>Rukayat Adedamola Jimoh</h1>
                <div className="card">
                    <div className="card-body">
                        {text}
                    </div>
                </div>
                <p>To learn more about me or setup a live interview. <Link to="/contactme"><strong>Email</strong></Link> or Call me at (289)808-0532.</p>
                <div className='card'>
                    <div className='card-body'>
                        <div className='card-title'><h1 style={ { fontWeight: 'bold', color: 'black'}}>EDUCATION</h1></div>
                        <div className='card-text'>
                            <h3 style={ { fontWeight: 'bold', color: 'black' }}>ONTARIO TECHNOLOGY UNIVERSITY                     2017-2021</h3>
                            <h5>Bachelor's of Engineering - Software Engineering</h5>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className='card' style={{width: "18rem"}}>
                    <img src={cloud_eng_cert} className='card-img-top' alt='Cloud Engineer Certificate'/>
                    <div className="card-body">
                        <p className="card-text" style={{ color: 'black'}}>Google Associate Cloud Engineer Certificate</p>
                    </div>
                </div>
            </div>
        );
    }
      
}