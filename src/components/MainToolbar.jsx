import React from 'react';

function MainToolbar(){
  var toolbarLeft = {
    width: '40%',
    height: '20px',
    paddingTop: '5px',
    backgroundColor: '#c9dbe2',
    fontSize: '12px',
    float: 'left',
    marginLeft: '10%',
    a: '#373d42',
  };
  var toolbarRight = {
    width: '40%',
    height: '20px',
    paddingTop: '5px',
    backgroundColor: '#c9dbe2',
    fontSize: '12px',
    float: 'right',
    marginRight: '10%',
    textAlign: 'right',
    a: '#373d42',
  };
  
  return (
    <div>
      <div>
        <div style={toolbarLeft}>
          <a href="#" >Shop the Holiday Gift Guide</a>
        </div>
      </div>
      <div>
        <div style={toolbarRight}>
          <a href="#" >Membership &nbsp;&nbsp;</a>
          <a href="#" >Gift Cards &nbsp;&nbsp;</a>
          <a href="#" >Stores & Events &nbsp;&nbsp;</a>
          <a href="#" >Help &nbsp;&nbsp;</a> 
        </div>
      </div>
    </div>

  );
}

export default MainToolbar;