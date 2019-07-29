import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
        <div className="container">
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Enter Personal Details"/>
            <TextField
                hintText = "Enter your Occupation"
                floatingLabelText = "Occupation"
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation}
            />
            <br/>
            <TextField
                hintText = "Enter your City"
                floatingLabelText = "City"
                onChange = {handleChange('city')}
                defaultValue = {values.city}
            />
            <br/>
            <TextField
                hintText = "Enter your bio"
                floatingLabelText = "Bio"
                onChange = {handleChange('bio')}
                defaultValue = {values.bio}
            />
            <br/>
            <Button
                label = "Back"
                primary = {false}
                style = {styles.button}
                onClick = {this.back}
            >
            Back</Button>
            <Button
                label = "Continue"
                primary = {true}
                style = {styles.button}
                onClick = {this.continue}
            >
            Continue</Button>
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
