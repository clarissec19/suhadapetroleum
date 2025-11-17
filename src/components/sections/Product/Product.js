import React from 'react';
import '../../../scss/partials/_product.scss';
import NOV from '../../../assets/img/NOV.jpg'; 
import SSTPump from '../../../assets/img/SSTPump.jpg';
import Arrow from '../../../assets/img/Arrow.jpg';
import Section from '../../../HOC/Section';
import './product.css'; 

const Product = () => {
  return (
    <Section id="products">
      <div className='section-header'>
        <h3 className='section-title margin-left ' >Our Products</h3>
      </div>
      
      <div className='container pb-5' >
        <div className="two-column-container">
          <div className='text-column'>
          <ul className='product-list'>
            <li>• National-Oilwell Varco (NOV) Reciprocating Pump, Pump Packages and Parts</li>
            <li>• National-Oilwell Varco (NOV) Reciprocating Plunger Pumps, Pump Packages and Parts</li>
            <li>• Wheatley-Gaso Reciprocating Pumps, Pump Packages and Parts</li>
            <li>• MSW Reciprocating Pumps, Pump Packages and Parts</li>
            <li>• Omega Reciprocating Pumps, Pump Packages and Parts</li>
        </ul>

          </div>
          <div className="image-column">
            <img src={NOV} alt="NOV" className="image" />
            <p className="image-description pt-4" style={{ fontWeight: 'bold' }}>
    PT SUHADA PETROLEUM is proud to be NOV’s authorized sole distributor in Indonesia
</p>

        </div></div>
      </div>

      <div className='container pt-2 pb-5'>
        <div className="two-column-container reverse-mobile">
          <div className="image-column">
            <img src={Arrow} alt="Arrow" className="image" />
            <p className="image-description pb-4">
              PT. SUHADA PETROLEUM is proud to be ARROW’s exclusive distributor for Pertamina in the country of Indonesia</p> 
          </div>
          <div className='text-column'>
            <ul className='product-list'>
              <li>• Slow Speed Gas Engines</li>
              <li>• Reciprocating Gas Compressor</li>
              <li>• Arrow Natural Gas Compressors</li>
              <li>• Arrow & Texsteam Chemical Pumps & Parts</li>
              <li>• VR Engines</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container pt-2 pb-5' >
        <h3 className='other-header' >Others</h3>
        <div className="three-column-container">
          <div className='text-column'>
            <ul className='product-list bulleted'>
              <li>Pressure Vessel</li>
              <li>Boiler</li>
              <li>Cooler</li>
              <li>Steel Structure</li>
              <li>Storage Tank</li>
              <li>Separator</li>
            </ul>
          </div>
          <div className='text-column'>
            <ul className='product-list bulleted'>
              <li>Scrubber</li>
              <li>KO Drum</li>
              <li>Air Receiver</li>
              <li>Indirect Heater</li>
              <li>Fuel Gas Filter</li>
            </ul>
          </div>
          <div className='text-column'>
            <ul className='product-list bulleted'>
              <li>Pig Launcher</li>
              <li>Pig Receiver</li>
              <li>Media Filter</li>
              <li>Heat Exchanger</li>
              <li>Solid Feeding Package</li>
            </ul>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Product;
