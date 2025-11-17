import React from 'react';
import { useHistory } from 'react-router-dom';
import Section from '../../../HOC/Section';
import solidFeedingImage from '../../../assets/img/solid_feeding.jpg';

const About = () => {
  const history = useHistory();
  const isMobile = window.innerWidth < 768;

  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div 
          className="two-column-container" 
          style={{ 
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            gap: isMobile ? '20px' : '0'
          }}
        >
          
          {/* LEFT TEXT */}
          <div className='text-column' style={{ flex: 1 }}>
            <div className='main-header'>
              <h3 className='main-title'>PT SUHADA PETROLEUM</h3>
            </div>

            <h6 className='main-subtitle' style={{ marginTop: '15px' }}>
              Established in 2000, is a company which focuses on trading and 
              supporting mechanical engineering, electrical, instrumentation, 
              and maintenance services, especially for oil and gas industries.
            </h6>

            <button 
              className='btn' 
              onClick={() => history.push('/About')}
              style={{ marginTop: '25px' }}
            >
              FIND OUT MORE
            </button>
          </div>
          
          
          {/* RIGHT IMAGE */}
          <div 
            className="image-column" 
            style={{ flex: 1, display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}
          >
            <img 
              src={solidFeedingImage} 
              alt="About PT Suhada Petroleum" 
              style={{
                width: isMobile ? '0%' : '250px',   // ← bigger on mobile
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </div>

        </div>
      </div>
    </Section>
  );
};

export default About;
