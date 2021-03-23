import React from 'react';

import { Nav,Navbar,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss';

function Navbr() {
  return(
     <div >
         <Navbar expand="lg" className="navbar">

            <div className="left-nav">
               
               <div className="left-side">

                  <div className="logo"></div>
                  
                

              </div>

             </div> 







        <div className="menu" > <Navbar.Toggle aria-controls="basic-navbar-nav" className="icon" /></div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              
              </Nav>
              <Form inline className="right-nav" >
                  <ul>
                     <li><Link to="/"><p>Home</p></Link></li>
                     <li><Link to="/Appointment"><p>Appointment</p></Link></li>

                     <li><Link to="/price-table"><p>Plans</p></Link></li>

                     <li><Link to="/bmi"><p>BMI</p></Link></li>
                     <li><Link to="/Contact"><p>Contact</p></Link></li>
                    
                  </ul>
              </Form>
            </Navbar.Collapse>
          </Navbar>
     </div>
    
    );

}

export default Navbr;
