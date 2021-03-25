import React, {Component} from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';



export default class Footer extends Component {

render()
{
 
	return(

    <div className="footer">

           <div className="in-footer">


                 <div className="footer-heading">

                    <div className="fh">

                      <div className="footer-img"></div>
                      <div className="footer-text">Fitness-Freak</div>

                    </div>


                 </div>



                 <div className="footer-links">


                    <div className="Home"><Link to="/Header"><p>Home</p></Link></div>


                    <div className="Plans"><Link to="/Plans"><p>Plans</p></Link></div>


                    <div className="Contact"><Link to="/Contact"><p>Contact</p></Link></div>


                    <div className="Appointment"><Link to="/Appointment"><p>Appointment</p></Link></div>


                 </div>




                 <div className="footer-input">


                      <form className="form">

                           <input type="text" placeholder="enter ur email address" className="email" />



                           <input type="submit" value="Go" className="go" />
                           


                      </form>

                  </div>

                  <div className="copyright">
                  © 2021 Fitness-Freak, This template made by Mohd Areeb Safvi.

                  </div>





           </div>


    </div>

	);
}
}