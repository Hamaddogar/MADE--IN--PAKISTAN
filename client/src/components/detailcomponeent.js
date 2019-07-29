import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/detailroutercss.css';
import ReactImageMagnify from 'react-image-magnify';
import Zoom from 'react-img-zoom'
import MyReactImageMagnify from '../components/MyReactImageMagnify';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



 class Detail extends React.Component{

   
 render()
 {
 
  const properties = {
    thumbnailPosition: "left",
    useBrowserFullscreen: true,
    showPlayButton: true,
    showIndex:true,
    
    
    
    
    items: [
      {
        original: "https://ae01.alicdn.com/kf/HTB1MxRiIVXXXXc_XVXXq6xXFXXX1/Robe-Longue-Summer-Sexy-V-neck-Low-cut-Women-Fashion-Dresses-Vest-Slim-Pencil-Waist-Woman.jpg_640x640.jpg",
        thumbnail: "https://ae01.alicdn.com/kf/HTB1MxRiIVXXXXc_XVXXq6xXFXXX1/Robe-Longue-Summer-Sexy-V-neck-Low-cut-Women-Fashion-Dresses-Vest-Slim-Pencil-Waist-Woman.jpg_640x640.jpg",
        
      },
      {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdQBZBSQeuXcemYWN8Oh-L75ocYoUpHdj2wxLcHb54Lmb36LF",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdQBZBSQeuXcemYWN8Oh-L75ocYoUpHdj2wxLcHb54Lmb36LF"
      },
      {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      },
      {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      },
      {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      },
      {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      }, {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      }, {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      }, {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      }, {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      }, {
        original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajgVHWIjfshA9hVXUjf7rJv8HiIco9049djknYgK_NuWHp4hn"
      },
    ]
  };
   

   return(
    <div class="container">
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                {<ImageGallery {...properties} />}
                    
                </div>
                <div class="details col-md-6">
                    <h3 class="product-title">men's shoes fashion</h3>
                    <div class="rating">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <span class="review-no">41 reviews</span>
                    </div>
                    <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                    <h4 class="price">current price: <span>$180</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 class="sizes">sizes:
                        <span class="size" data-toggle="tooltip" title="small">s</span>
                        <span class="size" data-toggle="tooltip" title="medium">m</span>
                        <span class="size" data-toggle="tooltip" title="large">l</span>
                        <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <h5 class="colors">colors:
                        <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span class="color green"></span>
                        <span class="color blue"></span>
                    </h5>
                    <div class="action">
                        <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   )



 }







 }
 export default Detail;