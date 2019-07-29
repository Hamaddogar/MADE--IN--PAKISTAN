import React from "react";
import ReactDOM from "react-dom";
import SmartSlider from "react-smart-slider";
import Search from '../components/searchbarnew.js';


import '../css/Slider.css'
function Slider() {
  const slidesArray = [
    {
      title:"" ,
      url: "https://images.pexels.com/photos/428615/teacup-cup-of-tea-tee-drink-428615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     height:300,
    },
    {
      title: "",
      url: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
      height:300,
      
    },
    {
      title: "",
      url: "https://zipfm.net/wp-content/uploads/2018/11/FOOTBALL-NOV.-9-2018-KAF.jpg",
      height:300,

      // Set this key, if you want to update style for specific slide caption
      customCaptionStyle: {
        color: "#7fffd4",
        "font-weight": "bold",
        height:200
     
        
      }
    }
  ];
  return (
    <div className="App">
      
      <SmartSlider
        slides={slidesArray}
        autoSlide={true}
        buttonShape="square" // round or square
      />
    </div>
  );
}
export default Slider;