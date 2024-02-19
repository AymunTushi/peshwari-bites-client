import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../assets/images/banner1.avif'
import banner2 from '../../../assets/images/banner2.avif'

const CarouselBanner = () => {

  const imageStyle = {
    width: 'auto',       
    height: '600px', 
   
  };

  const captionTextStyle = {
    color: 'white', // Set the color to white
    textAlign: 'center',  // Center align the text
    fontSize: '3rem',
  };
  return (
    <div>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" src={banner1}
          alt="" style={imageStyle}
        />
        <Carousel.Caption style={captionTextStyle}>
          <h5 className=''>Discover<br></br> Peshwari Bites</h5>
 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide" style={imageStyle}
        />
        <Carousel.Caption style={captionTextStyle}>
          <h5>Simple techniques<br></br>Simple Ingredients<br></br>Unique Flavor</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
};

export default CarouselBanner;