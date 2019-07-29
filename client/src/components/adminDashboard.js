import React from 'react';
import '../css/Admindash.css';
import { Link } from 'react-router-dom';
import Userloader from '../components/userloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import { Notification } from 'react-pnotify';

 class Admindashboard extends React.Component{
   state={
    notification:[],
    num:'',
    reason:'',
    email:'',
    messagedisplay:''
      
   }
   state={
    loading:true
  }
    
  
  componentDidMount() {
    fetch("http://localhost:8000/ConsultServices")
      .then(response => response.json())
      .then((res) => {
        console.log(res);
        this.setState({ notification: res.data,
        })
      })
      .catch((error) => console.log(error))
      setTimeout(()=>{
        this.setState({loading:false})
      },4000)

  }
  allow(email,companyname,evt){
    evt.preventDefault();
    var email={email,companyname}
    var option = {
    
      method: "POST",
      body: JSON.stringify(email,companyname),
      headers: {
          "Content-Type": "application/json",
      }


  }
  fetch("http://localhost:8000/allowuser", option)
  .then((res) => { return res.json() })
  .then((res) => {
    console.log(res)
    if (res.success==true) {
       

        this.setState({
          messagedisplay: " Successfully You Have allow "+res.data +" Company"
        })

        {
          Alert.success(`${this.state.messagedisplay}`, {

            position: 'top-right',
            

          })

        }

      }
      else {

          this.setState({
            messagedisplay:" Sorry! Please check your Field"
           })
        }
     
      
  })
  // .catch((error) => console.log(error))

  }

  reason(evt)
  {
    
    this.setState({
      reason:evt.target.value
    })

  }
  notallow(email,evt)
  {
    evt.preventDefault()
       var reason= this.state.reason
              this.setState({
                email:email
              })
      console.log(reason+'reson',this.state.email)



  }
  
  sendnotification=()=>
  {

        

   var email= this.state.email;
   var reason=this.state.reason;
    var   notallow ={email,reason}
   var option = {
    
    method: "POST",
    body: JSON.stringify(notallow),
    headers: {
        "Content-Type": "application/json",
    }


}
fetch("http://localhost:8000/notallowuser", option)
.then((res) => { return res.json() })
.then((res) => {
  if (res) {
    this.setState({
      email:null,
      reason:''
      
    })


        


      // this.setState({
      //   messagedisplay: " Successfully We've Recieved Your Information .our Team contect You as Soon As Possible !"
      // })

      // {
      //   Alert.success(`${this.state.messagedisplay}`, {

      //     position: 'top',

      //   })

      // }

    }
    else {

        // this.setState({
        //   messagedisplay:" Sorry! Please check your Field"
        //  })
      }
   
    
})
// .catch((error) => console.log(error))




  }
     render()
     { 
      if(this.state.loading)
      {
        return <div><Userloader/></div>
   
      }
   else{
          return(
            <div>
              <Alert stack={{ limit: 1 }} />
                <div id="wrapper">

<aside id="sidebar-wrapper">
  <div class="sidebar-brand">
    <h2>Made In Pakistan</h2>
  </div>
  <ul class="sidebar-nav">
    <li >
    <Link to="/" style={{color: 'white'}} activeStyle={{color:'red'}}><i class="fa fa-home">Home</i></Link>

    </li>
    <li >
    <Link to="/Publishproduct" style={{color: 'white'}} activeStyle={{color:'red'}}><i class=" fa fa-plug">supplier</i></Link>

    </li>
    <li >
    <Link to="/login" style={{color: 'white'}} activeStyle={{color:'red'}}><i class=" fa fa-user">User</i></Link>

    </li>
    <li >
    <Link to="" data-toggle="modal" style={{color: 'white'}} activeStyle={{color:'red'}} data-target=".bd-example-modal-lg"><i class=" fa fa-bell"><span class="num">{this.state.notification.length}</span> Notification</i></Link>

    </li>
    <li >
    <Link to="/" style={{color: 'white'}} activeStyle={{color:'red'}}><i class=" fa fa-sign-out">Logout</i></Link>

    </li>
    
    
  </ul>
</aside>

<div id="navbar-wrapper">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></a>
      </div>
    </div>
  </nav>
</div>

<section id="content-wrapper">
    <div class="row">
      <div class="col-lg-12">
        {/* <h2 class="content-title">Test</h2> */}
        <p>



        <table class="table table-striped table-dark">
  <thead>




    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Company Name</th>
      <th scope="col">Phone #</th>
      <th scope="col">Address</th>

      <th scope="col">Province Name</th>

    </tr>
  </thead>
  <tbody>
    


      {this.state.notification.map((user,index)=>{
        return  <tr key={user._id} >
        <td>{index}</td>

        <td>{user.email}</td>
        <td>{user.companyname}</td>
        <td>{user.phone}</td>
        <td>{user.address}</td>

        <td>{user.provinciesName}</td>
       
      <td>  <button type="button" class="btn btn-warning"  onClick={this.allow.bind(this,user.email,user.companyname)}>Allow</button></td>
       <td> <button type="button" class="btn btn-warning"  data-toggle="modal" data-target="#exampleModalCenter" onClick={this.notallow.bind(this,user.email)}> Not</button></td>
      <td><div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 > Why You not Allowed ?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
   
      <textarea ref="reason" value={this.state.reason} placeholder="Why you're Rejecting this comapny?" rows="10" cols="65"onChange={this.reason.bind(this)}>

      </textarea>
     

      
   
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-danger"onClick={this.sendnotification.bind()} >Reason Send</button>

        
     
      </div>
           
      </div>
    </div>
  </div>
  </div>
</td>
       
        </tr>
      
      

      })}
      

   
  </tbody>
</table>
        </p>
      </div>
    </div>
</section>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
     <center> <h3 className="notificationcolor">Notification </h3> </center>
  {this.state.notification.map((user,index)=>{
   return <div class="alertt" key={user._id}>
    <br/>
  <strong className="strongcolor">{user.companyname}!</strong> want to Become supplier contect them by  <span className="emailcolor"> {user.email}</span>
</div>

  })}
    
    </div>
  </div>
</div>

</div>

                </div>

          )


     }



    }

 }
 

export default (Admindashboard);








