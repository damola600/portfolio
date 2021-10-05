import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class WorkExperience extends Component{
    render(){
        return(
            <div className="container">
                <Helmet>
                    <style>{'body { background-color: #eb34cc; }'}</style>
                </Helmet>
                <h1>Work Experiences</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <p><strong>Software Developer</strong><br/><strong>Cloud Constable Inc</strong><br/><strong>June 2021 - Now</strong></p>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>Working on both frontend and backend developing</li>
                                <li>Working with Unity software to create the fronend of the application</li>
                                <li>Using Microsoft azure for code deployment and as cloud storage</li>
                                <li>Using Mongodb database for cloud storage</li>
                                <li>Working in an agile environment with daily scrum meetings</li> 
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <p><strong>Cashier/Customer Experience</strong><br/><strong>Walmart Corp</strong><br/><strong>August 2019-now</strong></p>
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>Assisted customers in checking out by scanning and neatly bagging their groceries</li>
                                <li>Zoned products and arranged them in their respective shelves</li>
                                <li>Assisted customers in the self checkout by helping them with enquiries on how to use the checkout machine</li>
                                <li>Helped with training new cashiers on how to provide good customer service</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <p><strong>Sales Associate</strong><br/><strong>American Eagle Outfitters</strong><br/><strong>October 2018-January 2019</strong></p>
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li>Assisted customers with queries they have about products we had in the store</li>
                                <li>Helped with inventory and restocking ths shelves to provide more products to customers</li>
                                <li>Helped with keeping the store organized by folding clothes and arranging them in their respective shelves to help customers easily locate them</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}