 import React, { Component } from 'react';

import './Section4.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Section4 extends Component{


render()


{ var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
return(
          <div className="sec4">

                   <div className="in-sec4">

                          <div className="sec4-heading">

                                     <h1>testimonial</h1>
                                     <h2>What people say</h2>
                                     <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </h3>
                         
                          </div>
                      </div>


                       

					  <Slider {...settings} className="slider">


							      <div className="sec4-one">
                                      
                                         <div className="sec4-img">

                                                 <div className="test-image"></div>

                                         </div>

                                         <div className="sec4-text">


                                              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </h2>
                                              <h3>Mohd Areeb Safvi</h3>
                                              <h4>Customer</h4>



                                         </div>



							      </div>


							      <div className="sec4-two">
							     
					                 
					                         
                                         <div className="sec4-img">

                                                 <div className="test-image"></div>

                                         </div>

                                         <div className="sec4-text">


                                              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </h2>
                                              <h3>Mohd Areeb Safvi</h3>
                                              <h4>Customer</h4>



                                         </div>


							      </div>


							      <div className="sec4-three">
							      
					                        
                                         <div className="sec4-img">

                                                 <div className="test-image"></div>

                                         </div>

                                         <div className="sec4-text">


                                              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </h2>
                                              <h3>Mohd Areeb Safvi</h3>
                                              <h4>Customer</h4>



                                         </div>

					  		      </div>


							      <div className="sec4-four">
							               


							                        
                                         <div className="sec4-img">

                                                 <div className="test-image"></div>

                                         </div>

                                         <div className="sec4-text">


                                              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </h2>
                                              <h3>Roger Scottt</h3>
                                              <h4>Customer</h4>



                                         </div>
							      

							      </div>


							   
					    </Slider>

          </div>

	);

}

}




