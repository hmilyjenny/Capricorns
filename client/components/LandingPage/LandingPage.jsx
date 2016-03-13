import React,{ PropTypes,Component } from 'react';
import {
  Carousel,CarouselItem,Button,Jumbotron
} from 'react-bootstrap';
import '../../../static/css/carousel.css'

function LandingPage(props,context){
 return(
   <Carousel className='carousel-inner'>
     <CarouselItem>
       <img width={1500} height={500} alt="900x500" src="../static/img/intro-bg.jpg"/>
       <div className="carousel-caption">
         <h1>Hello, world!</h1>
         <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
         <p><Button bsSize="large" bsStyle="primary">Sign up free</Button></p>
       </div>
     </CarouselItem>
     <CarouselItem>
       <img width={1500} height={500} alt="900x500" src="../static/img/intro-bg.jpg"/>
       <div className="carousel-caption">
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
     </CarouselItem>
     <CarouselItem>
       <img width={1500} height={500} alt="900x500" src="../static/img/intro-bg.jpg"/>
       <div className="carousel-caption">
         <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       </div>
     </CarouselItem>
   </Carousel>
 );
}

export default LandingPage;
