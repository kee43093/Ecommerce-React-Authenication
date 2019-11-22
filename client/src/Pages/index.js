import React from '../../node_modules/react';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Contact from '../components/Contact/ContactPage';




class Index extends React.Component {
  render(){
    return(
      <div>
        <Hero />
        <Contact />
        
      </div>
      )
  }
   
  
}


export default Index;