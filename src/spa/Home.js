import React, {Component} from 'react';

import { Layout } from '../layout';
import Header from './Home/Header/Header';

import Section2 from './Home/Section2/Section2';




export default class Home extends Component {

render()
{
 
	return(

     <Layout>
       
       <Header />
       <Section2 />
		   
		
    

     </Layout>

	);
}
}