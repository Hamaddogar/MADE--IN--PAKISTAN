import React from 'react';
import Made1 from '../images/Made1.PNG';
import Made2 from '../images/Made2.PNG';
import Made3 from '../images/Made3.PNG';
import Made4 from '../images/Made4.PNG';
import '../css/arrow.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageProgress from 'react-page-progress';
import ScrollToTop  from'react-scroll-up';
import Social from '../components/socialmediaHeader';
import Menu from '../components/menu';
import '../css/model.css';
import log2 from '../images/log2.png';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactPhoneInput from 'react-phone-input-2';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Footer from '../components/footer';
import {consultingserviceaction} from '../store/actions/admindash';
import  store from '../store/redux';

import Modal from 'react-awesome-modal';



let now = new Date();
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
const ranges = [
  {
    value: '100',
    label: '100 to 500',
  },
  {
    value: '500 to 1000',
    label: '1000 to 2500',
  },
  {
    value: ' 2500 to5000  ',
    label: ' 5000 to 10000',
  },
];

class Supplier extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}
      state={
            phone:'',
            messagedisplay:''
      }
      handleSubmitcontect = (evt) => {
            evt.preventDefault();
            let email = this.refs.email.value;
            let companyname= this.refs.companyname.value;
            let address = this.refs.address.value;
            let phone = this.refs.phone.value;
            let provinciesName= this.refs.provinciesName.value;
            let zipcode =this.refs.zipcode.value;
    
          
           
            const  contectForm = { email: email, companyname: companyname,address:address,phone,phone,provinciesName:provinciesName,zipcode:zipcode }
            var option = {
    
                method: "POST",
                body: JSON.stringify(contectForm),
                headers: {
                    "Content-Type": "application/json",
                }
    
    
            }
            fetch("http://localhost:8000/consultingservices", option)
                .then((res) => { return res.json() })
                .then((res) => {
                  if (res.success == true) {
                    
          
            
                        console.log(res)
                      this.setState({
                        messagedisplay: " Successfully We've Recieved Your Information .our Team contect You as Soon As Possible !"
                      })
            
                      {
                        Alert.success(`${this.state.messagedisplay}`, {
            
                          position: 'top',
            
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
render()

{
  return(
      <div>
          <Social/>
          <Menu/>
      <div className="divseeting" >
 
       <PageProgress color={'Red'} height={3}/>
   
       <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
      data-aos-offset="300">
<center><img src={Made1}/></center>
</div>
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
      data-aos-offset="300">
<img src={Made2}/>
</div>

<center> <input type="button" value="Consulting Services"  class="btn btn-outline-success"onClick={() => this.openModal()} /></center>
<Modal visible={this.state.visible} width="1200" height="650" effect="fadeInUp" onClickAway={() => this.closeModal()}>
<Alert stack={{ limit: 1 }} />
                    <div className="container">
                  
                    <center><img src={log2}/></center>
                    <form onSubmit={this.handleSubmitcontect}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" ref="email" required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Company Name</label>
      <input type="text" class="form-control" id="inputPassword4" ref="companyname" placeholder="Enter your Company Name"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" ref="address" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
  <label for="inputAddress">Phone#</label>
    <input type="number" class="form-control" id="inputAddress" ref="phone" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Provincies</label>
      <select ref="provinciesName" class="form-control">
        <option selected>Choose...</option>
        <option>Punjab</option>
        <option>Sindh</option>
        <option>Balochistan</option>
        <option>Khyber Pakhtunkhwa</option>
        <option>Gilgit-Baltistan</option>




      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control"  ref="zipcode" required/>
    </div>
  </div>
  

  <button type="button"  type="submit"class="btn btn-outline-success"> Send</button>
</form>
                    </div>
                    <img src="https://i.ya-webdesign.com/images/vines-border-png-5.png" width="1200" height="100"/>
                </Modal>
     
      <br/>
           
       
<div data-aos="zoom-in-down">
<img src={Made3}/>
</div>
<div data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"
      data-aos-offset="300">
<img src={Made4}/>
</div>

<Footer/>



<ScrollToTop  className="colorchang"showUnder={160}>
       <span><img src="https://i.ya-webdesign.com/images/arrow-keys-png-image-1.png" width="30"height="30"/></span>
        </ScrollToTop>
      </div>
      </div>
     
  )

}



}


Supplier.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(Supplier);
