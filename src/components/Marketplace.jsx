import React from 'react';
import PropTypes from 'prop-types';

function Marketplace(props){
  if (props.currentRouterPath === '/marketplace'){
  return (
    <div onClick={() => {props.onBookSelection(props.BookId);}}>
    </div>
  );
  return (
    const bookInformation =
      <div>
        <h3>{props.title} - {props.author}</h3>
        <h4>{props.formattedWaitTime}</h4>
        <hr/>
      </div>;
  );
}

Marketplace.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onBookSelection: PropTypes.func,
  bookId: PropTypes.string.isRequired
};

export default Marketplace;
