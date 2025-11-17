import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../../assets/img/clearlogo.png'; 

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container pt-5'>
        <div className='row'>

          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <img src={logo} alt="Company Logo" className='footer-logo'  />
            </div>
            <div className='footer-content'>
              <p>
                <small className='footer-text'>
                  PT. Suhada Petroleum, established in 2000, is a company that focuses on trading and supporting mechanical engineering, electrical, instrumentation, and maintenance services, especially for the oil and gas industry.
                </small>
              </p>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6 className='footer-text'>Links</h6>
            </div>
            <div className='footer-content2'>
              <ul className='list-group quick-links'>
                <li><Link to="/" className="footer-text">Home</Link></li>
                <li><Link to="/About" className="footer-text">About</Link></li>
                <li><Link to="/Service" className="footer-text">Services</Link></li>
                <li><Link to="/Product" className="footer-text">Products</Link></li>
                <li><Link to="/Contact" className="footer-text">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6 className='footer-text'>Head Office</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='footer-text'>
                  Jl. Balikpapan Raya No.26B-C RT.002 RW.06<br />
                  Kelurahan Petojo Utara, Kecamatan Gambir<br />
                  Jakarta Pusat, Indonesia
                </small>
              </p>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title '>
              <h6 className='footer-text'>Contact Us</h6>
            </div>
            <div className='footer-content2'>
              <p className='footer-text'>
                <small>Email:<br />
                  suhadapetrol@cbn.net.id<br />
                  info@suhadapetrol.co.id
                </small>
              </p>
              <p className='footer-text'>
                <small>Phone:<br />
                  (+62) 1 38793081<br />
                  (+62) 1 38793082
                </small>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
