import React from 'react';
import Section from '../../../HOC/Section';
import ISO1 from '../../../assets/img/ISO1.jpg';
import ISO2 from '../../../assets/img/ISO2.jpg';
import ISO3 from '../../../assets/img/ISO3.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div className='facts-container'>
      <div className='main-header center-text'>
            <h3 className='main-title center-text'>
            Accreditation
            </h3>
          </div>
        <div className='container pt-5 pb-3'>
          <div className='row'>
           
            <div className='col-sm-6 col-md-4 text-center'>
              <div className="ISO-container"> 
                <img src={ISO1} alt="ISO1" className="IOS1" />
              </div>
              <h5 className='facts-title'>Quality</h5>
              <h5 className='facts-title2 '>ISO 9001:2005</h5>
            </div>

         
            <div className='col-sm-6 col-md-4 text-center'>
              <div className="ISO-container"> 
                <img src={ISO2} alt="ISO2" className="IOS1" />
              </div>
              <h5 className='facts-title'>Environmental</h5>
              <h5 className='facts-title2 '>ISO 14001-2015</h5>
            </div>

           
            <div className='col-sm-6 col-md-4 text-center'>
              <div className="ISO-container"> 
                <img src={ISO3} alt="ISO3" className="IOS1" />
              </div>
              <h5 className='facts-title'>Health & Safety</h5>
              <h5 className='facts-title2 '>ISO 45001-2015</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;