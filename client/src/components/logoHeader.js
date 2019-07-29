import React from "react";
import '../css/logoHeader.css'
import log2 from '../images/log2.png';
import Social from '../components/socialmediaHeader';
 import Login from '../components/login';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


class LogoHeader extends  React.Component{

    render()
    {

        return(
<div>


   <div  className="logo-headersetting">

       <div className="row">
       <div className="col-sm-4">
     <div className="logoHeader1">
     <Link to="/GetInvolved" style={{color: 'black'}} activeStyle={{color: 'red'}}>GET INVOLVED</Link>


  
    &nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/thePakistaniList" style={{color: 'black'}} activeStyle={{color: 'red'}}>
  THE PAKISTANI LIST</Link>

    
    &nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;
   <Link to="/Marketplace" style={{color: 'black'}} activeStyle={{color: 'red'}}>
   MARKET PLACE</Link>



         </div>
         </div>
         <div className="col-sm-4">
         <div className="logoHeader2">


<center><img src={log2}className="imgset" /></center>
</div>  
</div>
<div className="col-sm-4">
<div className="logoHeader3">
<Link to="/login" style={{color: 'black'}} activeStyle={{color: 'red'}}>
ACCOUNT</Link>

&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Adminlogin" style={{color: 'black'}} activeStyle={{color: 'red'}}>
OWNERACCOUNT</Link>
  
  
    
    &nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/Supplier" style={{color: 'black'}} activeStyle={{color: 'red'}}>
   SUPPLIER WITH US</Link>

</div>
</div>
  
   </div>
   </div>
   

<div>




</div>
   </div>

        )


    }







}

export default  LogoHeader;