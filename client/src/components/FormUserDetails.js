import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Enter User Details"/>
            <TextField
                hintText = "Enter your FirstName"
                floatingLabelText = "First Name"
                onChange = {handleChange('firstName')}
                defaultValue = {values.firstName}
            />
            <br/>
            <TextField
                hintText = "Enter your Last"
                floatingLabelText = "Last Name"
                onChange = {handleChange('lastName')}
                defaultValue = {values.lastName}
            />
            <br/>
            <TextField
                hintText = "Enter your Email"
                floatingLabelText = "Email ID"
                onChange = {handleChange('email')}
                defaultValue = {values.email}
            />
            <br/>
            <Button
                label = "Continue"
                primary = {true}
                style = {styles.button}
                onClick = {this.continue}
            >
            Continue</Button>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
