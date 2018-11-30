import React from 'react';
import MainToolbar from './MainToolbar';
import MainCarousel from './MainCarousel';
import MainLogobar from './MainLogobar';
import MainNavbar from './MainNavbar';

function Mainpage(){
  var mainLayout = {
    width: '100%',
    
    
  };
  return (
    <div>
      <div style={mainLayout}>
        <MainToolbar />
        <MainLogobar />
        <MainNavbar />
        <MainCarousel />
        
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default Mainpage;