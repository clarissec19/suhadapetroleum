import React from 'react';
import Section from '../../../HOC/Section';
import projects_bg from '../../../assets/img/projects_bg.jpg';
import image1 from '../../../assets/img/project1.jpg'; 
import image2 from '../../../assets/img/project2.jpg';
import './home-projects.css';

const HomeProject = () => {
  return (
    <Section id='home-project'>
      <div className="projects-bg-wrapper"> 
        <img 
          src={projects_bg} 
          alt="projects background" 
          className="projects-bg" 
        />

        <div className="projects-container">

        
          <div className="project-item">
       
            <div className="project-image">
              <img 
                src={image1} 
                alt="NOV Reciprocating Pump Model 1759 Package" 
                className="project-photo"
              />
            </div>

            
            <div className="project-text">
              <h5>
                NOV Reciprocating Pump Model 1759 Package
              </h5>
            
            </div>
          </div>


          <div className="project-item">
           
            <div className="project-image">
              <img 
                src={image2} 
                alt="ARROW Gas Engine Model C-106" 
                className="project-photo"
              />
            </div>

           
            <div className="project-text">
              <h5>
                ARROW Gas Engine Model C-106
              </h5>
              
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default HomeProject;
