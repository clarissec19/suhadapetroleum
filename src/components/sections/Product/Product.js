import React from 'react';
import '../../../scss/partials/_product.scss';
import NOV from '../../../assets/img/NOV.jpg';
import Arrow from '../../../assets/img/Arrow.jpg';
import Section from '../../../HOC/Section';
import './product.css';

const Product = () => {
  const distributors = [
    {
      id: 'nov',
      name: 'National-Oilwell Varco (NOV)',
      description:
        'PT SUHADA PETROLEUM is proud to be NOV’s authorized sole distributor in Indonesia, providing engineered pumping solutions and full parts support.',
      image: NOV,
      offerings: [
        'Reciprocating Pumps & Packages',
        'Reciprocating Plunger Pumps',
        'Wheatley–Gaso Pump Assemblies',
        'MSW Reciprocating Pumps',
        'Omega Pump Packages & Parts',
      ],
    },
    {
      id: 'arrow',
      name: 'ARROW Industries',
      description:
        'Exclusive partner for Pertamina, delivering dependable slow-speed engines, compressors, and chemical injection systems built for remote operations.',
      image: Arrow,
      offerings: [
        'Slow Speed Gas Engines',
        'Reciprocating Gas Compressors',
        'Arrow Natural Gas Compressors',
        'Arrow & Texsteam Chemical Pumps',
        'VR Engines',
      ],
    },
  ];

  const otherSegments = [
    {
      title: 'Process & Pressure Packages',
      items: ['Pressure Vessel', 'Boiler', 'Cooler', 'Separator', 'Storage Tank'],
    },
    {
      title: 'Flow Solutions',
      items: ['Scrubber', 'KO Drum', 'Air Receiver', 'Indirect Heater', 'Fuel Gas Filter'],
    },
    {
      title: 'Pipeline & Utility',
      items: ['Pig Launcher', 'Pig Receiver', 'Media Filter', 'Heat Exchanger', 'Solid Feeding Package'],
    },
  ];

  return (
    <Section id="products">
     <div className='section-header'>
        <h3 className='section-title margin-left ' >Our Products</h3>
      </div>

     
      <div className="distributor-grid">
        {distributors.map((dist, index) => (
          <article
            key={dist.id}
            className={`distributor-card ${index % 2 === 1 ? 'reverse' : ''}`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className={`card-media ${dist.id === 'nov' ? 'card-media--tall' : 'card-media--tall'}`}>
              <img src={dist.image} alt={dist.name} />
            </div>
            <div className="card-body">
              <p className="eyebrow">Authorized Distributor</p>
              <h4>{dist.name}</h4>
              <p className="card-description">{dist.description}</p>
              <ul>
                {dist.offerings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="other-products">
        <div className="other-header" data-aos="fade-up">
          <h3>Others</h3>
        
        </div>
        <div className="other-grid">
          {otherSegments.map((segment, idx) => (
            <div className="other-card" key={segment.title} data-aos="fade-up" data-aos-delay={idx * 120}>
              <h4>{segment.title}</h4>
              <ul>
                {segment.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Product;
