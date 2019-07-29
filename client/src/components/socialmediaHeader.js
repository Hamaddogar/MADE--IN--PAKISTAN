import React from 'react';
import '../css/social.css';

 class SocialMedia extends React.Component{
   render()
   {
     return(

               <div className="backgroundcolors">
              <div className="row" >
                 <div className="col-sm-8">
                 <span className="padding-emailphone"> <img src="https://img.icons8.com/material/30/000000/person-male.png"/>MadeInpaksitan@gmail.com ||<img src="https://img.icons8.com/material/24/000000/phone.png"/>+924574584574</span>
                 
                 
                 </div>
                 <div className="col-sm-4">
                 
                 <div id="social">
			<a class="facebookBtn smGlobalBtn" href="#" ></a>
			<a class="twitterBtn smGlobalBtn" href="#" ></a>
			<a class="linkedinBtn smGlobalBtn" href="#" ></a>
			<a class="pinterestBtn smGlobalBtn" href="#" ></a>
			
		</div>
                 
                 </div>
                 </div>


      





           
	
         </div>

     )
     
   }






 }

  export default SocialMedia;