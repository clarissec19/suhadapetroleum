import React, { useEffect, useState } from 'react';
import Section from '../../../HOC/Section';
import bg1 from '../../../assets/img/bg1.jpg'; 
import bg2 from '../../../assets/img/bg2.jpg';
import bg3 from '../../../assets/img/bg3.jpg';
import bg4 from '../../../assets/img/bg4.jpg';
import './home-welcome.css';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1); 

  const plusSlides = (n) => {
    
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > 4) newIndex = 1; 
      if (newIndex < 1) newIndex = 4; 
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }

    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
   
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[n - 1].style.display = "block";  
    dots[n - 1].className += " active";
  };

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    
    showSlides(slideIndex);

    const timer = setInterval(() => {
      plusSlides(1); 
    }, 5000); 

    return () => clearInterval(timer); 
  }, [slideIndex]); 

  return (
    <Section id='home'>
      <div>
        

  
        <div className="slideshow-container">
      
          <div className="mySlides">
            <img src={bg1} className="slide-image" alt="Image 1" />
          </div>

          <div className="mySlides">
            <img src={bg2} className="slide-image" alt="Image 2" />
          </div>

          <div className="mySlides">
            <img src={bg3} className="slide-image" alt="Image 3" />
          </div>

          <div className="mySlides">
            <img src={bg4} className="slide-image" alt="Image 4" />
          </div>

         
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
        </div>
      </div>
    </Section>
  );
};

export default Home;
