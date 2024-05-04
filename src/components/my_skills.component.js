import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import "./scss/skills.css";
import skills  from "./textfiles/skills.json"
import Helmet from 'react-helmet';
export default class MySkills extends Component{
    render(){
        const { software_skills, programming_skills, databases_used, cloud_computing_skills, os_used, other_skills } = skills
        return(
            <div class='container-xxl'>
                <Helmet>
                    <style>{'body { background-color: dark-violet; }; .nav-link {color: aqua}'}</style>
                </Helmet>
                <div class='row'>
                    <div class='col-4'>
                        <nav id='my_skills_nav' class="h-100 flex-column align-items-stretch pe-4 border-end">
                            <a class="navbar-brand" href="#" style={{ color: 'gold' }}>SKILLS</a>
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link" href='#programming-skills' >Programming Languages</a>
                                <a class="nav-link" href='#software-skills'>Software</a>
                                <a class="nav-link" href='#cloud-computing-skills'>Cloud Computing</a>
                                <a class="nav-link" href='#database-skills'>Database</a>
                                <a class="nav-link" href='#os-skills'>Operating Systems</a>
                                <a class="nav-link" href='#other-skills'>Others</a>
                            </nav>

                        </nav>

                    </div>

                    <div class="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#my_skills_nav" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                            <div id='programming-skills' class="accordion">
                                <div class="accordion-item">
                                    <h4 class="accordion-header" id='programming-heading'>
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#programmingCollapse" aria-expanded="true" aria-controls="programmingCollapse">
                                        Programming Languages
                                        </button>
                                    </h4>
                                    <div id="programmingCollapse" class="accordion-collapse collapse show" aria-labelledby="programming-heading" data-bs-parent="#programming-skills">
                                        <ul class="accordion-body">
                                            {programming_skills.map((skill, index)=>(
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <br />
                            <div id='software-skills' class="accordion">
                                <div class="accordion-item">
                                        <h4 class="accordion-header" id='software-heading'>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#softwareCollapse" aria-expanded="true" aria-controls="softwareCollapse">
                                            Software
                                            </button>
                                        </h4>
                                        <div id="softwareCollapse" class="accordion-collapse collapse show" aria-labelledby="software-heading" data-bs-parent="#software-skills">
                                            <ul class="accordion-body">
                                                {software_skills.map((skill, index)=>(
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                </div>
                            </div>
                            <br />
                            <div id='cloud-computing-skills' class="accordion">
                            <div class="accordion-item">
                                        <h4 class="accordion-header" id='cloud-computing-heading'>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cloud-computingCollapse" aria-expanded="true" aria-controls="cloud-computingCollapse">
                                            Cloud Computing
                                            </button>
                                        </h4>
                                        <div id="cloud-computingCollapse" class="accordion-collapse collapse show" aria-labelledby="cloud-computing-heading" data-bs-parent="#cloud-computing-skills">
                                            <ul class="accordion-body">
                                                {cloud_computing_skills.map((skill, index)=>(
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                </div>
                            </div>
                            <br/>
                            <div id='database-skills' class="accordion">
                            <div class="accordion-item">
                                        <h4 class="accordion-header" id='database-heading'>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#databaseCollapse" aria-expanded="true" aria-controls="databaseCollapse">
                                            Database
                                            </button>
                                        </h4>
                                        <div id="databaseCollapse" class="accordion-collapse collapse show" aria-labelledby="database-heading" data-bs-parent="#database-skills">
                                            <ul class="accordion-body">
                                                {databases_used.map((skill, index)=>(
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                </div>
                            </div>
                            <br />
                            <div id='os-skills' class="accordion">
                            <div class="accordion-item">
                                        <h4 class="accordion-header" id='os-heading'>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#osCollapse" aria-expanded="true" aria-controls="osCollapse">
                                            Operating System
                                            </button>
                                        </h4>
                                        <div id="osCollapse" class="accordion-collapse collapse show" aria-labelledby="os-heading" data-bs-parent="#os-skills">
                                            <ul class="accordion-body">
                                                {os_used.map((skill, index)=>(
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                </div>
                            </div>
                            <br />

                            <div id='other-skills' class="accordion">
                            <div class="accordion-item">
                                        <h4 class="accordion-header" id='other-heading'>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#otherCollapse" aria-expanded="true" aria-controls="otherCollapse">
                                            Others
                                            </button>
                                        </h4>
                                        <div id="otherCollapse" class="accordion-collapse collapse show" aria-labelledby="other-heading" data-bs-parent="#other-skills">
                                            <ul class="accordion-body">
                                                {other_skills.map((skill, index)=>(
                                                    <li key={index}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                </div>
                            </div>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}