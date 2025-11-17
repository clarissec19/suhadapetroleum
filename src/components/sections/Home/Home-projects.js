import React, { useState, useEffect } from 'react';
import Section from '../../../HOC/Section';
import projects_bg from '../../../assets/img/projects_bg.jpg';
import image1 from '../../../assets/img/project1.jpg';
import image2 from '../../../assets/img/project2.jpg';

const HomeProject = () => {

  // Detect if screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section id='home-project'>
      <div className="bg-container" style={{ position: 'relative', marginBottom: '50px' }}>
        
        {/* BACKGROUND IMAGE */}
        <img
          src={projects_bg}
          alt="projects background"
          className="projects_bg"
          style={{ width: "100%", height: "800px", objectFit: "cover" }}
        />

        {/* PROJECT CONTAINER */}
        <div
          className="projects-container"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isMobile ? '90%' : '80%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2
          }}
        >

          {/* ------------ CARD 1 ------------ */}
          <div
            className="project-item"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              width: isMobile ? '80%' : '50%',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >

            {/* IMAGE */}
            <div className="image-column" style={{ width: '100%' }}>
              <img
                src={image1}
                alt="NOV Reciprocating Pump Model 1759 Package"
                style={{
                  width: '100%',
                  height: isMobile ? '180px' : '250px',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />
            </div>

            {/* TEXT */}
            <div
              className="text-column"
              style={{
                flex: 1,
                paddingLeft: isMobile ? '0' : '20px',
                marginTop: isMobile ? '15px' : '0'
              }}
            >
              <h5
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}
              >
                NOV Reciprocating Pump Model 1759 Package
              </h5>
            </div>
          </div>

          {/* ------------ CARD 2 ------------ */}
          <div
            className="project-item"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              width: isMobile ? '80%' : '50%',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            
            {/* IMAGE */}
            <div className="image-column" style={{ width: '100%' }}>
              <img
                src={image2}
                alt="ARROW Gas Engine Model C-106"
                style={{
                  width: '100%',
                  height: isMobile ? '180px' : '250px',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />
            </div>

            {/* TEXT */}
            <div
              className="text-column"
              style={{
                flex: 1,
                paddingLeft: isMobile ? '0' : '20px',
                marginTop: isMobile ? '15px' : '0'
              }}
            >
              <h5
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}
              >
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
