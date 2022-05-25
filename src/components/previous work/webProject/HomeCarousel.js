import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarouselstyle.css'

const data = [
  {
   image: require('../images/Slider1.jpg'), 
   caption:"Body Shape",
   description:"Description Here"
  },
  {
    image:require('../images/Slider2.jpg'), 
    caption:"Body Shape",
    description:"Description Here"
   },
   {
    image:require('../images/Logo1.png'), 
    caption:"Body Shape",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;