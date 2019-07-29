import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';

import {List, ListItem} from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //  Process the form here
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values : { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Confirm User Data"/>
            <List>
                <ListItem 
                    primaryText = "First Name"
                    secondaryText = { firstName }
                />
                <ListItem 
                    primaryText = "Last Name"
                    secondaryText = { lastName }
                />
                <ListItem 
                    primaryText = "Email Id"
                    secondaryText = { email }
                />
                <ListItem 
                    primaryText = "Occupation"
                    secondaryText = { occupation }
                />
                <ListItem 
                    primaryText = "City"
                    secondaryText = { city }
                />
                <ListItem 
                    primaryText = "Bio"
                    secondaryText = { bio }
                /> 
            </List>
            <br/>
            <Button
                label = "Back"
                primary = {false}
                style = {styles.button}
                onClick = {this.back}
            >
            Back</Button>
            <Button
                label = " Confirm & Continue"
                primary = {true}
                style = {styles.button}
                onClick = {this.continue}
            >
            Confirm & Continue
           </Button>
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

export default Confirm
