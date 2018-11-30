import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewBookForm(props){  let _author = null;
  let _title = null;
  let _description = null;

  function handleNewBookFormSubmission(event) {
    event.preventDefault();
    props.onNewBookCreation({author: _author.value, title: _title.value, description: _description.value, timeOpen: new Moment()});
    _author.value = '';
    _title.value = '';
    _description.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBookFormSubmission}>
        <input
          type='text'
          id='authors'
          placeholder='Author(s)'
          ref={(input) => {_author = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='description'
          placeholder='Please give a description of your listing.'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>List</button>
      </form>
    </div>
  );
}

NewBookForm.propTypes = {
  onNewBookCreation: PropTypes.func
};

export default NewBookForm;
