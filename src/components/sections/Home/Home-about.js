import React from 'react';
import { useHistory } from 'react-router-dom';
import Section from '../../../HOC/Section';
import solidFeedingImage from '../../../assets/img/solid_feeding.jpg';
import './home-about.css';

const About = () => {
  const history = useHistory();

  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className="two-column-container">
          <div className='text-column'>
            <div className='main-header'>
              <h3 className='main-title '>PT SUHADA PETROLEUM</h3>
            </div>
            <h6 className='main-subtitle'>
              Established in 2000, is a company which focuses on trading and supporting mechanical engineering, electrical, instrumentation, and maintenance services, especially for oil and gas industries.
            </h6>
          
          
            <button className='btn' onClick={() => history.push('/About')}>
              FIND OUT MORE
            </button>
          </div>
          <div className="image-column">
            <img src={solidFeedingImage} alt="About PT Suhada Petroleum" className="solidFeedingImage" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
