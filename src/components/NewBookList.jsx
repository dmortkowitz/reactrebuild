import React from 'react';
import NewBook from './NewBook';
import PropTypes from 'prop-types';

function NewBookList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.newBookList).map(function(newBookId) {
        var newBook = props.newBookList[newBookId];
        return <NewBook author={newBook.author}
          title={newBook.title}
          description={newBook.description}
          formattedWaitTime={newBook.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={newBook.id}
          onNewBookSelection={props.onNewBookSelection}/>;
      })}
    </div>
  );
}


NewBookList.propTypes = {
  newBookList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onNewBookSelection: PropTypes.func
};

export default NewBookList;
