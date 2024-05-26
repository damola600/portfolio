import React, { Component } from 'react';
import Header from './Header/header'
import './scss/project.css';
export default class ProjectExperience extends Component{
    render(){
        return(
            <div className="container" id="project">
                <h1>Project Experiences</h1>
                <p> For all projects go to my <a href='https://github.com/damola600 '> GitHub</a> page</p>
                <Header />
            </div>
        );
    }
}