import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import '../css/searchcss.css';
import {Link } from 'react-router-dom'
import Gallery from './ShowAllCatigories';
import {searchFormaction} from '../store/actions/searchaction';
import  store from '../store/redux';

import { withRouter } from "react-router-dom";


import '../css/searchBarnew.css'

const styles = theme => ({
    list: {
      width: 250,
  },
  fullList: {
      width: 'auto',
  },
    root: {
      width: '100%',
  
    },
    appbarcolor: {
      backgroundColor: 'white',
    },
    inputborderStyle: {
      boderColor: "red"
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
  
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  
    search: {
      position: 'relative',
      display: 'flex',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.Gray, 0.15),
  
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 30,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'stroke',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'Black',
      width: '100%',
    },
  
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 500,
      },
    },
    searchcolor: {
      color: "Gray",
  
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
  
      },
    },
  });
  
class SearchBar extends React.Component{
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
      };
    
      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };
      state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };
    
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    
    Searchform = (evt) => {
    
      evt.preventDefault();
          
      let  searchCatigoires= this.refs. searchCatigoires.value;

  

        

      
      var option = {
          method: "POST",
          body: JSON.stringify({searchCatigoires}),
          headers: {
              "Content-Type": "application/json",
          }
    
      }
      fetch("http://localhost:8000/searchdata", option)
          .then((res) => {  return res.json() })
          .then((res) => {
            
            if(res.data.length!==0)
            {
             
    
              store.dispatch(searchFormaction(res));
              this.props.history.push('/showsearchCatigories') ;
             
        
            }
             else{
              this.props.history.push('/errorMessage') ;
             }
    
          })
    
    
          .catch((error) => console.log(error))
    }
  render()

  {
  return(
    <div className="serachsetting" >
  
             <form  onSubmit={this.Searchform}>
             <div class="wrap">
                <div class="search">
                   <input type="text" ref ="searchCatigoires" class="searchTerm" placeholder="Search the Marketplace" required/>
                  
                 
                
                   <button type="submit" class="searchButton">SUBMIT
                    
                  </button>

               
                </div>
             </div>
</form>
</div>

           
          




  )

  }





}
SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles)( withRouter(SearchBar));
  
