import React from 'react';
import Section from '../../../HOC/Section';
import projects_bg from '../../../assets/img/projects_bg.jpg';
import image1 from '../../../assets/img/project1.jpg'; 
import image2 from '../../../assets/img/project2.jpg';
import '../../../scss/partials/home/_homeproject.scss';

const HomeProject = () => {
  return (
    <Section id='home-project'>
      <div className="bg-container" style={{ position: 'relative', marginBottom: '50px' }}> 
        <img 
          src={projects_bg} 
          alt="projects background" 
          className="projects_bg" 
          style={{ width: "100%", height: "800px", objectFit: "cover" }} 
        />

       
        <div className="projects-container" style={{ 
          position: 'absolute', 
          top: '50%',           
          left: '50%',         
          transform: 'translate(-50%, -50%)', 
          width: '80%', 
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          justifyContent: 'center', 
          alignItems: 'center', 
          zIndex: 2 
        }}>

        
          <div className="project-item" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '50%', 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
          }}>
       
            <div className="image-column" style={{ flex: 1 }}>
              <img 
                src={image1} 
                alt="NOV Reciprocating Pump Model 1759 Package" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }} 
              />
            </div>

            
            <div className="text-column" style={{ 
              flex: 1, 
              paddingLeft: '20px' 
            }}>
              <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                NOV Reciprocating Pump Model 1759 Package
              </h5>
            
            </div>
          </div>


          <div className="project-item" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '50%', 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
          }}>
           
            <div className="image-column" style={{ flex: 1 }}>
              <img 
                src={image2} 
                alt="ARROW Gas Engine Model C-106" 
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }} 
              />
            </div>

           
            <div className="text-column" style={{ 
              flex: 1, 
              paddingLeft: '20px' 
            }}>
              <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
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