import React, { Component } from 'react';
import '../css/inlinediv.css'
import '../css/sidemenu.css';
import watch from '../../src/images/watch.jpg';
import LazyLoad from 'react-lazy-load';
import Header from '../components/Header';

import Slider from '../components/slider';

import Sidenav from '../components/sidemenu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../components/menu';
import WithScroll from '../components/withScrollbar';
import SmallCards from '../components/samllcards';
import Bigcards from '../components/bigcards';



 class Inline  extends React.Component{
   componentDidMount()
   {
     AOS.init();
   }
    render()
    {
      return(
      <div className="padding-setting">
            <div className="row">
            <div className="col-sm-3" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
      data-aos-offset="300"> <Sidenav/></div>

         
            
            <div className="col-sm-4" className="move-up"  data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"><SmallCards/></div>

  <div className="col-sm-4"  className="move-up" data-aos="fade-up"
  data-aos-easing="linear"
  data-aos-duration="1500"
   data-aos-offset="300"
   data-aos-easing="ease-in-sine"><Bigcards/></div>
</div>

   
    </div>



          
       
    

    
  
       
   



  

      )


    }





 }
  export  default Inline;