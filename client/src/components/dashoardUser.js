import React from 'react';
import '../css/dasaboard.css';
import {Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';

import { connect } from 'react-redux';
import Menu  from '../components/menu';
import Userloader from '../components/userloader';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
  class Dash extends React.Component{
    state={
      loading:true
    }
      
    componentDidMount()
    {
        setTimeout(()=>{
          this.setState({loading:false})
        },4000)
  
  
    }
    logoutfun=()=>{
      var option = {
  
          method: "GET",
          body: JSON.stringify(),
          headers: {
              "Content-Type": "application/json",
          }
  
  
      }
      fetch("http://localhost:8000/logout", option)
      .then((response) => {
        console.log(response);
        if (response) {
    
        this.props.history.push("/") ;
        }
      
        
    })
  
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
      <Menu/>
      <div class="container">
    <div class="row profile">
		<div class="col-md-3">
			<div class="profile-sidebar">

				<div class="profile-userpic">
			&nbsp;		&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	<img src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1" class="img-responsive" alt=""/>
				</div>
	
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
          {this.props.todos.name}
					</div>
					<div class="profile-usertitle-job">
					{this.props.todos.fathername}
					</div>
				</div>
			
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm"  onClick={this.logoutfun}>Logout</button>
					<button type="button" class="btn btn-danger btn-sm"><Link to="/Chatapp" style={{color: 'White'}} activeStyle={{color: 'red'}}>
          Message</Link>

</button>
				</div>
			
				<div class="profile-usermenu">
					<ul class="nav">
						<li class="active">
							<a href="#">
							<i class="glyphicon glyphicon-home"></i>
							Overview </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i class="glyphicon glyphicon-ok"></i>
							Tasks </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-flag"></i>
							Help </a>
						</li>
					</ul>
				</div>
	
			   
           <div class="portlet light bordered">
                                               
                                                <div class="row list-separated profile-stat">
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 37 </div>
                                                        <div class="uppercase profile-stat-text"> Projects </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 51 </div>
                                                        <div class="uppercase profile-stat-text"> Tasks </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 61 </div>
                                                        <div class="uppercase profile-stat-text"> Uploads </div>
                                                    </div>
                                                </div>
                                               
                                                 <div>
          
                                                    <h4 class="profile-desc-title">About {this.props.todos.name}</h4>
                                                    <span class="profile-desc-text"> You are {this.props.todos.typeselected} </span>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-globe"></i>
          {this.props.todos.email}
                                                        <a href="https://www.apollowebstudio.com"></a>
                                                    </div>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-twitter"></i>
                                                        <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                                                    </div>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-facebook"></i>
                                                        <a href="https://www.facebook.com/">JasonDavisFL</a>
 </div></div></div>                   
                                           
        
        
			</div>
		</div>
		<div class="col-md-9">
            <div class="profile-content">
            <img src="https://www.smartsheet.com/file/chartsgif"/>
           <center> <img src="https://dzone.com/storage/temp/10115940-highcharts-spline.gif"/>
           </center>
            </div>
		</div>
	</div>
</div>
    </div>
    )

    }



  }
}

  

const mapStateToProps = state => ({ todos: state.loginreducers })
 
const showloginname = connect(mapStateToProps)(Dash);
showloginname.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)( showloginname);

