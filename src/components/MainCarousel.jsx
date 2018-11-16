import React from 'react';



function MainCarousel(){
  var caroLayout = {
    width: '80%',
    float: 'center',
    marginLeft: '10%',
    }
    

  return (
    <div>
      <div style={caroLayout}>
        <img src='https://dispatch.barnesandnoble.com//content/dam/ccr/brooksbell/2018/hgg/PROD-13764_HGG_text_Desktop.png' width='100%' />
        <img src='https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2018/11/14/Homepage_Billboard_11-14_A1.jpg' width='100%'/>
      </div>
    </div>
  );
}


export default MainCarousel;