import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './test.css'; 

// Images
import workshop1 from "../../../assets/img/workshop1.png";
import workshop2 from "../../../assets/img/workshop2.png";
import serviceImage from "../../../assets/img/workshop3.png"; 
import servicebg from "../../../assets/img/services_bg.png";
import rightarrow from "../../../assets/img/rightarrow.png";
import leftarrows from "../../../assets/img/leftarrows.png";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next-arrow"
      style={{ backgroundImage: `url(${rightarrow})` }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev-arrow" 
      style={{ backgroundImage: `url(${leftarrows})` }}
      onClick={onClick}
    />
  );
}



const FacilitiesCarousel = ({ updateLocation }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: current => {
      const addresses = [
        "📍 Laksana Business Park Block MB 12A-B, Jl. Raya Kali Baru, Laksana, Kecamatan Pakuhaji, Kabupaten Tangerang, Banten 15570",
        "📍 Jl. Dempo No 102 RT. 02 RW. 07 Kel. Muara Dua Kec. Prabumulih Timur, Kota Prabumulih 31113"
      ];
      updateLocation(addresses[current]);
    }
  };

  return (
    <div className="facilities-carousel">
      <Slider {...settings} className="facilities-slider">
        {[workshop1, workshop2].map((src, index) => (
          <div key={index} className="facility-slide">
            <img
              src={src}
              alt={`Facility ${index + 1}`}
              className="facility-slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};




const Service = () => {
  const [address, setAddress] = useState(
    "📍 Laksana Business Park Block MB 12A-B, Jl. Raya Kali Baru, Laksana, Kecamatan Pakuhaji, Kabupaten Tangerang, Banten 15570"
  );

  return (
    <div>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>

      <div className="services-info padding-left">
        <div className="services-text">
          <h2 className="services-title">Our Services</h2>
          <ul className="service-list list-disc pl-5 text-xl text-black">
            <li>General Overhaul Pump & Gas Engine Service</li>
            <li>Pump & Gas Engine Repair</li>
            <li>Project Management & Technical Support</li>
            <li>Planning & Scheduling</li>
            <li>Procurement & Expediting</li>
            <li>On-Site Installation</li>
            <li>Start-Up & Commissioning</li>
            <li>Equipment Operation & Maintenance</li>
            <li>Quality Assurance & Control</li>
          </ul>
        </div>

        <div className="services-image">
          <img
              src={serviceImage}
              alt="Workshop Service"
              className="rounded-lg shadow-lg"
          />
        </div>
      </div>


      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>
      <h2 className="text-10xl font-bold text-transparent pt-32">&nbsp;</h2>
      


      <section
        className="service-facilities bg-cover bg-center py-12 px-6 pr-14 relative flex-col items-center"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
          height: '620px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white text-center facility-content">
          <p className="font-semibold mb-4">&nbsp;</p>
          <h1 className="custom-heading font-bold mb-6 mt-20">Our Facilities</h1>

          <p className="font-semibold mb-4">&nbsp;</p>
          
          <div className="facilities-carousel-wrapper">
            <FacilitiesCarousel updateLocation={setAddress} />
          </div>

          <p className="med-text mt-4">{address}</p>

          <p className="font-semibold">&nbsp;</p>
        </div>
      </section>
    </div>
  );
};

export default Service;
