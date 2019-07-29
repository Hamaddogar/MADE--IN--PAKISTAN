import React from 'react';

import Footer from '../components/footer';
import PageProgress from 'react-page-progress';
import ScrollToTop  from'react-scroll-up';

import '../css/scroll.css';
import '../css/adminChat.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Slider from '../components/slider';
import Sidemenu from '../components/inlineDiv';
import VedioDiv from '../components/vedioDiv';
import Search from '../components/searchbarnew';
import Ourservices from '../components/ourservices';







 class Home extends React.Component{

     render()
     {

          return(
             <div>
               <PageProgress color={'Green'} height={5}/>
              
  
          
           <Header/>
      
      <Search/>
         
           <br/> <br/>
             <Slider/>
           <Sidemenu/>
           <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     data-aos-delay="300"
     data-aos-offset="0">
    <VedioDiv/>
</div>
<div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
      data-aos-offset="300">
          <Ourservices/>
          </div>
              <Footer/>
              <ScrollToTop  className="colorchang"showUnder={160}>
       <span><img src="https://i.ya-webdesign.com/images/arrow-keys-png-image-1.png" width="30"height="30"/></span>
        </ScrollToTop>
                 </div>

          )
          



     }






 }

  export default Home;