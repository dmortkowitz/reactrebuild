import React from 'react';
import MainToolbar from './MainToolbar';
import MainCarousel from './MainCarousel';
import MainLogobar from './MainLogobar';


function Mainpage(){
  var mainLayout = {
    width: '100%',
    
    
  };
  return (
    <div>
      <div style={mainLayout}>
        <MainToolbar />
        <MainLogobar />
        <MainCarousel />
        
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default Mainpage;