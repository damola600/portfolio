import React, { Component } from 'react';
//import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './scss/aboutme.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import { text } from './textfiles/aboutme.json';

export default class AboutMe extends Component{
    render(){
        return(
            <div className="container">
            {/* <Helmet>
                <style>{'body { background-image: url(../images/1.jpg); }'}</style>
            </Helmet> */}
                <h1>Rukayat Adedamola Jimoh</h1>
                <div class="card">
                    <div class="card-body">
                        {text}
                    </div>
                </div>
                <p>To learn more about me lets setup a live interview. <Link to="/contactme"><strong>Email</strong></Link> or Call me at (289)808-0532.</p>
            </div>
        );
    }
      
}