import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import WorkExperience from "./components/work_experience.component";
import AboutMe from "./components/about_me.component";
import MySkills from "./components/my_skills.component";
import ProjectExperience from "./components/project_experiences.component";
import ContactMe from "./components/contactme.component";
import './App.css';
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={AboutMe} />
        <Route path="/workexperience" exact component={WorkExperience} />
        <Route path="/myskills" exact component={MySkills} />
        <Route path="/projectexperience" exact component={ProjectExperience} />
        <Route path="/contactme" exact component={ContactMe}/>
      </div>
    </Router>
    
  );
}

export default App;
