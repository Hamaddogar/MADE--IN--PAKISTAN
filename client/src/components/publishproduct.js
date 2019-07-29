import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import InputAdornment from '@material-ui/core/InputAdornment';
import '../css/formcss.css';
import ScrollToTop  from'react-scroll-up';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import step1 from '../images/step1.jpg'
import step2 from '../images/step2.jpg'
import step3 from '../images/step3.jpg'
import Header  from '../components/Header';




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

class Postadd extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
          search: "",
        value: "",
        amount: '',
    password: '',
    weight: '',
    weightRange: '',
    previewVisible: false,
    phone:''
    
      };
      handleOnChange=value=>{
        this.setState({ phone: value })

      };
      
      

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
      handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChangeantd = ({ fileList }) => this.setState({ fileList })
  
  handleSubmit = (evt) => {

    evt.preventDefault();
    var formData = new FormData();
    var photos = document.querySelector("input[type='file'][multiple]");

    formData.append('title', 'My Vegas Vacation');
    for (var i = 0; i < photos.files.length; i++) {
      formData.append('photos', photos.files[i]);
    }
    
    formData.append('ProductName', this.ProductName.value);
   
    formData.append('Email', this.Email.value);
    formData.append('CompanyName', this.CompanyName.value);
    formData.append('phone', this.state.phone);
    formData.append('typeselected', this.refs.typeselected.value);
    formData.append('MinBox', this.MinBox.value);

    formData.append('Minpieces', this.Minpieces.value);
    formData.append('Price', this.Price.value);
    
    formData.append('CountryName', this.CountryName.value);
    formData.append('CityName', this.CityName.value);
    formData.append('FullAddress', this.FullAddress.value);
    formData.append('ProductionCapacity', this.ProductionCapacity.value);
    formData.append('Material', this.Material.value);
    formData.append('Type', this.Type.value);
    formData.append('Datee', this.Datee.value);

    formData.append('Description', this.refs.Description.value);
   
    
    var option = {
      method: "POST",
      body: formData,
    }
    fetch("http://localhost:8000/catgories", option)
      .then((res) => { return res.json() })
      .then((res) => {
        if (res) {
         

          console.log(res);
          // this.props.history.push('/showUserData');

          //  store.dispatch(admitionFormAction(res));
        }

      })


      .catch((error) => console.log(error))
  }
    render()
  
    {
        const { classes } = this.props;
        const {search, value} = this.state;
    return(
      <div>
        <Header/>
        <br/><br/>
        <div className="container">

        <ScrollToTop  className="colorchang"showUnder={160}>
       <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11CSa-64UpZJtksxAqpmPAj4MI8bbDGxtl01RTxWxb_AbbNHt" width="30"height="30"/></span>
        </ScrollToTop>
                <br/>
                <table border="1" >
                  <thead>

                    <th className="headingsetting"><Typography variant="h5" className="heading1" >
                <span  >  SELECTED CATEGORY</span>

      </Typography>
      <br/>
      <Typography variant="subheading"  className="heading2" gutterBottom>
           Publish Your Product  which You  want to Export 
        </Typography>
        <Typography variant="overline" className="heading3" gutterBottom>
       Fill This Form Carefully
      </Typography>

       

                    </th>
                  
                  </thead>
                  <tbody>
                  <div >
                
             <form className={classes.container} className="formpaddiing"  onSubmit={this.handleSubmit} enctype="multipart/form-data">
             <div><img src={step1}  width="170"/>   <span variant="h5"  > <strong>ABOUT COMPANY</strong> </span>

</div>
             <TextField
              inputRef={(ProductName) => this.ProductName = ProductName}
          id="outlined-full-width"
          label="Product Name"
          helperText="Product Name like FootBall Etc."
          style={{ margin: 8 }}
          placeholder="What Your Product Name?"
          
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
           
             <TextField
                 inputRef={(Email) => this.Email = Email}
          id="outlined-dense"
          label="Email"
          helperText="Active  Email Should Be!"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        /> 
          <TextField
                inputRef={(CompanyName) => this.CompanyName = CompanyName}
        id="outlined-dense"
        helperText="Company Name"
        label="Company Name"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <div>
        <br/>
        <br/>
      <div>
        <label>Phone No :-</label>
        <ReactPhoneInput defaultCountry={'pk'} ref="phone" value={this.state.phone} onChange={this.handleOnChange}  inputExtraProps={{
  
    required: true,
    autoFocus: true
  }}/>  
        </div>
        <hr/>
        <div><img src={step2}  width="170"/>   <span variant="h5"  > <strong>ABOUT PRODUCT</strong> </span>

      </div>
       < br/>
      <select ref="typeselected" className="form-control" required>
              <option value="" >---product Catigories---</option>
              <option value="Agriculture&Food">Agriculture & Food</option>
              <option value="ApparelTextiles&Accessories">Apparel,Textiles & Accessories</option>
              <option value="Auto&Transportation">Auto & Transportation</option>
              <option value="Bags,Shoes&Accessories">Bags, Shoes & Accessories</option>
              <option value="Electronics">Electronics</option>
              <option value="ElectricalEquipment,Components&Telecoms">Electrical Equipment, Components & Telecoms</option>
              <option value="Gifts,Sports&Toys">Gifts, Sports & Toys</option>
              <option value="Health&Beauty">Health & Beauty</option>
              <option value="Home,Lights&Construction">Home, Lights & Construction</option>
              <option value="Metallurgy, Chemicals, Rubber & Plastics">Metallurgy, Chemicals, Rubber & Plastics</option>
              <option value="InformationTechnalogy">"Information Technalogy"</option>

            </select>
        </div>
        <br/>
   
        <div>

        <Typography variant="subheading"  className="heading2" gutterBottom>
           Min Order (Box or Pieces)
        </Typography>
          <TextField
         
          className={classNames(classes.margin, classes.textField)}
          inputRef={(MinBox) => this.MinBox = MinBox}

          helperText="Enter Many Minimum  Box You can Sell Minimum !"
          variant="outlined"
          label="Min Order"
          
        
          InputProps={{
            startAdornment: <InputAdornment position="start">Box</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        
        helperText="Select How  Many Minimum  Pieces You can Sell !"
          id="outlined-adornment-weight"
          inputRef={(Minpieces) => this.Minpieces = Minpieces}

          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Min Order"
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          helperText="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Pieces</InputAdornment>,
          }}
        />

        </div>
        <div>
        <Typography variant="subheading"   gutterBottom>
           Price 
        </Typography>
          
          <TextField
          inputRef={(Price) => this.Price = Price}

          id="outlined-adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Amount /Price"
          value={this.state.amount}
          onChange={this.handleChange('amount')}
          type="number"
          helperText=" Per Piece / Box"
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
          }}
        />
        


          </div>
          <hr/>
          <br/><br/><br/>
<img src={step3}  width="170"/>   <span variant="h5"  > <strong> Address $ More Detail</strong> </span>
      
           
<div>
<div class="box">
  
<div className="imagessetting"><input type="file"name="photos" multiple /></div>


</div>



</div>
<br/>


  

<br/><br/>
<TextField
     inputRef={(CountryName) => this.CountryName = CountryName}
        id="outlined-dense"
        helperText=" Like Pakistan !"
        label="Country Name"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
     inputRef={(CityName) => this.CityName = CityName}
      
        id="outlined-dense"
        helperText="City Name Like Lahore !"
        label="City Name"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />

<TextField
  inputRef={(FullAddress) => this.FullAddress = FullAddress}
        id="outlined-dense"
        helperText="street nO 2 Faisalabad ,Pakistan"
        label="Full Address"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <br/>
      
      <TextField
      inputRef={(ProductionCapacity) => this.ProductionCapacity = ProductionCapacity}
        id="outlined-dense"
        helperText=" 1000 pieces per day"
        label="Production Capacity"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />

<TextField
        id="outlined-dense"
      inputRef={(Material) => this.Material = Material}

        helperText=" Kitchen Mat polyvinyl chloride (PVC)"
        label="Material"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <TextField
      inputRef={(Type) => this.Type = Type}

        id="outlined-dense"
        helperText="Computer (Hardware & Softwear)"
        label="Type"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
            <br/>
            <TextField
      inputRef={(Datee) => this.Datee = Datee}

        id="outlined-dense"
        helperText="Full width!"
        label=""
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        type="date"
      />
     <div>
       < br/>
      <select ref="paymentmethod" className="form-control" required>
              <option value="" >----Payment Method----</option>
              <option value="Cash"> By Cash</option>
              <option value="Bank">By Bank</option>
              

            </select>
        </div>
        <br/>
        <div>
        <Typography ariant="h6" gutterBottom>
      Description
      </Typography>
        <textarea  rows="7" cols="100" ref="Description" placeholder="write all which you Have not Above?"></textarea>
        </div>
        
  
        <Button variant="contained" color="secondary"  type="Submit"className={classes.button}>
       Post Now
      
      </Button>
        </form>
        </div>
                  </tbody>







                     <tfoot>


                     </tfoot>

                </table>
       
            
        </div>
        
        </div>
     
    )


    }
}


Postadd.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Postadd);