import React from 'react';
import PropTypes from 'prop-types';

function Marketplace(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: white;
        }
      `}</style>
      <h3>{props.author} - {props.title}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
    </div>
  );
}


Marketplace.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};


export default Marketplace;
