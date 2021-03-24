
import './App.scss';
import { Nav } from './layout';

import {Home ,Appointment,Contact,Plans,Bmi} from './spa';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
 

    <Router>

      <Nav />
      <Switch>
       
    
        <Route path="/Appointment">
            <Appointment />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
           <Route path="/plans">
            <Plans />
          </Route>
               <Route path="/bmi">
            <Bmi />
          </Route>
               <Route path="/">
            <Home />
          </Route>

     </Switch>
     </Router>
  );
}

export default App;
