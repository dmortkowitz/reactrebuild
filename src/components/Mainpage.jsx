import React from 'react';
import MainToolbar from './MainToolbar';
import MainCarousel from "./MainCarousel";


function Mainpage(){
  var mainLayout = {
    width: '80%',
    
    
  };
  return (
    <div>
      <div style={mainLayout}>
        <MainToolbar />
        <MainCarousel />
        
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default Mainpage;