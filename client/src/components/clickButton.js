import React, { Component } from 'react';
 import '../css/maincatigories.css';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

import PageProgress from 'react-page-progress';
import ScrollToTop  from'react-scroll-up';
import Header from '../components/Header';
import Footer from '../components/footer';



class Clickbutton  extends React.Component
{
   render()
   {
   return(
     <div>
               <PageProgress color={'red'} height={3}/>
<Header/>
    <div className="container">


<div class="container2">

  <img className="imgg" src="https://cdn.pixabay.com/photo/2016/12/17/18/18/fabric-1914031_960_720.jpg" alt="Textile  & Fabrics" />
  <p class="title">Textile & Fabrics</p>
  <div class="overlay"></div>
  <div class="button"    ><Link to="/TextileFabrics">Textile & Fabrics</Link></div>
  
</div>
<div class="container2">
<img className="imgg" src="https://img1.goodfon.com/wallpaper/big/7/cf/autumn-leaves-berries-still-4661.jpg" alt="Fruits" />
  <p class="title">Fruits</p>
  <div class="overlay"></div>
  <div class="button"    ><Link to="/showFruits">Fruits</Link></div>
  </div>
  <div class="container2">
<img className="imgg" src="https://images5.alphacoders.com/366/366218.jpg" alt="Tea" />
  <p class="title">Tea Brands</p>
  <div class="overlay"></div>
  <div class="button"    ><Link to="/Tea">Tea Brands</Link></div>
  </div>
  <div class="container2">
  <img className="imgg"  src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/05/electronics-.jpg" alt="" />
  <p class="title">Electronics  Item</p>
  <div class="overlay"></div>
  <div class="button"    ><Link to="/Showfood" >Electronics  Item</Link></div>
  
</div>
<div class="container2">
<img className="imgg" src="https://media.gettyimages.com/photos/face-cleaners-picture-id540070811?s=2048x2048" alt="" />
  <p class="title">Cosmetics Products</p>
  <div class="overlay"></div>
  <div class="button"    ><Link to="/Showfood">Cosmetics Products</Link></div>
  </div>
  <div class="container2">
<img className="imgg" src="https://images-na.ssl-images-amazon.com/images/I/71WZpv7xqlL._SY355_.jpg" alt="" />
  <p class="title">Toothpastes</p>
  <div class="overlay"></div>
  <div class="button"    ><Link to="/Showfood">Toothpastes</Link></div>
  </div>
  <ScrollToTop  className="colorchang"showUnder={160}>
       <span><img src="https://i.ya-webdesign.com/images/arrow-keys-png-image-1.png" width="30"height="30"/></span>
        </ScrollToTop>
</div>
  
<Footer/>
</div>
   )


   }








}
export default  Clickbutton ;