import React, { Component } from 'react';
//import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './scss/aboutme.css'

export default class AboutMe extends Component{
    render(){
        return(
            <div className="container">
            {/* <Helmet>
                <style>{'body { background-image: url(../images/1.jpg); }'}</style>
            </Helmet> */}
                <h1>Rukayat Adedamola Jimoh</h1>
                <p>I am a passionate individual who studied Software Engineering at Ontario Technology University. My passion for engineering was developed through my curiousity of wanting to know exactly how systems work and I also wanted to learn how to hack like my Cisco instructor when I was in high school. I later discovered that it was more than that and I was enthusiastic to learn more about it.</p>

                <p>I am someone that is always willing to learn new things everyday and a good thinker which helps me with my problem solving skills</p>

                <p>To learn more about me lets setup a live interview. <Link to="/contactme"><strong>Email</strong></Link> or Call me at (289)808-0532.</p>
            </div>
        );
    }
      
}