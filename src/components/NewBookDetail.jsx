import React from 'react';
import PropTypes from 'prop-types';

function NewBookDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedBook.author} - {props.selectedBook.title}</h1>
      <h2>Submitted {props.selectedBook.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedBook.description}</em></h4>
      <hr/>
    </div>
  );
}

NewBookDetail.propTypes = {
  selectedBook: PropTypes.object
};

export default NewBookDetail;