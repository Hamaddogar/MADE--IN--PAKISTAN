import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import dashboard from './components/dasboard';
import signup from './components/signup';
import Login from './components/login';
import forgot from './components/forgot'
import reset from './components/reset';
import profile from './components/Catigoriesprofile';
import CatigorieShow from './components/ShowAllCatigories';
import searchcatigories from './components/searchComponent';
import Header from './components/Header';
import Home from './components/Home';
import AllCard from '../src/components/AllCatigoriesCards/AllCard';
import AgricultureFoodtyeps from '../src/components/FilterShowCatigories/AgrIandFood';
import detailrouter from '../src/components/DetailRouter';
import showsearchCatigories from '../src/components/showSearch';
import store from '../src/store/redux';

import About from '../src/components/About'
import location  from '../src/components/location';
import Publishproduct from '../src/components/publishproduct';
import userform from '../src/components/UserForm';
import thePakistaniList from '../src/components/clickButton';
import showFruits from '../src/components/showFruits';
import  TextileFabrics from '../src/components/showTextile&Fabrics';
import Tea  from '../src/components/showTea';
import Details from '../src/components/detailcomponeent';
import errorMessage from '../src/components/errorMessage';
import menu from '../src/components/menu';
import sidemenu from '../src/components/sidemenu';
import inline from '../src/components/inlineDiv';
import WithScrollbar  from '../src/components/withScrollbar';
import  Parralex from '../src/components/parralex';
import SocialMedia  from '../src/components/socialmediaHeader';
import LogoHeader from  '../src/components/logoHeader';
import Search from '../src/components/searchbarnew';
import Vediodiv from '../src/components/vedioDiv';
import Getinvolved from '../src/components/getinvolved';
import Marketplace from '../src/components/marketplact';
import Supplier   from '../src/components/supplier';
import SmallCards   from '../src/components/samllcards'
import RangeSlider from '../src/components/pricerangeSearch';
import Errormessage2 from '../src/components/errormessage2';

import ourservices from '../src/components/ourservices';
import  bigcards from '../src/components/bigcards';
import  Chatapp from '../src/components/chatapp';
import  DashUser from '../src/components/dashoardUser';
import   Adminlogin from '../src/components/admin';
import AdminDash from '../src/components/adminDashboard'










class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter>

          <div>
             <Route exact path="/" component={Home} />
             <Route exact path="/DashUser" component={DashUser } />
             <Route exact path="/AdminDash" component={AdminDash } />

           <Route exact path="/Adminlogin" component={Adminlogin} />  


             <Route exact path="/Chatapp" component={Chatapp} />

          

             <Route exact path="/SmallCards" component={SmallCards} />
             <Route exact path="/bigcards" component={bigcards} />

             <Route exact path="/ourservices" component={ourservices} />


              

            <Route  path="/Header" component={Header} />  
            <Route  path="/Getinvolved" component={Getinvolved} />  
      <Route  path="/thePakistaniList" component={thePakistaniList} />
      <Route  path="/Marketplace" component={Marketplace} />
      <Route  path="/Supplier" component={Supplier} />
      <Route  path="/Errormessage2" component={Errormessage2} />

      



          <Route exact path="/Publishproduct" component={Publishproduct} />
          {/* <Route exact path="/" component={Details} /> */}
{/* 
{/*   
  <Route exact path="/" component={Parralex} />   */}
  
  {/* <Route exact path="/" component={SocialMedia} />   */}
  {/* <Route exact path="/" component={Vediodiv} />   */}

  <Route exact path="/Search" component={Search} />  


  {/* <Route exact path="/" component={inline} /> 
  <Route exact path="/WithScrollbar" component={WithScrollbar} />  */}


 {/* <Route exact path="/" component={menu} /> */}


{/* <Route  path="/sidemenu" component={sidemenu} /> */}

<Route exact path="/showFruits" component={showFruits} />
<Route exact path="/TextileFabrics" component={TextileFabrics} />
<Route exact path="/Tea" component={Tea} />




            <Route exact path="/location" component={location} />



            <Route path="/searchcatigoriess" component={searchcatigories} />
            <Route path="/errorMessage" component={errorMessage} />

            <Route path="/About" component={About} />
            <Route path="/Signup" component={signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={dashboard} />
            <Route path="/showsearchCatigories" component={showsearchCatigories} />
            <Route path="/detailrouter/:myid" component={detailrouter} />
            <Route path="/AllCard" component={AllCard} />
            <Route path="/AgricultureFoodtyeps" component={AgricultureFoodtyeps} />
            <Route path="/forgot" component={forgot} />
            <Route path="/reset/:token" component={reset} />
            <Route path="/profile" component={profile} />
            <Route path="/CatigorieShow" component={CatigorieShow} />







          </div>




        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
