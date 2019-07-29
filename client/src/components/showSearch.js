import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/footer';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Errormessage2 from '../components/errormessage2';
import Loader  from '../components/lodering';
const styles = {

  card: {
    maxWidth: 300,


  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};
var result;
class SearchShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 500, max: 36000 },
      loading:true
    };
  }
  componentDidMount()
  {
      setTimeout(()=>{
        this.setState({loading:false})
      },4000)


  }

  render() {
    const { classes } = this.props;

     var  result =this.props.todos.data.filter((productprice) => { 
      return +productprice.Price>=this.state.value.min }).map((user) => {

     return <div key={user._id} >
       <div class="col-sm-12">

         <Card className={classes.card}>
           <CardActionArea>
             <CardMedia
               component="img"
               alt="Contemplative Reptile"
               className={classes.media}
               height="300"

               image={"http://localhost:8000/" + user.photoname[0]}
               title="Contemplative Reptile"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {user.ProductName}
               </Typography>

             </CardContent>
           </CardActionArea>
           <CardActions>
             <Link to={'/detailrouter/' + user._id}>
               <Button size="small" color="primary">
                 Detail
</Button>
             </Link>
             <Typography component="p">
         <h5>  Price  {user.Price} Rs</h5> 
             </Typography>
           </CardActions>

         </Card>
         <br />
       </div>


     </div>




   });

   console.log(result)

   if(this.state.loading)
   {
     return <div>< Loader/></div>

   }
else{
    return (
      <div>
        <Header />
        <br /><br />
        <div class="container">
        <br /><br />
          <div class="row">
          <br /><br />
            <InputRange
              maxValue={36000}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
                  &nbsp;&nbsp;&nbsp;&nbsp;  <h6>{this.state.value.min} -{this.state.value.max}</h6>
                  
 { result.length !==0 ? result:<Errormessage2/>};
      </div>
        </div>
        <Footer />
      </div>
    );
  }
}

}








const mapStateToProps = state => ({ todos: state.searchReducers })

const showsearchCatigories = connect(mapStateToProps)(SearchShow);
showsearchCatigories.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(showsearchCatigories);
