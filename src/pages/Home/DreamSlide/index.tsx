import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselArr from './img.json'
import { Carousel, } from 'react-responsive-carousel';

export class DreamSlide extends React.Component {
  render() {

    return (
      <Carousel showArrows={false} infiniteLoop={true}
        showThumbs={false} showStatus={false} autoPlay={true} swipeable={false} interval={3500} >
        {CarouselArr.map((obj, i) => (
          <div key={obj.img}> 
            <img src={obj.img} />
          </div>
        ))}

      </Carousel>
    );
  }
}
