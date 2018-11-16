import React from 'react';

function NewBookForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='author'
          placeholder='Author Names'/>
        <input
          type='text'
          id='title'
          placeholder='Title' />
        <textarea
          id='description'
          placeholder='Describe your book to sell.' />
        <button type='submit'>List</button>
      </form>
    </div>
  );
}
