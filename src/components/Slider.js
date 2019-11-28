import React from 'react';
import LazyLoad from 'react-lazyload';
import SliderContent from './SliderContent'
import Slider from 'react-slick'

var settings = {
  adaptiveHeight:false,
  variableWidth:false,
  dots: false,
  infinite: false,
  speed: 1000,
  lazyLoad: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
   
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


    
function SliderComponent({ posters, title }) {
   
    return (
        <LazyLoad  height={200} offset={100} once>
            <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'hidden', height: 'auto', }} >
                <div style={{ paddingLeft:'10vw', opacity:0.85, marginTop:'70px' }}>
                    <h1 data-text={title} className={'glitch'} style={{ fontSize: '3.5vh', lineHeight: '5.5vw',color: 'white'}}>{title}</h1>
                </div>
          {
            posters && Array.isArray(posters) && posters.length>0 ? 
                <Slider {...settings} >
                {
                    posters.map((poster, i) => {
                    
                        return (
                        
                          <SliderContent data={poster} key={i+Math.random()}/>
                    
                    )
                })
              }
              
              
                </Slider>  : null
            }
         
               
              
   
         
            </div>
            </LazyLoad>
    
      
    
  )
}



 export default SliderComponent
