import React, { Component } from 'react';
import '../css/smallCard.css';

class SmallCard extends React.Component{
   render()
   {
     return(
           <div>
<div>
 <h4 className="move-heddings">New Arrival</h4>  
 
 <article class="cardd">
  <div class="image">
    <img src="https://cdn.shopify.com/s/files/1/0981/8442/products/watches-y1-android-smartwatch-with-phone-call-camera-2_2048x.jpg?v=1542472189" />
  </div>
  <div class="entry">
    
      <div class="text">
      < h3>Watch</h3>
        <span class="meta">Company Name:Time's You | 06/13/2019</span>
        <p>Your's Time Zinc/Aluminum Die Casting Security Camera Cover Housing,Polishing, Surface Treatment, Spraying, Sand Blast,it has too much Range </p>
      </div>
    </div>
 
</article>
<article class="cardd">
  <div class="image">
    <img src="https://image.made-in-china.com/43f34j00YRfUGAwgVloa/1080P-360-Auto-Tracking-WiFi-Battery-Powered-IP-Camera-Baby-Monitor.jpg" />
  </div>
  <div class="entry">
    
      <div class="text">
      < h3>Camera</h3>
        <span class="meta">Company Name: Pixel Dav | 06/13/2019</span>
        <p>Customized Precision Zinc/Aluminum Die Casting Security Camera Cover Housing,Polishing, Surface Treatment, Spraying, Sand Blast,it has too much Range </p>
      </div>
    </div>
 
</article>
<article class="cardd">
  <div class="image">
    <img src="data:image/jpeg;base64,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" />
  </div>
  <div class="entry">
    
      <div class="text">
        <h3>T-Shirt</h3>
        <span class="meta">Company Name:Man's Shirt | 06/13/2019</span>
        <p>Wholesale Custom Bulk Blank Sublimation Plus Size Plain White Women T-shirts Sports T Shirt For Print.7 day(s) after payment received </p>
      </div>
    </div>
 
</article>
<article class="cardd">
  <div class="image">
    <img src="https://cdn.shopify.com/s/files/1/0755/3707/products/shark-helmets-spartan-lorenzo-matte-austrian-gp-red-black-HE3460DRKR-front_large.jpg?v=1542201717" />
  </div>
  <div class="entry">
    
      <div class="text">
        <h3>Helment</h3>
        <span class="meta">Author: Bikes Power  | 06/13/2019</span>
        <p>Fox Proframe Full Face MTB Bike Helmet. Spandex 13" high 11" wide   .helmet is a form of protective </p>
      </div>
    </div>
 
</article>
</div>
           </div>

       
     )

   }





}
export default SmallCard;