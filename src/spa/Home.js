import React, {Component} from 'react';

import { Layout } from '../layout';
import Header from './Home/Header/Header';

import Section2 from './Home/Section2/Section2';

import Section3 from './Home/Section3/Section3';
import Section4 from './Home/Section4/Section4';




export default class Home extends Component {

render()
{
 
	return(

     <Layout>
       
       <Header />
       <Section2 />

       <Section3 />

	   <Section4 />
		   
		
    

     </Layout>

	);
}
}