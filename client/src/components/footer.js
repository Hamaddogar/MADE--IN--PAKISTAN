import React, { Component } from 'react'

import '../css/myaddd.css';
import WithScroll from '../components/withScrollbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Footer extends React.Component {

    render() {

        return (
<div>   
        
          <div className="padding-scroll">
          <div data-aos="fade-up"
    
     data-aos-duration="1300"

      data-aos-anchor-placement="center-center">
  <WithScroll/>
</div>


</div>
<div class="footer">
               <div className="padding-div">
                <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <h4> Our Services</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Top Trends</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    <input type="text" class="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><a href="#"><img src="https://img.icons8.com/color/48/000000/facebook-circled.png"/></a></li>
                                <li><a href="#"><img src="https://img.icons8.com/color/48/000000/twitter.png"/></a></li>
                              
                                <li><a href="#"><img src="https://img.icons8.com/office/40/000000/instagram-new.png"/></a></li>
                            </ul>
                        </div>                          
                    </div>      
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2019 <a href="#">Made IN Pakistan</a>.</p>
                    </div>            
                </div>             
            </div>
        </div>
        </div>

     


        )

    }





}
export default Footer;