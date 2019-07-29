import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
class Dashboard extends  React.Component
{
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
  const { classes } =this. props;
  swal("Welcome!", "You clicked the button!", "success");
  console.log(this.props)

  return(
  <div>
     <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Made in Pakistan</a>

    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={this.logoutfun}>logout</button>
 
</nav>

<div> 
<h1>{this.props.todos.name}</h1>

</div>

  


<center> <div className="divset"> <Link to="/profile">  <Button variant="contained" color="primary" className={classes.button}>
Add Profile
</Button>
</Link>
</div>
</center>
</div>


  )

}




}







const mapStateToProps = state => ({ todos: state.loginreducers })
 
  const showloginname = connect(mapStateToProps)(Dashboard);
  showloginname.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)( showloginname);
 