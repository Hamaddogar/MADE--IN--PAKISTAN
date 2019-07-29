import React, { Component } from 'react';
import '../css/sidemenu.css'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Sidemenu extends  React.Component{


	
 render()
 {
  return(
     


     <div>
  
    <section class="header">
    
     <h4>Catigories</h4>
      <div class="side-menu">
        <ul>
          <li>Agriculture Machinery <i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
              <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDtipYso0z5RWXhY7g0cBcD6LZVeQLcr2JTwTnaKLANjxOuOb6Q"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Textile&Fabrics<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Textile& Fabrics</h5>
       <Link to="/TextileFabrics" style={{color: 'gray'}} activeStyle={{color: 'red'}}>Men Kurta & Shirts</Link>
        <li> </li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Computers<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Books<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Fitness<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Baby Care<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Magazines<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Auto Accessories<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUVFxYXFRcWFRUVEhUVFRcXFhYXFxUYHSggGBolHRYWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAI4BYwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EAD4QAAIBAgMDCgIJAwQDAQAAAAECAAMRBBIhBTFRBhMiQWFxgZGhsTLBI0JSYnKCstHwBxThJDOSokOD8XP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAQEBAQEBAQAAAAAAAAABEQIhMRIyQQP/2gAMAwEAAhEDEQA/APcYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLyLwJiReTAREQEREBERAREgmBMSIvAmJF5MBEi8QJiIgIiICIiAiIgIkXi8CYkXi8CYiReBMSLyYCIiAiIgIiICIMpvAqiReLwJiReIEH+fOIzSM0CZIlOaVLAmIiAiIgIiICQZMpJgIEi8ZoEiP5+0AyM0CTBkZozQK4kCTAREQEREBERAp/zEi8EwJiQWk3gIkZozQJEqlAaVwEREBERAREQIMiVGUZoEwZGaA0CqRAiBNotJiBFpMRAREQEREBERAREQItFpMQItFpMtGuuVmBBC3vYg6rvHfAuFYtMTC7QR6IrblsSb7xlvf2MyaNQMoZTcMAQeIIuI0VxEQEREBERAREQItJtEQFpFpMQItFpMQFoiICIiAiIgIiICRaTEBaRaTEBERAREsVcUqsFbS9u7U2gX4mLh8arB26kYqfC37y3tHaa0lY/E4pvUVNxZUGutu0SbFys6JrNnbZSrUyKCL0kqg8Q5IItxGnnMjF4gqwA+yxPy9Y2Zpl+MuJjYSsTod4C3PadbS9VqqozMwUcSQBroNTEqK4nNYzlvg0NgzObsDlU2BXta1wdwIvNnsDa64qiKqqV1KlTYkEdo7LHxjYuVsoiQzAAk7hqZUTEs1MSoCneHIC2+9uPdLgYXtfXh16wJvNDSPM4tqZ/28R0hwD9fnr5rNjtTZwqgalXXVHG9T+05bbGKrWFKsBnRgVqDQ28N99NdN0593G+ZqqnicmDrUjvFTJ4HU/padNWr8xhw2UtkVAQNDbQE+A1nAO5NyTcsbnXe2u/t1PnO2O16ZvTrDIrr0WJvTdSPtdR75nitdROO2gRUwxVvo6pIPA5guQ+syaONLYh6VhlRFJPXmPV3WtOMrbSQL/bhwz0auamQb3TU7/EHxnQcma/OVcRU+0UtxA6dvQCanW1LzkbnGY6nSyc42XnHFNN+rtew03bpj4/ayUqtGkQS1dmC2toFFyT2agf/ACaf+oikYUVBvpVabjvF1H6phVcWtbalF79Cjh+dN9wDITc+Dp5TVrMjr2xSA2zLexa1xmyqbE232B0lxHBAI3H5zg+TDGs+JxjX6bc1RB6qd7n9I8Q06+93Vb9Gna/4twH87ZJ1pecZ8tLiEJKhhcGxFxe9r7u4zQ7V2/TStRKVlZSWV0Vgwtx00BFj5TneWNRqGJ/uk/8AC1OrYfWRgKbjxvbzi9rOXcPtKmMQuG15xqZqDTo5VYLqeNz6GZs8r2Fyiw6444irWATmCLnMbtUrAgAWud99O0z0mri+lTykFXuLjUbujYiWdbNS85WXE19LF9KszHopYAdovfxvMrDVSyBiLXF7d+75Sy6li9ETScr6xGHyjfUZUFt+pufQRbiRu4nHLtFxUr1EN2qVaeHpX1FkJzG3CxB/NOxiXVswiIlRibWxho0alUIX5tGbKDYnKLnWc9t/lGVoYTFUG+iqVqYqXA1psGzKeBFju6xM/HcpKdGvzGJU0kcfR1WsaNTTpAn6hGuh+YnlnLaq2Fw9bBhjkSvTxFC2qvSe4ZL8LMDwurdkx1W+Y9Uxe3gmOo4Po/SU3cknpXHwhfBW9JtMdjadFDUquEQEAs2ijMQouerUieRbI2t/d7Zwtbq5vr6stIFj3Zg58Z6Xj62Gxi18Fzgz5SrqQQ63AKuAwGYAlTcXG6WXUsxdx22lpYnD4Yqf9QKmV76BqYBtbruCfTjpkYfadN61WgpOeiEL6aDnASov1mwv4ieY4ja5FHBmsQK+AxQo1QT0jT+1xIy08t+ux4zqeQNcVq+PxAIIeuFUjrSmCEP/ABIknW1bzkdlERNsERECl2sCTuAv5Tm9uOBUDA3WpTJH4k1HpN5VqVF1IDL2aETldtg5gALJe6j7J6wOycv+l8dOJ6pwmNJOQHQ5axt12NnU8d4lnF7YSqM+vOYSsyV1ve9GqShIP1gRa009SmyMMu5s3hcdId3XLe18ARTplLguLVCNCyEg2PGxtOPPVdvzNZmwdoc3iKFmDZRUoNwZM5dGB7SbDunSV9tJUxL0kDNlADsB0FtrlJvvv7HtnAYdDYMmhU3X8p0PmJ1vI+hagWO93Zies7h8jNS34dcz66jBMW0GmuZz46KPKaj+pFEtg7j6lRGPcbp7sJ0WCpZVHE6maLbeO52lVoFQC1dMNrro+Vs/flJI7Vnb5z64T2+PH9oM4psafxAXGl721It2i4ms5P7ZqjFU61N2RXLLoxGpAIU236hdOyZ+LFVWerT+kpqSrofu/E1M8OzvnP4o82QKVwmYVqdwMyswBI06r+gE5O0exf0v5RYjEVcQlVzUQM5QtqVCZFAB4G97cfGeiOtwRxFp49/TDHDC4KribBiKuSoL9JKeXNmt2mw/LO5HKYHGGhmW60blAynp5hrx3dU6c9ZPXLqbfGVh8SDzIY6JmJ8N3tM7CVQiNWqGxc34mw+EAdc0nNzdbKwosKjanct9coGmknNunUiau2qYFNtctRHqX+yiJnJI9JxO3eWOCxKK9OtlYK1w6lCLNYC/wnUHQHcZqOUW1Ki4V1pjVaT0r8EqVOmw/IbTzp9V6A0XcTpfuHXJ11sxeef9emEjVhuurj2b1PpOgwmxVxAKVGAS/EXzHdlHHtnBchcOeYJO5qjW7uiD6gzslfnagzCwQfD1XGg/nZOW46WMSps1aYdVUAgMDbfpcb98nYPKJaIC02R2fKpXML9EnUeZ85Y2jm55gCcoCsB1Bje8sU9h0XSpWqJ/tLmGWym5IuW+0BmvrviX3ws89b7lvjq9TBsbLTRmQKD0nazBtOzTsnDUsS4zWcjMmRtdSnR6J7OivgLTM29VehWq063SFFFIa5a+a5AW/EWsOMpXC5xmAsddJ0u6zMkbXZlXEYpRQo/QUEADuurnjZtNTqdOOp44O26DU6jYZGZaS5SoudLr8X4rsxv2mdhyYpJTorTzKKnxMtxnHOElbrv1UDymDyxwCg06t7F707ccoLD5+Qmca5vrh6OJaiwDrnF7hhvY9V+3+azoeVGNc4WoW+rQNMaa5dbX7r7+wSrYWzlrVaikXNFBVHa1xby3zZYjBh0ZGGjAqe4ixjF6s141hqXRH8656XyJxTpSwqBjYO7Zb6b3N7eAnn1bZdRKj0wTdGKn7Ohteei8h9iZQtRgSUXS/wBpxc28D6yUdrRrhug2gZy7niN9vf0lyhjWq5UA6ArFSW+JgDfQcBp5TzvE8rarmygUgezM2/fcjhpu4zcclNqvUaqHcls2dOqwOjZeAGmnbE6rN4dhtWvXKPXovYUzotgVdV+Im4v5ds0vKPbQqDDsm8DnCN4DXsAe4q0260nqIUJsmXKqjQMx0u3HrnAUNoUmaoodSaZsQCM3A6d+k6XpiRp8bypqJbJ0alCsyIBc53qOlmIO85Or7s7HkzypxGeqrnnMjDOzHTnGGtNeAQBfEmeWbYqsuNqVKdmVaquOtc6LYHTfrfynSclqtepTWnRHNqGBrVWs1SrUc3YICLDU2zG+luuTcayV7jg6+dFe1swBtwvL0xcMwRLEgLTAW5NhoALkntlvAbWo1iy03zFQCwsQQC9Sn1j7VKoPy907SuK5tPZ9OvTalVUMrdXWD1EHqI4zw7buxubNaidcudb8QL2PsZ73PPeW+z1/uCw/8iAt36r7KJnuNcV4ps/H1KTBhr0Gp23dB9GF+0EjunoHJrCYvaVACkFpth2y0sQzEOgCi1IMupUancbX3icxgdiZqjK+gT4u03tb0nsn9O8PzOEdrWDVDlA4AKunjeZkb6vjyvGU6ruXrsWqmwdiLEsoC/Kdd/T7b9LBrVp1swDsGDAZgCBYgga8Jb5RYFVxVULuLFx3NqfUmZnJzk1z16ri9NDqo+J7WJAPVoR37pJ98LmOkwHK58RVVaGFdqRYKarstMa63UWObQHrvpOqnMLVVCqpbKuULbQZVJK2H4SRbsm/oYnOzADorpmvvbgBN89a59RkRETbJNNtvBjLcd/lvm5mFtQdDwPyme5sa5vrlRhAwPHS3eTaYlGkWYgm4sw8CMnt7TfUKWviPcTHp4YCow6tfeee8/Hb9NUtACxKrcUwVA3Ezd0KuVqNIAWem7E2tuy7u8kzGqUFJGv1QOzr3zS49mQNSWoSVdgtiegoa9r94nT4zfXY47lJhqNTmqtTK1l3g65t1hvPhOV2w7nE1KtB0ILK6i9+ktPJm79T6SxykwXTpV2IbMlJ8p+K/Xbzl9dlrS6Rbq5y31ukLgeUttq8yT1z2wNmVXRSbU6aXFj8TsNGLEjQXvpMSnsbmcQ6MFIFDo7iLEgg9mk7qlhwUC7rajgb6/OajaVJVxLNmH+yg3WFwq2HbujMZ3XCvydqrh2e+QOjKwuwYhbOug0vv0O682fJ2nenmChXUhc4HTOUAjpb+v0nbphlrYEMRYio1xxzDKbeQ8pp9jbOyIR99vTT5TNjW+Oo2bd6KM+pKjMeJtrMrGbFZE/0zuotqgZrHiVudDL2Gw4VFUbgoHkJb5S46pQVaim6srUytho5UlHB37xY9k3JkYvtcRgXSswpqNXsACNDmBNvKx/MJym1dlLTaoijoo7KvcrED0E6TkhQqNiFA0AK3Yb1XMoIH3jlQX6gDLm1cHd6h4ux82Mxnjd8rZYLZi0UponwhVI8RcnzJm4bBgOWH1gPS9/lISldE/8Azp/pE2lSnu7vmZLyn6c/jMMFcPprvvu00+cycEy/2+KZChazqBcWzEaDzAmZiKfSXsJ+U12I5NpUFStTIRwSzadFha99Nx7ZeZ6WuXxBfENauqAZ6butrPUamuWnbs48dOEu4bZ9TOULKQzkhVJuigbmO++65m3TDKzqSb82pYtb4iLD31mVgsOq1Ge4OYHdvFzeaw1wnK7AVXxFfEdC4fpKhJamEAVfJVBv4zZbFweJq4M85U6KPTagHYnLYNe3AEEaTd8tcNSp12qj46tFVKj6xF1DHwAHhNngcItXBUh8OcPm/F8PpYR+SdfGr5M45qTVXCAksFK3vcAICAwm5bD24ftNXsPDhCyKbktYX00OUXnRtRHV/mSTwt9ea7VwQ56ppvcnznfcnKQ/tV01BX9C/tOfx+FvUc/eb3nVbBp2oAfh9iPlJIW+POdq7KyYh0I0uSv4W1HobeE3nJTZBVHrn4tVT8KnpHxIt4TL5QYe+JJ+6o9L/ObrYVH6ADtcf9jJOW714y8xCXGnRuO+1/nPOtr7DXEVSHFmYghrDMNM3iLndPTqVLQA8ADOebCjn2NtwFvICT83WJXmWI2MaaujAXVgDbcdAQR4Gd5yOwJpJSWwPRzEnf0zm9L+kxNs4S71PxJ+gftOk2TTAWl+BR6CbsN8Zu2qzrh2KqKi688lru1NgQxTW2cXDWO8KRvIM4rkZtllq1a7ZLvTqfRgkNzmfN0hboguap/9k9CK2699t/VY6gcZwuzcAp2i62srNl78ljbyUyysO2bFuqZnKGqlJ82W4pZ7AgC5va4t4TzDlVjMZUdWapmDAKObsBck6aa+pnp70bsynrbw3zhNo4dKNXmVOb6UflXNbzi+t84xcHstizuSuYqhZb9IEKAT53nb7FcjDU0G8G/hcnXxM0zbPQVqhDCxA0tqLATf7PS1JR1ag+n7y2M68/5cVRzrrciyoz8Ho5ebqAcSoYuR3TY/0q23Tp4fFc9UAWmadRmOupprSa1t92pA6b844zO5YbCFenUUC7izoRvzBbW8RceM4rkZstmxFJBezVELjqZUYVDcdYGW/hJNi+WPRNqVEzpa4BKPZgVKqw3MDqp13Gb7k8p5rMfrszAcF3D0F/GaPlDQvXY9i+06bZtPLSpjgi+0nH906/mMmIidnImLjxdf5xmVLVdbiS/FjWUqWviPeUGl0mPf7zYJT1lLUt/jMflrWr5iYG2cGvOk2AuATpre06DmZjY7D3a/YPaWw1ruUWGDGnpuSw7rycbQBH/rUf8AUTaY6hmK/hEl8PdfygeQtGLvjAp4fQdwmo2rggahJ4KPJf8AAnVpQ0HdMHE4S7Ey4zKxtnYe2FKjdnmFhsLbN+NvedDg6FqZH3r+glhcNbN3mTF1k0U6K9w9pb5QYcPh2B6spHYQR8iZmUU6I7hIxy3psOwe4lxN9cxySwYUE21Li/cALe5mNisHcnvM6TZGGyg94MsvhbyZ4tvq1h6HQX8KjyUCZwp6DuldGj0R3S+qRhrW16Ov87JcopalUHFW/TMt6Unm+gw4gxJ6lrmaGGAv2i27+cJew+HAv/OP+JsRhpcShaMXXO8rMMGqpcbqY795/wAzZbHo/wCnpqNy85b/AJGXdr4bM4P3QPeZuzKFqYHAn3jPTfGiwmFAq37T7zdc1KFw1iT3zP5uJC1y9fCXZvxN7mbrZNOyW7vnJOG1PefeZeEp2Fowtc9tPD3rse79Im02PStTt95veTiaF3J/m6ZmApWXxMSFvgqzVGh9Ix/nVN1lmM1HpExia5zF4S5f8S+xmzw1Gy0+zL6WmW2FvftI+cvJRtbstGLquqmg7DNBgMIBiQ/XnY7uOb/E6ZxpMTD4WzA9pMZ6mqlX6S/bOR2lhAcQzH7ZP/Yn9p2wXWaWvhLuT2/OMWVjPhhzrH+bh/ibLCU+hbtPsJdqYfpky/Qp6eMuJrCq0t5/mgnMch8FlxF7fVPtO1q0ui3cfaarY+EyVL9hjDVe1aV6l+wTdU9wmJiKV2J7pmCTme0t8TERNskhhJiBQFgpK4gW8koqUrmX4gWzTvbuk82JXECnLLTUtZfiBbpJaUmlL0QKVGkVFuLSqIFulTteRzUuxAoCSoCTECkrGXS0qiBZNKObl6IGNWoXPhLlBLC0uxAtGlK8sqiBa5uVItpXECw9K5MuUlsJXECLSgpLkQLeSMkuRAgiAJMQItLHMTIiBQUkqsqiBBGlpap0bG8vRAoZZXEQERED/9k="/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Movies & Music<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Video & Games<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Home & Kitchen<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Furniture<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
          <li>Grocery<i class="fa fa-angle-right" aria-hidden="true"></i>
            <ul>
            <div className="main-div">
              <div   className="div-1">
              
             <h5 className="color-heading">Agriculture Machinery</h5>
        <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
        <li>Tiller</li>
        <li>Harvesting Machine</li>
        <h5 className="color-heading">Plastic wood Working Machinery</h5>
        <li>CNC Machine Tools</li>
            <li>Lathe</li>
            <li>Drilling Machine</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <li>Agriculture Machinery</li>
        <li>Livestock Machinery</li>
        <li>Feed Processing Machinery</li>
          <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>

              </div>
              <div   className="div-2">

              <h5 className="color-heading"> Machine Tools</h5>
         
   
            <li> CNC Machine Tools</li>
            <li> LatheDrilling</li>
            <li>Tiller</li>
            <li>Lathe</li>
            <li>Grinding Machine</li>
            <li>Milling Machine</li>
            <h5 className="color-heading"> Construction Machinery</h5>
           
   
            <li>Building Material </li>
            <li> Making Machinery</li>
            <li> Lifting Equipment</li>
            <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
            <div><img src="data:image/jpeg;base64,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"/></div>

</div>
<div   className="div-3">
<h5 className="color-heading"> Other Machinery & Parts</h5>

   
                <li>Lathe</li>
                <li>Metallic Processing</li>
                <li>Concrete Machinery</li>
            <li>ExcavatorStone</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li> Crushing & Culling Machine</li>
                <li>ExcavatorStone</li>
            <li> Processing Machinery</li>
                <li>CNC Machine Tools</li>
                <li>Lathe</li>
                <li>Drilling Machine</li>
              
            <li>MachineryMachinery for Food,</li>    
            <li> Machinery & PartsRubber</li>
            <li> Beverage & CerealMould</li>   
            
            <li>Laser EquipmentCutting</li>
            <div><img src="https://ui-ex.com/images/borders-transparent-horizontal-1.png"/></div>
</div>

              </div>
            </ul>
          </li>
        </ul>
      </div>
     
    </section>
    </div>


   

  )

 }





}
export default Sidemenu;