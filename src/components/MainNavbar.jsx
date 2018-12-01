import React from 'react';
import { Link } from 'react-router-dom';


function MainNavbar(){
  var toolbarLeft = {
    width: '40%',
    height: '30px',
    paddingTop: '5px',
    backgroundColor: '#c9dbe2',
    fontSize: '12px',
    float: 'left',
    marginLeft: '10%',

  };
  var toolbarRight = {
    width: '40%',
    height: '30px',
    paddingTop: '5px',
    backgroundColor: '#c9dbe2',
    fontSize: '12px',
    float: 'right',
    marginRight: '10%',
    textAlign: 'center',

  };

  return (
    <div>
      <div>
        <div style={toolbarLeft}>
          <a href="#" >Best Sellers</a>
          <a href="#" >NOOK Books</a>
          <a href="#" >NOOK</a>
          <a href="#" >Textbooks</a>
          <a href="#" >Newsstand</a>
          <a href="#" >Teens</a>
          <a href="#" >Kids</a>
          <a href="#" >Toys & Games</a>
          <a href="#" >Music</a>

        </div>
      </div>
      <div>
        <div style={toolbarRight}>
          <Link to='/newbook'>Marketplace</Link>
        </div>
      </div>
    </div>

  );
}

export default MainNavbar;
