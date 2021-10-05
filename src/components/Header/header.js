import React, { useState } from  'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent,
  } from "react-pro-sidebar";
//import { FaList, FaRegHeart } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";

const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconCLick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return(
        <div id="container">
            <div id="header">
            <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                    <div className="logotext">
                        <p>{menuCollapse ? "Project Experience" : "Project Experience"}</p>
                    </div>

                    <div className="closemenu" onClick={menuIconCLick}>
                        {menuCollapse ? (
                            <FiArrowRightCircle/>
                        ) : (
                            <FiArrowLeftCircle/>
                        )}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={true} data-bs-target="#websites" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="websites">Websites</MenuItem>
                        <MenuItem active={true} data-bs-target="#mobileApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="mobileApps">Mobile Apps</MenuItem>
                        <MenuItem active={true} data-bs-target="#algorithms" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="algorithms">Algorithms</MenuItem>
                        <MenuItem active={true} data-bs-target="#ds" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="ds">Distributed Systems</MenuItem>                        
                    </Menu>
                </SidebarContent>
            </ProSidebar>

           
        </div>


         <div id="websites" className="collapse">
                <h3>Websites</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p><strong>Damola Grocery Store</strong></p>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Collaborated with three other students to create a functioning, interactive grocery shopping website</li>
                                    <li>Worked on the backend part of the website using mySQL and PHP.</li>
                                    <li>Elected as group leader and helped me coordinate the design of the website and make sure deadlines were met.</li>
                                    <li>lso helped with designing the frontend using HTML, CSS, and Javascript.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p><strong>DIA Hospital Database</strong></p>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Worked with two other students to create a database for a hospital website.</li>
                                    <li>Worked on the frontend creating the website using HTML, CSS, Bootstrap, and Javascript.</li>
                                    <li>Created the database using mySQL with queries and views.</li>
                                    <li>Presented the website in front of 75 people and answered questions efficiently</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p><strong>The Recipe Book</strong></p>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Successfully deployed a working website using Heroku platform</li>
                                    <li>Worked on creating the frontend by using Reactjs and HTML</li>
                                    <li>Used nodejs and mongoDB for the backend of the website.</li>
                                    <li>Used bootstrap for the layout and themes of the website.</li>
                                    <li>Used a REST API to get recipes for users to use through the website</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="mobileApps" className="collapse">
                <h3>Mobile Apps</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p><strong>Cook At Home</strong></p>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Worked in a group of four people to build a meal prep application</li>
                                    <li>Used android studio and java to build the application</li>
                                    <li>Got recipes from an API for the application</li>
                                    <li>Used mySQL database to store user information</li>
                                    <li>Parsed retrieved data using JSON and displayed them on the screen for users to see</li>
                                    <li>Used XML to build the layout for the application.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p><strong>The Health App</strong></p>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Worked in a group of three to build a mobile application with a simple user interface.</li>
                                    <li>Used firebase to store, authenticate user information.</li>
                                    <li>Used android studio and java to build the functionalities for application</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p><strong>IoT Based Fire Detection System</strong></p>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Worked in a group of four to create a working fire detection system</li>
                                    <li>Used raspberry pi and Raspbian OS to connect ti the sensors</li>
                                    <li> Gathered data from the sensors and stored them in the cloud using Thingspeak</li>
                                    <li>Build a machine learning model using past data to predict the probability of fire</li>
                                    <li>Built a mobile app using android studio and java to send information to users when there is a fire</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="algorithms" className="collapse">
                <h3>Algorithms</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <p><strong>Plagiarism Checker</strong></p>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Used Java as a programming language of choice</li>
                                <li>Created an algortithm that compares 5 new files with 100 old files</li>
                                <li>Counted every sentence that existd in compared files and calculated the plagiarism percentage</li>
                                <li>Sent the result for each comparison into a .csv file</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p><strong>Stock Prediction Algorithm</strong></p>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Worked in a group of three to create an algorithm to predict the stock market.</li>
                                    <li>Used data of the previous five days to predict the current day’s data.</li>
                                    <li>Used the average to determine whether to buy or sell the stock.</li>
                                    <li>Presented the solution in front of my colleagues and professor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="ds" className="collapse">
                <h3>Distributed System</h3>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <p><strong>Phone Directory System</strong></p>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Used client and server system to create a multi-client phone book</li>
                                    <li>Used java programming language to code the program.</li>
                                    <li>Stored the numbers in a .csv file when client entered data</li>
                                    <li>Was able to retrieve, search and store data in files for the phone book.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p><strong>File Storage System</strong></p>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Used java RMI to create a client server application which is used to store files.</li>
                                    <li>Application allows users to edit, save, retrieve and read files.</li>
                                    <li>The application can work on multiple devices and communicate with the server directly.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;