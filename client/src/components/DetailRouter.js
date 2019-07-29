import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/detailroutercss.css';
import ReactImageMagnify from 'react-image-magnify';
import Zoom from 'react-img-zoom'
import MyReactImageMagnify from '../components/MyReactImageMagnify';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {detailFormaction} from '../store/actions/detailaction';
import  store from '../store/redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Social from '../components/socialmediaHeader';
import Menu from '../components/menu';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';


import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
 
} from 'react-share';

const styles = theme => ({
  button: {
    margin: 5
  },
  input: {
    display: 'none',
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})

class DetailRouter extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    const id = this.props.match.params.myid
    fetch("http://localhost:8000/detailrouter/" + id)
      .then((res) => { return res.json() })
      .then((res) => {
        console.log(res.data)
        
        store.dispatch(detailFormaction(res));
        // this.setState({ data: res.data })
      })
         

      .catch((error) => console.log(error))
  }


  render() {
      var shareUrl= "https://www.facebook.com/";


    const { classes } = this.props;

   const properties = this.props.detail.data.photoname !==undefined?(
{
    thumbnailPosition: "left",
    useBrowserFullscreen: true,
    showPlayButton: true,
    showIndex:true,
    height:"500px",
    
    
    items: [
      
      {
        
        original:this.props.detail.data.photoname[1]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[0]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        
        thumbnail:this.props.detail.data.photoname[1]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[0]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
  
      },  {
        
        original:this.props.detail.data.photoname[0]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[1]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[0]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[1]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      },  {
        
        original:this.props.detail.data.photoname[2]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[2]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[2]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[2]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      },  {
        
        original:this.props.detail.data.photoname[3]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[3]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[3]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[3]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      }, {
        
        original:this.props.detail.data.photoname[4]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[4]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[4]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[4]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      },
      {
        
        original:this.props.detail.data.photoname[5]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[5]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[5]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[5]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      },
      {
        
        original:this.props.detail.data.photoname[6]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[6]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[6]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[6]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      },
      {
        
        original:this.props.detail.data.photoname[7]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[7]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
        thumbnail:this.props.detail.data.photoname[7]!==undefined?`${"http://localhost:8000/"+this.props.detail.data.photoname[7]}`:"https://www.isolezwe.co.za/assets/images/general/no-image.png" ,
      },

    
      
    ]
  }):null
  debugger;
  console.log(this.state)
  console.log(this.props)

    return (
      <div><Social/>
      <Menu/>
   < div class="container">
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">


                {this.props.detail.data.photoname !==undefined ? <ImageGallery {...properties} />:null}
                <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}><h5>Description</h5> </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      {this.props.detail.data.Description}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
                </div>
                <div class="details col-md-6">
            
                    <h3 class="product-title">{this.props.detail.data.ProductName}</h3>
                    <p><b>Email: </b>{this.props.detail.data.Email}</p>
                    <p><b>Phone#: </b>{this.props.detail.data.phone}</p>
                    <p><b>City Name: </b>{this.props.detail.data.CityName}</p>
                    <p>Address: {this.props.detail.data.FullAddress}</p>

                    <p class="product-description"></p>
                    <h4 class="price">current price: <span>{this.props.detail.data.Price} Rs</span></h4>
                    <p><b>Type: </b>{this.props.detail.data.Type}</p>
                    <p><b>Material: </b>{this.props.detail.data.Material}</p>
                    <p><b>MinBox: </b>{this.props.detail.data.MinBox} Box</p>
                    <p><b>MinPieces: </b>{this.props.detail.data.Minpieces} Pieces</p>



                    <h5>Company Name :
                      <span>{this.props.detail.data.CompanyName}</span>
                      </h5>
                    
                    <p><b>Production Capacity </b>:{this.props.detail.data.ProductionCapacity}</p>
                      <p>Country:<b>{this.props.detail.data.CountryName}</b></p>
                    
                  
                    <div class="action">
                    <Button variant="contained" color="secondary" className={classes.button}>
                    <Link to="/Chatapp" style={{color: 'white'}} activeStyle={{color: 'red'}}>
                    Chat with Supplier</Link>
 
      </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</div>
<Footer/>
</div>

      
       

          );
  
  
  
  
  
      }
  
  
  
  }
  
const mapStateToProps = state => ({ detail: state.detailreducers })
 
const showdetailCatigories = connect(mapStateToProps)(DetailRouter);
showdetailCatigories.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(showdetailCatigories);