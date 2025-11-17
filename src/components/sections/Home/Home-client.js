import React from 'react';
import Section from '../../../HOC/Section';

import Client1 from '../../../assets/img/client1.jpg'; 
import Client2 from '../../../assets/img/client2.jpg';
import Client3 from '../../../assets/img/client3.jpg';
import Client4 from '../../../assets/img/client4.jpg'; 
import Client5 from '../../../assets/img/client5.jpg'; 
import Client6 from '../../../assets/img/client6.jpg'; 
import Client7 from '../../../assets/img/client7.jpg'; 
import Client8 from '../../../assets/img/client8.jpg'; 
import Client9 from '../../../assets/img/client9.jpg'; 
import Client10 from '../../../assets/img/client10.jpg'; 
import Client11 from '../../../assets/img/client11.jpg'; 
import Client12 from '../../../assets/img/client12.jpg'; 
import Client13 from '../../../assets/img/client13.jpg'; 
import Client14 from '../../../assets/img/client14.jpg'; 

const Blog = () => {
  return (
    <Section id='blog'>
      <div className='blog-container'>
        <div className='container'>
          <div className='main-header'>
            <h3 className='main-title text-center'>
              Our Clients
            </h3>
          </div>
          <div className='row' data-aos="fade-up">
          
            <div className='col-sm-6 col-md-2 text-center'>
              <div className="client-container"> 
                <img src={Client1} alt="Client 1" className="clientImage" />
              </div>
            </div>

            <div className='col-sm-6 col-md-2 text-center'>
              <div className="client-container"> 
                <img src={Client2} alt="Client 2" className="clientImage" />
              </div>
            </div>

            <div className='col-sm-6 col-md-2 text-center'>
              <div className="client-container"> 
                <img src={Client3} alt="Client 3" className="clientImage" />
              </div>
            </div>

            <div className='col-sm-6 col-md-2 text-center'>
              <div className="client-container"> 
                <img src={Client4} alt="Client 4" className="clientImage" />
              </div>
            </div>

            <div className='col-sm-6 col-md-2 text-center'>
              <div className="client-container"> 
                <img src={Client5} alt="Client 5" className="clientImage" />
              </div>
            </div>

            <div className='col-sm-6 col-md-2 text-center'>
              <div className="client-container"> 
                <img src={Client6} alt="Client 6" className="clientImage" />
              </div>
            </div>
          </div>

        
          <div className='row' data-aos="fade-up">
            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client7} alt="Client 7" className="clientImage2" />
              </div>
            </div>

            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client8} alt="Client 8" className="clientImage2" />
              </div>
            </div>

            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client9} alt="Client 9" className="clientImage2" />
              </div>
            </div>

            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client10} alt="Client 10" className="clientImage2" />
              </div>
            </div>
          </div>

        
          <div className='row' data-aos="fade-up">
            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client11} alt="Client 11" className="clientImage3" />
              </div>
            </div>

            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client12} alt="Client 12" className="clientImage3" />
              </div>
            </div>

            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client13} alt="Client 13" className="clientImage3" />
              </div>
            </div>

            <div className='col-sm-6 col-md-3 text-center'>
              <div className="client-container"> 
                <img src={Client14} alt="Client 14" className="clientImage3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;