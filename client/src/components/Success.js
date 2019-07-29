import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';


export class Success extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Confirm User Data"/>
            <h1> Thank you for the submission</h1>
            <p>You'll get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
