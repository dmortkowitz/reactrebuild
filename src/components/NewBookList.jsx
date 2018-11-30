import React from 'react';
import Marketplace from './Marketplace';
import PropTypes from 'prop-types';

function NewBookList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.newBookList).map(function(bookId) {
        var book = props.bookList[bookId];
        return <Marketplace author={book.author}
        title={book.title}
        description={book.description}
        formattedWaitTime={book.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        key={bookId}
        bookId={bookId}
      })}
    </div>
  );
}

NewBookList.propTypes = {
  bookList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onBookSelection: PropTypes.func
};

export default NewBookList;
