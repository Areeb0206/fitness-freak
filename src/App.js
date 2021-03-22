
import './App.scss';
import { Nav } from './layout';

import {Home ,Appointment,Contact} from './spa';

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
           <Route path="/">
            <Home />
          </Route>

     </Switch>
     </Router>
  );
}

export default App;
