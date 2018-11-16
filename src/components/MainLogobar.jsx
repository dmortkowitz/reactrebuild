import React from 'react';



function MainLogobar(){
  var logoLayout = {
    backgroundColor: '#efeff0',
    width: '80%',
    float: 'center',
    marginLeft: '10%',
    
    }
    

  return (
    <div>
      <div style={logoLayout}>
        
        <img src='https://www.blackboard.com/images/223/barnes%26noble_logo_tcm223-31894.png' width='12%'/>
        <input class='input' id='mainSearch' type='text' style={{ width:'50%', height: '4%', position: 'absolute', top: '33px'}}/>
      </div>
    </div>
  );
}


export default MainLogobar;