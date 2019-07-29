import React from 'react';
import Social  from '../components/socialmediaHeader';
import Menu  from '../components/menu';
import LogoHeader from '../components/logoHeader';
import Search from '../components/searchbarnew';




class Header extends React.Component {
 


  render() {
      
  

    return (
      <div>
      <Social/>
      <Menu/>
      <LogoHeader/>
      <Search/>

      </div>
    )
  }
}
      


export default  Header;
