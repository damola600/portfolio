import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from './Header/header'
import './scss/project.css';
export default class ProjectExperience extends Component{
    render(){
        return(
            <div className="container" id="project">
                <Helmet>
                    <style>{'body { background-color: #eb34cc; }'}</style>
                </Helmet>
                <h1>Project Experiences</h1>
                <Header />
            </div>
        );
    }
}