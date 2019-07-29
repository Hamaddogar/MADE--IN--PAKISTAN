import React, { Component } from 'react';
import '../css/menumega.css'
import { Link } from 'react-router-dom';




 class Menu extends  React.Component{
 render()
 {
  return(

       
	

<div>
<div class="wrapper">
	<div class="mega_menu">
		<ul>
			<li><Link to="/" style={{color: 'white'}} activeStyle={{color: 'red'}}>
Home</Link>
  </li>
			<li><a href="#">sports</a>
				<div class="sub_menu">
					<div class="col">
						<img src="https://images.all-free-download.com/images/graphiclarge/football_theme_picture_07_hd_pictures_168216.jpg" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
					<div class="col">
						<img src="https://ae01.alicdn.com/kf/HTB1ipQzwBjTBKNjSZFNq6ysFXXaA/Festive-Merry-Christmas-Baby-Cloth-Wear-Long-Rompers-Infant-Baby-Girl-Boy-Cartoon-Hooded-Baby-suits.jpg_640x640.jpg" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
					<div class="col">
						<img src="data:image/jpeg;base64,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" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
					<div class="col">
						<img src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/a0/59/a3/shutterstock-529762195.jpg" alt="foot_Ball"/>
						<p>football is unconditional love</p>
					</div>
				</div>
			</li>
			<li><a href="#">tv shows</a></li>
			<li><a href="#">movies</a></li>
			<li><a href="#">music</a></li>
			<li><a href="#">tech</a>
				<div class="sub_menu tech">
					<div class="col">
						<h4>The best way to predict the future is to invent it.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo, nisi labore deleniti officiis doloremque perferendis laborum cupiditate totam.</p>
					</div>
					<div class="col">
						<h4>The best way to predict the future is to invent it.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo, nisi labore deleniti officiis doloremque perferendis laborum cupiditate totam.</p>
					</div>
					<div class="col">
						<h4>The best way to predict the future is to invent it.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium laboriosam sit quos rem molestias illo, nisi labore deleniti officiis doloremque perferendis laborum cupiditate totam.</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>
</div>



       
  )
     
 }


 }

  export default Menu;