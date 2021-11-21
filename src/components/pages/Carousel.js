import { Grid } from '@material-ui/core';
import React from 'react';
import Iguana from '../../assets/img/contemplative-reptile.jpg';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '640px', width: '100%' }}
            src={Iguana}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '640px', width: '100%' }}
            src={Iguana}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '640px', width: '100%' }}
            src={Iguana}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
 
export default CarouselComponent;