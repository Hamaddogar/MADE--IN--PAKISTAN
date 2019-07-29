import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import  Search from '../components/searchbarnew';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowSearch from '../components/showSearch'
var result;
class RangeSlider  extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 0, max: 12000},
        };
    }
  
   render()
   {
    
        
     return(
         

        <div className="container">
        <Search/>
       
           <InputRange
        maxValue={12000}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} /> 
         {this.props.d}
       

</div>






     )
   

   }
  


}


const mapStateToProps = state => ({ todos: state.searchReducers })
 
  const showsearchCatigories = connect(mapStateToProps)(RangeSlider);
  showsearchCatigories.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default showsearchCatigories;