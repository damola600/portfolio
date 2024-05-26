import React, { Component } from 'react';
import './scss/work.css';
import workExperience from './textfiles/workExperience.json';

class AccordionItem extends Component {
    render() {
        const { id, headingId, targetId, isExpanded, title, children } = this.props;
        return (
            <div className="accordion-item">
                <h2 className="accordion-header" id={headingId}>
                    <button className={`accordion-button ${isExpanded ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${targetId}`} aria-expanded={isExpanded} aria-controls={targetId}>
                        {title.position}<br/>{title.company}<br/>{title.dates}
                    </button>
                </h2>
                <div id={targetId} className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`} aria-labelledby={headingId} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            {children.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default class WorkExperience extends Component {
    render() {
        return (
            <div className="container">
                <div className="accordion" id="accordionExample">
                    {workExperience.map((exp, index) => (
                        <AccordionItem
                            key={index}
                            id={exp.id}
                            headingId={exp.headingId}
                            targetId={exp.id}
                            isExpanded={exp.isExpanded}
                            title={exp.title}
                        >
                            {exp.tasks}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        );
    }
}
