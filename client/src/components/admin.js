import React from 'react';
import '../css/admin.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Admin extends React.Component{
  state = {
   
    
    invalidPasswordMsg :'',
   
};
  adminfunction=((evt)=>{
     evt.preventDefault();
    var username= this.refs.uname.value;      
    var upassword= this.refs.upassword.value;      
   
    
    
            if (username ==="admin" && upassword==="admin") {
                   

      
         this.props.history.push("/AdminDash") ;

            }
            else{             
             this.setState({
                invalidPasswordMsg:'invalid UserName/Password Pair'

             })
             console.log(this.state.invalidPasswordMsg)
             {
                Alert.error(`${this.state.invalidPasswordMsg}`, {
                    position: 'top',
                    effect: 'slide',
                 
                })
                   
               }
               

            }
            
        })


  
  render()
  {
   return(
       <div>
           <div class="parent clearfix">
    <div class="bg-illustration">
      <img src="http://localhost:3000/static/media/log2.fd57a91c.png" alt="logo"/>


    </div>
    <Alert stack={{limit: 1}} />

    
    <div class="login">
      <div class="container">
        <h1>Login to access to<br />your account</h1>
    
        <div class="login-form">
          <form onSubmit={this.adminfunction}>
            <input type="name" ref="uname" placeholder=" User Name"/>
            <input type="password" ref="upassword" placeholder="Password"/>


            <button type="submit">LOG-IN</button>

          </form>
        </div>
    
      </div>
      </div>
  </div>

       </div>
   )





  }




}
export default Admin