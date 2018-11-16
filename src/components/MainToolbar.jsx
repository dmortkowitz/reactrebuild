import React from 'react';

function MainToolbar(){
  var toolbarLeft = {
    width: '50%',
    backgroundColor: '#c9dbe2',
    fontSize: '10px',
    float: 'left',
  };
  var toolbarRight = {
    width: '50%',
    backgroundColor: '#c9dbe2',
    fontSize: '10px',
    float: 'right',
    textAlign: 'right',
  };
  
  return (
    <div>
      <div>
        <div style={toolbarLeft}>
          <a href="#">Shop the Holiday Gift Guide</a>
        </div>
      </div>
      <div>
        <div style={toolbarRight}>
          <a href="#">Membership &nbsp;&nbsp;</a>
          <a href="#">Gift Cards &nbsp;&nbsp;</a>
          <a href="#">Stores & Events &nbsp;&nbsp;</a>
          <a href="#">Help &nbsp;&nbsp;</a> 
      </div>
    </div>
  </div>

  );
}

export default MainToolbar;