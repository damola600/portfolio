import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import "../index.css";
import Helmet from 'react-helmet';
export default class MySkills extends Component{
    render(){
        return(
            <div>
                <Helmet>
                    <style>{'body { background-color: darkviolet; }'}</style>
                </Helmet>
                <h1>My Skills</h1>
                <div class="btn-group btn-group-lg" role="group" >
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#programmingSkills" aria-expanded="false" aria-controls="programmingSkills">Programming Skills</button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#softwareSkills" aria-expanded="false" aria-controls="softwareSkills">Software Skills</button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#databasesUsed" aria-expanded="false" aria-controls="databasesUsed">Databases Used</button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#operatingSystems" aria-expanded="false" aria-controls="operatingSystems">Operating Systems</button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#otherSkills" aria-expanded="false" aria-controls="otherSkills">Other Skills</button>  
                </div>

                <div className="collapse" id="programmingSkills">
                    <div className="card card-body">
                        <h2>Programming Skills</h2>
                        <ul>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>HTML5</li>
                            <li>ReactJS</li>
                            <li>Angular</li>
                            <li>Nodejs</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>XML</li>
                            <li>JSON</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                </div>

                <div className="collapse" id="softwareSkills">
                    <div className="card card-body">
                        <h2>Software Skills</h2>
                        <ul>
                            <li>Microsoft Word</li>
                            <li>Excel</li>
                            <li>Powerpoint</li>
                            <li>Microsoft Professional</li>
                            <li>Visual Paradigm</li>
                            <li>IBM Rational Doors</li>
                            <li>Xilinx</li>
                            <li>FPGA's</li>
                            <li>MATLAB</li>
                            <li>Windows Powershell</li>
                            <li>MySQL workbench</li>
                            <li>Android Studio</li>
                            <li>Azure Devops</li>
                            <li>Azure Portal</li>
                            <li>AWS</li>
                            <li>Heroku</li>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>

                <div className="collapse" id="databasesUsed">
                    <div className="card card-body">
                        <h2>Databases Used</h2>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>


                <div className="collapse" id="operatingSystems">
                    <div className="card card-body">
                        <h2>Operating System Used</h2>
                        <ul>
                            <li>Linux/Ubuntu</li>
                            <li>MacOS</li>
                            <li>Windows</li>
                            <li>Raspbian</li>
                            <li>Android</li>
                        </ul>
                    </div>
                </div>

                <div className="collapse" id="otherSkills">
                    <div className="card card-body">
                        <h2>other skills</h2>
                        <ul>
                            <li>Good oral, verbal, pictorial and written communication</li>
                            <li>Customer Service Experience</li>
                            <li>Fast and active learner</li>
                            <li>Strong problem solving and critical thinking</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}