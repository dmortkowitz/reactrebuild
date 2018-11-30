import React from 'react';
import PropTypes from 'prop-types';

function NewBook(props){
  const newBookInformation =
    <div>
      <h3>{props.title} - {props.author}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
    if (props.currentRouterPath === '/ListingManager'){
      return (
        <div onClick={() => {props.onBookSelection(props.newBookId);}}>
          {newBookInformation}
        </div>
      );
  } else {
    return (
      <div>
        {newBookInformation}
      </div>
    );
  }
}

NewBook.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onBookSelection: PropTypes.fun,
  newBookId: PropTypes.string.isRequired

};

export default NewBook;
