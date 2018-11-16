import React from 'react';



function MainCarousel(){
  var caroLayout = {
    width: '80%',
    float: 'center',
    
    image: {
      width: '900px',
    }
    
  };
  return (
    <div>
      <div style={caroLayout}>
      
          <image src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2018/11/14/Homepage_Billboard_11-14_A1.jpg" height="600px" />
      </div>
    </div>
  );
}


export default MainCarousel;