import React, {Component} from 'react';
import './Footer.scss';


export default class Footer extends Component {

render()
{
 
	return(

    <div className="footer">

           <div className="in-footer">


                 <div className="footer-heading">

                      <div className="footer-img"></div>
                      <div className="footer-text">Fitness-Freak</div>


                 </div>



                 <div className="footer-links">


                    <div className="Home"><a href="Home"> Home</a></div>


                    <div className="Plans"><a href="Plans"> Plans</a></div>


                    <div className="Contact"><a href="Contact"> Contact</a></div>


                    <div className="Appointment"><a href="Appointment"> Appointment</a></div>


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