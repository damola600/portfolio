import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import "./scss/skills.css";
import skills from "./textfiles/skills.json";

class AccordionItem extends Component {
    render() {
        const { id, heading, skillsList } = this.props;
        return (
            <div className="accordion-item">
                <h4 className="accordion-header" id={`${id}-heading`}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}Collapse`} aria-expanded="true" aria-controls={`${id}Collapse`}>
                        {heading}
                    </button>
                </h4>
                <div id={`${id}Collapse`} className="accordion-collapse collapse" aria-labelledby={`${id}-heading`} data-bs-parent="#accordionExample">
                    <ul className="accordion-body">
                        {skillsList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default class MySkills extends Component {
    render() {
        const { software_skills, programming_skills, databases_used, cloud_computing_skills, os_used, other_skills } = skills;

        const skillCategories = [
            { id: 'programming-skills', heading: 'Programming Languages', skillsList: programming_skills },
            { id: 'software-skills', heading: 'Software', skillsList: software_skills },
            { id: 'cloud-computing-skills', heading: 'Cloud Computing', skillsList: cloud_computing_skills },
            { id: 'database-skills', heading: 'Database', skillsList: databases_used },
            { id: 'os-skills', heading: 'Operating Systems', skillsList: os_used },
            { id: 'other-skills', heading: 'Others', skillsList: other_skills }
        ];

        return (
            <div className='container-xxl'>
                <div className='row justify-content-center'>
                    <div className="col-8">
                        <div className="accordion" id="accordionExample">
                            {skillCategories.map((category) => (
                                <div key={category.id}>
                                    <AccordionItem id={category.id} heading={category.heading} skillsList={category.skillsList} />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
